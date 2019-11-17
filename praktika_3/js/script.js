/* Напишите скрипт, который:
1. Вызовет prompt с вопросом “Какой будет фон у страницы?” и заменит на введенный цвет фон body
2. Вызовет prompt с вопросом “Какой будет цвет текста на странице?” и заменит цвет текста у всего .page на введенный
3. Вызовет prompt с вопросом “Как зовут человека, который вас вдохновляет” и вставит введенное имя в span с классом name
4. Вызовет prompt с вопросом “Введите адрес картинки” и подставит введенную картинку в тег img, изменив текущий атрибут
5. Вызовет prompt с вопросом “Введите текст страницы” и вставит введенный текст в блок .shortBio
6. Присвоит класс animated к элементу с классом shortBio, так чтобы анимация границы заработала, а текущие стили параграфа сохранились */

let bodyBackgroundColor = prompt('Какой будет фон у страницы?');
document.body.style['background-color'] = bodyBackgroundColor;

let textColor = prompt('Какой будет цвет текста на странице?');
document.querySelector('.page').style['color'] = textColor;

let mentorName = prompt('Как зовут человека, который вас вдохновляет?');
document.querySelector('.name').innerText = mentorName;

let newImage = prompt('Введите адрес картинки');
document.querySelector('img').setAttribute('src', newImage);

let shortBioText = prompt('Введите текст страницы');
document.querySelector('.shortBio').innerHTML = shortBioText;

document.querySelector('.shortBio').className += ' animated';