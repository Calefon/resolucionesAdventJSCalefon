export default function missingReindeer(ids) {
  let N = ids.length;
  let sumTotal = (N*(N+1))/2;
  let sumOfArray = ids.reduce((partialSum, a) => partialSum + a, 0);

  return sumTotal-sumOfArray;
}
