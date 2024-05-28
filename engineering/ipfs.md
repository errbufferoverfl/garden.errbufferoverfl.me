---
title: "InterPlanetary File System"
author: "errbufferoverfl"
date: 2023-06-10T23:30:00+09:30
image: "/imgs/pawel-czerwinski-OALPS7O3jXs-unsplash.jpg"
categories:
- Seed
- Protocol
- Distributed Computing
- Distributed Web
---

InterPlanetary File System (IPFS) is a protocol, hypermedia and file sharing peer-to-peer network for storing and sharing data to a distributed file system.

It is an alternative location-based hyper media server protocol that could replace HTTP/HTTPS. It allows users to host and receive content is a similar way to BitTorrent.

Any user in the network can serve a file by it's content address, and many other peers in the network can find and request content from any node who has it using a [DHT](dht.md).

IPFS seems to be strongly aligned to Web3, and is often mentioned in the same breath as cryptocurrency protocols. 🚨

To develop IPFS, in 2017 Protocol Labs launched its own cryptocurrency named Filecoin.

Cloudflare started using IPFS in 2018 and launched its own gateway in 2022.

## How is it Being Used?

- Cryptocurrency
- Content Delivery
- Microsoft has built their [DID](did.md) on IPFS
- Discussion systems
- To prevent and/or circumvent censorship
  - [Distributed, privacy-enhancing technologies in the 2017 Catalan referendum on independence: New tactics and models of participatory democracy](https://firstmonday.org/ojs/index.php/fm/article/view/9402/7692)
- Phishing
  - The phishing email is stored on Cloudflare's IPFS which displays the content as secure.
- Command and Control
  - The IPStore botnet uses IPFS to hide C2 traffic amongst the flow of legitimate data on the IPFS network.[^1] [^2]

[^1]: AQUINO, Bruno Macabeus M. de; LIMA, Marcus Vinicius L. de; OLIVEIRA, João Paolo Cavalcante M. de; SOUZA, Cidcley Teixeira de. [Protocolos IPFS e IPNS como meio para o controle de botnet: prova de conceito](https://sol.sbc.org.br/index.php/wscdc/article/view/2400). _In_: CONNECTED DEVICES CYBERSECURITY WORKSHOP (WSCDC), 1. , 2018, São José dos Campos. **Anais** [...]. Porto Alegre: Sociedade Brasileira de Computação, 2018.
[^2]: "IPFS and IPNS protocols as a means of botnet control: proof of concept" English Translation - [[../attachements/IPFS-and-IPNS-protocols-as-a-means-of-botnet-control-proof-of-concept.pdf|IPFS-and-IPNS-protocols-as-a-means-of-botnet-control-proof-of-concept]]