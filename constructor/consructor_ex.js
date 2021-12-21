// const 소현 = {
//   name : '소현',
//   age : '26'
// };

// const 나영 = {
//   name : '나영',
//   age : '28'
// };

function User(name, age) {
    this.name = name;
    this.age = age + 1;
  }
  
  const 소현 = new User("소현", 26);
  const 나영 = new User("나영", 28);
  
  console.log(소현); // {name: "소현", age: "26"}
  console.log(나영); // {name: "나영", age: "28"}
  
  // String 생성자 함수에 의한 String 객체 생성
  const strObj = new String("hello");
  console.log(strObj);
  
  const strObj2 = String("hello");
  console.log(strObj2);
  
  // Number 생성자 함수에 의한 Number 객체 생성
  const numObj = new Number(123);
  console.log(numObj);
  
  const numObj2 = Number(123);
  console.log(numObj2);
  
  // Boolean 생성자 함수에 의한 Boolean 객체 생성
  const boolObj = new Boolean(true);
  console.log(boolObj);
  
  const boolObj2 = Boolean(true);
  console.log(boolObj2);
  
  // 생성자 함수 3개 자율적으로 만들어보기
  
  // 1. 팀플 인원 파악하기
  function Member(major, name, age) {
    this.major = major;
    this.name = name;
    this.age = age;
  }
  
  const 지연 = new Member("생명공학과", "김지연", "26");
  const 도희 = new Member("식품공학과", "김도희", "27");
  
  console.log(지연);
  console.log(도희);
  
  // 2. 학생의 토익점수 출력하기
  function Score(num, name, listen, read) {
    this.num = num;
    this.name = name;
    this.listen = listen;
    this.read = read;
  
    this.total = function () {
      var getTotal = this.listen + this.read;
      return getTotal;
    };
  
    this.getInfo = function () {
      var str = "";
      str += "학생번호 : " + this.num + " | ";
      str += "이름 : " + this.name + " | ";
      str += "리스닝 점수 : " + this.listen + " | ";
      str += "리딩 점수 : " + this.read + " | ";
      str += "총 합 : ";
      return str;
    };
  }
  
  const 원식 = new Score(1, "원식", 400, 450);
  const 화심 = new Score(2, "화심", 350, 400);
  const 태현 = new Score(3, "태현", 380, 420);
  
  console.log(원식);
  console.log(화심);
  console.log(태현);
  
  document.write(원식.getInfo() + 원식.total() + " 입니다.", "<br>");
  document.write(화심.getInfo() + 화심.total() + " 입니다.", "<br>");
  document.write(태현.getInfo() + 태현.total() + " 입니다.");
  
  // 3, 정육점 그랩수에 따른 가격계산
  function Meat(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.calculate = function (weight) {
      return this.price * (weight / this.weight) + "원 입니다.";
    };
  }
  
  const 삼겹살 = new Meat("삼겹살", 100, 1600);
  const 오겹살 = new Meat("오겹살", 100, 1300);
  
  console.log(삼겹살.calculate(200));
  console.log(오겹살.calculate(200));