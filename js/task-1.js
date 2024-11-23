function slugify(title) {
  // Перетворення рядка на нижній регістр, розділення за пробілами та з'єднання тире
  return title.toLowerCase().split(' ').join('-');
}

// Тестові виклики для перевірки
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"