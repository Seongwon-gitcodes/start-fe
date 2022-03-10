// var
var name = 'ag';
name = 111;
console.log(name);

//boolean
var isMan = true;
var isMan1 = "true";

console.log(isMan);
console.log(isMan1);

//function
function log(str) {
    console.log(str);
}

log('hello');

// object
var img = {};
img.width = 1;
img.height = 2;

console.log(img);

// array
var arr = [1,2,3];
console.log(arr);

// 연산자
console.log(1 + 1);
console.log(name + 'hello');

/** object
 * json 형식, api 통신을 할 경우에도 사용
 */
var me = {
    age: 11,
    name: "aj",
    inMan: true,
    sayHello: function() {
        console.log("hello");
    },
};

me.sayHello();


/** array
 * 
 */
var arr1 = [1,2,3,4,5];
console.log(arr.length);