console.log("JavaScript is connected!");
document.querySelectorAll("input[type=submit]").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        alert(`You clicked ${event.target.value}`);
    });
});
