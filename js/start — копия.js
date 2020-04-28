function IConstructor() {
    this.start = function () {
        let currentThis = this;
        let randomValueX = Math.floor(Math.random() * 600) + 50;//+ 50 чтобы не заходило на край
        let randomValueY = Math.floor(Math.random() * 400) + 50;
        let treasure = $('span').offset({ left: randomValueX, top: randomValueY })
        document.addEventListener('click', function () {
            currentThis.mouseClick(randomValueX, randomValueY);
        })
    }
}

IConstructor.prototype.mouseClick = function (randomValueX, randomValueY) {
    let score = document.querySelector('#score');
    let clickX = event.offsetX;
    let clickY = event.offsetY;

    let distanceX = randomValueX - clickX;
    let distanceY = randomValueY - clickY;
    let pifagor = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY))
    console.log(pifagor)
    if (pifagor < 100) {
        console.log('You are WIN!');
        $('#result').html('You are WIN!')
    } else if (pifagor > 101 && pifagor < 200) {
        score.style.display = "block";
        score.style.color = 'yellow';
        score.style.left = 50;
        $('#score').html('You are HOT!');
        setTimeout(() => {
            score.style.display = "none";
            $('#score').html('You are HOT!')
        }, 3000);
    } else if (pifagor > 201 && pifagor < 300) {
        score.style.display = "block";
        score.style.color = 'white';
        score.style.left = 5;
        $('#score').html('You are WARM!');
        setTimeout(() => {
            score.style.display = "none";
            $('#score').html('You are WARM!')
        }, 3000);
    } else if (pifagor > 301 && pifagor < 600) {
        score.style.display = "block";
        score.style.color = 'rgb(71, 216, 241)';
        score.style.left = 5;
        score.style.fontSize = 85;
        $('#score').html('You are too COLD!');
        setTimeout(() => {
            score.style.display = "none";
            $('#score').html('You are too COLD!')
        }, 3000);
    }
    circle.style.display = "block";
    let sum = 50;
    let center = 1;
    let clickXX = clickX - 35;
    let clickYY = clickY - 35;
    this.circle(clickXX, clickYY, sum, center);
}

IConstructor.prototype.circle = function (clickXX, clickYY, sum, center) {
    let getBubles = setInterval(bubles, 10);
    let circle = document.querySelector('#circle');
    function bubles() {

        if (sum < 100) {
            sum++;
            center--;
            $('#circle').offset({ left: (clickXX--) - (center), top: (clickYY--) - (center) });
            circle.style.width = sum;
            circle.style.height = sum;
        }
        if (sum === 100) {
            circle.style.display = "none";
            clearInterval(getBubles);
            sum = 50;
        }
    }
}