import comparator from "../../../utils/comparator";

/**
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export default function selectionSort(originalArray: number[]): number[] {
  const array: number[] = [...originalArray];
  const length: number = array.length;

  for (let y = 0; y < length; y++) {
    // 临时最小值索引
    let minIndex = y;
    for (let index = y + 1; index < length; index++) {
      if (comparator.lessThan(array[index], array[minIndex])) {
        minIndex = index;
      }
    }
    if (minIndex !== y) {
      const temp: number = array[y];
      array[y] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}
