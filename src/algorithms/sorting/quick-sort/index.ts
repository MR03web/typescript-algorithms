import comparator from "../../../utils/comparator";
// import arrayUtils from "../../../utils/arrayUtils";

/**
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export default function quickSort(originalArray: number[]): number[] {
  const array: number[] = [...originalArray];
  if (array.length <= 1) {
    return array;
  }

  const leftArray = [];
  const rightArray = [];

  const pivotElement = array.shift();
  const centerArray = pivotElement ? [pivotElement] : [];

  while (array.length) {
    const currentElement = array.shift();
    if (pivotElement && currentElement) {
      if (comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement);
      } else if (comparator.lessThan(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    } 

  }

  const leftArraySorted = quickSort(leftArray);
  const rightArraySorted = quickSort(rightArray);

  return leftArraySorted.concat(centerArray, rightArraySorted);;
}
