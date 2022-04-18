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
// }
// }
// };
// console.log(obj.prop.getFullName());
// console.log("sadsad");
// var test = obj.prop.getFullName;
// console.log(test());


// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
//     }
//     funcB();
//     console.log(typeof a);
//     console.log(typeof b);


// function funcC() {
//     console.log("1");
//     }
//     funcC();
//     function funcC() {
//     console.log("2");
//     }
//     funcC();


// function funcD1() {
//     d = 1;
//     }
//     funcD1();
//     console.log(d);
//     function funcD2() {
//     var e = 1;
//     }
//     funcD2();
//     // console.log(e);




// function funcE() {
//     console.log("Value of f in local scope: ", f);
//     }
//     // console.log("Value of f in global scope: ", f);
//     let f = 1;
//     funcE();


