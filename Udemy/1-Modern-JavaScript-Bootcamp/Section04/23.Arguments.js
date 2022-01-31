let calcTip = function (total, tipPer = 0.2) {
  return total * tipPer;
};

let tip = calcTip(100, 0.1);
console.log(tip);
