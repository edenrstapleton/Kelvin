//Kelvin variable 
const kelvin = 293; 

//Celcius calculation and by extension the variable
let celcius = kelvin - 273; 

//Fahrenheit calculation and again the variable
let fahrenheit = celcius*(9/5)+32; 
//Math floor the variable so it returns without multiple decimal points
fahrenheit = Math.floor(fahrenheit); 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Newton calculation and subsequent variable 
let newton = celcius * (33/100);
//Math floor newton 
newton = Math.floor(newton);

console.log(`The temperature is ${newton} newtonian degrees.`);
