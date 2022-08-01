const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

let isPainting = false; //let으로 startPainting에서 true로 재할당

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, eventoffsetY);
    ctx.fill();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = ture;
}

function cancelPainting() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting); //mouse를 click에서 누르고 있을 때
canvas.addEventListener("mouseup", cancelPainting); //mouse를 click에서 뗀 순간
canvas.addEventListener("mouseleave", cancelPainting); //마우스가 canvas를 벗어나고 그려지는것는 버그 방지
