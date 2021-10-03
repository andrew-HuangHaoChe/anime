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
function incomeAnimation () {
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

    function firstanimation () {
        icon_one = anime.timeline({
            easing: 'easeInOutSine',
        })
        icon_one.add({
            targets: '#satelite path',
            strokeDashoffset: [anime.setDashoffset, 0],
            endDelay: 500
        })
        .add({
            targets: '#satelite_wing',
            rotate: {
                value: '0.5turn',
                duration: 800,
                easing: 'easeInOutSine'
            },
            // zIndex: {
            //     value: [1, 5],
            //     round: true
            // },
        })
        .add({
            targets: '#satelite_signal path',
            opacity: [ 0, 1 ],
            translateY: [ -20, 0 ],
            translateX: [ -20, 0 ],
            delay: anime.stagger(500)
        })
    }

    function secondanimation () {
        icon_two = anime.timeline({
            easing: 'easeInOutSine',
        })
        icon_two.add({
            targets: '#dandelion path',
            strokeDashoffset: [anime.setDashoffset, 0],
        })
        .add({
            targets: '.petal',
            translateX: 60,
            translateY: -60,
            rotate: '15deg',
            delay: anime.stagger(500)
        })
    }
    // var scaletimeline = anime.timeline({
    //     loop: true,
    // });
    // scaletimeline.
    // add({
    //     targets: '.income-group .satellite',
    //     scale: [
    //         { value: 1, duration: 500 },
    //         { value: 1.2, duration: 800, endDelay: 4300 },
    //         { value: 1, duration: 500 }
    //     ]
    // })
    // .add({
    //     targets: '.income-group .dandelion',
    //     scale: [
    //         { value: 1, duration: 500 },
    //         { value: 1.2, duration: 800, endDelay: 4300 },
    //         { value: 1, duration: 500 }
    //     ]
    // })
    // .add({
    //     targets: '.income-group .rocket',
    //     scale: [
    //         { value: 1, duration: 500 },
    //         { value: 1.2, duration: 800, endDelay: 4300 },
    //         { value: 1, duration: 500 }
    //     ]
    // });

    // anime.remove('.income-group .income-group__item .satellite');
    // let scaltimeline = anime.timeline({
    //     loop: true
    // });
    // scaltimeline.add({ // 每個動畫放大、縮小
    //     targets: '.income-group .income-group__item',
    //     scale: [
    //         { value: 1, duration: 500 },
    //         { value: 1.2, duration: 500, endDelay: 4300 },
    //         { value: 1, duration: 500 }
    //     ],
    //     duration: 8000,
    //     delay: function (el, i, l) {
    //         console.log(el, i, l);
    //         return i * 5000
    //     }
    // })
    firstanimation();
    secondanimation();
}

incomeAnimation();

// var el = document.querySelector(".show");
// let allsq = 70;
// for(let i = 0; i < allsq; i++) {
//     var square = document.createElement('div');
//     var br = document.createElement('br');
//     square.className = "show__item";
//     el.prepend(square);
//     animeActive('square', '.show__item');
// }
// animeActive('numRandom', '#demo-input');