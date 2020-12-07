// function calculateBmi(a, b) {
//    console.log(a + b);
// }


// function calculateBmi(name, weight, height) {
//     let bmi = weight / (height*height);
//     // console.log(name + "'s BMI " + bmi); bu eski variant tegida yengisi
//     console.log(` ${name}'s BMI ${bmi} `)
// }

// calculateBmi("Dilmurod", 60, 1.78);


function calculateBmi() {
    const name = document.getElementById("name");
    const weightVal = document.getElementById("weight");
    const heightVal = document.getElementById("height");
    const result = document.querySelector("#result");
    
    const weight = parseFloat(weightVal.value);
    const height = parseFloat(heightVal.value);
    //parseFloat - bu stringdan raqamga ogirib beradi
    let bmi = (weight / (height * height)).toFixed(2);
    // toFixed - kopaytrib bolgandan keyn soni orqasida qop ketadigan ortiqcha uzun sonlani optawidi qovusi ichiga 2 db yozlgan xozi 2tasini qoldiradi
    console.log(`'s bmi ${bmi}`);
    result.textContent = ` ${name.value}'s BMI ${bmi} `

    if (bmi < 18.5) {
        result.innerHTML = ` ${name.value}'s BMI ${bmi} <span style="color: red;">(Under Weight)</span> `
    } else if (bmi >= 18.4 && bmi <= 24.9) {
        result.innerHTML = ` ${name.value}'s BMI ${bmi} <span style="color: green;">(Normal)</span> `
    } else if (bmi >= 25 && bmi <= 30) {
        result.innerHTML = ` ${name.value}'s BMI ${bmi} <span style="color: red;">(Over Weight)</span> ` 
    } else {
        result.innerHTML = ` ${name.value}'s BMI ${bmi} <span style="color: red;">(Obesity)</span> `
    }
}