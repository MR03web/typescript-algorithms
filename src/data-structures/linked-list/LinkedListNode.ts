export default class LinkedListNode<T> {
  private value: T;
  private next: LinkedListNode<T> | null;
  constructor(value: T, next: LinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
  public setNext(value: LinkedListNode<T>) {
    this.next = value;
  }
  public getNext(): LinkedListNode<T> | null {
    return this.next;
  }
  public toNodeString(): string {
    return `${this.value}`;
  }
  public toNextString(): string {
    return `${this.next}`;
  }
}
