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
    // console.log('value', element);
    let newNode = {
      value: element,
      next: null
    }
    if(!head) {
      head = newNode,
      tail = newNode
    } else {
      // console.log('tail next', head.next)
      tail.next = newNode;
      tail = newNode;
      // console.log('tail next2', head.next)
    }
    return tail;
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
          return false;
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
    // console.log('number', number)
    
    let nodeToRemove = get(number);
    // console.log('nodeToRemove', nodeToRemove);
    let previousNode = get(number-1);
    let newNode = get(number+1);
    console.log('newNode', newNode);
    if(number < 0 || nodeToRemove === false) {
      return false;
    }
    else if(number === 0) { //how did you know to start a case for just 0?  
      head = newNode;
      nodeToRemove.next = null;
    } else {
      if(nodeToRemove.next === null) {
        previousNode.next = null;
        tail = previousNode;
      } else {
        previousNode.next = newNode;
      }
    }
  }


  const insert = (value, number) => {
    let tarNode = get(number);
    let preNode = get(index - 1);
    let myNode = {
      value: value,
      next: null
    };
    if (!tarNode) {
      return false;
    } else if (!preNode) {
      myNode.next = head;
      head = myNode;
    } else {
      myNode.next = tarNode;
      preNode.next = myNode;
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
