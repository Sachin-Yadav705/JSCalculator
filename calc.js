let display2 = document.getElementById("display2");
let buttons = Array.from(document.getElementsByClassName("btns"));

buttons.map((item) => {
  item.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display2.innerText = "";
        break;
      case "<-":
        display2.innerText = display2.innerText.slice(0, -1);
        break;
      case "=":
        display2.innerText = eval(display2.innerText);
        break;
      default:
        display2.innerText += e.target.innerText;
    }
  });
});
