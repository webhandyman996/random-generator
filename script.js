document.addEventListener('DOMContentLoaded', function() {
    const minInput = document.getElementById('min-value');
    const maxInput = document.getElementById('max-value');
    const generateBtn = document.getElementById('generate-btn');
    const resultSection = document.getElementById('result-section');
    const resultValue = document.getElementById('result-value');

    // Generate random number on button click
    generateBtn.addEventListener('click', generateRandomNumber);

    // Allow Enter key to generate random number
    minInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') generateRandomNumber();
    });
    maxInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') generateRandomNumber();
    });

    function generateRandomNumber() {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);

        // Validation
        if (isNaN(min) || isNaN(max)) {
            alert('請輸入有效的數字');
            return;
        }

        if (min > max) {
            alert('最小值不能大於最大值');
            return;
        }

        // Generate random integer
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        // Display result
        resultValue.textContent = randomNum;
        resultSection.style.display = 'block';

        // Add animation effect
        resultValue.style.animation = 'none';
        setTimeout(function() {
            resultValue.style.animation = 'pulse 0.6s ease-in-out';
        }, 10);
    }
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);