function checkBMIInterpretation() {
  let weightInKilograms = prompt('Въведи килограми');
  console.log(weightInKilograms);

  let heightInMeters = prompt('Въведи височина');
  console.log(heightInMeters);

  let bodyMassIndex =
    Number(weightInKilograms) / Math.pow(2, Number(heightInMeters));
  console.log(bodyMassIndex);

  if (bodyMassIndex < 16) {
    console.log('тежко недохранване');
  } else if (bodyMassIndex >= 16 && bodyMassIndex < 16.99) {
    console.log('средно недохранване');
  } else if (bodyMassIndex >= 17 && bodyMassIndex < 18.49) {
    console.log('леко недохранване');
  } else if (bodyMassIndex < 18.5) {
    console.log('поднормено тегло ');
  } else if (bodyMassIndex >= 18.5 && bodyMassIndex < 24.99) {
    console.log('нормално тегло ');
  } else if (bodyMassIndex >= 25) {
    console.log('наднормено тегло ');
  }
}
