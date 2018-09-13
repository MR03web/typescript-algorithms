import comparator from "../../../utils/comparator";
import arrayUtils from "../../../utils/arrayUtils";

/**
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export default function insertionSort(originalArray: number[]): number[] {
  const array: number[] = [...originalArray];
  const length: number = array.length;
  
  for (let i = 1; i < length; i++) {
    let currentIndex = i; // 已经排序的索引
    while (
      array[currentIndex - 1] !== undefined &&
      comparator.lessThan(array[currentIndex], array[currentIndex - 1])
    ) {
      arrayUtils.exchange(array, currentIndex - 1, currentIndex);
      currentIndex -= 1;
    }
  }
  return array;
}
