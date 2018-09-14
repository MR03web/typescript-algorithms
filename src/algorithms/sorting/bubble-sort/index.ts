import comparator from "../../../utils/comparator";
import arrayUtils from "../../../utils/arrayUtils";
/**
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export default function bubbleSort(originalArray: number[]): number[] {
  const array: number[] = [...originalArray];
  const length: number = array.length;

  let swapped = false;
  for (let i = 1; i < length; i++) {
    swapped = false;
    for (let y = 0; y < length - i; y++) {
      if (comparator.greaterThan(array[y], array[y + 1])) {
        arrayUtils.exchange(array, y, y + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  
  return array;
}
