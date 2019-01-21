// Please do not change the name of this function
const findPartner = (students, directions) => {
  let result = [];
  if (!Array.isArray(directions)) return result;
  let row = 0; let column = 0;

  directions.forEach(direction => {
    if (direction === 'up') {
      if (row === 0) return;
      else row -= 1;
    } else if (direction === 'down') {
      if (row === students.length - 1) return;
      else row += 1;
    } else if (direction === 'right') {
      column += 1;
      if (column >= students[row].length) column = 0;
    } else if (direction === 'left') {
      column -= 1;
      if (column < 0) column = students[row].length - 1;
    } else return;

    result.push(students[row][column]);
  });

  return result;
}

module.exports = { findPartner }

const students = [
  ['Sam', 'Harriet', 'Mitch', 'Jonny', 'JD', 'Kavita'],
  ['Amul', 'Chris', 'Mauro', 'Ruth', 'Haz', 'Joshua']
];
