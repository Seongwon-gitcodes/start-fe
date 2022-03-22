console.log('03');

/* 
js에서 boolean이 아닌 값이 조건문에서 쓰이면 true return
 */ 
// if('true') {
//     console.log('test');
// }
// var isMan = true;
// if(isMan) {
//     console.log('test');
// }

/* 
원시 자료형, 참조 자료형
 */
// 원시 자료형
// var a = 1;
// var b = a;
// var b = 2;
// console.log(a, b);

// 참조 자료형
// 배열은 참조 타입이라는 것을 알 수 았다.
// var a = [1];
// var b = a;
// b[0] = 2;
// console.log(a,b);

// var a = {x : 1};
// var b = a;
// b.x = 2;
// console.log(a, b);

//call by value
// function byValue(count) {
//     count = count + 2;
//   }
//   var count = 3;
//   byValue(count);
//   console.log(count); //3

//call by reference
// function byReference(count) {
//     count.push('2');
//   }
//   var count = ['1'];
//   byReference(count);
//   console.log(count); // ["1","2"]

/* 
구문
 */
// var isMan = true;
// var gender = '';
// if(isMan) {
//     gender = '남자'
// } else {
//     gender = '여자';
// }

// var gender = isMan ? '남자' : "여자";

// 함수
// 함수 재사용이 가능하도록 리턴 값이 존재하는 함수가 더 효율적
// function log(str) {
//     console.log(str);
// }

// log('hello');

// var result = log('hello');
// console.log(result);

/* 
전역 함수
prompt, alert, confirm, setInterval, setTimeout
 */
// var isDelete = confirm("삭제하시겠습니까?");
// if(isDelete) {
//     //....
// }

// if(confirm("삭제하시겠습니까?")) {
//     //....
// }

// function test() {
//     console.log('test()');
//   }
  
//  var id = setTimeout(test, 1000); //1초후 1번실행
  
// var id = setInterval(test, 1000); //1초마다 계속 실행

/* 
Scope
 */

/* 
Hoisting
 */

/* Function
 */
// 함수 안에 함수는 좋은 코드가 아니다.
function a () {
    console.log("a");
    function b() {}
}

// 익명 즉시 실행 함수
// (function() {
//     var a = 1;
//     console.log(a);
// })();

// function sum(x, y) {
//     if(!y) { y = 0 } {
//         console.log(x + y);
//     }
// }

/* 
정규표현식
 */
// var text = 'abc def ghi jkl abc def';
// var matchReg = /abc/;
// var result = text.match(matchReg);

// console.log(result); 

/* 
CRUD 함수 만들기 */
// create 배열, 넣을 값
var arr = ['운동', '게임'];

function funCreate(arr, par) {
    arr.push(par);
    console.log(arr);
    return arr;
}
funCreate(arr, '공부');
console.log("-------------------");

// read 배열
function funRead(arr) {
    arr.forEach(function(arr) {
        console.log(arr);
    });
    return arr;
}
console.log(funRead(arr));
console.log("-------------------");

// update 배열, 뺄 값, 대체할 값
function funUpdate(arr, par, par2) {
    var updateIndex = arr.findIndex(function(par2) {
        return par2 === par;
    });
    arr[updateIndex] = par2;
    return arr;
}
console.log(funUpdate(arr, '게임', '자바'));
console.log("-------------------");

// delete 배열, 뺄 값
function funDelete(arr, par) {
    var deleteIndex = arr.findIndex(function(par2) {
        return par2 === par;
    });
    arr[deleteIndex] = par;
    arr.splice(deleteIndex, 1);
    return arr;
}
console.log(funDelete(arr, '자바'));
console.log("-------------------");


