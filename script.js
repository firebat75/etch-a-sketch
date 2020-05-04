const container = document.querySelector('#container');

for (i = 0; i <= 16; i++) {

    const column = document.createElement("div");
    column.style.display = "inline-block";

    for (e = 0; e <= 16; e++) {
        const square = document.createElement("div");
        square.classList.add("unit")
        // square.textContent = (`${i},${e}`);

        column.appendChild(square);
    }
    container.appendChild(column);
}