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

Distributed Press is an open source publishing tool for the World Wide Web and Distributed Web. It automates publishing and hosting content to the web that it seeds to decentralized protocols like [Hypercore](notes/Hypercore.md) and [IPFS](notes/IPFS.md).

1. Install `ansible` on your desktop, cry a little because this is the only thing that needs it. 
> [!note] Note
> 
> Make sure you install `ansible` and not `ansible-core` which doesn't ship with `ansible-galaxy`.

```shell
apt install ansible
```

2. Edit `inventory.yml` to specify your own domain to run the scripts on as well as any variables you wish to set.
	- You **must** specify the `distributed_press_domain` do be your server, and your `distributed_press_letsencrypt_email` for registering the HTTPS certificate.
	- You **may** specify a list of domains in `distributed_press_served_sites` which specifies which domains you'd like to serve over HTTPS in addition to the peer-to-peer protocols.

```yaml
all:
  vars:
    distributed_press_domain: "distributed.errbufferoverfl.me"
    distributed_press_letsencrypt_email: "rebecca@abrahim.org"
    distributed_press_served_sites: ["garden.errbufferoverfl.me"]
  children:
    distributed_press:
      hosts:
        distributed.errbufferoverfl.me:
          ansible_user: root
```

3. Install the dependencies.

```shell
ansible-galaxy install -r ./requirements.yml
```

4. Execute the playbook.

```shell
# execute the Ansible playbook with user defined variables
$ ansible-playbook distributed_press.yml -i inventory.yml
```

5. Experience the following error, scream into the void.

```shell
fatal: [distributed.errbufferoverfl.me]: UNREACHABLE! => {"changed": false, "msg": "Failed to connect to the host via ssh: ssh: Could not resolve hostname distributed.errbufferoverfl.me: Name or service not known", "unreachable": true}
```

6. Login to your DNS provider and add in an new A record pointing your virtual private server to the new domain.