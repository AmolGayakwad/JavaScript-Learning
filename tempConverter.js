//Write a program that converts temperatures between Celsius and Fahrenheit. The user should input a temperature and the unit (C or F), and the program should output the converted temperature.

const celsius = prompt("Enter a celsius value: ");

// formula to calculate the fahrenheit
const fahrenheit = (celsius * 1.8) + 32;


console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
