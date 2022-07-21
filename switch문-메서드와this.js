switch (x) {
  case value1: // if (x === 'value1')
    
    break;
    
  case value2: // if (x === 'value2')
    
    break;

  default:
    break;
}

//"switch"문을 "if"문으로 변환하기
switch (browser) {
  case 'Edge':
    alert( "Edge를 사용하고 계시네요!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
    break;

  default:
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}
//

if (browser == 'Edge') {
  alert( "Edge를 사용하고 계시네요!" );
} else if (browser == 'Chrome'
  || browser == 'Firefox'
  || browser == 'Safari'
  || browser == 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
  } else {
    alert('현재 페이지가 괜찮아 보이길 바랍니다!')''
  }

//"if"문을 "switch"문으로 변환하기
let a = +prompt('a?', '');

if (a == 0) {
    alert( 0 );
}
if (a == 1) {
    alert( 1 );
}

if (a == 2 || a == 3) {
    alert( '2,3' );
}

//
let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert('2,3');
    break;
}
// 함수
function showMessage() {
  let message = "안녕하세요!"; 
  
  alert(message);
}

showMessage();

// return 함수
let age = prompt('나이를 알려주세요', '');

if (age >= 18) {
  alert('접속 허용')
} else {
  alert('접속 차단')
}
//
function checkAge(age) {
  return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}
alert(checkAge)

// pow(x,n) 함수 만들기
// x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result = result * x; // result *= x
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`${n}은 양의 정수이어야 합니다.`)
} else {
  alert( pow(x, n));
}

//

function pow(x, n) {
  return x ** n;
}
let x = prompt("x?", '');
let n = prompt("n", '');

if (n >= 1) {
  alert(pow(x, n))
} else {
  alert('자연수를 입력하세요');
}

// 나이를 알려주세요
let age = prompt("나이를 알려주세요.", 18);
let welcome;

if (age < 18) {
  alert("안녕?");
} else {
  alert("안녕하세요");
}

// 화살표 함수로 변경하기
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);

//
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);

// 객체
// 1. 빈 객체 user를 만듭니다.
// 2. user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
// 3. user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// 4. name의 값을 Pete로 수정해보세요.
// 5. user에서 프로퍼티 name을 삭제하세요.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete"
delete user.name;

// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// 모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

//
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (type of obj[key]) == 'number' {
      obj[key] *= 2;
    }
  }
}