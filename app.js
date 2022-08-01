const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40, 200 - 20, 15, 100);
ctx.fillRect(350 - 40, 200 - 20, 15, 100);
ctx.fillRect(260 - 40, 200 - 20, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI); //2 * Math.PI = circle
ctx.fill();

ctx.beginPath(); //없이 진행하면 위에 색상과 겹쳐져서 이상해짐.
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 8, Math.PI, 0);
ctx.arc(220 + 10, 80, 8, Math.PI, 0);
ctx.fill();
