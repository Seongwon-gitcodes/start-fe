// var
var name = 'ag';
name = 111;
console.log(name);

//boolean
var isMan = true;
var isMane1 = "true";

console.log(isMan);
console.log(isMane2);

//function
function log(str) {
    console.log(str);
}

log(hello);

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


/* object
json 형식, api 통신을 할 경우에도 사용
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