# Un petit test

## L'objectif

Il faudrait que tu crées une application web qui affiche différentes formes sur une page (pour constituer un joli portrait). Ces formes sont stockées en base de données. Pour chacune de ces formes (cercle, rectangle ou texte) tu as la position et la taille.

De façon un peu plus précise :

- pour les rectangles
  - tu les affiches avec une bodure pleine noire d'un pixel et un fond blanc (ouais c'est un peu basique)
  - tu t'aides de la position qui est celle du point en haut à gauche, on te donne aussi la largeur et la longueur (on est sympa)
  - tu affiches optionnellement le texte dans une popup quand on clique dessus (c'est rigolo)
- pour les cercles
  - tu les affiches avec une bodure pleine noire d'un pixel et un fond blanc (ouais on se repète)
  - tu t'aides de la position qui est celle du point en haut à gauche de la boite englobant le cercle et on te donne juste la largeur (tu devrais arriver à trouver la hauteur)
  - tu affiches optionnellement le texte dans une popup quand on clique dessus
- pour les textes c'est la position du milieu du texte, on ne te donne pas la largeur, ni la hauteur (par contre si tu peux l'afficher en Arial 40px ce sera plus beau)

Tout ça devrait dessiner quelque chose dans un rectangle de 600x800 pixels. Il ne faut pas afficher tout ce qui dépasse.

Si tu es fort et motivé, tu peux protéger cette page par une authentification par fomulaire. Ceci est optionnel.

Les priorités sont

1. Ca marche (sans les fonctionnalités optionnelles)
2. C'est maintenable
3. C'est sécurisé
4. C'est joli
5. Ca marche (avec les fonctionnalités optionnelles)

## La base de données

C'est du SQL Server sur Azure, facile !

- Serveur : slowsense.database.windows.net
- Base : ShapesTest
- Login : SlowSenseTest
- Password : slow-test-55

On te laisse découvrir les tables, tu devrais tout comprendre.

## Les technologies

- Le front est dans la technologie de ton choix
- Le back est dans la techonologie de ton choix, se connecte à la DB fournie, et s'occupe d'envoyer toutes les bonnes Shapes au front

## Tips

Si tu pars avec un ORM il existe une commande scaffold qui permet de générer le modèle à partir de la base, par exemple avec entity framework :
`dotnet ef dbcontext scaffold "Data Source=le-serveur;Initial Catalog=la-base;User ID=le-login;Password=le-password" Microsoft.EntityFrameworkCore.SqlServer`

## Tes droits

- Tu peux t'aider d'internet (parfois il y a des choses vraies dessus)
- Tu peux être créatif (on aime bien)
- Tu as 2 heures

## Conclusion

Allez GO, on est avec toi !
test-elias.md
Affichage de test-elias.md en cours...