/*---------------------------------CARDS SECTION FIVE----------------------------------------------*/
let specialProducts = [
    {
        product: "Laminated Wood",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.8,
        poster: "https://i.im.ge/2022/09/14/1TGlQW.Home6.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Decks",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.5,
        poster: "https://i.im.ge/2022/09/14/1TGFnc.Home7.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Vinyl Roll",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.2,
        poster: "https://i.im.ge/2022/09/14/1TGu3T.Home8.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Curtains",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.8,
        poster: "https://i.im.ge/2022/09/14/1TGoRr.Home9.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Carpets",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.5,
        poster: "https://i.im.ge/2022/09/14/1TGrL0.Home10.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Wood Floors",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.2,
        poster: "https://i.im.ge/2022/09/14/1TG1qL.Home11.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Blinds PVC",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.5,
        poster: "https://i.im.ge/2022/09/09/OHEAaC.Home3.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Carpet Tile",
        price: "10 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.2,
        poster: "https://i.im.ge/2022/09/09/OHEYw1.Home4.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Vinnagrette Floors",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.2,
        poster: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-repair-laminate-flooring-step-5.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
    {
        product: "Floors SPC",
        price: "12 K",
        description: "Lorem ipsum dolor sit amet",
        score: 4.2,
        poster: "https://i.im.ge/2022/09/09/OHCv34.Home2.jpg",
        cart: "https://i.im.ge/2022/09/09/OHfvqa.Frame-5.png"
    },
]

const contenedorSpecial = document.querySelector('#container-cards-special');

function crearCardSpecial(special)
{
    let cardSpecial = `<div class="cardSpecial">
                            <div class="cont-sup">
                                <button id="btn-special"><i class="fa-sharp fa-solid fa-heart"></i></button>
                                <img class="img-special" src="${special.poster}" alt="${special.product}">
                            </div>
                            <div class="cont-lr">
                                <div class="left-card">
                                    <h4>${special.product}</h4>
                                    <p id="btn-left">${special.description}</p>    
                                </div>
                                <div class="right-card">
                                    <h5>${special.price}</h5>
                                    <img class="cart-card" src="${special.cart}">
                                </div>             
                            </div>
                        </div>`;
    contenedorSpecial.innerHTML += cardSpecial;
};

function renderizarSpecials(){
    contenedorSpecial.innerHTML = '';
    specialProducts.forEach(special => {
        crearCardSpecial(special)
    })};

renderizarSpecials();