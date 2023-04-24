let varA = 'A';// receber o valor de varB
let varB = 'B';// receber o valor de varC
let varC = 'C';// receber o valor de varA

const varATemp = varA; 
varA = varB;
varB = varC;
varC = varATemp;


console.log(varA, varB, varC);