/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

let currentIndex = 0;

// Получаем элементы кнопок и изображения
const imageElement = document.querySelector('.slider img');
const prevButton = document.querySelector('.slider .prev');
const nextButton = document.querySelector('.slider .next');

// Отображаем первое изображение
imageElement.src = WEB_TECH_IMAGES[currentIndex];

// Добавляем обработчики событий
prevButton.addEventListener('click', () => {
  for (let i = 0; i < WEB_TECH_IMAGES.length; i++) {
    if (i === currentIndex) {
      if (i === 0) {
        currentIndex = WEB_TECH_IMAGES.length - 1; // Переход к последнему элементу
      } else {
        currentIndex--; // Переход к предыдущему элементу
      }
      break; // Выходим из цикла
    }
  }
  imageElement.src = WEB_TECH_IMAGES[currentIndex]; // Меняем изображение
});

nextButton.addEventListener('click', () => {
  for (let i = 0; i < WEB_TECH_IMAGES.length; i++) {
    if (i === currentIndex) {
      if (i === WEB_TECH_IMAGES.length - 1) {
        currentIndex = 0; // Переход к первому элементу
      } else {
        currentIndex++; // Переход к следующему элементу
      }
      break; // Выходим из цикла
    }
  }
  imageElement.src = WEB_TECH_IMAGES[currentIndex]; // Меняем изображение
});
