//////////////Student Management System///////////////
import inquirer from "inquirer";
import chalk from "chalk";
class Course {
    courseName;
    constructor(courseName) {
        this.courseName = courseName;
    }
}
class Student {
    studentId;
    sName;
    fName;
    age;
    grade;
    courses = [];
    constructor(studentId, sName, fName, age, grade) {
        this.studentId = studentId;
        this.sName = sName;
        this.fName = fName;
        this.age = age;
        this.grade = grade;
    }
    enroll(course) {
        this.courses.push(course);
    }
    displayInfo() {
        console.log(chalk.blue(`Student ID: ${this.studentId}`));
        console.log(chalk.blue(`Name: ${this.sName} ${this.fName}`));
        console.log(chalk.blue(`Age: ${this.age}`));
        console.log(chalk.blue(`Grade: ${this.grade}`));
        console.log(chalk.red("Enrolled Courses:"));
        this.courses.forEach((course) => {
            console.log(chalk.cyanBright(`  - ${course.courseName}`));
        });
    }
}
class studentsData {
    students = [];
    foundStudent;
    constructor(Data) {
        this.students.push(Data);
    }
    find(name) {
        this.foundStudent = undefined;
        if (name) {
            this.foundStudent = this.students.find((student) => student.sName.toLowerCase() ||
                student.fName.toLowerCase() === name.toLowerCase());
        }
        return this.foundStudent;
    }
    displaydetail(name) {
        let show = this.find(name);
        if (show) {
            show.displayInfo();
        }
        else {
            console.log(chalk.red.italic("Student is not found"));
        }
    }
}
let question = [
    {
        name: "id",
        type: "input",
        message: "Enter the id of student",
        validate: function (input) {
            if (input !== "") {
                return true;
            }
            return " Please enter a Student's ID.";
        },
    },
    {
        name: "name",
        type: "input",
        message: "Enter the Student's name",
        validate: function (input) {
            if (input !== "") {
                return true;
            }
            return " Please enter a name.";
        },
    },
    {
        name: "fName",
        type: "input",
        message: "Enter the Student's Father name",
    },
    {
        name: "age",
        type: "input",
        message: "Enter the Student's age",
        validate: function (input) {
            if (input !== "") {
                return true;
            }
            return " Please enter age.";
        },
    },
    {
        name: "grade",
        type: "input",
        message: "Enter the grade of student",
        validate: function (input) {
            if (input !== "") {
                return true;
            }
            return " Please enter grade.";
        },
    },
];
while (true) {
    let ans = await inquirer.prompt(question);
    let student = new Student(ans.id, ans.name, ans.fName, ans.age, ans.grade);
    while (true) {
        let coursesData = await inquirer.prompt([
            {
                name: "cour",
                type: "input",
                message: "Enter the course",
                validate: function (input) {
                    if (input !== "") {
                        return true;
                    }
                    return " Please enter a course.";
                },
            },
            {
                name: "confirm",
                type: "list",
                message: "Do you want to add more courses?",
                choices: ["YES", "NO"],
            },
        ]);
        const course = new Course(coursesData.cour);
        student.enroll(course);
        if (coursesData.confirm === "NO") {
            break;
        }
    }
    student.displayInfo();
    const studentBio = new studentsData(student);
    let confirms = await inquirer.prompt({
        name: "confir",
        type: "list",
        message: "What do you want?",
        choices: ["Add more student's detail", "To view student's detail", "Exit"],
    });
    if (confirms.confir === "Add more student's detail") {
        console.log("Add");
    }
    else if (confirms.confir === "To view student's detail") {
        await viewDetail(studentBio);
        break;
    }
    else if (confirms.confir === "Exit") {
        break;
    }
}
//To view the detail of required student
async function viewDetail(data) {
    let idOrName = await inquirer.prompt({
        name: "idName",
        type: "input",
        message: "Enter the Student's name",
    });
    data.find(idOrName.idName);
    data.displaydetail(idOrName.idName);
}
