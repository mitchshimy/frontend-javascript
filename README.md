# 0x04-TypeScript

This repository contains a series of TypeScript exercises covering interfaces, classes, advanced types, ambient modules, namespaces, and nominal typing.

---

## 📁 [task_0](./task_0)

### ✅ Creating an interface for a student

- Defined an interface `Student` with `firstName`, `lastName`, `age`, and `location`.
- Created two student objects and rendered their information in an HTML table using vanilla JS.
- Ensured type safety using TypeScript.

#### Files:
- `js/main.ts`
- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

---

## 📁 [task_1](./task_1)

### ✅ Let's build a Teacher interface

- Defined a `Teacher` interface with required and optional properties.
- Allowed dynamic additional properties using an index signature.
- Extended it to define a `Directors` interface with a `numberOfReports` field.

### ✅ Printing teachers

- Defined and implemented a `printTeacher` function that formats names.
- Created an interface `printTeacherFunction` for the function.

### ✅ Writing a class

- Implemented `StudentClass` class with `workOnHomework()` and `displayName()` methods.
- Described constructor and class structure using interfaces.

#### Files:
- `js/main.ts`
- `webpack.config.js`
- `tsconfig.json`
- `package.json`

---

## 📁 [task_2](./task_2)

### ✅ Advanced types Part 1

- Defined `DirectorInterface` and `TeacherInterface` with specific methods.
- Implemented `Director` and `Teacher` classes.
- Created `createEmployee` function to return a class instance based on salary.

### ✅ Creating functions specific to employees

- `isDirector` type predicate function.
- `executeWork` function dynamically calls methods based on employee type.

### ✅ String literal types

- Defined a literal type `Subjects` with values `"Math"` or `"History"`.
- Created `teachClass()` function returning appropriate strings.

#### Files:
- `js/main.ts`
- `webpack.config.js`
- `tsconfig.json`
- `package.json`

---

## 📁 [task_3](./task_3)

### ✅ Ambient Namespaces

- Defined `RowID` and `RowElement` types in `interface.ts`.
- Declared types for a 3rd-party CRUD library in `crud.d.ts`.
- Used these declarations in `main.ts` to perform insert, update, and delete operations with type safety.

#### Files:
- `js/main.ts`
- `js/interface.ts`
- `js/crud.d.ts`
- `webpack.config.js`
- `tsconfig.json`
- `package.json`

---

## 📁 [task_4](./task_4)

### ✅ Namespace & Declaration Merging

- Created a `Subjects` namespace with a `Teacher` interface and `Subject` class.
- Extended the `Teacher` interface using declaration merging for Cpp, Java, and React.
- Implemented specific classes for each subject with custom behavior.

#### Files:
- `js/subjects/Cpp.ts`
- `js/subjects/Java.ts`
- `js/subjects/React.ts`
- `js/subjects/Subject.ts`
- `js/subjects/Teacher.ts`
- `package.json`
- `tsconfig.json`

---

## 📁 [task_4/js](./task_4/js)

### ✅ Updating main.ts

- Created and exported instances of `Cpp`, `Java`, and `React` subjects.
- Created a teacher `cTeacher` with experienceTeachingC = 10.
- Logged subject names and called class methods to display requirements and available teachers.

#### File:
- `main.ts`

---

## 📁 [task_5](./task_5)

### ✅ Brand convention & Nominal typing

- Created interfaces `MajorCredits` and `MinorCredits` with branding properties.
- Implemented `sumMajorCredits` and `sumMinorCredits` functions for safely summing credits.

#### Files:
- `js/main.ts`
- `package.json`
- `webpack.config.js`
- `tsconfig.json`

---

## 🔧 Project Setup

To build and run the tasks:

```bash
# Install dependencies (inside each task directory)
npm install

# Build project (inside each task directory)
npm run build
