// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (!height || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please enter a valid height`;
//   } else if (!weight || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please enter a valid weight`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
//   }
// });


const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (!height || height <= 0 || isNaN(height)) {
    results.innerHTML = `⚠️ Please enter a valid height`;
  } else if (!weight || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `⚠️ Please enter a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let category = '';

    if (bmi < 18.6) {
      category = "You are Underweight 😟";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "You are in the Normal Range 🙂";
    } else {
      category = "You are Overweight 😐";
    }

    results.innerHTML = `<span>Your BMI is <strong>${bmi}</strong></span><br><span>${category}</span>`;
  }
});


