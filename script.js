// local reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

// items
const img = document.getElementById('person-image');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// buttons
const leftButton = document.querySelector('.left-arrow-btn');
const rightButton = document.querySelector('.right-arrow-btn');
const randomButton = document.querySelector('.surprise-me-btn');

// initial count
let currentItem = 0;

// show the review
function showReview(person){
    const item = reviews[person];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', (event) => {
    showReview(currentItem);
})

// right-arrow button
rightButton.addEventListener('click', (event) => {
    currentItem++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showReview(currentItem)
})

// left-arrow button
leftButton.addEventListener('click', (event) => {
    currentItem--;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showReview(currentItem);
})

// surprise-me button
randomButton.addEventListener('click', (event) => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showReview(currentItem);
})