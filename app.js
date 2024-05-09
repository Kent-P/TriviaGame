const pokemon = document.querySelector(`img`)
const answer1 = document.querySelector(`#option1`)
const answer2 = document.querySelector(`#option2`)
const answer3= document.querySelector(`#option3`)
const answer4 = document.querySelector(`#option4`)
const next = document.querySelector('#next')

const questions = [
    {
        image: "mewtwo.jpg",
        options: ['Mew', 'Mewtwo', 'Machoke', 'Golduck'],
        answer: "Mewtwo"
    },
    {
        image: "blastoise.jpg",
        options: ['Blastoise', 'Venosaur', 'Tortuga', 'Wartortle'],
        answer: "Blastoise"
    },
    {
        image: "pikachu.jpg",
        options: ['Psyduck', 'Ratata', 'Chansey', 'Pikachu'],
        answer: "Pikachu"
    },
    {
        image: "porygon.jpg",
        options: ['Tapu Coco', "Porygon", 'R2-D2', 'Polygon'],
        answer: "Porygon"
    },
    {
        image: "geodude.jpg",
        options: ['Golem', 'Machop', 'Geodude', 'Magnetite'],
        answer: 'Geodude'
    },
    {
        image: "Nidorino.jpg",
        options: ['Nidoran', 'Nidorina', 'Nidorino', 'Nidoking'],
        answer: 'Nidorino'
    },
    {
        image: "cramorant.jpg",
        options: ['Psyduck', 'Cramorant', 'Pelipper', 'Wingull'],
        answer: 'Cramorant'
    },
    {
        image: "Dragapult.jpg",
        options: ['Dragonite', 'Gyrados', 'Dragapult', 'Latios'],
        answer: 'Dragapult'
    },
    {
        image: "magmar.jpg",
        options: ['Golem', 'Magcargo', 'Magmortar', 'Magmar'],
        answer: 'Magmar'
    },
    {
        image: "Perrserker.jpg",
        options: ['Perrserker', 'Meowth', 'Persian', 'Alolan Meowth'],
        answer: 'Perrserker'
    },
    {
        image: "Sirfetch'd.jpg",
        options: ['Saipat', 'Knightsir', "Sirfetch'd", 'Psyduck'],
        answer: "Sirfetch'd"
    },
    {
        image: "zamazenta.jpg",
        options: ['Lycanrock', 'Houndoom', 'Zacian', 'Zamazenta'],
        answer: 'Zamazenta'
    },
    {
        image: "golbat.jpg",
        options: ['Swoobat', 'Golbat', 'Crobat', 'Noibat'],
        answer: 'Golbat'
    }
    
]

let currentIndex = 0

let correct = 0;

function nextPokemon () {
    pokemon.src = questions[currentIndex].image
    answer1.innerText = questions[currentIndex].options[0]
    answer2.innerText = questions[currentIndex].options[1]
    answer3.innerText = questions[currentIndex].options[2]
    answer4.innerText = questions[currentIndex].options[3]
}

function checkAnswer(answers) {
    if (answers === questions[currentIndex].answer){
        correct++
        alert("Correct!!") 
    } else {
        alert('WRONGGGGGG !!!!')
    }
    currentIndex++
    if (currentIndex < questions.length) {
        nextPokemon()
    } else {
        alert('You got ' + correct + ' out of 13 correct')
    }
}

next.addEventListener("click", () => {
    const selectedOption = document.querySelector("button.selected");
    if (selectedOption) {
        checkAnswer(selectedOption.innerText);
        selectedOption.classList.remove("selected");
    }
});


document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
    document.querySelectorAll("button").forEach((button) => {
        button.classList.remove("selected");
        })
    button.classList.add("selected")
    })
})

nextPokemon()