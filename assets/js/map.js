var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [45.032553, 39.062971], // Cтаромышастовская
        controls: [ ],  // Массив для навигации карты
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    });



// Создание геообъекта со cвоим изображением.
    //Переменная myPlacemark
    var myPlacemark = new ymaps.Placemark([45.032553, 39.062971], {}, {

        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -40]
    });

// Размещение геообъекта на карте.
    myMap.geoObjects
        .add(myPlacemark);

// Добавим на карту ползунок масштаба и линейку.
    myMap.controls.add('zoomControl');

//Отключить изменение маштаба колесом и косанием
    myMap.behaviors.disable(['scrollZoom' , 'multiTouch' , 'drag']);
}



