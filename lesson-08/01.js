/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    let result = '';
    let makeUpper = true; // флаг: следующий символ надо сделать заглавным

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (makeUpper && char !== ' ') {
            // делаем заглавной текущую букву
            result += char.toUpperCase();
            makeUpper = false; // дальше внутри слова — обычные буквы
        } else {
            result += char;
        }

        // если текущий символ — пробел, то после него надо снова
        // сделать первую букву следующего слова заглавной
        if (char === ' ') {
            makeUpper = true;
        }
    }

    return result;
}