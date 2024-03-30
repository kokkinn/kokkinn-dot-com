function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function myFunction() {
    console.log("Event occurred!");
    const colors = ['#ff0000', '#59c939', '#ff0000', '#2866e5', '#ff0000', '#59c939'];
    for (let i = 0; i < colors.length; i++) {
        document.body.style.background = colors[i]
        await new Promise(r => setTimeout(r, 20));
    }
    document.body.style.background = '#ffffff'
}

setInterval(myFunction, getRandomInt(10000, 30000));