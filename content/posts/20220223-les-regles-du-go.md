---
title: "Les Règles du Go (pour les gens pressés!)"
date: 2022-02-23T10:55:29-05:00
toc: true
frontpage: "true"
tags:
  - français
  - featured
  - go
---

Le Go est un jeu fascinant qui est basé sur des règles relativement simples. Un de mes petits plaisir est de
réussir à synthétiser ces règles pour les simplifier au maximum, de sorte qu'un néophyte du jeu peut
rapidement commencer à jouer après les avoir lues. Voici donc les règles du Go, expliquées à ma façon:

# Ma version des règles

> 1. Le Go est un jeu où deux joueurs s'affrontent. Un des joueurs utilise les pierres noires, et l'autre
>    utilise les pierres blanches. Le plateau de jeu est une grille, typiquement de dimensions 9x9, 13x13 ou
>    19x19.
> {{< figure src="/img/go-board-sizes.png" position="center" caption="" >}}
> 1. La partie commence avec un plateau vide. Noir joue d'abord. Les joueurs alternent en mettant une pierre de leur couleur sur les intersections (y compris celles des côtés et les coins). Un joueur peut passer son tour s'il le désire.
> 1. Une pierre déposée sur le jeu ne peut jamais se déplacer.
> 1. **Définition**: le concept de "liberté" au Go correspond aux lignes qui "émanent" d'une pièce ou d'un groupe.
>    Par exemple, dans l'image ci-dessous:
>     - la pierre A possède 4 libertés (identifiées par les triangles)
>     - le groupe de pierres noires B possède 7 libertés
>     - la pierre noire C possède 3 libertés
>     - la pierre blanche D possède 2 libertés
> {{< figure src="/img/go-liberties.png" position="center" caption="" >}}
> 1. Il est possible de capturer un groupe adverse en l'entourant (i.e. mettre une pierre adverse sur toutes ses "libertés"). Un groupe capturé est retiré du jeu et contribuera plus tard aux points du joueur adverse.
> 1. La partie se termine lorsque les deux joueurs passent leur tour de façon consécutive, ou qu'un des deux joueurs abandonne la partie.
>     - Si la partie se termine parce que les joueurs ont passé leur tour consécutivement, on identifie les groupes qui sont installés dans une zone adverse. Les groupes qui ne seraient pas capables de survivre une attaque adverse sont automatiquement capturés. En cas de doute, la partie reprend au tour du joueur qui a passé son tour en premier.
> {{< figure src="/img/auto-capture.png" position="center" caption="Cette partie étant terminée, les 4 pierres noires marquées d'un X sont automatiquement capturées par Blanc." >}}
>
> 1. On compte ses points en additionnant les intersections entourées exclusivement par notre couleur de pierres avec le nombre de pierres qu'on a capturées à l'autre joueur. Le joueur avec le plus de points remporte la partie.
> {{< figure src="/img/go-points.png" position="center" caption="Dans cette image, Noir a 21 points (triangles) et Blanc a 29 points (cercles). La zone dans le coin inférieur droit (X) est nulle car elle est entourée par Noir et Blanc." >}}


Évidemment, cette formulation des règles omet de mentionner quelques nuances qui deviennent importantes lorsqu'un certain
niveau de jeu est atteint, mais je crois que pour des débutants c'est un bon début!

{{< figure src="/img/go-game-2022.png" position="center" caption="" >}}


---

# English Version
Here is a concise statement of the rules of Go, provided by James Davies ([source](https://en.wikipedia.org/wiki/Rules_of_Go#Concise_statement)). It is probably even more accurate than my own statement of the rules (though less explicit):

> 1. The board is empty at the onset of the game (unless players agree to place a handicap).
> 1. Black makes the first move, after which White and Black alternate.
> 1. A move consists of placing one stone of one's own color on an empty intersection on the board.
> 1. A player may pass their turn at any time.
> 1. A stone or solidly connected group of stones of one color is captured and removed from the board when all the intersections directly adjacent to it are occupied by the enemy. (Capture of the enemy takes precedence over self-capture.)
> 1. No stone may be played so as to recreate a former board position.
> 1. Two consecutive passes end the game.
> 1. A player's area consists of all the points the player has either occupied or surrounded.
> 1. The player with more area wins.

---
(P.S.: Si vous trouvez ces règles trop compliquées, je vous invite à lire [les règles du jeu
d'échec](https://fr.wikipedia.org/wiki/R%C3%A8gles_du_jeu_d%27%C3%A9checs) à titre de comparaison!)
