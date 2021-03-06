export default {
  compare(a: number, b: number): number {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  },
  equal(a: number, b: number): boolean {
    return this.compare(a, b) === 0;
  },
  lessThan(a: number, b: number): boolean {
    return this.compare(a, b) < 0;
  },
  greaterThan(a: number, b: number): boolean {
    return this.compare(a, b) > 0;
  },
  lessThanOrEqual(a: number, b: number): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  },
  greaterThanOrEqual(a: number, b: number): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }
}