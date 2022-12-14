class Node<T> {
  data: T
  next?: Node<T>

  constructor (data: T, next?: Node<T>) {
    this.data = data
    this.next = next
  }
}

export class SinglyLinkedList<T> {
  private head?: Node<T>
  private _size: number

  constructor () {
    this.head = undefined
    this._size = 0
  }

  push_front (value: T) {
    const node = new Node(value, this.head)
    this.head = node
    this._size++
  }

  push_back (value: T) {
    let node = this.head

    if (node == null) {
      this.head = new Node(value)
      this._size++
      return
    }

    while (node != null) {
      if (node.next == null) {
        node.next = new Node(value)
        this._size++
        break
      }

      node = node.next
    }
  }

  pop_front () {
    const node = this.head?.next
    this.head = node
    this._size--
  }

  pop_back () {
    let node = this.head
    
    if (node == null) {
      return
    }

    let prev = node

    while (node.next != null) {
      prev = node
      node = node?.next
    }

    prev.next = undefined
    node = undefined
    this._size--
  }

  size () {
    return this._size
  }

  equals (listToCompare: SinglyLinkedList<T>) {
    if (this._size !== listToCompare._size) {
      return false
    }

    return this.toString() === listToCompare.toString()
  }

  toString () {
    let node = this.head

    let result = '['
    while (node != null) {
      result += `${node.data}${node.next != null ? ', ' : ''}`
      
      node = node.next
    }
    result += ']'

    return result
  }

  toArray () {
    let node = this.head

    let result: T[] = []

    while (node != null) {
      result.push(node.data) 
      node = node.next
    }

    return result
  }

  private *[Symbol.iterator]() {
    let node = this.head

    while (node != null) {
      yield node.data
      node = node.next
    }
  }
}