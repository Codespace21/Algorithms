export default async function randomArray(n, maxNum) {
  const arrayRandom = [];

  for (let index = 0; index < n; index += 1) {
    const nRandom = Math.floor(Math.random() * maxNum);
    arrayRandom.push(nRandom);
  }

  console.info(arrayRandom);
  return arrayRandom;
}
