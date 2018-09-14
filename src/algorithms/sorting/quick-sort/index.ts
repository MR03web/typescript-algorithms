import comparator from "../../../utils/comparator";

/**
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export default function quickSort(originalArray: number[]): number[] {
  const array: number[] = [...originalArray];
  if (array.length <= 1) {
    return array;
  }

  const leftArray: number[] = [];
  const rightArray: number[] = [];

  const pivotElement: number | undefined = array.shift();
  const centerArray: number[] = pivotElement ? [pivotElement] : [];

  while (array.length) {
    const currentElement: number | undefined = array.shift();
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
  const leftArraySorted: number[] = quickSort(leftArray);
  const rightArraySorted: number[] = quickSort(rightArray);

  return leftArraySorted.concat(centerArray, rightArraySorted);;
}
