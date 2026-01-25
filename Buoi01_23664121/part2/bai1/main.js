const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    const score1 = parseFloat(document.getElementById('score1').value);
    const score2 = parseFloat(document.getElementById('score2').value);
    const score3 = parseFloat(document.getElementById('score3').value);
    let average1 = calcAverage(score1, score2, score3);

    const score4 = parseFloat(document.getElementById('score4').value);
    const score5 = parseFloat(document.getElementById('score5').value);
    const score6 = parseFloat(document.getElementById('score6').value);
    let average2 = calcAverage(score4, score5, score6);

    checkWinner(average1, average2);

})
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
function checkWinner(avgDolphins,avgKoala) {
    if (avgDolphins >= 2 * avgKoala) {
        alert(`Dolphins win (${avgDolphins} vs. ${avgKoala})`);
    } else if (avgKoala >= 2 * avgDolphins) {
        alert(`Koalas win (${avgKoala} vs. ${avgDolphins})`);
    } else {
        alert('No team wins...');
    }
}