// factorial.js
function factorial(n) {
    if (n < 0) return undefined; // Tidak ada faktorial untuk bilangan negatif
    if (n === 0 || n === 1) return 1; // Basis untuk faktorial
    return n * factorial(n - 1); // Rekursi
}

export default factorial;