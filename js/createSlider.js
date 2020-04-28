// function Game() {
//     this.array = ['cat', 'dog', 'pig', 'fish', 'monkey', 'crocodile'];
// }
// Game.prototype.start = function () {
//     let arrayAnimal = this.array[parseInt(Math.random() * this.array.length)];
//     console.log(arrayAnimal)//получили стрингу,вместо массива!!!!

//     let currentAnimal = [];
//     for (let index = 0; index <= arrayAnimal.length - 1; index++) {
//         currentAnimal.push('_')
//     }
//     let currentAnimalString = currentAnimal.join(' ');
//     console.log(currentAnimalString);//слово превратили в стрингу _ _ _

//     let currentAnimalStringForAnswer = arrayAnimal.split('')
//     console.log(currentAnimalStringForAnswer)//получили разбитый по буквам массив

//     document.querySelector('#guessWord h2').innerHTML = currentAnimalString;

//     let text = document.querySelector('#text')
//     let button = document.querySelector('#button')
//     let currentThis = this;

//     button.addEventListener('click', function () {
//         currentThis.letters(currentAnimalStringForAnswer, currentAnimal, text)
//         text.value = '';//очищает поле
//     })

// }





// Game.prototype.letters = function (currentAnimalStringForAnswer, currentAnimal, text) {
//     let newText = document.querySelector('#text')
//     newText.value.innerHTML = 'jnjn';

//     let mistake = document.querySelector('#mistake')
//     if (text.value.length >= 2) {
//         mistake.innerHTML = 'You can`t write more than 1 letter!'
//     } else {
//         mistake.innerHTML = ''
//         console.log(text.value);
//         console.log(currentAnimalStringForAnswer)
//         let YesOrNoLetter = currentAnimalStringForAnswer.indexOf(text.value);

//         if (YesOrNoLetter !== -1) {
//             // console.log(YesOrNoLetter)//индекс буквы в массиве
//             // console.log(currentAnimal)//массив из черточек
//             for (let i = 0; i < currentAnimal.length; i++) {
//                 if (i === YesOrNoLetter) {
//                     currentAnimal[i] = text.value;
//                 }
//                 console.log(currentAnimal);
//             }
//             console.log(currentAnimal);
//             let currentAnimalStringInstead_ = currentAnimal.join(' ');
//             document.querySelector('#guessWord h2').innerHTML = currentAnimalStringInstead_;
//             if (currentAnimal.indexOf('_') === -1) {
//                 mistake.innerHTML = 'you win!';
//             }
//             console.log(currentAnimal.indexOf('_'))
//         } else {
//             mistake.innerHTML = 'This word doesn`t have this letter'
//         }
//     }
// }
