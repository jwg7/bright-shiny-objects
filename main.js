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
    firstName:  "Bob",
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

let newGrades = [ 70, 75, 79];

// solving using the concat method 
function addGrades(student, grades) {
student.grades = student.grades.concat(grades)
return student
}

console.log(addGrades(student, newGrades));


// another way to solve this is with the .push() method. In class, a For loop was used to demonstrate this.
function addGrades1(student, newGrades) {
    for(let i = 0; i < newGrades.length; i++) {
student.grades.push(newGrades[i])
    }
    return student
}

console.log(addGrades1(student, newGrades))

// Here's me attempting to use the .push() method without a FOR LOOP. I was able to make this work pushing only one new grade, but when i tried it with three, an array was pushed into the grades array. Any way to overcome this without the FOR LOOP?
function addGrades2(student, newGrades) {
student.grades.push(newGrades)
return student
}

newGrades1 = 91

console.log(addGrades2(student, newGrades1))

////////////////////////////////////////////////////////




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
