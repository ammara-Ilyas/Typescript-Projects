//////////////Student Management System///////////////
import inquirer from "inquirer";
import chalk from "chalk";
class Course {
  constructor(public courseName: string) {}
}

class Student {
  courses: Course[] = [];

  constructor(
    public studentId: number,
    public firstName: string,
    public lastName: string,
    public age: number,
    public grade: string
  ) {}

  enroll(course: Course) {
    this.courses.push(course);
  }

  displayInfo() {
    console.log(chalk.blue(`Student ID: ${this.studentId}`));
    console.log(chalk.blue(`Name: ${this.firstName} ${this.lastName}`));
    console.log(chalk.blue(`Age: ${this.age}`));
    console.log(chalk.blue(`Grade: ${this.grade}`));
    console.log(chalk.red("Enrolled Courses:"));
    this.courses.forEach((course) => {
      console.log(chalk.cyanBright(`  - ${course.courseName}`));
    });
  }
}

const mathCourse = new Course("Math");
const historyCourse = new Course("History");
const physicsCourse = new Course("Physics");
const computerCourse = new Course("Computer");
const scienceCourse = new Course("Science");
const economicsCourse = new Course("Economics");

const student1 = new Student(1, "John", "Doe", 18, "A");
const student2 = new Student(2, "Yahoo", "Baba", 17, "B");

student1.enroll(mathCourse);
student1.enroll(historyCourse);
student1.enroll(scienceCourse);
student2.enroll(physicsCourse);
student2.enroll(economicsCourse);
student2.enroll(computerCourse);

student1.displayInfo();
student2.displayInfo();
