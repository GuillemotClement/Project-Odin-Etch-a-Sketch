# Projet Odin - Etch a Sketch

## STACK

* HTML
* CSS
* JavaScript

## CONSIGNE

Créez une page Web avec une grille de 16x16 de divs carrés.
Créez les divs à l'aide de JavaScript. N'essayez pas de les créer à la main en les copiant et en les collant dans votre fichier HTML !
Il est préférable de placer les carrés de votre grille dans un div « conteneur ». Ce div peut être écrit dans votre fichier HTML.
Utilisez Flexbox pour faire apparaître les divs sous forme de grille (au lieu d'un seul sur chaque ligne). Malgré le nom, ne soyez pas tenté de rechercher ou d'utiliser CSS Grid, car il sera enseigné dans une leçon ultérieure après le parcours de base. Ce projet est une opportunité spécifique de pratiquer Flexbox !
Soyez prudent avec les bordures et les marges, car elles peuvent ajuster la taille des carrés !
« OMG, pourquoi ma grille n'est-elle pas créée ??? »
Avez-vous lié votre feuille de style CSS ?
Ouvrez les outils de développement de votre navigateur.
Vérifiez s'il y a des erreurs dans la console JavaScript.
Vérifiez votre panneau « éléments » pour voir si les éléments sont réellement apparus mais sont en quelque sorte masqués.
Allez-y n'importe où et ajoutez console.logdes instructions dans votre JavaScript pour voir s'il est réellement chargé.
Configurez un effet de « survol » pour que les divs de la grille changent de couleur lorsque votre souris passe dessus, laissant une trace (pixellisée) à travers votre grille comme le ferait un stylo.
Astuce : le « survol » est ce qui se produit lorsque votre souris entre dans un div et se termine lorsque votre souris le quitte. Vous pouvez configurer des écouteurs d'événements pour l'un ou l'autre de ces événements comme point de départ.
Il existe plusieurs façons de modifier la couleur des divs, notamment :
Ajout d'une nouvelle classe au div.
Modification de la couleur d'arrière-plan du div à l'aide de JavaScript.
Ajoutez un bouton en haut de l'écran qui enverra à l'utilisateur une fenêtre contextuelle lui demandant le nombre de carrés par côté pour la nouvelle grille. Une fois saisie, la grille existante doit être supprimée et une nouvelle grille doit être générée dans le même espace total que précédemment (par exemple, 960 px de large) afin que vous ayez un nouveau bloc-notes.
Astuce : définissez la limite de saisie utilisateur sur un maximum de 100. Un plus grand nombre de cases entraîne l'utilisation de davantage de ressources informatiques, ce qui peut entraîner des retards, des blocages ou des plantages que nous souhaitons éviter.
Recherchez buttondes balises HTML et découvrez comment exécuter une fonction JavaScript lorsque vous cliquez sur l'une d'elles.
Consultez également prompts.
Vous devriez pouvoir entrer 64et faire apparaître une toute nouvelle grille 64x64 sans modifier la quantité totale de pixels utilisés.
Envoyez votre projet sur GitHub !
Crédit supplémentaire
Transformez le comportement d'un carré lors de l'interaction avec la souris en introduisant une série de modifications.

Plutôt que de laisser les carrés de la même couleur sur toute la grille, randomisez les valeurs RVB des carrés à chaque interaction.
De plus, implémentez un effet d'assombrissement progressif où chaque interaction assombrit le carré de 10 %. L'objectif est d'obtenir un carré entièrement noir (ou entièrement coloré) en seulement dix interactions.
Astuce : la propriété CSS opacity est utile ici. Pour savoir comment l'utiliser, consultez cet article de la documentation MDN sur la propriété CSS opacity .