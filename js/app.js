let plateaux = document.createElement("div");
plateaux.id = "plateaux";
plateaux.style.border = "5px solid black";
plateaux.style.height = "800px";
plateaux.style.width = "800px";
document.body.appendChild(plateaux);


function cases(num_cases) {
    for (let i = 0; i < 8; i++) {
        let new_line = document.createElement("div");
        new_line.classList.add("lines");
        new_line.style.border = "1px solid black";
        plateaux.appendChild(new_line);

        for (let y = 0; y < 8; y++) {
            let new_case = document.createElement("div");
            new_case.id = `div${i}`;
            new_case.classList.add("cases");
            new_case.style.border = "1px solid black";
            new_line.appendChild(new_case);

            if (y % 2 == 0) {
                new_case.style.backgroundColor = "black";
            }
        }
    }
    // for (let i = 1; i <= num_cases; i++) {
    //     let new_case = document.createElement("div");
    //     new_case.id = `div${i}`;
    //     new_case.classList.add("cases");
    //     new_case.style.border = "1px solid black";
    //     plateaux.appendChild(new_case);

    //     if (i % 2 == 0) {
    //         new_case.style.backgroundColor = "black";
    //     } else {
    //         new_case.style.backgroundColor = "white";
    //     }
    // }
}
cases(64);