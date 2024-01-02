particlesJS("particles-js", {
    "particles": {
        "number": {"value": 250, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#ffffff"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 6},
            "image": {"src": "img/github.svg", "width": 200, "height": 200}
        },
        "opacity": {
            "value": 0.3848188946077251,
            "random": true,
            "anim": {"enable": true, "speed": 0.4, "opacity_min": 0.008120772123013459, "sync": false}
        },
        "size": {
            "value": 4.008530152163807,
            "random": true,
            "anim": {"enable": true, "speed": 50.57680220235343, "size_min": 6.06038606150673, "sync": false}
        },
        "line_linked": {
            "enable": false,
            "distance": 48.10236182596564,
            "color": "#ffffff",
            "opacity": 0.47300655795532925,
            "width": 13.147978899097287
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 3126.65351868777, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "bubble"},
            "onclick": {"enable": true, "mode": "repulse"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 0.5}},
            "bubble": {"distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
