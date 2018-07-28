/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  
  let tail = null;
  let head = null;

  const getHead = () => {
    return head;
  }
  
  const getTail = () => {
    return tail;
  }
  
  const add = function(element) {
    console.log('head', head)
    console.log('tail', tail)
    // console.log('value', element);
    let newNode = {
      value: element,
      next: null
    };
    if(!head) { //if there's no head, then there are no nodes, set both head and tail to newly created node
      head = newNode,
      tail = newNode
    } else { //if there is a head that exists:
      tail.next = newNode; //take tail(newNode).next and set it to the newly created node so it connects and adds onto list
      tail = newNode; //sets the tail to the newly linked node
    }
    return tail; //why returning tail? Think it's just for the test.
  }
  
const get = function (number) {
    if(number < 0 || !head) {
      return false;
    }
    else if (number === 0) {
      return head;
    }
    else {
      let targetNode = head;
      for (let i = 0; i < number; i++) {
        if(targetNode.next === null) { 
          return false; //doesn't this break out of the get() completely? It won't return targetNode?
        }
        targetNode = targetNode.next;
      }
      return targetNode;
    }
  }
  
  //   remove = index => { //baseem's
  //   let previousNode = get(index - 1);
  //   let targetNode = get(index);
  //   if(!targetNode) {
    //     return false;
    //   }
    //   else if(!previousNode) {
      //     head = targetNode.next;
      //   }
      //   else if(targetNode.next === null) {
        //     tail = previousNode;
        //     tail.next = null;
        //   }
        //   else {
          //     previousNode.next = targetNode.next;
          //   }
          // }
          
          
          // function remove(index) {  //May's code
          //   if(number === 0) {
            //     head = head.next
  //   }
  //   else if(number > 0 && number < length) {
  //     let currentNode = get(number);
  //     let previousNode = get(number - 1);
  //     previousNode.next = currentNode.next;
  //     if(number === length - 1) {
  //       tail = previousNode;
  //       length--;
  //     } else {
  //       return false;
  //     }
  //   }
  // }


  const remove = function (number) { //Jamie
    let currentNodeToRemove = get(number);
    let previousNode = get(number-1);
    let nextNode = get(number+1);
    if(number < 0 || currentNodeToRemove === false) { //don't need this < 0 as get already has this case
      return false;
    }
    else if(number === 0) { //if number == 0, aka if it is the head
      head = nextNode; //sets head to next node in order to uncouple/delete first node
      currentNodeToRemove.next = null; //sets the target node's next to null, thus disconnecting and deleting it
    } 
    else if(currentNodeToRemove.next === null) { //if it is the last node in the list
      previousNode.next = null; //set the previous node's next to null in order to uncouple it
      tail = previousNode; //set the tail to the previous node
    } else {
        if(currentNodeToRemove.next !== null && number !== 0) { //not sure if this if is necessary at all, just the else
          previousNode.next = nextNode; //removes currentNodeToRemove by linking the previous node with next node
        }
    }
    
    // else {
    //   if(nodeToRemove.next === null) { //if it's the last node
    //     previousNode.next = null; //uncouples previous node from last in order to delete
    //     tail = previousNode; //sets previous node to the tail, in order to make it the new last node
    //   } else {
    //     previousNode.next = newNode;
    //   }
    // }
  }


  const insert = (value, number) => {
    let targetNode = get(number);
    let previousNode = get(number - 1);
    let insertNode = {
      value: value,
      next: null
    };
    if (!targetNode) {
      return false;
    } else if (!previousNode) { //you are inserting at the head
      insertNode.next = head; //linking old head to new
      head = insertNode; //changing reference from old head to new node
    } else { //everything else because there is no tail check, since you cannot insert after tail
      insertNode.next = targetNode; //inserting insertNode right before targetNode by attaching it's .next to targetNode
      previousNode.next = insertNode; //attaching the previousNode before the inserted node by setting it's .next to insertNode
    }
  };

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  }
}