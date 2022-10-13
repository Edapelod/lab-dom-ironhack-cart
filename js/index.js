// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceText = Number(price.innerText);
  const quantityValue = Number(quantity.value)
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = (priceText * quantityValue);
  return (priceText * quantityValue)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  const allProducts = document.querySelectorAll('.product').forEach((product) => updateSubtotal(product));
  
  /*for (index = 0; index > allProducts.length; i++) {
    updateSubtotal(allProducts)
    total.push(allProducts[i])
    return total
    */
  const allSubtotals = document.querySelectorAll('.subtotal span')
  const sum = allSubtotals.forEach((a,b) => Number(a.innerText) + Number(b.innerText), 0)
  total = document.querySelector('.#total-value span')
  total.innerText = sum
  return sum
  
  }

  // ITERATION 3
  


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
