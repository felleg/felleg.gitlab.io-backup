---
date: 2023-08-30
title: (Read 45) The Kubernetes Book
cover: img/reads/the-kubernetes-book.png
tags: ['reads']
aliases: ['/books/book-45-the-kubernetes-book']

---

Release year: 2023

Author: [Nigel Poulton](https://linkedin.com/in/nigelpoulton)

[Link to my handwritten notes](https://drive.google.com/file/d/1dhTodUAHxf_UI_1veEOqQ0_Aato4vKcP/view?usp=drive_link)

---

# Review

I did it. I read a full book on Kubernetes. Honestly, it is
difficult for me to comment about the book without first mentioning how
proud I am of myself of getting through it.

For people in the tech world, this shouldn't be a "difficult" book by
any means. It is a fairly straightforward introduction to the world of
Kubernetes, and at times goes in depth in some security and best
practices topics without going overboard (kudos to the author for
maintaining that delicate balance). However, Kubernetes has made me feel
like an impostor for about 6 years. I have never felt confident about
its intricacies, its objects, its configuration settings. To me
Kubernetes seemed so big that it felt hopeless -- kind of like trying to
learn to speak fluent Mandarin while maintaining my other real life
responsibilities.

Long story short, by finishing this book, I gained one solid notch of
self-confidence. I beat my learning anxiety. While I'm not entirely cured of
my fear of getting a Kubernetes configuration wrong, at least I now feel
comfortable having a conversation on the topic with anyone. And that, to
me, is priceless.

{{< myrating rating="👍" >}}

---

# :star: Star quotes

1. (p. 14) A k8s cluster consists of a control plane and worker nodes.
1. (p. 24) "Pod" comes from a "pod of whales". As the Docker logo is a
   whale, k8s ran with the whale concept and that's why we have "Pods."
1. (p. ?), GKE is a hosted platform and only lets you see worker nodes.
   Control plane nodes are managed by GKE and hidden from you.
1. (p. 45) Use the `--recursive` option in `kubectl explain` (e.g.
   `kubectl explain pods --recursive`) to get all the details.
1. (p. 47) Applications should always store state and data outside of
   the Pod, because it is ephemeral.
1. (p. 51) Never scale an app by adding more of the same app containers
   to an existing Pod.
1. (p. 73) You can `kubectl delete -f file.yaml` to delete the
   associated resources.
1. (p. 121) You can `kubectl apply -f ...` the yaml found at this link
   to deploy an ingress-nginx controller: https://bit.ly/44oltXt
1. (p. 128) You can configure your internal DNS (for *your* machine) by
   editing the `hosts` file in `/etc` on your local computer.
1. (p. 137) K8s automatically populates every container's
   `/etc/resolv.conf` file with the IP address of the cluster DNS
   service.
1. (p. 138) Every k8s node runs a system service called kube-proxy that
   implements a controller watching the API server for new services and
   EndpointSlice objects. When it sees them, it creates local IPVS rules
   telling the node to intercept traffic destined for the Service's
   ClusterIP and forward it to the individual Pod IPs
1. (p. 224) REST is short for **RE**presentational **S**tate **T**ransfer
1. (p. 230) `kubectl api-resources` is great for seeing which resources
   are available on your cluster, as well as which API groups they're
   served from. It also shows resource shortnames and whether objects
   are namespaced or cluster-scoped.
1. (p. 262) You can use the `--dry-run=server` flag to test the impact
   of applying a PSS policy to a Namespace.
