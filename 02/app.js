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

// var article = {
//     title: "제목",
//     url: "naver.com",
// };

/** array crud
 * create
 */
// 효율이 나오지 않는다.
var todos = ["운동"];
// var todos = ["운동", "게임"];

var todo = '게임';
todos.push(todo);

/** array crud
 * read
 */
todos.forEach(function(todo) {
    console.log(todo);
});

/** array crud
 * update
 */
// 데이터를 제대로 가져왔는지 확인하는 것
var updateTodo = "게임";
var updateIndex = todos.findIndex(function(todo){
    return todo === updateTodo;
});

console.log(updateIndex);
todos[updateIndex] = "공부";
console.log(todos);


/** array crud
 * delete
 */
var todos = ["운동", "목욕", "공부"];
var deleteTodo = "공부";
var newRodos = todos.filter(function(todo) {
    return todo === deleteTodo;
});
todos.splice(dle)
console.log(todos);