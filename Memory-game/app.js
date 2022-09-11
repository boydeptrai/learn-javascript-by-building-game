document.addEventListener('DOMContentLoaded', () =>{

const cardArray = [
    {
        name: 'fries',
        image:'images/fries.png'
    },
    {
        name: 'cheeseburger',
        image:'images/cheeseburger.png'
    },
    {
        name: 'blank',
        image:'images/blank.png'
    },
    {
        name: 'hotdog',
        image:'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        image:'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image:'images/milkshake.png'
    },
    {
        name: 'pizza',
        image:'images/pizza.png'
    },
    {
        name: 'white',
        image:'images/white.png'
    },
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('.grid');

function createBoard() {
    for (let i=0; i< cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        gridDisplay.appendChild(card);
    }
}
createBoard()
})