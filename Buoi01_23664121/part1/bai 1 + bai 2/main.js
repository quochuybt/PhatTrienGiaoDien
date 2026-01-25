const btn = document.getElementById("click")
btn.addEventListener("click",() => {
    const mass1 = document.getElementById("mass1").value
    const height1 = document.getElementById("height1").value
    const BMI1 = Math.round(BMI(mass1,height1)*100)/100
    const mass2 = document.getElementById("mass2").value
    const height2 = document.getElementById("height2").value
    const BMI2 = Math.round(BMI(mass2,height2)*100)/100
    const markHigherBMI = BMI1 > BMI2
    if (markHigherBMI) {
        alert(`Mark's BMI ${BMI1} is higher than John's ${BMI2}!`)
    }else {
        alert(`John's BMI ${BMI2} is higher than Mark's! ${BMI1}`)
    }
})
function BMI(mass, height) {
    return mass / (height*height)
}

