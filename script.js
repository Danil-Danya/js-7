//////////////////////////////////////////////////////


 const array = [
    {gpu: 'intel', info: {cores: 2, chache: 3}},
    {gpu: 'intel', info: {cores: 4, chache: 4}},
    {gpu: 'amd', info: {cores: 1, chache: 1}},
    {gpu: 'intel', info: {cores: 3, chache: 2}},
    {gpu: 'amd', info: {cores: 4, chache: 2}},
]
var coress = array.map(item => item.info.cores);
coress.sort((x, y) => x - y);
console.log(coress); 


///////////////////////////////////////////////////


//////////////////////////////////////////////////


 const arr = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 29 }
]


var newArr = arr.map(el => el.age);
var summ = newArr.reduce((a, b) => a + b);
summ = summ / arr.length
console.log(summ); 


/////////////////////////////////////////////////


////////////////////////////////////////////////


arrayArray = [1,2,3,5,8,9,10]; 
var newArrayArray = arrayArray.map(ell =>(ell = {diggit: ell, odd: ell % 2 == 0 ? 'Четное' : 'Нечетное'})); 
console.log(newArrayArray); 

///////////////////////////////////////////////


//////////////////////////////////////////////


let users = [

    { name: "Вася", surname: "Пупкин", id: 1 },
    { name: "Петя", surname: "Иванов", id: 2 },
    { name: "Маша", surname: "Петрова", id: 3 }
];


var fullName = users.map(ellement => (ellement = {fullname: ellement.name + ellement.surname + ellement.id}));
console.log(fullName);


////////////////////////////////////////////


////////////////////////////////////////////


const arrayArrayArray = [[14,15], [1], ['a','b','c']];

arrayArrayArray.sort((a,b) => a.length - b.length);
console.log(arrayArrayArray);


///////////////////////////////////////////