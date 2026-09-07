//==================== day 5 js tasks ============================================


//=========== Q1: What is the difference between var, let, and const?=========================================

    /*  var -- This variable declaration keyword can used when there is a required of changing and reusing it in future
            --It has global scope
            --it can be re initialized,re used, redeclared,re assigned

        let ---This keyword can be used when we want to update but not going to declare in future.
            ---It has block scope
            ---it can be initialized,re-initializes,reused,re assigned
            ---it cannot be re-declared
        const ---This keyword can be used when there will be no changing and no re declaring the data.
                ---it need to initialize while declaring it.
                ---It has block scope
                ---it cannot be initialized,re-initializes,reused,re assigned  once declared and initializes
             ---it cannot be re-declared
    */

//======================================================================================

//================== Q2: Can you re-declare a variable with var? What about let and const?====================================================================


        /*       var --- we can re declare and re initialize
                let -- we can re initialize but not re declare
                const --we cannot re initialize and re declare,and we need to initialize while declaring it.

        */


//======================================================================================


/*=================Q3: What is the output of this code?=====================================================================


        var x = 5;
        let y = 10;
        const z = 15;

        x = 20;
        y = 25;
        z = 30;

        console.log(x, y, z);    //x=20   ..bec--it can re initialize/re assign
                                //y=25   ...bec--it can re assign but not re declare
                                //z=error  ...bec it cannoth re assign and re declare


//======================================================================================*/


/*==================== Q4: What is the difference between declaring and initializing a variable?==================================================================


            Declaring  ----assigning a variable without any value to a keyword like.
                                let a;
                                const b;
            initialization  ----assigning a value to a variable is called initialization.
                                    a=10;
                                    b=40;

//======================================================================================*/

//================Q5: What will be the output?======================================================================

 let a;
 console.log(a);         //undefined because variable a is not assigned with any value.


//======================================================================================


/*==================Q6: What is hoisting? Give an example.====================================================================


Hoisting  ---  calling methods or functions after or before its declaration and initialization

--Before hoisting
--After hoisting

        1. Before hoisting
			Calling before declaration
			console.log(a);
			var a=10; ------------  undefined

			let and const ----------- error( they are block level so not support)

		2.After hoisting
			Calling after declaration

				var a=10;
				console.log(a);   -----var ,let , const  ---all supports it

//======================================================================================*/

/*=================Q7: What is the difference between null and undefined?=====================================================================



    Null --------it defined that there is no value currently.
                --but in future there may be some value for it.Null
    undefined --------when a variable is unsigned it defined as undefined.
                    --there is no value for the variable.



//======================================================================================*/

/*===================Q8: What will be the output?===================================================================



console.log(typeof null);        //---it will be object
console.log(typeof undefined);  //-----same undefined
console.log(typeof []);         //---- object
console.log(typeof {});         //object




//======================================================================================*/


/*===================Q9: What is the difference between == and ===?==================================================================

        ==   -->> loosey equals  , it compares only value, not data type.
                    5 == "5"   --- true

        ===   --->> strictly equals , it will compare value and datatype also.
                    5 === "5"  --false


//======================================================================================*/

/*====================== Q10: What is the difference between ++i and i++?================================================================


        ++i   --->pre increment ,(change and use) , value is change by incrementing by +1 and the printed or utilized further.
                        eg.  let i=2;
                            let b=++i;
                                             i=3
                                             b=3

        i++    --->post increment,(use and change)  , value is used first and then incremented by +1.
                        eg.  let i=2;
                            let b=i++;
                                        i=3
                                        b=2

//======================================================================================*/

//=========================Q11: What will be the output?=============================================================


let x = 10;
let y = "5";
console.log(x + y);      //105
console.log(x - y);     // 5
console.log(x * y);     // 50
console.log(x / y);     // 2

            //implicit conversation is done automatically 


//======================================================================================

/*==================Q12: What are logical operators? Explain with examples.====================================================================

    1.Arthimatic operators	
	2.Assignment
	3.comparasion
	4.logical
	5.ternary


            1.Arthimatic operators

                     +	Addition                  let add=3+4;
                    -	Subtraction               let a=4-3;
                    *	Multiplication            let a=5*2;
                    **	Exponentiation            let a=5**3;     ==    5*5*5
                    /	Division                   let div = 10/2;     ans:5
                    %	Modulus (Division Remainder) let rem=10%2;    ans : 0

                    ++	Increment           pre-increment(change and use)(++a)
                                            var a=10;
                                             a=++a      change to 11 and assign
                                             ans=11     

                                            (before using variable ,the value is changes)
                                            (considers from variable side)



                                            post-increment(use and change)(a++)
                                            var a=10;
                                            a++;
                                            ans=10 prints and changes to 11
                                            (after using the variable ,value is changed)
                                             (consider from value side)

                


                    --	decrement           pre-decrement(change and use)(--a)
                                                 var a=10            //while search variable is null
                                                    a=--a
                                                    ans=9  (changes to 9 and used(printed)  
                                                (before using variable ,the value is changes)
                                                                                                                            

                                            post-decrement(use and change)(a--)
                                            var a=10;
                                             a=a—;
                                             ans=  10 ( prints and changes to 9)
                                             (after using the variable ,value is changed)
                                             //Answer: a=19 and b=20 ,post decrement(use and change) and we consider from variable side
                                            let a = 20;   //step 1: a is 20
                                            let b = a--;    //step 2 :(use and change) a(20) is assigned to b and decremented by 1 so a=19
                                            (always calculate the latest values)


            	2.Assignment

                        used to assign the values or data.
                                 =    to assign the value to a variable like . let a= 10;
                                 +=,   add and equals to        .. a+=2;        a= a+2;
                                 -=,   subtract and equals to   ..   a-=3;      a=a-3;
                                 *=,    multiply and equal to   ..  a*=2;       a=a*2; 
                                 /=,   divide and equals to     ..  a/=2;       a=a/2;
                                 %=,    modulas and equals to   ..  a%=2;       a=a%2;
                                 **=    expoentials and equals  ..  a**=2;      a=a power 2




                 3.comparasion operators

                                ==	Loosey type equal,compare only value not datatype,   5=="5";   true
                                ===	Strictly type equal,compares datatype and value      5==="5";  false
                                !=	Loosey not equal ,compares only value               if(5!="5")  false
                                !==	Strictly not equal ,compares value and datatype     if(5!=="5") true
                                >	greater than                                        3>1
                                <	less than                                           1<4
                                >=	greater than or equal to                            5>=5
                                <=	less than or equal to                               2<=2


                4.logical operators

                        &&	Logical AND	Both should be true
                        ||	OR	`
                        !	Logical NOT	Reverse the result
                                            
                            console.log(a > 5 && a < 20);

                5.Ternary operator

                        condition ? valueIfTrue : valueIfFalse;

                        let result = age >= 18 ? "Eligible" : "Not Eligible";  //if true--prints eligible if not not eligible

//======================================================================================*/

/*=============================Q13: What will be the output?=========================================================*/


 console.log(5 > 3 && 10 > 5);      //--->true
 console.log(5 > 10 || 10 > 5);   //--->true
console.log(!(5 > 3));           //--->false

//======================================================================================*/

/*==================Q14: What is the ternary operator? Give an example.====================================================================

                    Ternary operator

                        condition ? valueIfTrue : valueIfFalse;

                        let result = age >= 18 ? "Eligible" : "Not Eligible";  //if true--prints eligible if not not eligible


//======================================================================================*/

/*===================Q15:What is the difference between implicit and explicit type casting?==================================================================

            1.Implict type casting
                Js automatically converts the datatype
                    Var a=”5”
                    Var b=10
                    Console.log(a+b);   ==  510
            Concating any value with string gives a string value

            2.Explict type casting
                We manually converts
                        Var a=”123”;
                    Console.log(Number(a));
                                

//======================================================================================*/


//============================Q16: What will be the output?==========================================================


console.log(Number("123"));   //----123
console.log(Number("hello"));  //----NaN   //bec --hello not a type of number ,integer value
console.log(Number(true));      //---1   (true=1 false=0)
console.log(Number(false));    //----0
console.log(Boolean(0));        //---false   (0 indicates false)
console.log(Boolean("hello"));  //--true

//======================================================================================

/*======================Q17: What is NaN? Give an example.================================================================

                    NaN  ---Not a Number     
                        ---it will be printed when a result cannot produce a valid intefer type number

                    console.log(Number("hello"));  //----NaN  ,hello is not a number type.

//======================================================================================*/



/*==================Q18: What is the difference between if-else and switch?====================================================================

        if else  ----the condition has two statement if the condition is true the if prints the statement written in if block .
                -----if the condition is false then it prints the statements written in else block .a

                if(3> 5)
                {
                    console.log("yes");
                }
                else{
                    console.log("No");
                }

        switch-case  ---it has multiple conditions statements and if the value matches to any case it prints the statements written in that case block. 
                        ---  it will aslo checks all the cases so we use break .
                        ---default is used to perform the operation irrespective of the cases.

                        switch(a) {
                        case 1:
                            console.log("It is 1 ");
                            break;       ---  no break it executes all cases.
                        case 2:
                             console.log("It is 2 ");
                            break;
                        default:
                            console.log("These are numbers ");

                        }

//======================================================================================*/



/*=========================Q19: What will be the output?=============================================================



let age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
    //output is  :   Adult
//======================================================================================*/


/*====================Q20: What is nested if? Give an example.==================================================================

            Nested if  ----a consition inside condition.
                        ----it checks the first condition if it is true then enters inside and checks inner condition

                            if(a > 5)
                            {
                                if(a < 20)
                                {
                                    console.log("a is greate than 5 and less than 20");
                                }
                            }

//======================================================================================*/


/*============== Q21: Write a program to check if a number is even or odd using ternary operator.=======================================================================


           let num=prompt("Enter a number");

            let res= num%2==0 ? "even" : "odd" ;
            console.log(res);

//======================================================================================*/


/*===========Q22: What is the difference between while and do-while?=============================================================

            while loop --used when we dont know the number of iterations
                        --- the loop terminates immediately when condition is false.valueOf

                        while(10<=5)
                        {
                            console.log("terminated");
                        }


            do while loop --- used when we wants to execute the statement at least once even the condition is false.

                        do{
                            console.log("Yes");
                            a++;
                        }
                        while(10<=5)

//======================================================================================*/

/*=============== Q23: What will be the output?=======================================================================

            for(let i = 1; i <= 5; i++) {
                console.log(i);
            }

            //it prints from 1 to 5

//======================================================================================*/


/*================Q24: What is the difference between for-of and for-in?====================================

        for of loop –to iterate Strings,arrays,functions.

                    let nam=”sannith”;
                    for(let a for nam)
                    {
                        console.log(a);
                    }	
                    
                                     
            for in loop --  to iterate objects keys,values

                let stu={name:”sannith”,
                         age : 33  };
                for(let a in stu)
                {
                    console.log(a);  ------------prints keys.
                    Console.log(stu[a]);  -------prints values.	
                }

//======================================================================================*/




//======================Q25: Write a program to find sum of numbers from 1 to 100.================================================================*/

            let sum=0;
                for(let i=1;i<=100;i++)
                {
                    sum+=i;
                }
                console.log(sum);

//======================================================================================*/


/*==================Q26: What is the difference between slice and splice?====================================================================


splice --- it used to remove ,add , modify the elements.
        -- original array is modified and returns removed elements

            let aa = [10, 20, 30, 40];

            let b = aa.splice(1,3);   remove elememts before index 0 and remove 3 elements after the index 1 element.

            console.log(b);
            console.log(aa);


slice  ---- it divides the array ,using starting index and ending index.

                 let bb = [10, 20, 30, 40];

                 let sli= bb.slice(1,3);
                 console.log(sli);

//======================================================================================*/


/*====================== Q27: What will be the output?================================================================

let arr = [1, 2, 3];
arr.push(4);            //to add element at the ending(right side) of a array
arr.pop();              // to remove a element from the right side of a array
arr.unshift(0);         //to add the element at the starting(left side) of array
arr.shift();               //to remove the elements from left side of an array

console.log(arr);  //[1,2,3] bec-- you added 4 and removed it and added 0 and removed it 



//======================================================================================*/

/*=================Q28: What is the difference between function declaration and function expression?==========================================


                    //function declaration--- declaring(writing) a function with function keyword and with function name.
                            function m1()
                            {
                            
                            }

                    //function expression ---- some operations inside function which results some data are called expressions,

                            function m2(a,b)
                            {
                                let sum=a+b;
                                console.log(sum);
                            }

//======================================================================================*/

/*==================Q29: What is an arrow function? Give an example.===================================================


            arrow functions ----function declated without function keyword.
                            ---it was secure and used for memory management.
                            --if it consist data inside the function  then only it reserves the memory.



                            let af = (n1,n2) => {
                                                console.log(n1.n2);
                                                };

                                    af(2,3);
    

//======================================================================================*/

//====================Q30: What will be the output?==================================================================*/

                function greet() {
                    return "Hello";
                }
                let message = greet();
                console.log(message);   //it prints --   Hello



//======================================================================================*/
