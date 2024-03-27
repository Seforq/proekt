ymaps.ready(init);

function init () {
    const coordinate = ["53.75716416082592,87.1286394448303"];
    const pointCoords = [];
    let myMap = new ymaps.Map("map", {
        center: [53.759886865596606,87.12882044658274],
        zoom: 16
    });



    const collection = new ymaps.GeoObjectCollection(null, {
        preset: 'islands#redDotIcon'
    });

    for (let i = 0; i < coordinate.length; i++) {
        collection.add(new ymaps.Placemark(coordinate[i]
                .split(',').map(coord => +Number(coord).toFixed(4)),
            {
                iconContent: '',
                hintContent: "СибГИУ",
                balloonContent: "<em>Университетский колледж СибГИУ</em>",
                balloonContentHeader: "Сибирский государственный индустриальный университет",
                balloonContentBody: "Адрес" + "ул. Кирова, 42, Новокузнецк",
                balloonContentFooter: "Подвал",
            }
        ));
    }

    myMap.geoObjects.add(collection)


}