Контрольная работа № 1.
6 компонентов:
1. "" - HomeComponent
2. "/cars" - CarsComponent
3. "/car/:id" - CarComponent
4. "/car/add" - AddCarComponent
5. "/aboutme" - AboutMeComponent
6. "**" - NotFoundComponent

Основные критерии:
Пункты меню: домашняя страница; список машин; добавить машину; "обо мне".
Создать модель "Car" со свойствами:
id: number,
brandName: string,
modelName: string,
priceInRub: number
Создать сервис "CarService" с данными в массиве по типу "Car" (минимум 3 "Car" объекта) и методами:
получение всех автомобилей;
добавление одного автомобиля в конец;
получение одного определенного автомобиля.
Критерии по компонентам:
1. Написать зачем данный сайт. Приветственное окно, welcome текст, "данный сайт - контрольная работа". Описать какой функционал присутствует на сайте (просмотр, добавление ...). Творческий компонент.
2. Отображение названия марки и модели каждого автомобиля. Получать автомобили через сервис "CarService". Возможность перехода на отдельный автомобиль (то есть в компонент CarComponent).
Необходимые части 2 пункта:
* Route в app-routing.module.ts с "path": "car/:id";
* Подключение и использование сервиса в компоненте;
* Использование *ngFor для отображения объектов;
* Переменная массива по типу "Car";
* Переход на определенный объект с помощью routerlink.
3. Отображение полей brandName, modelName и priceInRub обьекта типа "Car", который вы получаете из сервиса "CarService" с помощью id, который вы получаете из ActivatedRoute.
4. Отображение формы для заполнения данных о новой машине (объект типа "Car"). Необходимые поля для заполнения (все поля обязательные):
* Название марки (обычный текст, минимум 3 максимум 10 символов);
* Название модели (обычный текст, минимум 3 максимум 10 символов);
* Цена в рублях (только числа, минимум 5 максимум 7 символов);
Кнопка для сохранения автомобиля. После сохранения переход на страницу с отображением всех автомобилей.
5. Содержит текст: "Контрольная работа №1. Фамилия Имя Отчество. Стадия реализации проекта. Какая вам нужна помощь в изучении пройденного материала".
Пример: "Контрольная работа №1. Иванов Иван Иванович. Сделана главная страница и 2 дочерних компонента из 6 запланированных. Помощь нужна в привязке данных (не совсем понимаю)".
6. Содержит текст: "Такой страницы нет" и ссылку на главную страницу.