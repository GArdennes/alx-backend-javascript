export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }
  const studentIds = arg.map((item) => item.id);
  return studentIds;
}
