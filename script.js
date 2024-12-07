// Función para verificar si una cadena es un palíndromo
function esPalindromo(cadena) {
    // Eliminar espacios y convertir a minúsculas para ignorar diferencias de mayúsculas/minúsculas y espacios
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Comparar la cadena con su inversa
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

// Manejo del evento de envío del formulario
document.getElementById('palindromeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const cadena = document.getElementById('stringInput').value; // Obtener la cadena ingresada
    const resultado = esPalindromo(cadena); // Verificar si la cadena es un palíndromo

    // Mostrar el resultado en el div con id "result"
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = resultado ? `La cadena "${cadena}" es un palíndromo.` : `La cadena "${cadena}" no es un palíndromo.`;
});
