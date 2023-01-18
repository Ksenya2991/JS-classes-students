class Student {
    name = 'some name';
    age = 0;
    faculty = 'none';

    constructor(name, age, faculty){
        this.name = name;
        this.age = age;
        this.faculty = faculty;
    }
}

class MedicalStudent extends Student{

    specialization = 'none';

    constructor(name, age, faculty, specialization){
        super(name, age, faculty)
        this.specialization = specialization;
    };

    displayInfo(){
        return `${this.name} is a ${this.age} years old ${this.faculty} student specializing in ${this.specialization}.`
    };

}

class JournalistStudent extends MedicalStudent{
    constructor(){
        super('Anna', 20, 'Journalism', 'International Journalism')
    };
}

class TechnologyStudent extends MedicalStudent{
    constructor(){
        super('David', 25, 'Information Technology', 'Computer Science')
    };
}

const sudentOne = new MedicalStudent('Alex', 23, 'Medical', 'Dentistry');
const studentTwo = new JournalistStudent();
const studentThree = new TechnologyStudent();

console.group('Students');
console.log(sudentOne.displayInfo());
console.log(studentTwo.displayInfo());
console.log(studentThree.displayInfo());
console.groupEnd();