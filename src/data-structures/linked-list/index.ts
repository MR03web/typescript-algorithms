import LinkedListNode from "./LinkedListNode";

export default class LinkedList<T> {
  private head: LinkedListNode<T> | null;
  private tail: LinkedListNode<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // 开头插入
  public prepend(value: T) {
    // Make new node to be a head.
    const newNode: LinkedListNode<T> = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }
  public append(value: T) {
    const newNode: LinkedListNode<T> = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.tail) {
      this.tail.setNext(newNode);
    } 
    this.tail = newNode;
  }
}
