// var count = [10,20,30,40,50,60,70,100];
// for(var x in count) {
//     var result = 0;
//     result += x;    
// }
// avg = result/count.length;
// console.log(avg)



var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);