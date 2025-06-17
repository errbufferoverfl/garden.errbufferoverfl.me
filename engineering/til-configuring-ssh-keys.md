---
title: Contacting the Spirits in Multiple Dimensions with SSH Keys
subtitle: ""
author:
  - errbufferoverfl
date: 2018-11-22T12:02:29+10:30
date-modified: 2024-12-03T12:05:51+10:30
categories:
  - RICEing
  - Today I Learned
series: Today I Learned
---

What up! ☝🏻

Recently, I ran into the problem of needing multiple SSH keys for the same host—in this case, GitHub. I’m not a huge fan of reusing the same key across multiple resources. Sometimes, I’ll use the same key for Git services, but when it comes to SSH access to remote hosts, that’s a hard no.

I found plenty of solutions on Stack Exchange, including adding entries to your SSH config file (more on this later), setting the `GIT_SSH_COMMAND` environment variable, configuring `core.sshCommand`, and even custom scripts. Some of these approaches worked, but many felt clunky or overly complicated.

Here’s the tl;dr: I created an SSH key and associated it with a host entry in my SSH config file, using a custom `Host` value like `github.com-username`. When cloning or adding a remote, I used:

```shell
git clone git@github.com-username:username/myrepo.git
```

## Create Keys for Your GitHub Accounts

Generate a new SSH key for each account as follows:

```shell
ssh-keygen -t rsa -C "github-username" -f "~/.ssh/github-username"
```

The `-C` flag adds a comment, which is optional but helpful for identifying keys. If you’ve ever looked at a public key file, you’ll notice the comment at the end:

```shell
cat test.pub
# Output: ssh-rsa AAAAB3Nza... this is an example comment
```

The `-f` flag allows you to specify a filename for the key pair. You can also do this interactively during key generation:

```shell
Enter file in which to save the key (/Users/errbufferoverfl/.ssh/id_rsa):
```

I suggest using meaningful filenames like `service-username`. Once done, you’ll have a public and private key in your `~/.ssh/` directory. Make sure to set a strong passphrase using your password manager.

## Add the Public Key to GitHub

Follow the [GitHub documentation](https://help.github.com/articles/connecting-to-github-with-ssh/) if you’re unfamiliar with this step. You’ll need to copy the public key and add it to the associated GitHub account.

## Configure SSH Config

If you don’t already have an SSH config file, create one in your `~/.ssh/` directory and name it `config`. Then, configure it as follows (replacing `username` with your actual GitHub usernames):

```text
# account one
Host github.com-username
    HostName github.com
    User git
    IdentityFile ~/.ssh/github-username

# account two
Host github.com-username-two
    HostName github.com
    User git
    IdentityFile ~/.ssh/github-username-two
```

## Configure Your Git Repository

For a new repository, use this syntax to ensure the correct SSH configuration is used:

```shell
git clone git@github.com-username:username/yourrepo.git
```

The `username` after the `:` should match the username in your SSH config.

For existing repositories, update the `origin` in the `.git/config` file to reflect the new configuration:

```shell
git remote set-url origin git@github.com-username:username/your-repo-name.git
```

Make sure the details after `@` and `:` match the `Host` entry in your SSH config file. Once configured, you should be able to `git push` and `git pull` as usual, with the correct keys being automatically selected.

## A Note on Submodules

More recently, I’ve started using submodules, which can introduce a minor annoyance with this setup. Submodules don’t automatically use the correct SSH keys when being cloned. To fix this, update the submodule remotes in the `.git/config` file in the same way you updated the main repository’s remote.

And that’s it! With this setup, you can manage multiple SSH keys for GitHub effortlessly while keeping things secure. 🚀
