/*
  1. 사칙연산이 가능한 계산기 함수를 만들어주세요.
  input-example: '*', 10, 2
  output-example: 20
*/
function getResult(operate, num1, num2) {
    var result = "";
    if (operate === "+") {
      result = num1 + num2;
    } else if (operate === "-") {
      result = num1 - num2;
    } else if (operate === "*") {
      result = num1 * num2;
    } else if (operate === "/") {
      result = num1 / num2;
    } else {
      console.log("계산불가");
    }
    console.log(result);
  }
  getResult("*", 10, 2);
  
  /*
    2. 사용자 정보를 input 값으로 받아 처리하는 함수를 만들어보세요
    example: console.log(함수(userInfo, 'name')) =>
    사용자의 name은 'Kim' 입니다.
  */
  
  const userInfo = {
    name: "Kim",
    userName: "KimCoding",
    age: 20
  };
  
  function result2(info, key) {
    return "사용자의 " + arguments[1] + "은 " + info[key] + "입니다.";
  }
  
  console.log(result2(userInfo, "name")); // => 사용자의 name은 'Kim' 입니다.
  
  /*
    3. 아래의 배열을 input으로 하고 해당 배열에서 홀수의 합을 반환하는 함수를 만들어보세요
    배열 메소드 사용 금지!
    input: [1, 2, 3, 5, 9, 12];
    output: 18
  */
  
  const arr = [1, 2, 3, 5, 9, 12];
  
  function result3(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1) {
        sum += arr[i];
      }
    }
    return sum;
  }
  console.log(result3(arr));
  
  /*
    4. 모든 인자 값의 합을 구하는 함수를 만들어 주세요
    단, 인자의 개수는 항상 다릅니다.
    example: foo(1, 2, 3, 4, 5); => 15
    foo(2, 3); => 5
  */
  
  function foo() {
    var getSumNumbers = 0;
    for (var i = 0; i < arguments.length; i++) {
      getSumNumbers += arguments[i];
    }
    console.log(getSumNumbers);
  }
  
  foo(1, 2, 3, 4, 5); // => 15
  