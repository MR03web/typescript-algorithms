import comparator from "../../../utils/comparator";
import arrayUtils from "../../../utils/arrayUtils";

/**
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export default function selectionSort(originalArray: number[]): number[] {
  const array: number[] = [...originalArray];
  const length: number = array.length;

  for (let y = 0; y < length; y++) {
    let minIndex = y; // 临时最小值索引
    for (let index = y + 1; index < length; index++) {
      if (comparator.lessThan(array[index], array[minIndex])) {
        minIndex = index;
      }
    }
    if (minIndex !== y) {
      arrayUtils.exchange(array, y, minIndex);
    }
  }
  return array;
}
