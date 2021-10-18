// challenge 1

const checkValues = (obj, value) => {
  if (Object.values(obj).includes(value)) {
    return true;
  }
  return false;
};

checkValues({ name: "ahmed", age: 15 }, 15); // => true
checkValues({ name: "ahmed", age: 15 }, 20); // => false

// challenge 2

const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  console.log(Object.keys(obj));
};

getCourseKeys(courseInfo); // => ['name', 'duration', 'topics', 'finalExam']

//-------------------------------------------------------------

//challenge 3
const phoneInfo = {
  GraceHopper: "222-303-5938",
  AdaLovelace: "222-349-9842",
  AlanTuring: "222-853-5933",
};

//HR has asked you to change the data to make it easier to print so that it looks like this:

// [
//   'Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'
// ]

const updateNumbers = (obj3) => {
  let arr3 = [];
  for (const key in obj3) {
    arr3.push(obj3.key, obj3.value);
  }

  return arr3;
};

updateNumbers(phoneInfo);

//challenge 4

// const PassedOrFailed = function (studentGrades) {
//     let res;
//     if
//     }

// };

// const studentOne = {
//   math: { grade: 70, total: 120 },
//   english: { grade: 80, total: 100 },
//   art: { grade: 90, total: 100 }
// };

// const studentTwo = {
//   math: { grade: 59, total: 120 },
//   english: { grade: 80, total: 100 },
//   art: { grade: 90, total: 100 }
// };

// PassedOrFailed(studentOne); // =>  "The student have passed"
// PassedOrFailed(studentTwo); // =>  "The student have failed"

//challenge 5

const totalCharacters = (arr5) => {
  const newArr5 = arr5.reduce((acc, item, index) => {
    for (let index = 0; index < arr5.length; index++) {}
    acc += item.length;
    return acc;
  }, 0);
  return newArr5;
};

totalCharacters(["abc", "yz"]); // => 5

//challenge 6

// const houseSize = (arr6) => {
//   const sizes = arr6.
// };

// houseSize(["Stark", 7, "Arryn", 3]); //[{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }]
