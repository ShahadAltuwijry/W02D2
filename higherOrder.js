//challenge 1

const addOne = (arr) => {
  const newArr = [];
  arr.forEach(function (element) {
    newArr.push(element + 1);
  });
  return newArr;
};
addOne([1, 2, 3]); // => [2,3,4]
addOne([10, 11, 12]); // => [11,12,13]

//challenge 2

const addExclamation = (arr2) => {
  const newArr2 = [];
  arr2.forEach(function (element) {
    newArr2.push(element + "!");
  });
  return newArr2;
};

addExclamation(["one", "two", "three"]); // => ["one!","two!","three!"]

//challenge 3

const addOneByMap = (arr3) => {
  let newArr3 = arr3.map(function (element) {
    return element + 1;
  });
  return newArr3;
};
addOneByMap([1, 2, 3]); // => [2,3,4]
addOneByMap([10, 11, 12]); // => [11,12,13]

//challenge 4

const addQuestion = (arr4) => {
  let newArr4 = arr4.map(function (element) {
    return element + "?";
  });
  return newArr4;
};

addQuestion(["one", "two", "three"]); // => ["one?","two?","three?"]

// challenge 5

const forLoopTwoToThe = (arr5) => {
  const newArr5 = arr5.map((element5) => {
    return 2 ** element5;
  });
  return newArr5;
};

forLoopTwoToThe([1, 2, 3]); // => [2,4,8]

// challenge 6

const typeNum = (arr6) => {
  const newArr6 = arr6.filter((item) => {
    return typeof item === "number";
  });
  return newArr6;
};

typeNum([1, "bob", 3]); // => [1,3]

// challenge 7

const containsAnd = (arr7) => {
  const newArr7 = arr7.filter((item) => {
    return item.includes("and");
  });
  return newArr7;
};

containsAnd(["panda", "ran", "and"]); // => ['panda', 'and']

// challenge 8

const oddValues = (arr8) => {
  const newArr8 = arr8.filter((item) => {
    if (item % 2 != 0) {
      return item;
    }
  });
  return newArr8;
};

oddValues([1, 2, 3]); // => [1,3]

// challenge 9

const addValues = (arr9) => {
  const newArr9 = arr9.reduce((acc, item) => {
    acc += item;
    return acc;
  });
  return newArr9;
};

addValues([1, 2, 3, 4]); // => 10
addValues([15, 10, 15, 5]); // => 45

// challenge 10

const countNumberOfElements = (arr10) => {
  const newArr10 = arr10.reduce((acc, item, index) => {
    acc === index++;
    return acc;
  }, 0);
  return newArr10;
};

addValues([1, 2, 3, 4]); // => 4
