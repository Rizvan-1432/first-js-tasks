/**
 * Код ниже заставляет браузер запросить у вас число,
 * а затем, если это число равно `6`, возвращает `true`, в противном случае возвращает `false`.
 * 
 * Измените этот код так, чтобы он возвращал `true`, когда число больше или равно 10, и `false`, если оно меньше 10.
 */

number = Number(prompt("введите число"));

function numberChecker() {
  if(number >= 10) {
    return true;
  } else {
    return false;
  }
}
console.log(numberChecker());