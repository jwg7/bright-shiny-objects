// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘


function createUser(firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user
}

console.log(createUser("Abraham", "Lincoln"));

////////////////////////////////////////////////////////

let person = {
    firstName: "Bob",
    lastName: "Slob"
}

function setAge(person, age) {
    person.age = age
    return person
}

console.log(setAge(person, 50));

//////////////////////////////////////////////////////////

function incrementAge(person) {
    person.age = person.age + 1
    return person
}

console.log(incrementAge(person));


/////////////////////////////////////////////////////////

let car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: true
}


function fixCar(car) {
    car.needsMaintenance = false;
    return car
}

console.log(fixCar(car));

/////////////////////////////////////////////////////////

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

let newGrades = [70, 75, 79];

// solving using the concat method 
function addGrades(student, grades) {
    student.grades = student.grades.concat(grades)
    return student
}

console.log(addGrades(student, newGrades));


// another way to solve this is with the .push() method. In class, a For loop was used to demonstrate this.
function addGrades1(student, newGrades) {
    for (let i = 0; i < newGrades.length; i++) {
        student.grades.push(newGrades[i])
    }
    return student
}

console.log(addGrades1(student, newGrades))

// Here's me attempting to use the .push() method without a FOR LOOP. I was able to make this work pushing only one new grade, but when i tried it with three, an array was pushed into the grades array. Any way to overcome this without the FOR LOOP? I thought it should be possible to use .push() to push more than one item.
function addGrades2(student, newGrades) {
    student.grades.push(newGrades)
    return student
}

newGrades1 = 91

console.log(addGrades2(student, newGrades1))

////////////////////////////////////////////////////////

function getDataType(object, key) {
    result = typeof object[key];
    return result
}

console.log(getDataType(car, 'make'))
console.log(getDataType(car, 'model'))
console.log(getDataType(car, 'year'))
console.log(getDataType(car, 'needsMaintenance'))

///////////////////////////////////////////////////////////

const toDos = [
    {
        title: 'Get butter',
        isComplete: false
    },
    {
        title: 'Buy bread',
        isComplete: true
    }
];

const newToDo = {
    title: 'Call mom',
    isComplete: false
};

function addToDo(toDos, newToDo) {
    toDos.push(newToDo)
    return toDos
}

console.log(addToDo(toDos, newToDo))

/////////////////////////////////////////////////////////////

const playList = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};


// I noticed that I can add an infinite amount of parameters but it doesnt matter if you dont use them in your code. The code will still run regardless.
function addSong(playList, song, curry) {
    playList.songs.push(song);
    playList.duration = playList.duration + song.duration
    return playList
}

console.log(addSong(playList, newSong));


///////////////////////////////////////////////////////////////

const reportCard = {
    lowestGrade: 70,
    highestGrade: 95,
    averageGrade: 82,
    grades: [70, 95, 80]
};


function updateReportCard(reportCard, x) {
    let sum = 0
    reportCard.grades.push(x);
    if (x < reportCard.lowestGrade) {
        reportCard.lowestGrade = x
    } else if (x > reportCard.highestGrade) {
        reportCard.highestGrade = x
    }
for (let i = 0; i < reportCard.grades.length; i++) {
    sum = sum + reportCard.grades[i]
}
reportCard.averageGrade = Math.round(sum / reportCard.grades.length)
}

updateReportCard(reportCard, 100);

// Found out I dont need return to make the function work. I just console.logged reportCard to make sure the function did what it was supposed to do.
console.log(reportCard);



// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
    // │                                                                         │
    // └─────────────────────────────────────────────────────────────────────────┘
