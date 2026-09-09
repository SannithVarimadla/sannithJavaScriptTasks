//===================================day 6 javaScript Tasks =======================================


/*========================Task 1 — Student Result Analyzer =====================================================================


let Name=prompt("enter student Name :");
let Department=prompt("enter department :");
let tamil =Number(prompt("Tamil marks :"));
let telugu =Number(prompt("telugu marks :"));
let english =Number(prompt("english marks :"));
let maths =Number(prompt("maths marks :"));
let science =Number(prompt("science marks :"));


let marks =[tamil , telugu , english , maths , science];

// Calculate total marks

 let total =  marks.reduce(  (accumulator ,currentElement , indexNum , totalArray)=>{ 
                               
                                return accumulator + currentElement;
    },0);
    console.log("total marks are : "+ total);

    // Calculate average
    console.log("Average : "+(total/5));

    // Find pass/fail
    // Assign grade:
    if(average>=90 && average <=100)
    {
        console.log("A grade");
    }
    else if(average >=75 && average <=89)
    {
        console.log("B grade");
    }
     else if(average >=60 && average <=74)
    {
        console.log("C grade");
    }
     else if(average >=50 && average <=59)
    {
        console.log("D grade");
    }
     else if(average <50)
    {
        console.log("Fail");
    }

//=============================================================================================*/


//=======================Task 2 — Employee Salary Calculator======================================================================

    let employee= {
            name: "Arun",
            role: "Developer",
            salary: 45000,
            experience: 2
        }
// Basic salary
        console.log(employee.salary);


        if(employee.experience>=2 && employee.experience <5)
        {
            let bonus1=(employee.salary) * 10 /100;
            employee.salary=employee.salary+bonus1;
            console.log("Salary was incremented bt 10% ,total salary is :"+employee.salary);
        }
        else{
             let bonus2=(employee.salary) * 15 /100;
            employee.salary=employee.salary+bonus2;
            console.log("Salary was incremented bt 15% ,total salary is :"+employee.salary);
        }


        function salary()
        {
            return employee.salary;
        }

        console.log("Salary is :"+salary());

//=============================================================================================


//===========================Task 3 — Product Filter System==================================================================

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];
//Get products above ₹2,000

    let prod = products.filter( ( currentElement , indexNum ,totalArray )=>{
                                                            return currentElement.price > 2000;
                                                                    })

                    console.log(prod);

// Get only electronics(above 2000)
    let pr = products.filter( ( currentElement , indexNum ,totalArray )=>{
                                                            return (currentElement.price > 2000 && currentElement.category=="electronics");
                                                                    })

                    console.log(pr);

// Find the first product below ₹1,000

    let firstProduct = products.find( (currentElement , indexNum , totalArray)=>{
                                                    return currentElement.price < 1000;
                                                                })

                    console.log(firstProduct);

// Calculate total price of all products

    let totalPrice = products.reduce( (accumulator , currentElement , indexNum , totalArray)=>{
                                                    return accumulator + currentElement.price ;
                                                        },0);

                    console.log(totalPrice);

// Check whether any product costs more than ₹50,000

    let moreThan50k = products.some( ( currentElement , indexNum , totalArray)=>{
                                            return currentElement.price > 50000;
                                                        });

                    console.log("product price more than 50000 : "+moreThan50k);

// Check whether every product has a price above ₹500
    let everyProduct = products.every( ( currentElement , indexNum , totalArray)=>{
                                            return currentElement.price > 500;
                                                        });

                    console.log("every product has price morethan 500 : "+everyProduct);



//=============================================================================================



//===================Task 4 — Employee Management ==========================================================================
let employees =[
   { id: 101,
    name: "Kavin",
    role: "Frontend Developer",
    salary: 40000
    } ,

    {
    id: 102,
    name: "sannith",
    role: "full stack Developer",
    salary: 20000
    },
    {
    id: 103,
    name: "javin",
    role: "Frontend Developer",
    salary: 30000
    },
    {
    id: 104,
    name: "legin",
    role: "software Developer",
    salary: 50000
    },
    {
    id: 105,
    name: "karthik",
    role: "backend Developer",
    salary: 70000
    },
    {
    id: 106,
    name: "martin",
    role: "devops engineer",
    salary: 10000
    } ];
// Display all employee names
    for(let objs of employees)
    {
        
        for(let nam in objs)
        {
            console.log(objs.name);
        }
    }

// Display employees earning above ₹40,000
    let earningsAb40k = employees.filter((currentElement) => {
                     return currentElement.salary > 40000;
                                });

        console.log(earningsAb40k);

// Find employee with ID 103

        let findId = employees.find((currentElement )=>{
                            return currentElement.id=103;
                                    });
                    console.log(findId);

// Calculate total salary

        let totalSalary = employees.reduce((accmulator , currentElement )=>{
                                    return accmulator +currentElement.salary;
                                            },0);
                        console.log("total salarys are : "+totalSalary);

// Find highest-paid employee
                                            var sal=0;
                                            var highestName=0;
           let highestSalary = employees.forEach((currentElement , indexNum , totalArray )=>{
                                            if(currentElement.salary >=sal)
                                            {
                                                sal = currentElement.salary;
                                              highestName= currentElement.name;

                                            }
                                                            });
                            console.log(highestName  +"  "+sal);

// Sort employees from highest salary to lowest
        let HtoLow = employees.sort((a,b)=>{
                            return b.salary-a.salary;
        });
        console.log(HtoLow);

// Create a new array containing only employee names

       let newArray = employees.map((currentElement, indexNum) => {
                           return currentElement.name;
                            });

            console.log(newArray);

//=============================================================================================


//==========================Task 5 — Shopping Cart ===================================================================

let cart = [
    { name: "Laptop", price: 60000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

// Item total:

    let totalItems = cart.reduce((accumulator , currentElement)=>{
                            return accumulator + currentElement.quantity;
                                        } ,0);
                        console.log("total items : "+totalItems);

// price × quantity
                               
        let priceQuantity = cart.map((currentElement , indexNum)=>{
                                   return (currentElement.price) * (currentElement.quantity);
                                        });

                            console.log(priceQuantity);

// Total cart value
  let totalValue = cart.reduce((accumulator ,currentElement , indexNum)=>{
                                 return accumulator+ ((currentElement.price) * (currentElement.quantity));

                                  
                                        },0);

                            console.log(totalValue);
            
// 10% discount if total > ₹50,000

                                        
    let discount = cart.map((currentElement , indexNum)=>{
                                var  tota =((currentElement.price) * (currentElement.quantity));
                                 
                                  if(tota > 50000)
                                  {
                                     tota = tota - (tota * 10/100);
                                   
                                  }
                                  return "total payable amount with discount for "+currentElement.name +" is "+tota;

                                  
                                        });

                            console.log(discount);
                                

//=============================================================================================


//========================Task 6 — Student Search System=====================================================================

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 35 }
];

// Display all student names

    let names = students.forEach((currentElement )=>{
                                console.log(currentElement.name);
                                         });

                            console.log(names);

// Display students who scored above 80
 let above80 = students.filter((currentElement )=>{
                                if(currentElement.mark > 80)
                                {
                                    return currentElement.name;
                                }
                                         });

                            console.log(above80);

                
// Find student named "Priya"
            let findName = students.find((currentElement )=>{
                                if(currentElement.name == "Priya")
                                {
                                    return currentElement.name;
                                }
                                         });

                            console.log(findName);
// Calculate average mark
        let average = students.map((currentElement )=>{
                              return "Average of "+currentElement.name +" is "+ currentElement.mark / 1 ;
                                    });

                                    console.log(average);

// Check whether anyone failed

        let failed = students.find((currentElement)=>{
                            if(currentElement.mark < 40)
                            {
                                return "faile";
                            }
                           
                                        });

                                        console.log(failed);
                         
                            
// Check whether everyone scored above 40

                let everyone = students.every((currentElement)=>{
                            if(currentElement.mark > 40)
                            {
                                return true;
                            }
                           
                                    });

                                    console.log(everyone);
// Sort students by marks
            let sorting = students.sort((a , b)=>{
                                return a.mark - b.mark;
                                 });


                                 console.log(sorting);
            

//=============================================================================================


//=========================Task 7 — Array Transformation Challenge====================================================================

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// Create a new array containing numbers × 2

        let newArr = numbers.map((currentElement)=>{
                            return currentElement*2;
                                     });

                                    console.log(newArr);

// Get only even numbers
let evenNum = numbers.filter((currentElement)=>{
                            return currentElement %2==0;
                                     });

                                    console.log(evenNum);
        
// Get numbers greater than 15
let greater15 = numbers.filter((currentElement)=>{
                            return currentElement > 15;
                                     });

                                    console.log(greater15);

// Find the first number greater than 20
let firstGreater = numbers.find((currentElement)=>{
                            return currentElement > 20;
                                     });

                                    console.log(firstGreater);

// Find total of all numbers

let totalAll = numbers.reduce((accumulator ,currentElement)=>{
                            return accumulator + currentElement;
                                     },0);

                                    console.log(totalAll);

// Check whether any number is greater than 40
let greater40 = numbers.some((currentElement)=>{
                            return  currentElement > 40;
                                     });

                                    console.log(greater40);

// Check whether every number is positive
let everyPositive = numbers.every((currentElement)=>{
                            return  currentElement >= 0;
                                     });

                                    console.log(everyPositive);

// Sort from highest to lowest

let sortt = numbers.sort((a,b)=>{
                    return b - a;
                    });
                    console.log(sortt);

//=============================================================================================

//===========================Task 8 — String Analyzer==================================================================


//let sentance= prompt("Enter a sentance :");
let sentance="JavaScript is very powerful";

// Total characters
                console.log("total length is :"+sentance.length);
// Uppercase sentence
                console.log("uppercase is :"+sentance.toUpperCase());
// Lowercase sentence
                console.log("lowercase is :"+sentance.toLowerCase());

// Whether it contains "JavaScript"
                console.log(sentance.includes("JavaScript"));
// First character
                    console.log(sentance.charAt(0));
// Last character
                    console.log(sentance.charAt(sentance.length-1));
// Number of words

                   let words= sentance.split(" ");
                   console.log(words.length);
// Replace "JavaScript" with "Python"
                    let changes =sentance.replace("JavaScript" , "Python");
                    console.log(changes);

// Convert sentence into an array using split()
                    let arr= sentance.split();
                    console.log(arr);
//=============================================================================================


//========================Final Mini Project — Employee Dashboard=====================================================================

let emp = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

// 1. Employee List
// Display all employees.

    for(let a of emp)
    {
            console.log(a);
    }

// 2. Search
// Search employee by name.

        let searchName = emp.find((currentElement)=>{
                           return currentElement.name=="Karthi";
                             });

                             console.log(searchName);
// 3. Department Filter
// Filter employees by department.
 let searchDepart = emp.find((currentElement)=>{
                           return currentElement.department=="HR";
                             });

                             console.log(searchDepart);

// 4. Salary Filter
// Show employees earning more than ₹50,000.

        let earningMore50k =emp.filter((currentElement)=>{
                         return(currentElement.salary>50000);
                        
                     });
                     console.log("Employees salary greater than 50000 :" , earningMore50k);

// 5. Salary Calculation
// Calculate total company salary.
                let totalCompanySalary =  emp.reduce((accumulator , currentElement)=>{
                                    return accumulator+currentElement.salary;
                                 },0);

                                 console.log(totalCompanySalary);
// 6. Highest Salary
// Find the highest-paid employee.
                        var hSalary=0;
                        var hName=null;
        let highestEmp = emp.forEach((currentElement)=>{
                        if(currentElement.salary > hSalary)
                        {
                           hSalary = currentElement.salary;
                           hName=currentElement.name;
                           
                        }
                          });


                                 console.log( "highest salary is : " + hSalary ,hName);

// 7. Experience
// Find employees with more than 3 years' experience.

                let highestExperience = emp.filter((currentElement)=>{
                            return currentElement.experience > 3;
                                              });

                                    console.log(highestExperience);

// 8. Sorting
// Sort employees by salary:
            let sortEmpLtoH= emp.sort((a,b)=>{
                    return a.salary -b.salary;
                         });
                         console.log(" low to hight " , sortEmpLtoH);

            let sortEmpHtoL= emp.sort((a,b)=>{
                    return b.salary -a.salary;
                         });
                         console.log(" hight to low " , sortEmpHtoL);

// 9. Statistics
// Display:
                            var totalEmp =0;
                           var  HighestSalarys=0;
                           var totalEmpSalaries =0;

            let statistics = emp.forEach((currentElement ,indexNum)=>{
                            totalEmp = indexNum+1;
                            totalEmpSalaries+=currentElement.salary;
                               if(currentElement.salary > HighestSalarys)
                               {
                                 HighestSalarys=currentElement.salary;
                               }

                             });

                             console.log("Total Employees:",totalEmp);
                             console.log("Total Salary:",HighestSalarys);
                             console.log("Average Salary:" , ( totalEmpSalaries/ emp.length));


//=============================================================================================
