// js.js

function toggleSearch() {
    const input = document.querySelector('.input-search');
    const nr = input.value.trim().toUpperCase();

    if (!nr) {
        alert("Wpisz numer rejestracyjny!");
        return;
    }

    // chowamy formularz
    document.getElementById('search-block').classList.add('hidden');

    // pokazujemy sekcję wyniku
    const resultBlock = document.getElementById('result-block');
    resultBlock.classList.remove('hidden');

    // czyścimy poprzednie dane
    document.getElementById('car-info').innerHTML = '<p>Ładowanie...</p>';
    document.getElementById('error-msg').classList.add('hidden');

    // Żądanie do backendu
    fetch(`backend/api.php?nr=${encodeURIComponent(nr)}`)
        .then(response => response.json())
        .then(data => {
            const info = document.getElementById('car-info');

            if (data.success && data.data) {
                const car = data.data;

                info.innerHTML = `
                    <dl>
                        <dt>Marka:</dt>      <dd>${car.marka || '—'}</dd>
                        <dt>Model:</dt>      <dd>${car.model || '—'}</dd>
                        <dt>Rok produkcji:</dt> <dd>${car.rok || '—'}</dd>
                        <dt>Nr VIN:</dt>     <dd>${car.vin || '—'}</dd>
                        <dt>Kolor:</dt>      <dd>${car.kolor || '—'}</dd>
                        <dt>Przebieg:</dt>   <dd>${car.przebieg ? car.przebieg + ' km' : '—'}</dd>
                        <dt>Moc:</dt>        <dd>${car.moc ? car.moc + ' KM' : '—'}</dd>
                        <dt>Paliwo:</dt>     <dd>${car.paliwo || '—'}</dd>
                        <dt>Przegląd ważny do:</dt> <dd>${car.data_przegladu || '—'}</dd>
                        <dt>Ubezpieczenie do:</dt>  <dd>${car.ubezpieczenie_do || '—'}</dd>
                    </dl>
                `;
            } else {
                document.getElementById('error-msg').textContent = data.message || 'Nie znaleziono pojazdu';
                document.getElementById('error-msg').classList.remove('hidden');
                info.innerHTML = '';
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById('error-msg').textContent = 'Błąd połączenia z serwerem';
            document.getElementById('error-msg').classList.remove('hidden');
        });
}

function goBack() {
    document.getElementById('search-block').classList.remove('hidden');
    document.getElementById('result-block').classList.add('hidden');
    document.querySelector('.input-search').value = '';
}