function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createList(arr = []) {
  const preparedArr = [...arr];
  const val = preparedArr.shift();
  const linkedList = new ListNode(val);

  preparedArr.reduce((l, num) => {
    l.next = new ListNode(num);

    return l.next;
  }, linkedList);

  return linkedList;
}

function getLinkedListNumber(list) {
  let result = '';
  let currentNode = list;

  do {
    result = `${currentNode.val}${result}`;
  } while ((currentNode = currentNode.next) !== null);

  return parseInt(result, 10);
}

function sumLinkedList(l1, l2) {
  const sum = getLinkedListNumber(l1) + getLinkedListNumber(l2);
  const nodeValues = sum.toString().split('').reverse().map(num => parseInt(num));

  return createList(nodeValues);
}

console.log(sumLinkedList(
  createList([2, 4, 3]),
  createList([5, 6, 4])
));

console.log(sumLinkedList(
  createList([8, 3]),
  createList([1, 9, 2]),
));
