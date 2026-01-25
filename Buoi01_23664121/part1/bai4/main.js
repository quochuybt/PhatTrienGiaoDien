const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tip = billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.20;
    const total = billAmount + tip;
    console.log(`Hóa đơn là ${billAmount}, tiền boa là ${tip} và tổng giá trị là ${total}`);
});