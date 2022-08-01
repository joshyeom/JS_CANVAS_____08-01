const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200); //margin 50, width 100 height 200인 rect를 fill하는 변수

ctx.rect(150, 150, 100, 100); //rect 생성
ctx.rect(250, 250, 100, 100);
ctx.rect(350, 350, 100, 100);
ctx.fill(); //위 rect들은 같은 path이기 때문에 새로 path를 지정해줘야 함.

ctx.beginPath();
ctx.rect(450, 450, 100, 100);
ctx.rect(550, 550, 100, 100);
ctx.fillStyle = "red";
ctx.fill(); //위 두개의 rect만 red
