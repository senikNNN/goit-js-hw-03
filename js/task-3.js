function filterArray(numbers, value) {
  // Створюємо порожній масив для підходящих чисел
  const filteredNumbers = [];

  // Ітеруємо кожен елемент масиву
  for (let number of numbers) {
    // Перевіряємо, чи число більше за value
    if (number > value) {
      // Додаємо число до нового масиву
      filteredNumbers.push(number);
    }
  }

  // Повертаємо новий масив
  return filteredNumbers;
}

// Тестові виклики для перевірки
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
