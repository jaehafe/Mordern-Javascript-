// 자바스크립트 기본

// 변수 가지고 놀기
let admin, name;

name = "John";
admin = name;

alert(admin);

// 올바른 이름 선택하기
let ourPlanetName = "Earth";
let currentUserName= "John";

// 문자열 따옴표
let name = "Ilya";

alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

// 
let age = prompt('나이를 입력하세요', 100);
alert (`당신의 나이는 ${age}입니다.`);

//
let isBoss = confirm("당신이 주인인가요?");
alert( isBoss );

// 간단한 페이지 만들기
let USERNAME = prompt("이름이 무엇입니까?", "");
alert (`당신의 이름은 ${USERNAME} 입니다.`);

// 전위형과 후위형
let a = 1, b = 1;

let c = ++a; // 2, 전위형은 증가 후의 값을 반환
let d = b++; // 1, 후위형은 증가 전의 값을 반환
a = 2
b = 2
c = 2
d = 1

// 형 변환
"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
"  -9  " + 5 // -9 5
"  -9  " - 5 // -14 뺄셈 연산자는 인수를 숫자형으로 변화
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

// 덧셈 고치기
let a = +prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1); // +
let b = +prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2); // +

alert(a + b); // 3

// 'else’절
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
  alert('정답입니다!');
} else {
  alert('오답입니다!'); 
}

// else if로 복수 조건 처리하기
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year < 2015) {
  alert('숫자를 올려보세요');
} else if (year > 2015) {
  alert('숫자를 내려보세요');
} else {
  alert('정답입니다!');
}

// if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"라는 질문을 하는 코드를 작성해 보세요.

let value = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?", '')

if (value == 'ECMAScript') {
  alert('정답입니다!');
} else {
  alert('모르셨나요? 정답은 ECMAScript입니다!');
}

// if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력

let value = prompt("숫자를 입력하세요", '')

if (value > 0) {
  alert('1');
} else if (value < 0) {
  alert('-1');
} else {
  alert('0');
}

// 조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형
let result = ( a + b < 4) ? '미만' : '이상';

// 'if..else'를 '?'로 교체하기
let message = (login == '직원') ? '안녕하세요.' :
  (login == '임원') ? '환영합니다.' :
  (login == '') ? '로그인이 필요합니다.' :
  '';

// 아래 코드의 결과를 예측
alert( null || 2 && 3 || 4 ); 
(null || 3 || 4); // 3

// age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성
if ( age >= 14 && age <= 90)

// age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성
if (!(age >= 14 || ))


// 프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

// 사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

// 비밀번호 확인 절차는 다음과 같습니다.

// 맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
// 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
// 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.
let username = prompt("사용자 이름을 입력해주세요.",'');

if (username = 'Admin') {
  
  let password = prompt("비밀번호: ", '')

  if (password == 'TheMaster') {
    alert('환영합니다!');
  } else if (password == '' || password == null) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }

} else if (username == '' || username == null) {
  alert('취소되었습니다.');
} else {
  alert('인증되지 않은 사용자입니다.');
}

// 반복문 빠져나오기
let sum = 0;

while(true) {
  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break;

  sum += value;

}
alert(`합계: ${sum}`)

// 홀수만 출력해 다음 반복으로 넘어가기
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;

  alert(i);
}

// i와 j를 반복하면서 프롬프트 창에 (0,0)부터 (2,2)까지를 구성하는 좌표 (i, j)를 입력하게 해주는 예시

  outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

      let input = prompt(`${i},${j}의 값`, '');

      if(!input) break outer;
    }
  }
  alert('완료!')

// for 반복문을 이용하여 2부터 10까지 숫자 중 짝수만을 출력
for (let i = 2; i < 10; i++ ) {
  if ( i % 2 == 0) {
    console.log(i);
  }
}

// 사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요. 사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 띄워줍시다.
// 사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우, 혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.
// 사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다. 숫자가 아닌 값이 입력되는 예외 상황은 처리하지 않아도 됩니다.

let num;

do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
} while (num <= 100 && num);

// 2부터 n까지의 숫자 중 소수만 출력해주는 코드를 작성
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}