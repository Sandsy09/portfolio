const div = document.getElementById("main-container")

getMousePosition = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    div.style.background = _radialGradient(x, y)
}

_radialGradient = (x, y) => {
    return `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.75), transparent 20%)`
}

div.addEventListener("mousemove", (event) => {
    getMousePosition(event);
});

