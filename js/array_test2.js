var arr = ['a', 'b', 'c']; 
var arr2 = [1, 'b', 3.5151231231]; 
// arr = ['a', 'b', 'c', 'e'];
arr[arr.length] = 'e'; 
// 배열의 끝에 요소를 추가 
arr = ['a', 'b', 'c'];
arr.length = arr.length - 1; 
// 배열의 크기 1개 x
arr[5] = 'g'; // index 5 에 요소를 추가
arr.pop(); // 값 삭제(뒤)
arr2.push("pushed"); // 값 추가(뒤)
arr.shift(); // 값 삭제(앞)
arr2.unshift("pushed2"); // 값 추가(앞)

console.log('배열 출력:', arr); // 배열 출력
console.log('배열 요소 데이터 타입:', typeof arr2[0]); // 배열 출력
console.log('배열 문자열로 변환:', arr2.toString()); // 문자열로 변환 출력
console.log('빈 값 데이터 타입:', typeof arr[3]); // empty 값?