export default {
  exchange(array: number[], a: number, b: number): void {
    const temp: number = array[a];
    array[a] = array[b];
    array[b] = temp;
  }
}