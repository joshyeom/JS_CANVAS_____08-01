const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 5; //width를 먼저 설정해주어 함.
ctx.strokeRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200); //붓은 이제 200, 200에 위치함.
ctx.lineTo(325, 100); //lineTo는 항상 fill,stroke과 같이 속성을 정해주어야 보여짐.
ctx.lineTo(450, 200); //삼각형 완성
ctx.fill();
