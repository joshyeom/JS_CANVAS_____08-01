const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50); //Default값은 0,0 canvas의 맨왼쪽위에서 시작
ctx.lineTo(150, 50); //붓으로 쭉 그린다고 생각하면 됨. x축으로 150이동
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill(); //선으로 그린
