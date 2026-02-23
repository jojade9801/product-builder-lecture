document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('lotto-display');
    const generateBtn = document.getElementById('generate-btn');

    const ballColors = [
        '#fbc400', // 노랑
        '#69c8f2', // 파랑
        '#ff7272', // 빨강
        '#aaa',    // 회색
        '#b0d840'  // 초록
    ];

    function generateNumbers() {
        display.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.classList.add('lotto-ball');
                ball.textContent = number;

                let color;
                if (number <= 10) color = ballColors[0];
                else if (number <= 20) color = ballColors[1];
                else if (number <= 30) color = ballColors[2];
                else if (number <= 40) color = ballColors[3];
                else color = ballColors[4];

                ball.style.backgroundColor = color;
                display.appendChild(ball);
            }, index * 200); // 0.2초 간격으로 공 표시
        });
    }

    generateBtn.addEventListener('click', generateNumbers);
});
