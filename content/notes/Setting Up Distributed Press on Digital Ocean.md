---
title: "Setting Up Distributed Press on Digital Ocean"
created: 2023-06-11
modified: 2023-06-12
source: ""
og_type: "article"
og_img: "opengraph-template.png"
summary: ""
tags:
- seedling
- project
- distributed system
---

[Distributed Press](https://docs.distributed.press/) is an open source publishing tool for the World Wide Web and Distributed Web. It automates publishing and hosting content to the web that it seeds to decentralized protocols like [Hypercore](notes/Hypercore.md) and [IPFS](notes/IPFS.md).

1. Create a new virtual private server (VPS) with your provider of choice. Ensure you have a static IP address configured.

2. Install `ansible` on your desktop, cry a little because this is the only thing that needs it. 
> [!note] Note
> 
> Make sure you install `ansible` and not `ansible-core` which doesn't ship with `ansible-galaxy`.
```shell
brew install ansible
```

![Image that says "2000 Years Later"](notes/images/Setting%20Up%20Distributed%20Press%20on%20Digital%20Ocean.png)

3. Git clone the `api.distributed.press`  repository onto your computer:
```shell
git clone https://github.com/hyphacoop/api.distributed.press.git
```

4. Using the terminal, navigate to the `ansible` directory:
```
cd api.distributed.press/ansible
```

5. Edit `inventory.yml` to specify your own domain to run the scripts on as well as any variables you wish to set.
	- You **must** specify the `distributed_press_domain` do be your server, and your `distributed_press_letsencrypt_email` for registering the HTTPS certificate.
	- You **may** specify a list of domains in `distributed_press_served_sites` which specifies which domains you'd like to serve over HTTPS in addition to the peer-to-peer protocols.
```yaml
all:
  vars:
    distributed_press_domain: "distributed.errbufferoverfl.me"
    distributed_press_letsencrypt_email: "rebecca@abrahim.org"
    distributed_press_served_sites: []
  children:
    distributed_press:
      hosts:
        distributed.errbufferoverfl.me:
          ansible_user: root
```

6. Install the dependencies.
```shell
ansible-galaxy install -r ./requirements.yml
```

7. Add the remote host's IP address and the `distributed_press_domain` to your `/etc/hosts` file so you don't experience a `UNREACHABLE` error when you run the playbook. 

8. Execute the playbook.
```shell
ansible-playbook distributed_press.yml -i inventory.yml
```

9. Login to your DNS provider and add in an new A record pointing your VPS to the new domain.
	- **Type:** A
	- **Name:** `subdomain`
	- **Content:** VPS static IP address
	- **TTL:** Auto
10. Add an `NS` record linking `_dnslink` to your site:
	- **Type:** NS
	- **Name:** `_dnslink`
	- **Content:** the `distributed_press_domain`
	- **TTL:** Auto

11. Login to the VPS and check the status of the service.
```shell
systemctl status distributed.press
```

> [!warning]
>
> Also double check the logs using `journalctl -fu distributed.press`, if you see a `bind EADDRINUSE 0.0.0.0:53` error you will need to disable  an installed utility called `dnsmasq`.[^1]

## Getting the `root` admin token

1. `ssh` into the VPS and navigate to the the root directory of `api.distributed.press`
```shell
cd /home/press/api.distributed.press/
```

2. Run `npm run make-admin` which will print out the token to stdout.

## Create a new Publisher

To make sure we're always operating in line with the principal of least privilege exchange the root token for a new one with the publisher subset of capabilities:

```shell
curl -X POST https://distributed.errbufferoverfl.me/v1/publisher \
-H "Content-Type: application/json" \
-H "Authorization: Bearer JWT" \
-d '{"name":"garden.errbufferoverfl.me"}'
```

## Add a site to a Publisher

```shell
curl -X POST https://distributed.errbufferoverfl.me/v1/sites \
-H "Content-Type: application/json" \
-H "Authorization: Bearer JWT" \
  -d '{"domain":"garden.errbufferoverfl.me", "public": true, "protocols":{"http": false, "hyper": true, "ipfs": true} }'
```

## Dealing with Errors

> [!bug]
> Experience the following error because you didn't add the remote host to your `etc/host`. 
> 
> *Scream into the void.*
> ```shell
> fatal: [distributed.errbufferoverfl.me]: UNREACHABLE! => {
> 	"changed": false, 
> 	"msg": "Failed to connect to the host via ssh: ssh: Could not resolve
> 	 hostname distributed.errbufferoverfl.me: Name or service not known", 
> 	"unreachable": true
> }
> ```

> [!bug]
> 
> Error: ENOENT: no such file or directory, open '/root/.local/share/distributed-press-nodejs/keys/private.key'
> .
> Run `npm run keygen` 
> Run `npm run make-admin` again

[^1]: [Port 53 Problems?](https://github.com/MASQ-Project/Node/blob/master/node/docs/PORT_53.md#linux)