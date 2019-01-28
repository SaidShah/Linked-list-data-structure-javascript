class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }

  insert(data){
    let node = new Node(data)
    if(this.head === null){
      this.head = node
      this.size++
    }else{
      let currentNode = this.head
      while(currentNode.next !== null){
        currentNode = currentNode.next
      }
      currentNode.next = node
      this.size++
    }
  }

  remove(data){
    if(this.head == null){
      return -1
    }
    let currentNode = this.head
    let previousNode = null
    while(currentNode !== null){
      if(currentNode.data === data){
        if(previousNode === null){
          this.head = currentNode.next
        }else{
          previousNode.next = currentNode.next
        }
        this.size--
        return currentNode.data
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }
    return -1
  }

  printList(){
    let currentNode = this.head
    while(currentNode !== null){
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
  }
  getRoot(){
    if(this.head !== null){
      console.log(this.head.data)
    }
  }

  getSize(){
    if(this.size > 0){
      console.log(this.size)
    }
  }


}

let list = new LinkedList()
list.insert("first node")
list.insert("second node")
list.insert("third node")
list.printList()
console.log("---------------------------------")
console.log("now remove the second node ")
list.remove("second node")
list.printList()
console.log("---------------------------------")
console.log("now get the root node ")
list.getRoot()
console.log("---------------------------------")
console.log("now get the size of the list ")
list.getSize()
