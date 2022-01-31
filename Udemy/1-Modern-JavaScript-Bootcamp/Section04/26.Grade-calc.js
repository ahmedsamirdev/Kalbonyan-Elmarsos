let gradeCalc = function (studentScore, totalPossibleScore) {
  let result = (studentScore / totalPossibleScore) * 100;
  let letterGrade = "";
  if (result >= 90) {
    letterGrade = "A";
  } else if (result >= 80) {
    letterGrade = "B";
  } else if (result >= 70) {
    letterGrade = "C";
  } else if (result >= 60) {
    letterGrade = "D";
  } else letterGrade = "F";
  return `you got ${letterGrade} for ${result}% `;
};

console.log(gradeCalc(14, 20));
