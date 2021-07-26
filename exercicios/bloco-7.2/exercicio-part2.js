const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, key, value) => {
  obj[key] = value;

  console.log(lesson2);
}

addTurn(lesson2, 'manha', 'turno');

const listKey = obj => Object.keys(obj);

console.log(listKey(lesson1));

const showValue = obj => Object.values(obj);

console.log(showValue(lesson3));

const showLength = obj => Object.keys(obj).length;

console.log(showLength(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

const totalStudents = students => {
  let total = 0;
  const guys = Object.keys(students);
  for (index in guys) {
    
  }
  console.log(guys);
}
totalStudents(allLessons);