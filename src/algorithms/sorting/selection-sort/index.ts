import comparator from "../../../utils/comparator";
import arrayUtils from "../../../utils/arrayUtils";

/**
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export default function selectionSort(originalArray: number[]): number[] {
  const array: number[] = [...originalArray];
  const length: number = array.length;

  for (let i = 0; i < length; i++) {
    let minIndex = i; // 临时最小值索引
    for (let index = i + 1; index < length; index++) {
      if (comparator.lessThan(array[index], array[minIndex])) {
        minIndex = index;
      }
    }
    if (minIndex !== i) {
      arrayUtils.exchange(array, i, minIndex);
    }
  }
  return array;
}
