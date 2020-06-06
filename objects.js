var cat = {
    'legs': 3,
    'name': 'Гармония',
    'color': 'Черепаховый'
};
console.log(cat); // Литерал обекта кот {legs: 3, name: "Гармония", color: "Черепаховый"} -литерал обекта кот
// Литерал - это когда значение записивается сразу и целиком, а не составляется постепенно шаг за шагом

var cat = {
    legs: 3,
    name: 'Гармония',
    color: 'Черепаховый'
};// js знает что ключи всегда строковые, посему можно обходится без кавичек

var cat = {
    legs: 3,
    'full name': 'Гармония Филомена Уси-Пусечка Морган', // Если ключ в кавычках то пробелы в его имени допустимы
    color: 'Черепаховый'
};
console.log(cat); //{legs: 3, full name: "Гармония Филомена Уси-Пусечка Морган", color: "Черепаховый"}

    //Доступ к значениям внутри обьектов
var cat = {
    legs: 3,
    name: 'Гармония',
    color: 'Черепаховый'
};
console.log(cat['name']); // Гармония. Значение хранящееся в обекте можно получить с помощью []

console.log(cat.name); // точечная нотация

//Object.keys()- вывод ключей у данного обьекта

var dog = {
    name: 'Oladyshek',
    age: 6,
    color: 'white',
    berk: 'Gav gav!'
};

var cat = {
    name: 'Garmony',
    age: 8,
    color: 'turtlass'
};

console.log(Object.keys(dog)); //["name", "age", "color", "berk"]
console.log(Object.keys(cat)); //["name", "age", "color"]
//Object.keys(anyObject); - возвращает массив, содержащий все ключи обекта anyObject

    //Добавление элементов обьекта
var cat = {};
cat['legs'] = 3;
cat['name'] = 'Garmony';
cat['color'] = 'Turtless';
console.log(cat); //{legs: 3, name: "Garmony", color: "Turtless"}
// js Хранит ключи, не упорядочивая их

    //Добавление ключей через точку
