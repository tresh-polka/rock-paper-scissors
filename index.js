import readlineSync from 'readline-sync';

let playAgain = '';

let computerVictory = 0;
let userVictory = 0;

while (playAgain !== 'нет') {
  console.log('\nДобро пожаловать в игру "Камень, Ножницы, Бумага"!\n\nВыберите вашу фигуру:\n1. Камень\n2. Ножницы\n3. Бумага\n');
  const userResponse = readlineSync.question('Ваш выбор: ');
  const userChoise = userResponse.toLowerCase();

  const selectionsOptions = ['камень', 'ножницы', 'бумага'];

  const variantOfSelections = Math.floor(Math.random() * 3) + 1;
  const computerChoice = selectionsOptions[variantOfSelections - 1];

  switch (userChoise) {
    case '1':
    case 'камень':
      console.log(`Компьютер выбирает: ${computerChoice}`);
      switch (variantOfSelections) {
        case 1:
          console.log('Ничья!');
          break;

        case 2:
          console.log('Победа за вами!');
          userVictory += 1;
          break;

        case 3:
          console.log('В этот раз выиграл компьютер. В следующий раз обязательно повезёт!');
          computerVictory += 1;
          break;
      }
      break;

    case '2':
    case 'ножницы':
      console.log(`Компьютер выбирает: ${computerChoice}`);
      switch (variantOfSelections) {
        case 2:
          console.log('Ничья!');
          break;

        case 3:
          console.log('Победа за вами!');
          userVictory += 1;
          break;

        case 1:
          console.log('В этот раз выиграл компьютер. В следующий раз обязательно повезёт!');
          computerVictory += 1;
          break;
      }
      break;

    case '3':
    case 'бумага':
      console.log(`Компьютер выбирает: ${computerChoice}`);
      switch (variantOfSelections) {
        case 3:
          console.log('Ничья!');
          break;

        case 1:
          console.log('Победа за вами!');
          userVictory += 1;
          break;

        case 2:
          console.log('В этот раз выиграл компьютер. В следующий раз обязательно повезёт!');
          computerVictory += 1;
          break;
      }
      break;

    default:
      console.log('К сожалению, вы не можете выбрать этот вариант. Попробуйте другой!');
      break;
  }

  let value = '';
  while (value !== 'acceptableValue') {
    const restart = readlineSync.question('\nВыберете, пожалуйста, "да" или "нет". Хотите сыграть ещё раз?: ');
    playAgain = restart.toLowerCase();
    if (playAgain === 'да' || playAgain === 'нет') {
      value = 'acceptableValue';
    }
  }
}

console.log(`\nСпасибо за игру!\nКоличество ваших побед: ${userVictory}\nКоличество побед компьютера ${computerVictory}\n`);

if (userVictory === computerVictory) {
  console.log('Победила дружба!\n');
} else if (userVictory > computerVictory) {
  console.log('Вы выиграли! Искусственному интеллекту ещё далеко до человечества!\n');
} else if (userVictory < computerVictory) { console.log('В этот раз выиграл компьютер. В следующий раз обязательно повезёт!\n'); }
