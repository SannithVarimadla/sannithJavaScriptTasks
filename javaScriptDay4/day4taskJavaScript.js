
//===============Day 4 Tasks ============================

//================Task 1 — For Loop============================================


for(var i=1;i<=10;i++)
{
    console.log(i);
}



//==============Task 2 — Reverse Number ==============================================
//Print numbers from 10 to 1 using a for loop.

for(var j=10;j>=1;j--)
{
    console.log(j);
}

//============================================================

//===================Task 3 — Even Numbers =========================================

    console.log("Even Numbers from 1 to 20 :")
    for(var k=1;k<=20;k++)
    {
        if(k%2==0)
        {
            console.log(k);
        }
    }


//============================================================

//================Task 4 — Odd Numbers============================================
    //Print all odd numbers from 1 to 20.
    console.log("add Numbers from 1 to 20 :");
    for(var a=1;a<=20;a++)
    {
        if(a%2==1)
        {
            console.log(a);
        }
    }
//============================================================
/*====================Task 5 — Multiplication Table=============

    var num=prompt("Enter a number :");

    for(var m=1;m<=10;m++)
    {
        console.log(num +" x "+m+" = "+(num *m));
    }
//============================================================*/
//============== Task 6 — Countdown(While Loop )====================
    let b=10;
    while(b>=1)
    {
        console.log(b);
        b--;
    }


//============================================================
//=================Task 7 — Sum of Numbers(using while)===========================================

    let startNum=1;
    let endNum=10;

    var total=0;
    for(let s=startNum;s<=endNum;s++ )
    {
         var total=total+s;
    }
    console.log(total);



//============================================================
//=============Task 8 — Print Numbers(Do While)===============================================

    var c=1;
    do{
        console.log(c)
        c++;
    }
    while(c<=5)



//============================================================
//===============Task 9 — Do While Understanding=============================================
// What is the output?
// let a = 10;

// do {                         do while loop executes at least once even the condition is false
//     console.log(a);          it prints 10
//     a++;                     a is incremented by 1 a=11
// } while (a <= 5);            11<=5 false condition fails and loop exits

    //FINAL OUTPUT is   10,it prints only once and loop exits


//============================================================
//====================Task 10 — String Characters ========================================

let name = "javascript";

for(var ch of name)
{
    console.log(ch);
}

//============================================================
//==============Task 11 — Array Values==============================================

let fruits = ["apple", "orange", "banana", "mango", "grapes"];
    for(var fru of fruits)
    {
        console.log(fru);
    }

//============================================================
//=================Task 12 — Student Names ===========================================
    var stuNames=["sunny","bunny","naveen","praveen","sannith"];

    for(var names of stuNames)
    {
        console.log("Student :"+names);
    }




//============================================================
//================Task 13 — Employee Object============================================

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
    for(var details in employee)
    {
        console.log(details +" : "+employee[details]);
    }


//============================================================
//==================Task 14 — Product Object ==========================================

let products={
            productName :"mobile",
            price : 10000,
            brand :"redmi", 
            category:"communication",
            stock :"Available"
            };


    for(var productDetails in products)
    {
        console.log(productDetails +" : "+products[productDetails]);

    }




//============================================================
//====================Task 15 — Simple Function========================================
    function welcome()
    {
        console.log("Welcome to JavaScript");
    }

        for(var l=1;l<=3;l++)
        {
            welcome();
        }




//============================================================
//=====================Task 16 — Function With Parameter=======================================

function greet(name) {
    console.log("Hello "+name);
}

greet("Naveen");
greet("Arun");
greet("Priya");


//============================================================
//====================Task 17 — Multiple Parameters========================================

 function students(name , age , department)
 {
    console.log(name  +" "+age +" "+department);
 }

 students("sannith",22,"ECE");
 students("bunny",17,"MEC");
 students("ram",20,"CSE");






//============================================================
//========================Task 18 — Addition Function====================================

 function add(num1,num2)
 {
    return num1+num2;
 }

 var sum=add(10,20);
 console.log(sum);



//============================================================
//=================Task 19 — Salary===========================================

function sal(salary)
{
    return "salary is :"+salary;
}

var amount=sal(10000);
console.log(amount);



//============================================================
//===================Task 20 — Bonus Calculator=========================================

  function bonus(salary , bonus)
  {
    return salary+bonus;
  }

  var amo=bonus(10000,2000);
  console.log(amo);




//============================================================
//=================Task 21 ,Default Parameter=========================================

  function employe(name , role="full stack developer")
  {
    console.log(name +" |"+role);
  }

  employe("sannith");//for this the defalut role will be full stack developer
  employe("bunny","Software developer");


//============================================================
//==================Task 22 — Named Function==========================================

function square(n1)
{
    return n1*n1;
}

for(var sq=1;sq<=3;sq++)
{
    console.log("square of "+sq+" is "+square(sq));
}




//============================================================
//================Task 23 — Anonymous Function============================================


let anonymous=function(a1,b1)
                {
                    return (a1+b1);
                };


               console.log( anonymous(2,3));



//============================================================
//===================Task 24 — Arrow Function   =========================================

                let mul=(m1,m2)=>{
                                    return "multiplication  of "+m1+" and "+m2+" is "+(m1*m2);
                                 }
                       console.log(mul(2,3));


//============================================================
/*=======================Task 25 — Predict the Output=====================================


function test() {

    if (true) {

        var a3 = 10;   //var scope is global--so it can be accessed from any where.
        let b3 = 20;     //let and const are having block level scope so the are restricted only for the block we cant access outside the block.
        const c3 = 30;

        console.log(a3);     //prints 10
        console.log(b3);     //it will not print and causes error
        console.log(c3);     //it will not print and causes error
    }

    console.log(a3); //prints 10   || because var having global scope ,it can be accessed outside of the block also
    console.log(b3);//it will not print and causes error || b3 has let ,so it has block level scope ,it cannot be accessed outside the block
    console.log(c3);//it will not print and causes error  || c3 has let ,so it has block level scope ,it cannot be accessed outside the block
}

test();






//============================================================*/
//=====================Hoisting  Task 26 — Predict  =======================================

    console.log(z);  // it is before hoisting
    var z = 10;     //it prints undefined 



//============================================================
/*========================Task 27====================================
    Predict:
    console.log(b);
    let b = 20;         //gives error because let and const cannot before hoisting,it enters into temoral dead zone




//============================================================*/
/*=======================Task 28=====================================

Predict:
console.log(c);
const c = 30;       //gives error because let and const cannot before hoisting,it enters into temoral dead zone




//============================================================*/
//======================Task 29 — Self Invoking Function ======================================

(function()
{
    console.log("Welcome to JavaScript");
})();

(function(product , discount)
    {
    console.log("product is : "+product);
    console.log("discount is :"+discount);
    })("mobile",10000);


//============================================================
//==================Task 30 =Callback / Higher-Order Function=========================================

function welcome() {                    //welcome() is the call back function,because we passed paramerter as this method to execute function
    console.log("Welcome");
}

function execute(callback) {            //call back refers to welcome method 
    callback();                     //it invokes the welcome method
}

execute(welcome);               //we are passing the parameter is a function to execute method to call welcome method





//============================================================
//=====================Task 31 — Cashback =======================================

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
    let re=cashback();
    console.log(re.next());
    console.log(re.next());
    console.log(re.next());
    console.log(re.next());






//============================================================

//=======================Task 32 — Employee Management Console=====================================



let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];
// Print every employee.

for(var ob of employees)
{
    console.log(ob);
}
// 2. for...in
// Print each employee's keys and values.
for (var obj of employees)                          //we cant directly get employees details directly from a array so
{
    for (var key in obj)                            //step 1:we get employees objects from the array and from that objects we get keys and values using for in loop
    {
        console.log(key + " : " + obj[key]);
    }
}
// 3. Function
// Create a function to display employee information.

    function employeeInfo(keys,object)
    {
        console.log(keys +"  :  "+object[keys]);
    }


// 4. Function parameters
// Pass employee information to the function.
for(var objs of employees)
    {
        for(var keys in objs)
        {
            employeeInfo(keys,objs);
        }
    }
// 5. Return
// Create a function that returns an employee's salary.

    function returnSalary()
    {
        for(var sal of employees)
        {
            console.log( sal.salary);  
        }
       
    }
       returnSalary();
// 6. Condition
// Check:
// Salary >= 40000

    for(var checkSalary of employees)
    {
        if((checkSalary.salary)>=40000)
        {
            console.log((checkSalary.name)+"Salary is greater than or equals to 40000");
        }
        else{
            console.log((checkSalary.name)+"the salary is less than 40000");
        }
    }
// 7. Arrow function
// Create an arrow function for another simple calculation.
    var totalSalaries =()=>{
                                var totalSal=0;
                                for(var s of employees)
                                {

                                    totalSal+=(s.salary);
                                    console.log(s.salary);
                                   
                                }
                                return totalSal;
                           };
                          
                            console.log( "Total Salary of all employees is : "+totalSalaries());
                           
// 8. Generator
// Create a generator that produces employee benefits:

                           function* benifits()
                           {
                            yield " Medical Insurance"
                            yield "Transport"
                            yield "Food Allowance"
                            yield "Bonus"
                           }

                           var bens=benifits();
                           console.log(bens.next());
                           console.log(bens.next());
                           console.log(bens.next());
                           console.log(bens.next());

//============================================================
