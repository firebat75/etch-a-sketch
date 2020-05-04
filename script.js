const container = document.querySelector('#container');

for (i = 0; i <= 16; i++) {

    const column = document.createElement("div");
    column.style.display = "inline-block";

    for (e = 0; e <= 16; e++) {
        const square = document.createElement("div");
        square.classList.add("unit")

        column.appendChild(square);
    }
    container.appendChild(column);
}

const units = document.querySelectorAll('.unit');

units.forEach((unit => {
    unit.addEventListener('mouseover', (e) => {
        unit.style.backgroundColor = "red";
    })
}))

const reset = document.querySelector('.reset')

reset.addEventListener('click', (e) => {
    units.forEach(unit => {unit.style.backgroundColor = "pink"})
});