// Task 15 — Find the Final Values
// Without running the code, find the output:
// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// Students should write the answer first and then verify it.

//=======================TASK-15=======================================
//Answer: a=7,b=4,c=7,d=5 ,a is post-incremented(use and change) a=5 is assigned to b(b=5) and incremented by 1 so (a=6), a is pre incremented(change and use) already a=6,
// a is incremented (a=7) and assigned to c (c=7),b is post decremented(use and change) (b=5) assigned to d(d=5) and b is decremented (b=4)



let a = 5;  //step 1: a value is 5

let b = a++; // step 2: a is post-incremented(use and change) a=5 is assigned to b(b=5) and incremented by 1 so (a=6)

let c = ++a; //step 3: a is pre incremented(change and use) already a=6,a is incremented (a=7) and assigned to c (c=7)

let d = b--; //step 4: b is post decremented(use and change) (b=5) assigned to d(d=5) and b is decremented (b=4)

console.log(a); //(a=7)
console.log(b); //(b=4)
console.log(c); //(c=7)
console.log(d); //(d=5)