// js.js

function toggleSearch() {
    const input = document.querySelector('.input-search');
    const plate = input.value.trim();

    if (!plate) {
        alert("Wpisz numer rejestracyjny!");
        return;
    }

    // Прячем форму поиска
    document.getElementById('search-block').classList.add('hidden');

    // Показываем блок результата
    const resultBlock = document.getElementById('result-block');
    resultBlock.classList.remove('hidden');

    // Выводим номер (позже здесь будет настоящий поиск)
    document.getElementById('plate-number').textContent = plate.toUpperCase();
}

function goBack() {
    // Возвращаемся к форме
    document.getElementById('search-block').classList.remove('hidden');
    document.getElementById('result-block').classList.add('hidden');

    // Можно очистить поле ввода
    document.querySelector('.input-search').value = '';
}