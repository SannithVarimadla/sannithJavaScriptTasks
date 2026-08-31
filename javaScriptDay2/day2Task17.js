//  Task 17 — Mini Student Profile
// Create a student profile using:
// Variables
// Name
// Age
// City
// College
// Array
// Store 5 favorite subjects.
// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent
// Then print:
// Student name
// Student age
// City
// First subject
// Last subject
// Total subjects
// Complete object

//====================================TASK-17==================================
    
var Name="sannith";
let Age=24;
let City="hyderabad";
const College="jntuh";
var Subjects=["Tamil","Telugu","English","Hindi","Maths"];



let student = {
            name:"varimadla",
            age:22,
            city:"TamilNadu",
            sub:["Maths","Tamil","Telugu","English","Hindi",],
            isStudent:true
              }

//--------printing from variables----------
        document.writeln("data from variables");

        document.writeln("student name from variable    :"+Name +"<br>");
        document.writeln("student Age from variable     :"+Age +"<br>");
        document.writeln("student City from variable    :"+City +"<br>");
        document.writeln("student College from variable :"+College +"<br>");
        document.writeln("student First subject         :"+Subjects[0] +"<br>");
        document.writeln("student Last subject          :"+Subjects[Subjects.length-1] +"<br>");
        document.writeln("Total subjects                : "+Subjects.length);

        document.writeln("<hr>");

        document.writeln("data from student object");

        document.writeln("<hr>");


        document.writeln("student name from student object          :"+ student.name+"<br>");
        document.writeln("student Age from student object           :"+student.age +"<br>");
        document.writeln("student City from student object          :"+student.city +"<br>");
        document.writeln("student First subject from student object :"+student.sub[0]+"<br>");
        document.writeln("student Last subject from student object  :"+student.sub[student.sub.length-1] +"<br>");
        document.writeln("Total subjects                            : "+student.sub.length);
        console.log(student);






