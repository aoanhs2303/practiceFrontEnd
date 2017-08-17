//if (true) {
//    let domain = 'aoanhs2303';
//}
////console.log(domain);
//
//var a = 12;
//var b = 20;
//
//if (a < b) {
//    let tmp = a;
//    a = b;
//    b = tmp;
//}
//console.log("a: " + a);
//console.log("b: " + b);
////console.log("tmp: " + tmp);
//
//var functionName = (var1, var2) => {
//
//}
//
//var hello = (name, message) => {
//    console.log(`Chao ${name}, ban la ${message}`);
//}
//hello('luc', 'SV IT');
//
//var hello = () => {
//    console.log('Hello world !');
//}
//hello();
//
//var domain = ["freetuts.net", 'qa.freetuts.net', 'demo.freetuts.net'];
////domain.map(function(val, key){
////    console.log(val.toUpperCase());
////    domain[key] = val.toUpperCase();
////});
////console.log(domain);
//
//domain.map((val, key) => {
//    console.log(val.toUpperCase());
//});
//console.log(domain);
//
//setTimeout(() => {
//    console.log('Thao Anh <3 Luc');
//}, 3000);
//
//var blog = {
//    domain: "freetuts.net",
//    showWebsite: function (callback) {
//        callback();
//    },
//    render: function () {
//        this.showWebsite(function () {
//            console.log(this.domain);
//        }.bind(this));
//    }
//}
//blog.render();
//
//var blog = {
//    domain: "freetuts.net",
//    showWebsite: function (callback) {
//        callback();
//    },
//    render: function () {
//        this.showWebsite(() => {
//            console.log(this.domain);
//        });
//    }
//}
//blog.render();

//ES5
//var Person5 = function (name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//Person5.prototype.calculateAge = function () {
//    var age = new Date().getFullYear() - this.yearOfBirth;
//    console.log(age);
//}
//var Athlete5 = function (name, yearOfBirth, job, olympicGame, medals) {
//    Person5.call(this, name, yearOfBirth, job);
//    this.olympicGame = olympicGame;
//    this.medals = medals;
//}
//Athlete5.prototype.wonMedal = function () {
//    this.medals++;
//    console.log(this.medals);
//}
//
//Athlete5.prototype = Object.create(Person5.prototype);
//var john5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
//console.log(john5);
//john5.calculateAge();

//ES6
//class Person6 {
//    constructor(name, yearOfBirth, job) {
//        this.name = name;
//        this.yearOfBirth = yearOfBirth;
//        this.job = job;
//    }
//    calculateAge() {
//        var age = new Date().getFullYear() - this.yearOfBirth;
//        console.log(age);
//    }
//}
//class Athlete6 extends Person6 {
//    constructor(name, yearOfBirth, job, olympicGames, medals) {
//        super(name, yearOfBirth, job);
//        this.olympicGame = olympicGames;
//        this.medals = medals;
//    }
//    wonMedal() {
//        this.medals++;
//        console.log(this.medals);
//    }
//}
//Athlete6.prototype.greeting = function() {
//    console.log('hello');
//}
//const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
//johnAthlete6.wonMedal();
//johnAthlete6.calculateAge();
//johnAthlete6.greeting();


//CODE CHALLEGE
/*
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classifycation = new Map();
        classifycation.set(1, 'tiny');
        classifycation.set(2, 'small');
        classifycation.set(3, 'normal');
        classifycation.set(4, 'large');
        classifycation.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classifycation.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1888, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.3, 989)];
const allStreets = [new Street('Ocaan Avenue', 1999, 1.1, 4),
                    new Street('Nguyen Hue', 2000, 2.7, 2),
                    new Street('Dong Da', 2012, 3, 5)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length]
}

function reportParks(p) {
    console.log('------------------PARK REPORT--------------------');
    //Density
    p.forEach(el => el.treeDensity());

    //Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks hav an an average of ${avgAge} year.`)
    //Which part has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} more than 1000 trees`);
}

function reportStreets(s) {
    console.log('------------------STREET REPORT--------------------');
    //Total and avg length of the town's street
    const [totalLength, avgLength] = calc(s.map(el=>el.length));
    console.log(`Our ${s.length} streets have a total length ${totalLength} km, with an average of ${avgLength} km.`)
    
    //Classify sizes;
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
*/

//let date = [26, 07, 2017];
//Chuyen 3 gia tri vao 3 bien d, m, y
//let [d, m, y] = date;
//console.log("Day: " + d);
//console.log("Month: " + m);
//console.log("Year: " + y);

//let [, , y] = date;
//console.log(y);

//let dateObj = {
//    day: 26,
//    month: 07,
//    year: 2017
//}

//let {year: y} = dateObj;
//
//let {day: d, month: m, year: y} = dateObj;
//
//console.log("Day: " + d);
//console.log("Month: " + m);
//console.log("Year: " + y);

//var person = {name: "Luc", email: "trannhulucs2303@gmail.com"};
//var {name: luc_name, email: luc_email} = person;
//console.log(luc_email);

//var domains = () => {
//    return ['freetuts.net', 'luc'];
//};
//let [main, name] = domains();
//console.log(main);
//console.log(name);

//function sayHello(domain = 'freetuts.net'){
//    return domain;
//}
//console.log("Khong truyen tham so: " + sayHello());
//console.log("Co truyen tham so: " + sayHello('facebook.com'));
//
//let domainList = (main, sub, ...other) => {
//    console.log("Main: " + main);
//    console.log("Sub: " + sub);
//    console.log("Other");
//    console.log(other);
//}
//
//domainList('freetuts.net', 'facebook.com', 'google.com', 'zalo.com', 'iphone.com');

//const info = {
//    name: "Tran Nhu Luc",
//    domain: "Freetuts.net"
//};
//console.log(info);
//
//const domain = 'freetuts.net';
//domain = 'google.com';

//var domains = [
//    'freetuts.net',
//    'google.com',
//    'facebook.com'
//];
//
//for (element of domains) {
//    const message = "Domain: " + element;
//    console.log(message);
//}

/*
Khởi tạo: let set = new Set();
Thêm phần tử: set.add(value);
Xóa phần tử: set.delete(value);
Kiểm tra tồn tại giá trị: set.has(value);
Đếm tổng số phần tử: set.size;
Xóa toàn bộ phần tử: set.clear();
*/

//var numbers = new Set([1, 2, 3, 4]);
//
//numbers.add(5);
//console.log(numbers);
//numbers.delete(3);
//console.log(numbers);
//console.log(numbers.has(2));
//console.log(numbers.size);
////numbers.clear();
////console.log(numbers);
//for (let number of numbers) {
//    console.log(number);
//}
//
//let arr_numbers = [...numbers];
//console.log(arr_numbers);
//
//let arr_numbers1 = [1, 2, 3, 4];
//let set_numbers = new Set(arr_numbers1);
//console.log(set_numbers);

//let set = new Set([1, 2, 3]);
//let arr = [...set].map(function (x) {
//    return x * 2;
//});
//let arr = [...set].filter(function(x){
//   return (x % 2) == 0; 
//});
//console.log(set);
//console.log(arr);

//let map = new Map([
//    ["Name", "Tran Nhu Luc"],
//    ["Email", "trannhulucs2303@gmail.com"],
//    ["Website", "freetuts.net"]
//]);
//console.log(map);
//
//let map1 = new Map();
//map1.set('Name', 'Tran Nhu Luc');
//map1.set('College', 'BKU');
//console.log(map1);
//
//map1.delete('Name');
//console.log(map1);
//console.log(map1.has('Name'));
//map1.clear();
//console.log(map1);

//let map = new Map();
//
////KEY1
//const KEY1 = {};
//map.set(KEY1, 'Tran Nhu Luc');
//console.log(map.get(KEY1));
//const KEY2 = {};
//map.set(KEY2, 'freetuts.net');
//console.log(map.get(KEY2));
//
//for (let key of map.keys()){
//    console.log(key);
//}
//
//for (let key of map.values()){
//    console.log(key);
//}
//
//let map = new Map([
//    ['name' , 'Nguyen Van Cuong'],
//    ['domain', 'freetuts.net']
//]);
//
////for (let [key, value] of map) {
////    console.log(key + ' - ' + value);
////}
//
//map.forEach((value, key) => {
//    console.log(key + ' - ' + value);
//});

//let map = new Map()
//map.set(1, 'a');
//map.set(2, 'a');
//map.set(3, 'a');
//map.set(4, 'a');
//map.set(5, 'a');
//
//let map1 = new Map(
//    [...map].map(
//        ([key, value]) => [key, key + '-' + value]
//    )
//);
//
//let map2 = new Map(
//    [...map].filter(
//        ([key, value]) => key % 2 == 0
//    )
//)
//
//console.log(map1);
//console.log(map2);

//const MY_KEY = Symbol();
//let obj = {
//    [MY_KEY]: 123
//};
//console.log(obj[MY_KEY]);

//var domains = [
//    {
//        domain: "freetuts.net",
//        author: "Nguyen Van Cuong"
//    },
//    {
//        domain: "google.com",
//        author: "Sergey Brin"
//    }
//];
//
//domains.map(function(domain, author){
//    var tmp = `
//        <div>
//            <h1>${domains.domain}</h1>
//            <h1>${domains.author}</h2>
//        </div>
//    `;
//    console.log(tmp);
//})
//

//var message = "Web site that tuyet";
//
//$.ajax({
//    url: "some-url",
//    date: {},
//    success: function(result) {
//        message = 'Gia tri da duoc thay doi';
//    }
//});
//setTimeout(function(){
//    alert(message);
//}, 5000);


console.log("Hello NodeJS");





















