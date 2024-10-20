
const button = document.querySelector("#btn");
const birthdayInput = document.querySelector("#birthday");
const output = document.querySelector("#result");


const handleAgeCalculation = () => {
  const birthday = birthdayInput.value.trim();
  
  if (!birthday) {
    alert("Please provide your birthday.");
    return;
  }

  const age = computeAge(birthday);
  output.textContent = `Your age is ${age} ${age !== 1 ? "years" : "year"} old.`;
};

const computeAge = (birthday) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let calculatedAge = today.getFullYear() - birthDate.getFullYear();
  
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    calculatedAge--;
  }

  return calculatedAge;
};

button.addEventListener("click", handleAgeCalculation);