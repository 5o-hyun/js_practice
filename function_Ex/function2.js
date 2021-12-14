// Q1. 5명의 코로나 검사 결과가 담긴 배열이 있다. 이 배열을 입력값으로 하여 양성이 나온 명단을 출력하는 함수를 만들어보세요.
const data = [
    {
      name: "doum",
      isPositive: true
    },
    {
      name: "haemoon",
      isPositive: false
    },
    {
      name: "bora",
      isPositive: true
    },
    {
      name: "sohyun",
      isPositive: false
    },
    {
      name: "jiyoung",
      isPositive: false
    }
  ];
  
  // 출력 -> '코로나에 감염된 사람은 doum, bora 입니다.'
  function result1(data) {
    var infectionPerson = "";
    for (var i = 0; i < data.length - 1; i++) {
      if (data[i].isPositive === true) {
        infectionPerson += infectionPerson.length
          ? ", " + data[i].name
          : data[i].name;
      }
    }
    return "코로나에 감염된 사람은 " + infectionPerson + "입니다.";
  }
  
  console.log(result1(data));
  
  // Q2. 학점 계산
  const studentInfo = {
    name: "doum",
    score: 88
  };
  
  function getGrade(studentInfo) {
    var infoGrade = "";
    if (70 > studentInfo.score && studentInfo.score >= 0) {
      infoGrade = "F";
    } else if (75 > studentInfo.score && studentInfo.score >= 70) {
      infoGrade = "C";
    } else if (80 > studentInfo.score && studentInfo.score >= 75) {
      infoGrade = "C+";
    } else if (85 > studentInfo.score && studentInfo.score >= 80) {
      infoGrade = "B";
    } else if (90 > studentInfo.score && studentInfo.score >= 85) {
      infoGrade = "B+";
    } else if (95 > studentInfo.score && studentInfo.score >= 90) {
      infoGrade = "A";
    } else if (101 > studentInfo.score && studentInfo.score >= 95) {
      infoGrade = "A+";
    } else {
      infoGrade = "정확한 값이 아닙니다";
    }
    return studentInfo.name + "의 학점은 " + infoGrade + " 입니다.";
  }
  
  console.log(getGrade(studentInfo)); // -> 'doum의 학점은 B+ 입니다.'
  
  // Q3. Math.pow와 동일한 함수 구하기
  Math.pow(2, 3); // 2의 3승 -> 8
  Math.pow(4, 2); // 4의 2승 -> 16
  
  //함수(2, 3); -> 8
  function result3(x, y) {
    const getResult = x ** y;
    console.log(getResult);
  }
  result3(2, 0);
  
  // Q4. 2개의 값 중에 무엇이 더 작은지 판별하는 함수
  function getSmall(num1, num2) {
    var resultSmall = "";
    if (num1 > num2) {
      resultSmall = num2;
    } else if (num1 < num2) {
      resultSmall = num1;
    } else if (num1 === num2) {
      resultSmall = "같습니다";
    }
    console.log(resultSmall);
  }
  getSmall(10, 20);
  