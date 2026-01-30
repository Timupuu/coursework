// Increment the product counter
function incrementCounter(btn) {
  const valueElem = btn.parentElement.querySelector('.counter-value');
  let value = parseInt(valueElem.textContent, 10);
  if (value < 5) {
  valueElem.textContent = value + 1;
  }
}

// Decrement the product counter, minimum value is 1
function decrementCounter(btn) {
  const valueElem = btn.parentElement.querySelector('.counter-value');
  let value = parseInt(valueElem.textContent, 10);
  if (value > 1) {
    valueElem.textContent = value - 1;
  }
}

