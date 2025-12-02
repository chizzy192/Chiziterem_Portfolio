particlesJS("particles-js", {
    particles: {
        number: {
        value: 100,
        density: { enable: true, value_area: 800 }
        },
        color: { value: "#906f6f" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 3.5, random: true },

        line_linked: { enable: false },

        move: {
        enable: true,
        speed: 1,
        out_mode: "out"
        }
    },
    interactivity: {
    events: {
        onhover: {
        enable: true,
        mode: [ "bubble", "attract"]
        },
        onclick: {
        enable: true,
        mode: ["push", "remove"]
        }
    },
    modes: {
        bubble: { distance: 250, size: 8, duration: 2, opacity: 0.6 },
        attract: { distance: 100 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 4 }
    }
    },

    retina_detect: true
});


