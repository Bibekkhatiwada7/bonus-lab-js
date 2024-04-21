document.addEventListener('DOMContentLoaded', function() {
    const numbers = [1, 2, 3, 4, 5];
    const numberList = document.getElementById('number-list');
  
    numbers.forEach(function(number) {
      const listItem = document.createElement('li');
      listItem.textContent = number;
      numberList.appendChild(listItem);
    });
  });
  