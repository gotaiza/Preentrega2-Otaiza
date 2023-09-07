// Programa para cargar alumnos

class Alumnos {
  constructor(fullName, dni, age, grade) {
    this.fullName = fullName;
    this.dni = dni;
    this.age = age;
    this.grade = grade;
  }
}

// Función para capitalizar palabras
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.substring(1);
}

// Función para validar DNI
function validateDNI() {
  let dni = prompt(`Por favor ingrese el DNI sin puntos:`);
  while (dni.length !== 8) {
    dni = prompt(`DNI incorrecto, por favor vuelva a ingresarlo:`);
  }
  return dni;
}

// Función para validar edad
function validateAge() {
  let age = prompt(`Por favor ingrese la edad:`);
  while (isNaN(age)) {
    age = prompt(`Error. Ingrese su edad en números por favor:`);
  }
  return age;
}

// Función para validar grado
function validateGrade() {
  const grades = [`1ro`, `2do`, `3ro`, `4to`, `5to`, `6to`];
  let selectedGrade = prompt(
    `Por favor ingrese el año que va a cursar:\n1ro\n2do\n3ro\n4to\n5to\n6to`);
  while (!grades.includes(selectedGrade)) {
    selectedGrade = prompt(
      `Opción incorrecta. Por favor elija una del listado:\n1ro\n2do\n3ro\n4to\n5to\n6to`);
  }
  return selectedGrade;
}

// Función principal para cargar alumnos
function addStudent() {
  const numAlumnos = parseInt(
    prompt("Ingrese el número de alumnos que desea agregar:")
  );
  const alumnos = [];

  for (let i = 0; i < numAlumnos; i++) {
    
    const fullName = prompt(
      `Por favor ingrese el nombre completo del alumno ${[i + 1]}:`);
    const capitalizedFullName = fullName
      .split(" ")
      .map(capitalizeWord)
      .join(" ");
    const dni = validateDNI();
    const age = validateAge();
    const selectedGrade = validateGrade();

    alumnos.push(
      new Alumnos(capitalizedFullName, dni, age, selectedGrade)
    );

    if (i === numAlumnos - 1) {
      alert(`¡Carga de alumnos finalizada!`);
    } else {
      alert(`Alumno ${i + 1}/${numAlumnos} cargado. Siguiente alumno.`);
    }
  }

  return alumnos;
}

const alumnos = addStudent();

for (let i = 0; i < alumnos.length; i++) {
  const alumno = alumnos[i];
  alert(`${alumno.fullName} ingresado correctamente, estos son sus datos:\nDNI: ${alumno.dni}\nEdad: ${alumno.age}\nIngresa a: ${alumno.grade}`);
  console.log(alumno);
}
