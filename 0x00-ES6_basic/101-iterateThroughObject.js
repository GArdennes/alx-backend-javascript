export default function iterateThroughObject(reportWithIterator) {
  const employeeList = [];
  for (const name of reportWithIterator) {
    employeeList.push(name);
  }

  return employeeList.join(' | ');
}
