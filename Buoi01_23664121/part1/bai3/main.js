const btn = document.getElementById('btn');
let average1;
let average2;
btn.addEventListener('click', () => {
    const score1 = parseFloat(document.getElementById('score1').value);
    const score2 = parseFloat(document.getElementById('score2').value);
    const score3 = parseFloat(document.getElementById('score3').value);
    average1 = (score1 + score2 + score3) / 3;

    const score4 = parseFloat(document.getElementById('score4').value);
    const score5 = parseFloat(document.getElementById('score5').value);
    const score6 = parseFloat(document.getElementById('score6').value);
    average2 = (score4 + score5 + score6) / 3;
    if (average1 < 100 || average2 < 100) {
        alert('Please enter valid scores less than 100');
        return;
    }
    if (average1 > average2) {
        alert(`Average of Dolphins (${average1.toFixed(2)}) is higher than Koalas (${average2.toFixed(2)})`);
    } else if (average1 < average2) {
        alert(`Average of Koalas (${average2.toFixed(2)}) is higher than Dolphins (${average1.toFixed(2)})`);
    } else {
        alert(`Both teams have the same average (${average1.toFixed(2)})`);
    }
})