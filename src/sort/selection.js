import { arrayRandom } from './utils/randomArray.js';

const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    let minimum = element;

    let tempSwap = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < minimum) {
        minimum = array[j];
        tempSwap = j;
      }
    }

    array[i] = minimum;
    array[tempSwap] = element;
  }
  return array;
};

arrayRandom(5, 99).then((array) => {
  console.time('Selection');
  const sortedArray = selectionSort(array);
  console.log(sortedArray);
  console.timeEnd('Selection');
});
