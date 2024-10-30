// fibonacci.js
function fibonacci(n) {
    if (n < 0) return []; // Tidak ada deret Fibonacci untuk bilangan negatif
    const sequence = [0]; // Memulai deret dengan 0
    if (n === 0) return sequence; // Jika n adalah 0, kembalikan [0]

    sequence.push(1); // Menambahkan elemen pertama deret Fibonacci
    for (let i = 2; i <= n; i++) {
        const nextValue = sequence[i - 1] + sequence[i - 2]; // Menghitung nilai berikutnya
        sequence.push(nextValue);
    }
    return sequence; // Mengembalikan deret Fibonacci
}

export default fibonacci;