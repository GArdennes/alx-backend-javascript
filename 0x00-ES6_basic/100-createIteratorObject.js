export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeList = [];
  for (const name of Object.keys(allEmployees)) {
    employeeList.push(...allEmployees[name]);
  }
  return Array.from(employeeList);
}
