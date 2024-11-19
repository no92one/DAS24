// 1. Kvadraten av ett tal
function printSquare(number) {
    console.log("Kvadraten av talet är:", number * number);
}
printSquare(5); // Exempelanrop

// 2. Försäljarens lön
function calculateSalary(sales) {
    const baseSalary = 8000;
    const commission = 0.09 * sales;
    console.log("Total lön är:", baseSalary + commission);
}
calculateSalary(50000); // Exempelanrop

// 3. Omvandla timmar till minuter och sekunder
function convertHours(hours) {
    const minutes = hours * 60;
    const seconds = minutes * 60;
    console.log(`Antal timmar: ${hours}, Minuter: ${minutes}, Sekunder: ${seconds}`);
}
convertHours(3); // Exempelanrop

// 4. Summan och medelvärdet av tre tal
function calculateSumAndAverage(a, b, c) {
    const sum = a + b + c;
    const average = sum / 3;
    console.log(`Summan är: ${sum}, Medelvärdet är: ${average}`);
}
calculateSumAndAverage(3, 4, 5); // Exempelanrop

// 5. Svenska kronor till dollar och pund
function convertCurrency(sek) {
    const dollarRate = 6;
    const poundRate = 10;
    const dollars = sek / dollarRate;
    const pounds = sek / poundRate;
    console.log(`${sek} SEK är ${dollars.toFixed(2)} USD och ${pounds.toFixed(2)} GBP.`);
}
convertCurrency(100); // Exempelanrop

// 6. Beräkna ax^3 + 7
function calculateExpression(a, x) {
    const result = a * Math.pow(x, 3) + 7;
    console.log("Resultatet är:", result);
}
calculateExpression(2, 3); // Exempelanrop

// 7. Pris för bensin
function calculateFuelCost(liters, pricePerLiter, discountPercent) {
    const totalCost = liters * pricePerLiter;
    const discount = (discountPercent / 100) * totalCost;
    const finalCost = totalCost - discount;
    console.log("Priset du ska betala är:", finalCost.toFixed(2));
}
calculateFuelCost(50, 20, 10); // Exempelanrop

// 8. Arean och omkretsen av en rektangel
function calculateRectangle(width, height) {
    const area = width * height;
    const perimeter = 2 * (width + height);
    console.log(`Arean är: ${area}, Omkretsen är: ${perimeter}`);
}
calculateRectangle(5, 10); // Exempelanrop

// 9. Cirkelns diameter, omkrets och area
function calculateCircle(radius) {
    const pi = 3.14;
    const diameter = 2 * radius;
    const circumference = 2 * pi * radius;
    const area = pi * Math.pow(radius, 2);
    console.log(`Radie: ${radius}, Diameter: ${diameter}, Omkrets: ${circumference.toFixed(2)}, Area: ${area.toFixed(2)}`);
}
calculateCircle(7); // Exempelanrop

// 10. Fahrenheit till Celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (5 / 9) * (fahrenheit - 32);
    console.log(`${fahrenheit}°F motsvarar ${celsius.toFixed(2)}°C.`);
}
fahrenheitToCelsius(100); // Exempelanrop

