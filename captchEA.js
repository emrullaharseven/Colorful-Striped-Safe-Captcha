//4 karakterli random kelime üretici
var t = createRandomWord(4);

function createRandomWord(length) {
    var consonants = 'bCdfGhjLmNpQrStV',
        vowels = 'aeiou',
        rand = function(limit) {
            return Math.floor(Math.random() * limit);
        },
        i, word = '',
        length = parseInt(length, 10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i = 0; i < length / 2; i++) {
        var randConsonant = consonants[rand(consonants.length)],
            randVowel = vowels[rand(vowels.length)];
        word += (i === 0) ? randConsonant.toUpperCase() : randConsonant;
        word += i * 2 < length - 1 ? randVowel : '';
    }
    return word;
}
// random kelime üretme bitti




//karışık çizgileri çizdirme fonksiyonu for döngüsündeki değer büyürse çizgi sayısı artar.
function draw() {



    var a = 0;
    while (a != 2) {
        // Canvas
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        // Draw lines
        for (var i = 0; i < 80; i++) {
            ctx.beginPath();
            ctx.moveTo(c.width * Math.random(), c.height * Math.random());
            ctx.lineTo(c.width * Math.random(), c.height * Math.random());
            if (a == 0) {
                ctx.font = "50px Aclonica";
                ctx.fillStyle = 'white';
                ctx.fillText(t, 50, 75);
            }
            ctx.strokeStyle = "rgb(" +
                Math.round(256 * Math.random()) + "," +
                Math.round(256 * Math.random()) + "," +
                Math.round(256 * Math.random()) + ")";
            ctx.stroke();
        }
        a++;
    }
}



function captchacontrol(captcha) {


    if (t == captcha.value) {
        sonuc2.className = "dogru2";
        sonuc2.innerHTML = "&#10003" + " Kod Dogru";
    } else {
        sonuc2.className = " dogru2";
        sonuc2.innerHTML = "&#10006" + " Kod hatali ";
    }
}



//Random çizgi çizme bitti.