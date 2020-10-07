// Utilize any em apenas último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Hello World'));
console.log(showMessage(125));
