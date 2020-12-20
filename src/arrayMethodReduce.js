'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let beginValue = null; // початкое значення для перебору масиву
    let accumulator = null;

    if (initialValue === undefined) { // якщо початкове значення не вказано
      beginValue = 1;
      accumulator = this[0]; // то акум це перший ел масиву як в описі reduce
    } else {
      beginValue = 0; // юзаємо для заміни initialValue
      // в переборі масиву через і
      accumulator = initialValue;
    }

    for (let i = beginValue; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
      // (змінна куди додаємо,поточний ел this[i], індекс поточного, масив)
      // в даному випадку масив і є this тіло функції
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
