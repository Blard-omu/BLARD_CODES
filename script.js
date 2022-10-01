let arr = ["Blard", "is", "a", "programmer"];
console.log(arr); //["Blard", "is", "a", "programmer"]

arr.splice(1, 2);
console.log(arr); //["Blard", "programmer"]

let Arr = ["I", "am", "eating", "right", "now"];
Arr.splice(2, 1, "learning", "javascript", "and", "react");
console.log(Arr);

Arr.splice(3, 0, "advance");
console.log(Arr);
