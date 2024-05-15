const lineDensity = 10;
const speed = 80;

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

function generateNoise() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x += lineDensity) {
        if (Math.random() < 0.5) {
            const startY = -canvas.height;
            ctx.beginPath();
            ctx.moveTo(x, canvas.height * Math.random());
            ctx.lineTo(x, startY);
            ctx.strokeStyle = 'rgba(211,211,211,0.3)';
            ctx.stroke();
        }
    }
}

generateNoise();

function updateNoise() {
    setInterval(() => {
        generateNoise();
    }, speed); // Adjust the speed as needed
}

updateNoise();
