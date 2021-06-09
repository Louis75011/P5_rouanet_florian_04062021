// Récupération des informations de la camera sur laquelle on a cliqué et qui s'affiche en page produit ;
// la possibilité d'ajout de l'ID
$(document).ready(function () {
    const cameraId = new URLSearchParams(window.location.search).get('camera_id');
    console.log(cameraId);

    fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function (response) {
        response.json().then(function (data) {
            const camera = data;
            let html = `<div class="col-12">
                <div class="card shadow-sm">
                    <img src="${camera.imageUrl}" class="bd-placeholder-img card-img-top" id="imageProduct" width="100%"
                        height="525" alt="vente en ligne, caméra vintage" xmlns="http://www.w3.org/2000/svg" role="img"
                        aria-label="Placeholder: Caméras" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                        dy=".3em"></text>
                    </img>

                    <div class="card-body">
                        <h3 class="display-6 text-center pinkORI" id="nameProduct">${camera.name}</h3>
                        <h4 class="text-center" id="priceProduct">${camera.price}€</h4>
                        <p class="card-text text-center" id="descriptionProduct">${camera.description}</p>
                        <p class="card-text text-center" id="descriptionLenses">${camera.lenses}</p>
                        <!-- menu déroulant permettant à l'utilisateur de choisir une option de personnalisation sans back-end -->
                        <div class="d-flex justify-content-between align-items-center">
                        </div>

                        <div class="btn-group">
                            <a href="">
                                <button type="button" id="my-cart"
                                    class="btn btn-lg btn-outline-secondary btn-outline-ORI">Ajouter au panier
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;

            $(html).appendTo('main div.container-fluid');

            $( "#my-cart" ).click(function() {
                let panierBrut = JSON.parse(localStorage.getItem('my-cart'));
                let panier = !panierBrut ? [] : panierBrut; 
                panier.push(camera);
                localStorage.setItem('my-cart', JSON.stringify(panier));
              });
        });
    });
});

// A récup pour le panier
// let panierBrut = JSON.parse(localStorage.getItem('my-cart'));
// let panier = !panierBrut ? [] : panierBrut; 


// Afficher les info de la camera
// Proposer la customisation de la lentilles de la camera (avec camera.lenses)
// Quand on clique sur le bouton "Ajouter au panier" on ajoute des infos dans le localStorage (en utilisant JSON.stringify)

// Page panier sur laquelle on passe dans le localStorage pour recuperer le contenu du panier et l'afficher en html (+ js)
// Bonus : ajouter la possibilité de supprimer un element du panier

// Page de confirmation de commande
// Call POST sur /order et affichage de l'id de la commande (qui est obtenue en resutlat du call POST sur /order)

// function addCart(camera) {
//     let panier = JSON.parse(localStorage.getItem('my-cart'))
//     panier.push(camera)
//     localStorage.setItem('my-cart', JSON.stringify(panier))    
// }
// let panier = JSON.parse(localStorage.getItem('my-cart'))
// panier.push(camera)
// localStorage.setItem('my-cart', JSON.stringify(my-cart))

// var camera1 = {name: 'camera1', price: 1111, description: 'toto1'}
// var camera2 = {name: 'camera2', price: 2222, description: 'toto2'}

/*
const object1 = { a: 'foo', b: 42, c: {} };

const queryString = window.location.search;
console.log(queryString);

html = $.parseHTML( str ),
nodeNames = [];

Append the parsed HTML
$log.append( html );

First camera id "5be1ed3f1c9d44000030b061"

$("#bfCaptchaEntry").click(function(){ myFunction(); });

itemSelected front-end push.nav sur la page

Le localStorage lieu où le nav/site stock des donnnées et récupèrent le tout en JS

$('main div.container div.row').append(html);
Une string interpollation

DOM : onClick let panier = JSON.stringyfy.parse + array vide à remplir

camera.lenses (get.lenses + boucle for - options personnalisées)

Get /:_id - Renvoie l'élément correspondant à identifiant given_id

Caméras vintage : ​http://localhost:3000/api/cameras

Pour déclarer une variable globale en Javascript, il suffit de lui affecter une valeur sans mettre l'instruction var
*/