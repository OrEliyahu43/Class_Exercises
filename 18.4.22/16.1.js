// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;                       variable a will be undefind beacuse javascipt declare it before runnig
                                        //but not assign to it yet .
//     function foo() {
//         return 2;
//     }
// }
// funcA();




//blok2:
// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }                                                will print global var fullName:"john doe"
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());


// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
//     }                                     
//     funcB();
//     console.log(typeof a);                   undefind, cause a known only in funcB scope and typof of this error is undifind;
//     console.log(typeof b);                   will print b because b is not declare at all , and javascript put him in global in window


// function funcC() {
//     console.log("1");
//     }
//     funcC();
//     function funcC() {                                    the interpeter will overdies funcc with log(1)
//                                                           with funcc with log(2) because it the last below
//     console.log("2");                        
//     }
//     funcC();


// function funcD1() {
//     d = 1;
//     }
//     funcD1();                                       invoke function we cant see it
//     console.log(d);                                  will print d =1 because it not declare and javascript put it on global
//     function funcD2() {                  
//     var e = 1; 
//     }
//     funcD2();                                         invoke function we cant see it
//     // console.log(e);                                e is not define because we cant access var in function scope after it ends.                                  




// function funcE() {
//     console.log("Value of f in local scope: ", f);
//     }                                                                        
//     // console.log("Value of f in global scope: ", f);           will print f AS undefined cause he know it as var delcare but assigmnet not happen yet
//     var f = 1;                                                      after declare it the funce cant print f because it clousere.
//     funcE();


