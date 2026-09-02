//==================Task-1 — Variables======================================

    var Name="sannith";
    let Age =24;
    let City="Hyderabad";
    const College="jntuh";

    // Print all values.
    console.log(Name , Age , City ,College);

    // Change the var value.
    Name = "varimadla"; 

    // Change the let value.
    Age=22;

    //Try changing the const value.
    // We will get error, we cant change the const values
    //   College="Jbit";

    //Try redeclaring each variable and observe what happens.
    var Name="sunny";
    //let Age="30";      [we cant re declare let and const ,but var we can,it shows error]
    // const College="ABC";

  //============================================================ */

  /*==================Task-2 — Printing Statements====================================

    console.log("Hello Sannith"); //used to print content on console.
    alert("welcome ");  //gives a popup on the window and it allows to site or browser page only when you click ok button.
    confirm("Are you over 18?"); //it gives a popup on window and checks the condition,it has ok and cancel buttons,it we press ok it satisfies the condition.
    prompt("Enter your Name :"); //used to take the dynamic inputs from user.
    document.writeln("This text prints on browser"); // It prints the content on the browser.

 //============================================================*/

/*=========================Task-3 — User Details=============================

    var Name=prompt("Enter Your Name :");
    var Age=prompt("Enter your Age :");
    let City=prompt("Enter your city : ");
    let Qualification=prompt("Enter your Qualification : ");

    console.log("Name is:"+Name);
    console.log("Age is:"+Age);
    console.log("City is :"+City);
    console.log("Qualification is :"+Qualification);


 //============================================================*/

  //=======================Task -4 — Find Data Types=====================================

    var language="JavaScript";
    var marks=100;
    var percentage=99.5;
    var isPresent=true;
    var isFailed=false;
    var rank;
    var gracePoints=null;

    console.log(typeof(language) +"-----"+ language);
    console.log(typeof(marks) +"-----"+ marks);
    console.log(typeof(percentage) +"-----"+ percentage);
    console.log(typeof(isPresent) +"-----"+ isPresent);
    console.log(typeof(isFailed) +"-----"+ isFailed);
    console.log(typeof(rank) +"-----"+ rank);
    console.log(typeof(gracePoints) +"-----"+ gracePoints);


//============================================================*/

 //=====================Task -5 — Student Array=======================================

var StudentDetails=["Naveen","Praveen","Sannith","Ramu","bheemu"];

console.log("First student : "+StudentDetails[0]); // First student
console.log("Second student :"+StudentDetails[1]); // Second student
console.log("Last student : "+StudentDetails[StudentDetails.length-1]);// Last student
console.log("Total students : "+StudentDetails.length);// Total students

 //============================================================*/


  //====================Task-6 — Employee Object========================================

var Employee={
                name:"sannith",
                age:24,
                role:"full stack developer",
                skills:["Java","springBoot","microservices","html","css","js","sql","AWS"],
                isWorking:true,
                qualification:["10th","Inter","B-tech"],
              };

    console.log("Employee Name :"+Employee.name);
    console.log("Employee Age :"+Employee.age);
    console.log("Employee Role :"+Employee.role);
    console.log("Employee first skill :"+Employee.skills[0]);
    console.log("Employee last qualification :"+Employee.qualification[Employee.qualification.length-1]);
    console.log("Employee attendance :"+Employee.isWorking);

 //============================================================*/


//===============Task-7 — Calculator=============================================

let a=20;
let b=5;

console.log("Addition of "+a+" + "+b+" is :"+(a+b));
console.log("Subtraction of "+a+" - "+b+" is :"+(a-b));
console.log("Multiplication of "+a+" * "+b+" is :"+(a*b));
console.log("Division of "+a+" / "+b+" is :"+(a/b));
console.log("Modulus of "+a+" % "+b+" is :"+(a%b));
console.log("Exponentiation of "+a+" ** "+b+" is :"+(a**b));


 //============================================================*/

 //=============Task-8 — Shopping Bill===============================================

    var Shirt = 999;
    var Pant = 1499;
    var Shoes = 1999;
    var Bag = 799;

    console.log("Total price is :"+(Shirt+Pant+Shoes+Bag));

 //============================================================*/


 //===============Task-9 — Increment & Decrement=============================================

// A
let aa = 10;  
let bb = aa++;  //(Post increment)(use and change) aa is 10 assigned to bb(bb=10) and aa is incremented by 1(aa=11)
console.log(aa); //11
console.log(bb); //10

// B
let c = 10;
let d = ++c; //(pre incremented)(change and use)c is incremented by 1 (c=11) and assigned to d(d=11)
console.log(c); //11
console.log(d); //11

// C
let e = 10;
let f = e--; //(post decremented)(use and change)e is assigned to f(f=10) and decremented by 1(e=9)
console.log(e); //9
console.log(f); //10

// D
let g = 10;
let h = --g; //(pre decremented)(change and use)g is decremented by 1 (g=9)g and assigned to h(h=9)
console.log(g); //9
console.log(h); //9


 //============================================================*/



 //=======================Task -10=====================================

  let num = 10;

  num+=5; //(num=num+5)
  console.log(num);

  num = 10; //(always i re-initialize,bec always we get updated latest value)
  num -= 3; //(num=num-3)
  console.log(num);

  num=10;
  num *= 2;//(num=num*2)
  console.log(num);

   num=10;
   num %= 3; //(num=num%3)
 console.log(num);

  num=10;
   num /= 4; //(num=num/4)
 console.log(num);

  num=10;
  num **= 2  //(num=num**2)
 console.log(num);

  //============================================================*/


  //==============Task 11 — Find Output ==============================================

console.log(10 > 5);   
//----> true ,10 greater than 5
console.log(10 < 5);  
// ---->false  ,10 is not less than5
console.log(10 >= 10); 
//---->true  ,10 is greater and equals to 10
console.log(10 <= 9);  
//---->false  ,10 is not less and equals to 9

console.log(5 == "5");  
//--->true ,it compares the value not datatype
console.log(5 === "5"); 
//--->false , it is strictly equals , it compares the value and datatype

console.log(10 != "10"); 
//--->false ,both are equals, looselyEquals compare only the value not datatype.
console.log(10 !== "10"); 
//--->true , strictly equals ,compares the value and datatype,they are not equal.


//============================================================*/


//======================Task - 12 — AND======================================*/
    /*AND
            0  && 0 = 0
            0  && 1 = 0     if any one of condition is false the the result will be false
            1  && 0 = 0     1=true
            1  %% 1 = 1     0=false
    */



console.log(true && true);  
//--->true ,they both conditions are true then only it returns true
console.log(true && false); 
//--->false , either of the conditions or both conditions is false then the result will be false
console.log(false && true); 
//--->false , either of the conditions or both conditions is false then the result will be false
console.log(false && false); 
//---> false , either of the conditions or both conditions is false then the result will be false



//============================================================*/


//==================Task - 13 — OR==========================================
        /* OR
            0  && 0 = 0
            0  && 1 = 1    if any one or both condition is true then the result will be true
            1  && 0 = 1     1=true
            1  %% 1 = 1     0=false
        */


console.log(true || true);  
//--->true
console.log(true || false);  
//--->true
console.log(false || true);   
//--->true
console.log(false || false); 
// --->false

//============================================================*/


//=================Task-14 — NOT===========================================*/

        /* NOT
                0 = 1       false=true
                1 = 0       true = false
        */

console.log(!true);  
//--->false
console.log(!false); 
// --->true
console.log(!(5 > 10));  
//---> true  ,(5 > 10) is false ,opposit is true
console.log(!(10 > 5));  
//--->false   ,(10>5) true,opposit is false


//============================================================*/



//===============Task-15 — Combination=============================================

console.log(5 == "5" && !(5 === 5) || 6 > 7); 
// ---> Answer is false  --(true  &&  false  || false)   => (true && false)=false ,false || (false) => false

console.log(10 > 5 && 8 < 12 || 4 === "4");  
//--->Answer is True ---( true && true || false) =>(true && true)=true  ,true|| (false) =true || false =>true

console.log(7 === 7 && 10 != "10" || 5 >= 5); 
//--->Answer is True --->(true && false ||true)=> (true && true)=true  ,true || (true) = true 

console.log(15 < 10 || 20 > 15 && 5 == "5");  
//---> Answer is True --->(false || true && true)=>(false || true)=true,  true && (true) = true


//============================================================*/


//=============Task- 16 — Voting===============================================*/

let age = 20;

let result = age >= 18 ? "Eligible to vote" : "Not eligible" ;
console.log(result);

//============================================================*/


//==================Task -17 — Password==========================================*/
let password = true;
let result1= password == true ? "Login successful" : "Wrong password";
console.log(result1);
//============================================================*/


//===================Task -18 — User Introduction=========================================*/

let name = "sannith";
let aGe = 24;
let city = "Hyderabad";

console.log("My name is "+name+ ". I am "+aGe+" years old. I live in "+city+".");
console.log(`My name is ${name}. I am ${aGe} years old. I live in ${city}.`);

//============================================================*/


//=================Task -19 — String Conversion===========================================*/


console.log(typeof(String(100)) + "  | value is :"+String(100));
console.log(typeof(String(true)) + "  | value is :"+String(true));
console.log(typeof(String(undefined)) + "  | value is :"+String(undefined));
console.log(typeof(String(null)) + "  | value is :"+String(null));
console.log(typeof(String([1,2])) + "  | value is :"+String([1,2]));

//============================================================*/


//==============Task-20 — Number Conversion==============================================*/

console.log(Number());
//Answer is 0 ,empty ,null value is 0

console.log(Number(""));
//Answer is 0 ,empty ,null value is 0

console.log(Number("123"));
//Answer is 123 , because it contain the value 123 which is in number format.

console.log(Number("a1"));
//Answer is NaN (0), Its value isunable to specify.

console.log(Number(true));
//Answer is 1 , true=1 and false =0

console.log(Number(false));
//Answer is 0 ,true=1 and false =0.

console.log(Number(undefined));
//Answer is NaN , there is no value will be assigned in undefined.
console.log(Number(null));
//Answer is 0 , null value is 0

//============================================================*/


//===============Task- 21 — Boolean Conversion=============================================*/

console.log(Boolean());
//Answer is false  , if the result is 0 it will result false and if 1 it returns true.

console.log(Boolean(""));
//Answer is false  , if the result is 0 it will result false and if 1 it returns true.

console.log(Boolean("hello"));
//Answer is True , because it consist some value so its memory is 1 then true.

console.log(Boolean(123));
//Answer is True , because it consist some value so its memory is 1 then true.

console.log(Boolean(true));
//Answer is True , because it consist some value so its memory is 1 then true.

console.log(Boolean(false));
//Answer is False , because it consist no value so its memory is 0 then true.

console.log(Boolean(undefined));
//Answer is False , undefined means no value is assigned so no memeory then 0,because it consist no value so its memory is 0 then true.

console.log(Boolean(null));
//Answer is false , because in integer the null value is 0

console.log(Boolean([]));
//Answer is True ,because array without any elements , it consist empty space ,so space is considered as a value the it is 1 , so true.

console.log(Boolean({}));
//Answer is True , bacause object without and values and variables also consist a object reference value, so it contain some value the it is 1 , so true


//============================================================*/

/*==================Task 22 — Voting Eligibility==========================================

    let userAge=prompt("Enter Age :");
    if(userAge >= 18)
    {
        console.log("You can vote");
    }
    else{
        console.log("You can't vote");
    }



//============================================================*/


/*===============Task 23 — Positive or Negative=============================================

let numb=prompt("Enter a number :");

if(numb>0)
{
    console.log("it is Positive");
}
else if(numb<0)
{
    console.log("It is Negative");
}
else{
    console.log("It is Zero");
}

//============================================================*/


/*================Task 24 — Grade System ============================================

var userMarks=prompt("Enter marks :");
if(userMarks >=90 && userMarks <=100)
{
    console.log("A grade");
}
else if(userMarks >=80 && userMarks <=89)
{
    console.log("B grade");
}
else if(userMarks >=70 && userMarks <=79)
{
     console.log("C grade");
}
else if(userMarks >=60 && userMarks <=69)
{
    console.log("D grade");

}
else {
    console.log("Fail");
}


//============================================================*/

/*================Task -25 — Job Eligibility============================================

let AGe=prompt("Enter Age :");
let Height=prompt("Enter Height :");
let weight=prompt("Enter weight :");


if(AGe >=18)
{
    if(Height >= 160)
    {
        if(weight >= 60)
        {
            console.log("Congratulations! You are selected");
        }
        else{
              console.log("You weight is no eligible");
        }

    }
    else{
         console.log("You Height is no eligible");
    }

}
else{
    console.log("You Age is no eligible");
}

//============================================================*/


/*=============Task 26 — Traffic Light ===============================================

var color=prompt("Enter color :");

switch(color)
{

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;
}




//============================================================*/


/*=============Task --27 — Day===============================================

let day=5;

switch(day)
{
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default :
        console.log("Invalid Day");

}



//============================================================*/

//=================Task 28 — Student Result System===========================================


    var NamE=prompt("Enter Name :");
    var AgE = prompt("Enter Age :");
    var CitY = prompt("Enter city :");

    var Tamil = Number(prompt("Enter Tamil :"));
    var English = Number(prompt("Enter English :"));
    var Maths = Number(prompt("Enter Maths :"));

    let total =(Tamil+English+Maths);
    let average=total/3;  //each of 100 marks

    console.log("Name is :"+NamE);
    console.log("Age is :"+AgE);
    console.log("City is :"+CitY);

    console.log("Total marks are :"+total);
    console.log("Average  :"+average);

    if(average >=90 && average <=100)
    {
        console.log("Grade  A");
    }
    else if(average >=80 && average <=89)
    {
        console.log("Grade  B");
    }
    else if(average >=70 && average <=79)
    {
        console.log("Grade  C");
    }
    else if(average >=60 && average <=69)
    {
        console.log("Grade  D");
    }
    else{
        console.log("Fail");
    }

    if(AgE>=18)
    {
        console.log(" Voting :Eligible");
    }
    else{
                console.log("Voting :Not Eligible");

    }



    



//============================================================*/
