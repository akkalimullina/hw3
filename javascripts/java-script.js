document.addEventListener("DOMContentLoaded", function() {
    const glassmorfElement = document.querySelector('.glassmorf');

    // hover
    const hoverStyles = {
        background: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-2px)',
    };
    
    // before
    const beforeStyles = {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent)',
        opacity: '0',
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
    };
    
    
    // Функция для применения стилей
    function applyStyles(element, styles) {
        for (const property in styles) {
            element.style[property] = styles[property];
        }
    }
    
    // before
    const beforeElement = document.createElement('div');
    beforeElement.style.position = 'absolute';
    beforeElement.style.content = '""'
    applyStyles(beforeElement, beforeStyles);
    glassmorfElement.appendChild(beforeElement);
    
    
    //  наведения
    glassmorfElement.addEventListener('mouseover', () => {
      applyStyles(glassmorfElement, hoverStyles);
      beforeElement.style.opacity = '1';
    });
    
    // уход мыши
    glassmorfElement.addEventListener('mouseout', () => {
      // Возвращаем изначальные стили (может потребоваться дополнительная настройка)
      glassmorfElement.style.background = ''; // или точное значение
      glassmorfElement.style.boxShadow = '';   // или точное значение
      glassmorfElement.style.transform = ''; // или точное значение
      beforeElement.style.opacity = '0'
    });
    
    const scevromorfElement = document.querySelector('.scevromorf');

    // Стили для .scevromorf:hover
    const hoverStyles = {
        boxShadow: '2px 2px 4px #bababa, -2px -2px 4px #ffffff',
        transform: 'translateY(1px)',
    };
    
    // Стили для .scevromorf:active
    const activeStyles = {
        boxShadow: 'inset 2px 2px 4px #bababa, inset -2px -2px 4px #ffffff',
        transform: 'translateY(2px)',
    };
    
    // Стили для .scevromorf::before
    const beforeStyles = {
        content: '""',
        position: 'absolute',
        top: '1px',
        left: '1px',
        right: '1px',
        bottom: '1px',
        borderRadius: '7px',
        boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)',
        pointerEvents: 'none',
    };
    
    
    // Функция для применения стилей
    function applyStyles(element, styles) {
        for (const property in styles) {
            element.style[property] = styles[property];
        }
    }
    
    // Создание и добавление псевдоэлемента ::before
    const beforeElement = document.createElement('div');
    beforeElement.style.position = 'absolute';
    beforeElement.style.content = '""'
    applyStyles(beforeElement, beforeStyles);
    scevromorfElement.appendChild(beforeElement);
    
    // Обработчик события наведения
    scevromorfElement.addEventListener('mouseover', () => {
        applyStyles(scevromorfElement, hoverStyles);
    });
    
    // Обработчик события ухода мыши
    scevromorfElement.addEventListener('mouseout', () => {
        // Сброс стилей hover (указывайте начальные значения если есть необходимость)
        scevromorfElement.style.boxShadow = '';
        scevromorfElement.style.transform = '';
    });
    
    
    // Обработчик события нажатия
    scevromorfElement.addEventListener('mousedown', () => {
        applyStyles(scevromorfElement, activeStyles);
    });
    
    
    // Обработчик события отпускания нажатия
    scevromorfElement.addEventListener('mouseup', () => {
        // Сброс стилей active, можно и при уходе мыши, как вам удобно
        // Указывайте начальные значения если есть необходимость
         scevromorfElement.style.boxShadow = '';
         scevromorfElement.style.transform = '';
    });

});

//
let boxes = document.querySelectorAll(".glassmorf");

boxes.forEach(function(glassmorf) {
    glassmorf.addEventListener("click", function() {
        if (glassmorf.style.backgroundColor === "yellow") {
            glassmorf.style.backgroundColor = "lightsteelblue";
            glassmorf.style.margin = '1vw';
        } else {
            glassmorf.style.backgroundColor = "yellow";
            glassmorf.style.margin = '2vw';
             console.log("change color");
        }
    });
});
