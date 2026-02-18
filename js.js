// Замени весь блок аккордеона в js.js на это
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const panel = this.nextElementSibling;

      // Закрываем все остальные панели
      document.querySelectorAll('.accordion-panel').forEach(p => {
        if (p !== panel && p.style.maxHeight) {
          p.style.maxHeight = null;
        }
      });

      // Тогглим текущую
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        // Устанавливаем точную высоту → плавнее
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});