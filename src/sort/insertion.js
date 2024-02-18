import { arrayRandom } from './utils/randomArray.js';

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    const tempSwap = 0;

    for (let j = i; j >= 0; j--) {
      if (array[j] < element) {
        console.log(array[j]);
      }
      console.log(array);
    }
  }
};

arrayRandom(5, 99).then((array) => {
  console.time('Insertion');
  const sortedArray = insertionSort(array);
  console.log(sortedArray);
  console.timeEnd('Insertion');
});
