import { Teacher } from './Teacher';

export default class Subject {
  protected teacher: Teacher;

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
