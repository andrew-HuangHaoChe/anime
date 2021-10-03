function animeActive (type, className) {
    if (type == 'square') {
        anime({
            targets: className,
            translateX: anime.stagger(10,{grid:[14,5],from: 'center', axis: 'x'}),
            translateY: anime.stagger(10,{grid:[14,5],from: 'center', axis: 'y'}),
            rotateZ: anime.stagger([0,90],{grid:[14,5],from: 'center', axis: 'x'}),
            delay: anime.stagger(200, {grid:[14,5], from: 'center'}),
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutQuad'
        })
    } else if (type == 'numRandom') {
        anime({
            targets: className,
            value: [0, 100],
            duration: 3000,
            round: 1,
            easing: 'linear',
            direction: 'alternate',
            loop: true
        })
    }
}

// icon_group動畫
function scaleAnimation () {
    var icon_one, icon_two, icon_three;
    function clearAnime () {
        if(icon_one) {
            icon_one.seek(icon_one.duration)
        }
        if(icon_two) {
            icon_two.seek(icon_two.duration)
        }
        if(icon_three) {
            icon_three.seek(icon_three.duration)
        }
    }


    // var scaletimeline = anime.timeline({
    //     loop: true,
    // });
    // anime({
    //     targets: '.income-group .satellite',
    //     scale: [
    //         { value: 1, duration: 500 },
    //         { value: 1.2, duration: 1800 },
    //         { value: 1, duration: 500 }
    //     ]
    // });
    // anime({
    //     targets: '.income-group .dandelion',
    //     scale: [
    //         { value: 1, duration: 500, delay: 2800 },
    //         { value: 1.2, duration: 1800 },
    //         { value: 1, duration: 500 }
    //     ]
    // });
    // anime({
    //     targets: '.income-group .rocket',
    //     scale: [
    //         { value: 1, duration: 500,  delay: 5100},
    //         { value: 1.2, duration: 1800 },
    //         { value: 1, duration: 500 }
    //     ]
    // });
    // anime.remove('.income-group .income-group__item .satellite');
    anime({ // 每個動畫放大、縮小
        // targets: '#satelite path',
        targets: '.income-group .income-group__item',
        scale: [
            { value: 1, duration: 500 },
            { value: 1.2, duration: 800, endDelay: 4300 },
            { value: 1, duration: 500 }
        ],
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 8000,
        loop: true,
        delay: function (el, i, l) {
            return i * 5000
        }
    });
    // 衛星
    anime({
        targets: '#satelite path',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 8000,
        loop: true
    })
}

// var el = document.querySelector(".show");
// let allsq = 70;
// for(let i = 0; i < allsq; i++) {
//     var square = document.createElement('div');
//     var br = document.createElement('br');
//     square.className = "show__item";
//     el.prepend(square);
//     animeActive('square', '.show__item');
// }

animeActive('numRandom', '#demo-input');
scaleAnimation();
