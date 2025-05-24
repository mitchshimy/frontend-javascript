import Cpp from './subjects/Cpp';
import Java from './subjects/Java';
import React from './subjects/React';
export var cpp = new Cpp();
export var java = new Java();
export var react = new React();
export var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map