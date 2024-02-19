import randomArray from './utils/randomArray.js';

const selectionSort = (inputArray) => {
  const array = [...inputArray];
  for (let i = 0; i < array.length - 1; i += 1) {
    const element = array[i];
    let minimum = element;

    let tempSwap = i;

    for (let j = i + 1; j < array.length; j += 1) {
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

randomArray(5, 9).then((array) => {
  console.time('Selection');
  const sortedArray = selectionSort(array);
  console.log(sortedArray);
  console.timeEnd('Selection');
});
