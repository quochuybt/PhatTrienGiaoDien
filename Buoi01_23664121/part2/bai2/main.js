const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const input = document.getElementById('billAmount').value;
    const bills = input.split(',').map(item => parseFloat(item.trim()));
    const tips = bills.map(bill => calcTip(bill));
    const totals = bills.map((bill, index) => bill + tips[index]);

    for (let i = 0; i < bills.length; i++) {
        console.log(`Hóa đơn là ${bills[i]}, tiền boa là ${tips[i]} và tổng giá trị là ${totals[i]}`);
    }

});
function calcTip(billAmount) {
    return billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.20;
}