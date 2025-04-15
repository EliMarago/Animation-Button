const button = document.querySelectorAll(".btn");

const colors = [
  "#F4F8D3",
  "#A6D6D6",
  "#8E7DBE",
  "#BBD8A3",
  "#E8C999",
  "#F1EFEC",
  "#FFB8E0",
  "#D3E671",
  "#FDB7EA",
  "#7D1C4A",
  "#7886C7",
  "#CBA35C",
  "#9AA6B2",
  "#DE7C7D",
  "#FFB26F",
  "#536493",
];

button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
    document.body.style.backgroundColor = randomColor;

    this.appendChild(circle);
  });
});
