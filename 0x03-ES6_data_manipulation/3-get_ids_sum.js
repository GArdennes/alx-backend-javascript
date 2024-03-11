export default function getListStudentsSum(students) {
  const sumOfIds = students.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumOfIds;
}
