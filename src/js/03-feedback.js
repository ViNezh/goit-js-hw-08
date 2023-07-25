// Завантажуємо бібліотеку lodash.throttle
import throttle from 'lodash.throttle';
// Створюємо об'єкт з посиланнями на елементи форми
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textArea: document.querySelector('.feedback-form textarea'),
};
// Створюємо об'єкт для збереження вмісту полів вводу
const savedData = {};
// Встановлюємо прослуховування на події форми
refs.form.addEventListener('submit', onSubmitClick);
refs.form.addEventListener('input', throttle(dataInput, 500));
// Функція обробки події при відправці форми (SUBMIT)
function onSubmitClick(event) {
  // Заборона дій за замовчуванням для браузера
  event.preventDefault();
  // Вивід в консоль відправлених даних форми
//   console.log(`Email: ${refs.email.value}, Message: ${refs.textArea.value}`);
    console.log(savedData)
  // Очищення полів вводу та сховища
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

// Збереження масиву даних з форми
function dataInput(event) {
  savedData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(savedData));
}
// Функція відновлення введених даних
restoreData();

function restoreData() {
    const restoreData = JSON.parse(localStorage.getItem('feedback-form-state'));
    // Перевірка вмісту сховища, якщо дані існують, то переносимо їх у відповідні поля форми
  if (restoreData) {
    const keys = Object.keys(restoreData);
    for (const key of keys) {
      if (key === refs.email.name) {
        refs.email.value = restoreData[key];
      }
      if (key === refs.textArea.name) {
        refs.textArea.value = restoreData[key];
      }
    }
  }
}
