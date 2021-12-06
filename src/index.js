// 프로퍼티 접근방법

var foo = { a: 1 };
// 1.  dot notation
console.log(foo.a);
// 알아서 문자열로 바꿔들어감

// 2. bracket notation
console.log(foo["a"]);
// 문자열로 넣어야 함

// 프로퍼티 특징

// 1, 식별자 네이밍규칙을 준수하는것을 권장한다.
var person = {
  firstName: "Kim",
  "last-Name": "sohyun"
};

console.log(person);

/* 2. 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가
 먼저 선언한 프로퍼티를 덮어쓴다. */
var foo2 = {
  name: "kim",
  name: "lee"
};
console.log(foo2);

// 3. 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다,
var sohyun = {
  name: "kim"
};
console.log(sohyun.age);

// 4. var , function 같은 예약어를 프로퍼티 키로 선언해도 되지만 권장하지않는다
var a = {
  var: "",
  function: ""
};
console.log(a);
