// For small screen functionality
// IIFE Immediately Invoked Function Expression
(() => {
    let spanElem = document.createElement("span");
    let itemDiv = document.querySelector(".li-items");
    document.querySelector(".logo").appendChild(spanElem);
    spanElem.setAttribute("class", "nav-icon");
    // Toggle and animation
    spanElem.addEventListener("click", () => {
        if (spanElem.style.background === `url("./nav-icons/xmark-solid.svg") no-repeat`) {
            itemDiv.classList = "hide";
            spanElem.style.background = `url("./nav-icons/bars-solid.svg") no-repeat`;
        } else {
            spanElem.classList.add("disabled");
            spanElem.style.background = `url("./nav-icons/xmark-solid.svg") no-repeat`;
            itemDiv.classList = "li-items show";
            // Animation
            let score = 0;
            let interval = setInterval(() => {
                score += 5;
                let width = itemDiv.style.width;
                if (score === 250) {
                    spanElem.setAttribute("class", "nav-icon");
                    clearInterval(interval);
                } else {
                    itemDiv.style.height = score + "px";
                }
            }, 10);
        }
    });
})()