  //создание массива

var dinosaurs = [
  "Тиранозавр",
  "Велицераптор",
  "Стегозавр",
  "Трицератопс",
  "Брахиозавр",
  "Птеранодон",
  "Апатозавр",
  "Диплодок",
  "Компсогнат",
  "Тирекс"
];
// var dinosaurs = [];
//     dinosaurs[0] = "Тиранозавр";
//     dinosaurs[1] = "Велицераптор";
//     dinosaurs[2] = "Стегозавр";
//     dinosaurs[3] = "Трицератопс";
//     dinosaurs[4] = "Брахиозавр";
//     dinosaurs[5] = "Птеранодон";
//     dinosaurs[6] = "Апатозавр"; 
//     dinosaurs[7] = "Диплодок"; 
//     dinosaurs[8] = "Компсогнат";
//     dinosaurs[5] = "Тирекс";
  console.log(dinosaurs[5]); //Птеранодон

  // разные типы данных в массиве
var dinosaurs = [3, "Тиранозавр", ["Велицераптор", "Стегозавр", 3627.4], 10];
console.log(dinosaurs[2] [0]);//Велицераптор

  //Длина массива
var maniacs = ['Якко', 'Вакко', 'Дот'];
console.log(maniacs.length); //.length длина массива (3)
console.log(maniacs[maniacs.length - 1]);// Дот (длина масива 3 - 1 выводит индекс [2] )
//.length выводит длину массива

  //Добавление элемента в массив
var animals = [];// Пустой массив
animals.push('Cat');//.push добавляет єлемент в массив
animals.push('dog');//.push добавляет єлемент в массив
animals.push('lama');//.push добавляет єлемент в массив
console.log(animals.length);//.length длина массива 3
console.log(animals);//["Cat", "dog", "lama"]
animals.unshift('Manky');//.unshift добавляет єлемент в начало массива
console.log(animals.length);//.length длина массива 4
console.log(animals);//["Manky", "Cat", "dog", "lama"]
animals.unshift('white bear');//.unshift добавляет єлемент в начало массива
console.log(animals.length);//.length длина массива 5
console.log(animals);//["white bear", "Manky", "Cat", "dog", "lama"]
console.log(animals[0]);// вывод элемента [] массива в консоль
console.log(animals);//[white bear]
//.unshift добавляет єлемент в начало массива
//.push добавляет элемент в конец массива

  //Удаление элементов массива
var lastAnimals = animals.pop();//.pop удаляет последний элемент из массива и возвращает этот эелемент в виде значения
console.log(lastAnimals);//значение которое удалено из масива и добавленно в переменную
console.log(animals.pop());//.pop удаляет последний элемент из массива
console.log(animals);//["white bear", "Manky", "Cat", "dog"]
animals.unshift(lastAnimals);//.unshift добавляет єлемент переменной в начало массива
console.log(animals);//["lama", "white bear", "Manky", "Cat"]
var firstAnimal = animals.shift();//.shift() удаляет элемент в начале массива
console.log(firstAnimal);//lama
console.log(animals);//["white bear", "Manky", "Cat"]
//.shift удаляет элемент с начала массива
//.pop удаляет последний элемент из массива и возвращает этот эелемент в виде значения

  //Обьединение массивов
var furryAnimals = ['Alpacka', 'Lemyr', 'Etti'],
    scalyAnimals = ['Piton', 'Godzilla'],
    furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);//.concat метод обеденения двух массивов в один
console.log(furryAndScalyAnimals);//["Alpacka", "Lemyr", "Etti", "Piton", "Godzilla"] обедененный массив
console.log(furryAnimals);//["Alpacka", "Lemyr", "Etti"]
console.log(scalyAnimals);//["Piton", "Godzilla"]
//.concat метод обеденения двух массивов в один

//Обьединение нескольких массивов
var featheredAnimals = ['Arra', 'Dodo'], 
    allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);/*.concat метод обеденения массивов, 
    черз запятую можна указать несколько массивов которые будут обьеденен в один массив */
console.log(allAnimals);//["Alpacka", "Lemyr", "Etti", "Piton", "Godzilla", "Arra", "Dodo"]
//массив.concat(массив, массив) - Обьединение нескольких массивов

  //Поиск индекса єлемента в массиве
var colors = ['red', 'green', 'blue'];
console.log(colors);//["red", "green", "blue"]
console.log(colors.indexOf('blue'));//.indexOf метол вывода индекса элемента в массиве (2)
console.log(colors.indexOf('green'));//.indexOf метол вывода индекса элемента в массиве (1)
console.log(colors[2]);//blue название массива[индекс єлемента] вернет название єлемента
console.log(colors.indexOf('white'));//Если элемента нет в массиве JS вернет значение -1
//.indexOf метол вывода индекса элемента в массиве
//название массива[индекс єлемента] вернет название єлемента 

  //Превращаем массив в строку
var boringAnimals = ['Manky', 'Cat', 'Fish', 'Lizard'];
console.log(boringAnimals.join()); //Manky,Cat,Fish,Lizard .join()- метод позволяет соеденить массив в одну строку
console.log(boringAnimals.join(' - ')); //Manky - Cat - Fish - Lizard
console.log(boringAnimals.join('*')); //Manky*Cat*Fish*Lizard
console.log(boringAnimals.join(' & ')); //Manky & Cat & Fish & Lizard

var myNames = ['Nicolas', 'Endry', 'Makswell', 'Morgan'];
console.log(myNames.join(" ")); //Nicolas Endry Makswell Morgan .join()- метод позволяет соеденить массив в одну строку
//.join()- метод позволяет соеденить массив в одну строку
//.join("разделитель")

    //Случайный выбор
  //Использование Math.random()
console.log(Math.random()); // Math.random()- метод который возвращает случайное число от 0 до 1
console.log(Math.random() * 10); // Math.random() * 10 (выводит от 0.0001... до 9.9999... )
console.log(Math.floor(3.999999)); // 3, Math.floor() - округляет число до ближайшего снизу целого значения
console.log(Math.floor(Math.random() * 4)); // может выпасть 0, 1, 2, 3

var randomWords = ['Exploit', 'Cave', 'Princess', 'Pencil'],
    randomIndex = Math.floor(Math.random() * 4); //Math.floor() - округляет число Math.random() * 4 выводит индекс элем.
    //Укороченная запись
    //randomWords[Math.floor(Math.random() * 4)];
console.log(randomWords[randomIndex]); // Выводим в консоль рандомный элемент массива
//Программа случайного выбора вариантов
var phrases = [
    'Звучит не плохо',
    'Да, это определенно надо сделать',
    'Не думаю, что это хорошая идея',
    'Может, не сегодня?',
    'Компьютер говорит нет'
];
// Мне выпить еще молочного коктейля?
console.log(phrases[Math.floor(Math.random()* 5)]);
//Math.random()- метод который возвращает случайное число от 0 до 1
//Math.floor() - округляет число до ближайшего снизу целого значения

  //Генератор случайных дразнилок
var randomBodyParts = ['глаз', 'нос', 'череп'],
    randomAdjectives = ['ванючая', 'унылая', 'дурацкая'],
    randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'],
    randomBodyParts = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)],
    randomAdjectives = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)],
    randomWords = randomWords[Math.floor(Math.random() * randomWords.length)],
    //randomInsult = 'У тебя ' + randomBodyParts + ' словно ' + randomAdjectives + ' ' + randomWords + ' !!!';
    randomInsult = ['У тебя', randomBodyParts, 'словно', randomAdjectives, randomWords + '!!!'].join(' ');
console.log(randomInsult);

/* ДЗ №1 Новые дразнилки
      №2 Изощренные дразнилки: "У тебя [часть тела]еще более [прилагательное], чем [часть тела животного] у [животное]"
      №3 Оператор + или Join? : Сделать две версии генератора дразнилок : одна использует оператор + , а другая join
      #4 Соединение чисел : Как с помощью join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1" ?
 */

  // №1
 var randomBodyParts = ['глаз', 'нос', 'череп', 'рот', 'ухо'],
    randomAdjectives = ['ванючая', 'унылая', 'дурацкая', 'жадная', 'безумная'],
    randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса', 'собака', 'жаба'],
    randomBodyParts = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)],
    randomAdjectives = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)],
    randomWords = randomWords[Math.floor(Math.random() * randomWords.length)],
    //randomInsult = 'У тебя ' + randomBodyParts + ' словно ' + randomAdjectives + ' ' + randomWords + ' !!!';
    randomInsult = ['У тебя', randomBodyParts, 'словно', randomAdjectives, randomWords + '!!!'].join(' ');
console.log(randomInsult);

  // №2
