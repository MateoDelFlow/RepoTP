// Ejemplo de buenas prácticas y errores en JavaScript

// 1. Función con una buena práctica: Uso de "let" en lugar de "var", y nombrado adecuado de variables.
function calculateSum(a, b) {
    let total = a + b;
    return total;
}

// 2. Código duplicado - Mala práctica que SonarQube detectará
function sumOfArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function sumOfArrayDuplicate(arr) { // Duplicación de la función anterior
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// 3. Comentarios incompletos - SonarQube puede detectar falta de documentación adecuada
/**
 * Esta función resta dos números, pero falta una descripción adecuada.
 */
function subtractNumbers(a, b) {
    return a - b;
}

// 4. Código no utilizado - Mala práctica que SonarQube detectará
let unusedVariable = 42;

// 5. Función mal formateada - SonarQube puede sugerir formatear adecuadamente el código
function poorlyFormattedFunction(a,b){return a*b;}

// 6. Falta de manejo de errores - Mala práctica
function divideNumbers(a, b) {
    return a / b; // No se maneja el caso cuando b es 0
}

// 7. Buenas prácticas de manejo de errores y validación de parámetros
function safeDivide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

// 8. Uso correcto de funciones de flecha y constantes
const multiplyNumbers = (a, b) => a * b;
