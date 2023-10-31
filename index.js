// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
const updateEmployeeWithKeyAndValue = {...employee};
updateEmployeeWithKeyAndValue[key] = value;
return updateEmployeeWithKeyAndValue;
}   
let employee = {
    name: "Quilliam Shakespeare",
    streetAddress: "1234 Main St"
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };

    if (key in updatedEmployee) {
        delete updatedEmployee[key];
    }
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    if (key in employee) {
        delete employee[key];
    }
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, streetAddress);
