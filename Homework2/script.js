function greetings() {
  // взимаме въведената от потребителя стойност за град:
  let userTown = document.getElementById('town').value;

  // Task 1: Изпишете в конзолата съдържанието на променливата userTown
  //console.log(userTown);

  // Task 2:
  if (userTown === 'София') {
    console.log('Здравей!');
  } else if (userTown === 'Париж') {
    console.log('Salut!');
  } else if (userTown === 'Лондон') {
    console.log('Hi!');
  }
}

