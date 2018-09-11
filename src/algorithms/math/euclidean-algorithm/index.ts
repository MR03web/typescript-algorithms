/**
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithm(originalA: number, originalB: number): number {
  if (originalB === 0) {
    return originalA;
  }
  return euclideanAlgorithm(originalB, originalA % originalB);
}