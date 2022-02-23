---
title: "Les Règles du Go"
date: 2022-02-23T10:55:29-05:00
toc: false
cover: img/go-game-2022.png
tags:
  - français
  - go
---

Le Go est un jeu fascinant qui est basé sur des règles relativement simples. Un de mes petits plaisir est de
réussir à synthétiser ces règles pour les simplifier au maximum, de sorte qu'un néophyte du jeu peut
rapidement commencer à jouer après les avoir lues. Voici donc les règles du Go, expliquées à ma façon:

> 1. Le Go est un jeu où deux joueurs s'affrontent. Un des joueurs utilise les pierres noires, et l'autre
>    utilise les pierres blanches. Le plateau de jeu est une grille, typiquement de dimensions 9x9, 13x13 ou
>    19x19.
> 1. Noir joue d'abord. Les joueurs alternent en mettant une pierre de leur couleur sur les intersections (y compris celles des côtés et les coins). Un joueur peut passer son tour.
> 1. Une pierre déposée sur le jeu ne peut jamais se déplacer.
> 1. **Définition**: le concept de "liberté" au Go correspond aux lignes qui "émanent" d'une pièce ou d'un groupe.
>    Par exemple, dans l'image ci-dessous, la pierre blanche possède 4 libertés (identifiées par les
>    triangles). Le groupe de pierres noires possède 7 libertés.
> {{< figure src="/img/go-liberties.png" position="center" caption="" >}}
> 1. Il est possible de capturer un groupe adverse en l'entourant (i.e. mettre une pierre adverse sur toutes ses "libertés"). Un groupe capturé est retiré du jeu et contribuera plus tard aux points du joueur adverse.
> 1. La partie se termine lorsque les deux joueurs passent leur tour de façon consécutive, ou qu'un des deux joueurs abandonne la partie.
>     - Si la partie se termine parce que les joueurs ont passé leur tour consécutivement, on identifie les groupes qui sont installés dans une zone adverse. Les groupes qui ne seraient pas capables de survivre une attaque adverse sont automatiquement capturés. En cas de doute, la partie reprend au tour du joueur qui a passé son tour en premier.
> {{< figure src="/img/auto-capture.png" position="center" caption="Si la partie illustrée est terminée, les 3 pierres noires marquées d'un X sont automatiquement capturées par Blanc." >}}
>
> 1. On compte ses points en additionnant les intersections entourées exclusivement par notre couleur de pierres avec le nombre de pierres qu'on a capturées à l'autre joueur. Le joueur avec le plus de points remporte la partie.
> {{< figure src="/img/go-points.png" position="center" caption="Dans cette image, Noir a 21 points (triangles) et Blanc a 29 points (cercles). La zone dans le coin inférieur droit (X) est nulle car elle est entourée par Noir et Blanc." >}}


Évidemment, cette formulation des règles omet de mentionner quelques nuances qui deviennent importantes lorsqu'un certain
niveau de jeu est atteint, mais je crois que pour des débutants c'est un bon début!

(P.S.: Si vous trouvez ces règles trop compliquées, je vous invite à lire [les règles du jeu
d'échec](https://fr.wikipedia.org/wiki/R%C3%A8gles_du_jeu_d%27%C3%A9checs) à titre de comparaison!)
