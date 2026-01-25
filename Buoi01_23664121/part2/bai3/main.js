const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI : function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
}
const John = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI : function() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;
    }
}
mark.BMI = Math.round(mark.calcBMI()*100)/100;
John.BMI = Math.round(John.calcBMI()*100)/100;
if (mark.BMI > John.BMI) {
    console.log(`${mark.fullName} has a higher BMI of ${mark.BMI}`);
} else if (John.BMI > mark.BMI) {
    console.log(`${John.fullName} has a higher BMI of ${John.BMI}`);
}