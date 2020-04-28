//---------------------------правые кнопки-----------------------------------------------------
let color;
let arrayRightFalse = ['photoshop/button7false.jpg', 'photoshop/button8false.jpg', 'photoshop/button9false.jpg', 'photoshop/button10false.jpg'];
let arrayRightTrue = ['photoshop/button7true.jpg', 'photoshop/button8true.jpg', 'photoshop/button9true.jpg', 'photoshop/button10true.jpg'];
let arrayRightSrc = [button7, button8, button9, button10];
let filteredRight1 = [];
let filteredRight2 = [];

arrayRightSrc[0].src = arrayRightFalse[0];
arrayRightSrc[1].src = arrayRightFalse[1];
arrayRightSrc[2].src = arrayRightFalse[2];
arrayRightSrc[3].src = arrayRightFalse[3];

let myRightfor = function (filteredRight1, filteredRight2) {
    for (let index = 0; index < filteredRight1.length; index++) {
        filteredRight1[index].src = filteredRight2[index];
    }
}

button7.addEventListener('click', function () {
    arrayRightSrc[0].src = arrayRightTrue[0];
    filtered1 = arrayRightSrc.filter(value => value !== button7);
    filtered2 = arrayRightFalse.filter(value => value !== 'photoshop/button7false.jpg');
    myRightfor(filtered1, filtered2);
    color = 'red';
})

button8.addEventListener('click', function () {
    arrayRightSrc[1].src = arrayRightTrue[1];
    filtered1 = arrayRightSrc.filter(value => value !== button8);
    filtered2 = arrayRightFalse.filter(value => value !== 'photoshop/button8false.jpg');
    myRightfor(filtered1, filtered2);
    color = 'yellow';
})
button9.addEventListener('click', function () {
    arrayRightSrc[2].src = arrayRightTrue[2];
    filtered1 = arrayRightSrc.filter(value => value !== button9);
    filtered2 = arrayRightFalse.filter(value => value !== 'photoshop/button9false.jpg');
    myRightfor(filtered1, filtered2)
    color = 'green';
})
button10.addEventListener('click', function () {
    arrayRightSrc[3].src = arrayRightTrue[3];
    filtered1 = arrayRightSrc.filter(value => value !== button10);
    filtered2 = arrayRightFalse.filter(value => value !== 'photoshop/button10false.jpg');
    myRightfor(filtered1, filtered2);
    color = 'blue';
})
//---------------------------левые кнопки-----------------------------------------------------
let arrayfalse = ['photoshop/button1false.jpg', 'photoshop/button2false.jpg', 'photoshop/button3false.jpg', 'photoshop/button4false.jpg', 'photoshop/button5false.jpg', 'photoshop/button6false.jpg'];
//в массиве лежат не активные кнопки
let arraytrue = ['photoshop/button1true.jpg', 'photoshop/button2true.jpg', 'photoshop/button3true.jpg', 'photoshop/button4true.jpg', 'photoshop/button5true.jpg', 'photoshop/button6true.jpg'];
//в массиве лежат АКТИВНЫЕ кнопки
let arraySrc = [button1, button2, button3, button4, button5, button6];
//массив понадобился чтобы листать фором, к примеру:button1.src=...
let filtered1 = [];//для отфильтрованного массива
let filtered2 = [];//для отфильтрованного массива

arraySrc[0].src = arrayfalse[0];//выводим на экран кнопочки
arraySrc[1].src = arrayfalse[1];
arraySrc[2].src = arrayfalse[2];
arraySrc[3].src = arrayfalse[3];
arraySrc[4].src = arrayfalse[4];
arraySrc[5].src = arrayfalse[5];

let myFor = function (filtered1, filtered2) {
    for (let i = 0; i < filtered1.length; i++) {
        filtered1[i].src = filtered2[i];
    }
}//функция принимает отфильтрованные массивы

let sizeSquare;//размер квадратика
let squareOn = false;
let circleOn = false;

button1.addEventListener('click', function () {
    arraySrc[0].src = arraytrue[0];//кнопка становится true,
    //а все остальные должны стать false 
    filtered1 = arraySrc.filter(value => value !== button1);
    filtered2 = arrayfalse.filter(value => value != 'photoshop/button1false.jpg');
    myFor(filtered1, filtered2);
    sizeSquare = 30;//размер квадратика
    squareOn = true;
    circleOn = false;
})

button2.addEventListener('click', function () {
    arraySrc[1].src = arraytrue[1];
    filtered1 = arraySrc.filter(value => value !== button2);
    filtered2 = arrayfalse.filter(value => value != 'photoshop/button2false.jpg');
    myFor(filtered1, filtered2);
    sizeSquare = 15;
    squareOn = true;
    circleOn = false;
})

button3.addEventListener('click', function () {
    arraySrc[2].src = arraytrue[2];
    filtered1 = arraySrc.filter(value => value !== button3);
    filtered2 = arrayfalse.filter(value => value != 'photoshop/button3false.jpg');
    myFor(filtered1, filtered2);
    sizeSquare = 5;
    squareOn = true;
    circleOn = false;
})

let sizeCircle;

button4.addEventListener('click', function () {
    arraySrc[3].src = arraytrue[3];
    filtered1 = arraySrc.filter(value => value !== button4);
    filtered2 = arrayfalse.filter(value => value != 'photoshop/button4false.jpg');
    myFor(filtered1, filtered2);
    sizeCircle = 20;
    squareOn = false;
    circleOn = true;
})

button5.addEventListener('click', function () {
    arraySrc[4].src = arraytrue[4];
    filtered1 = arraySrc.filter(value => value !== button5);
    filtered2 = arrayfalse.filter(value => value != 'photoshop/button5false.jpg');
    myFor(filtered1, filtered2);
    sizeCircle = 10;
    squareOn = false;
    circleOn = true;
})

button6.addEventListener('click', function () {
    arraySrc[5].src = arraytrue[5];
    filtered1 = arraySrc.filter(value => value !== button6);
    filtered2 = arrayfalse.filter(value => value != 'photoshop/button6false.jpg');
    myFor(filtered1, filtered2);
    sizeCircle = 3;
    squareOn = false;
    circleOn = true;
})

//--------------------движок---------------------------------------------------

let stop = false;

$('#canvas').mousedown(function () {
    stop = true;
    moving();
});

$('#canvas').mouseup(function () {
    stop = false;
    console.log('up')

});

let moving = function () {
    $('#canvas').mousemove(function () {
        if (stop) {
            let coordinateX = event.pageX;
            let coordinateY = event.pageY;
            let canvas = document.querySelector('#canvas');
            let element = canvas.getContext('2d');
            //--------------------рисуем круг или квадрат
            if (squareOn === true) {
                sqare(element, coordinateX, coordinateY);
            } else {
                circle(element, coordinateX, coordinateY);
            }
            console.log(coordinateX)
        }
    })
}

let circle = function (element, coordinateX, coordinateY) {
    element.beginPath();
    element.fillStyle = color;
    element.arc(coordinateX - 180, coordinateY - 100, sizeCircle, 0, Math.PI * 2);
    element.fill();
}

let sqare = function (element, coordinateX, coordinateY) {
    element.fillStyle = color;
    element.fillRect(coordinateX - 180, coordinateY - 100, sizeSquare, sizeSquare)
}

//--------------------сохранение---------------------------------------------------

let save = document.querySelector('#save');
let canvas = document.querySelector('#canvas');
save.onclick = function () {
    var dataURL = canvas.toDataURL("download");
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = dataURL;
    link.download = "my-image-name.jpg";
    link.click();
    document.body.removeChild(link);
};



