const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const colors = [
  "#c56cf0",
  "#ffb8b8",
  "#ff3838",
  "#ff9f1a",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
  "#4b4b4b",
];

function mouseMove(event) {
  ctx.beginPath(); //mousemove 때마다 beginPath를 해줌으로써 같은 path가 아니게끔 하여 새로운색으로 색칠가능.
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY); //마우스 좌표를 나타내주는 offsetX,Y
  ctx.stroke();
}

canvas.addEventListener("mousemove", mouseMove);
