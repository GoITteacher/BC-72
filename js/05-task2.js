/**
 * Допиши функцію таким чином щоб кожна властивість
 * об'єкта product була незалежним параметром
 */

const product = {
  category: 'Electronics',
  details: {
    weight: '15.5',
    brand: 'Samsung',
    color: 'Black',
  },
  name: 'Smart TV',
  price: 25000,
};

function displayProductInfo({
  name,
  price,
  category,
  details: { brand, color, weight },
}) {
  console.log(`Назва товару: ${name}`);
  console.log(`Ціна: ${price} грн`);
  console.log(`Категорія: ${category}`);
  console.log('Деталі:');
  console.log(`- Бренд: ${brand}`);
  console.log(`- Колір: ${color}`);
  console.log(`- Вага: ${weight} кг`);
}

displayProductInfo(product);
