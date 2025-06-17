document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('input[name="display"]');
  const buttons = document.querySelectorAll('input[type="button"]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.value;

      switch (value) {
        case 'AC':
          display.value = '';
          break;
        case 'DEL':
          display.value = display.value.slice(0, -1);
          break;
        case '=':
          try {
        
            display.value = eval(display.value.replace('%', '/100'));
          } catch {
            display.value = 'Error';
          }
          break;
        default:
          display.value += value;
      }
    });
  });
});