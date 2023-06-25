1. // Ви прийшли в Макдональдз з трьома друзями.
   // Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
  //  Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
   // то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
  //  то виводити в консоль текст "Ми йдемо в інше кафе"
  //  (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

/* перший варінт 

let burger = 4
let potatofri = 1;


if (burger >= 4 && potatofri >= 4) {
    console.log("Ми поїли");
  } else {
    console.log("Ми йдемо в інше кафе");
  }





другий варіант 

 let burger = (prompt("Скільки гамбургерів з'їли:"));
let potatofri = (prompt("Скількиї картоплі фрі з'їли:"));


if (burger >= 4 && potatofri >= 4) {
    console.log("Ми поїли");
  } else {
    console.log("Ми йдемо в інше кафе");
  }


*/

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.


    let price = 1500


    if ( price >= 1000 && price <= 1900){
       console.log(price)
    } else {
      console.log('')
    }

*/

/*
Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
Результат виводити в консоль.



let price = 1500

if ( price < 1000 || price > 1900){
   console.log(price)
} else {
  console.log('')
}


let price = 1500


    if ( !(price >= 1000 && price <= 1900)){
       console.log(price)
    } else {
      console.log('')
    }

 
За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
Результат виводити в консоль.   


let season = 1 


    if ( season === 1 ){
       console.log('spring')
    } else if (season === 2) {
      console.log('summer')
    } else if (season === 3) {
      console.log('autumn')
    } else if (season === 4) {
      console.log('winter')
    } else  {
      console.log('')
    }
      
    
 Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.   


let a = 4;
let b = 9;
let c = 1;

if (a > b && b > c) {
  console.log(b)
} else if (b > a && a > c){
  console.log(a)
} else if (b > c && c > a){
  console.log(c)
} else {
  console.log('')
}
   
*/
 
/*
Задано номер дня тижня.
За заданим номером вивести назву дня тижня використовуючи switch.Результат виводити в консоль.

    let weekday = 3;

    switch (weekday) {
      case 1:
        console.log("Понеділок");
        break;
      case 2:
        console.log("Вівторок");
        break;
      case 3:
        console.log("Середа");
        break;
      case 4:
        console.log("Четвер");
        break;
      case 5:
        console.log("П'ятниця");
        break;
      case 6:
        console.log("Субота");
        break;
      case 7:
        console.log("Неділя");
        break;
      default:
        console.log("Невірний номер дня тижня");
        break;
    }



За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.


let operations = "-";
let number1 = 10;
let number2 = 5;
let result;

switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;
}

console.log(result);