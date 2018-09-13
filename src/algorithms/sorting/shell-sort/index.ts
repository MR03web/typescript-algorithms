import comparator from "../../../utils/comparator";
import arrayUtils from "../../../utils/arrayUtils";

/**
 * @param {number[]} originalArray
 * @returns {number[]}
 */
export default function shellSort(originalArray: number[]): number[] {
  const array: number[] = [...originalArray];
  const length: number = array.length;

  let gap = Math.floor(length / 2);
  while (gap > 0) {
    for (let i = 0; i < length - gap; i++) {
      let currentIndex = i;
      let gapShiftedIndex = i + gap;

      while (currentIndex >= 0) {
        if (comparator.lessThan(array[gapShiftedIndex], array[currentIndex])) {
          arrayUtils.exchange(array, gapShiftedIndex, currentIndex);
        }
        gapShiftedIndex = currentIndex;
        currentIndex -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return array;
}
