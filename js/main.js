/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const headerTop = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    headerTop.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

let inputs = document.querySelectorAll('.phone-mask')
    inputs.forEach((input) => {
    IMask(input, {
        mask: '+{7}(000)000-00-00'
        });

    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    });

    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
})

MediaBox('.mediabox', 1);



ymaps.ready(init);

function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [50.30827107511154,57.2173332852459],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17
    });

    var myPlacemark = new ymaps.Placemark(
        [50.30827107511154,57.2173332852459],
    {
        balloonContent: `
            <div class="balloon">
                 <div class="balloo__address">АХАХААХА</div>
                   <div class="balloon__contacts">
                    <a href="">555- 555-555</a>
                    </div>
            </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://i.pinimg.com/736x/f2/8d/38/f28d38ee3e542a4d8b340068b7994858.jpg',
        icon_imagesize: [30, 42],
        iconImageOffset: [-20, -40]
    });


    myMap.geoObjects.add(myPlacemark);
}