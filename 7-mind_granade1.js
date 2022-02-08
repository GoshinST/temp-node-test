const num1 = 5;
const num2 = 10;

const sum = () => {
  console.log(`the sume ${num1} + ${num2} = ${num1 + num2}  `);
};

sum();
// no se esta exportando nada y aun asi la funcion se ejecuta en el modulo detras de las cortinas
