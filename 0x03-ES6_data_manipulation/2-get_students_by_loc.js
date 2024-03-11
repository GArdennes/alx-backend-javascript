export default function getListStudentsByLocation(students, city) {
  const filteredStudents = students.filter((student) => student.location === city);
  return filteredStudents;
}
