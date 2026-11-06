// part1. (1~10)

let age = 25;
console.log(age);

const userName = '홍길동'
console.log(userName);

let price = 1000;
price = 2000;
console.log(price);

let data;
console.log(data);

const myName = '김철수'
let myAge = 30;
let height = 178.5;
let student = false;
console.log(myName);
console.log(myAge);
console.log(height);
console.log(student);

//문제 6 : 30 10
//문제 7 : let을 두번줬다 let score = 80; score = 90; 으로 수정
//문제 8 : const로 상수 설정을 했기 때문에 값을 바꿀수 없다.
//문제 9 : 1score > score1 , user age > user_age , user-name > userName 
//문제 10 : A  var 은 중복선언이 가능하지만 오류가 발생할 수 있으므로 되도록 let을 쓴다

//part 2 (11~20)

let a = 15;
let b = 4
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log(100%7);

console.log(2**5);

//문제 14 : 3.333... , 1
//문제 15 : 20
//문제 16 : 30
//문제 17 : 18
//문제 18 : 13

let apple = 1200
console.log(apple*5);

let time = 125;
console.log(Math.floor(125/60)+'시간');
console.log(125%60+'분');

//part3

//문제 21 : 3030
//문제 22 : 102030
//문제 23 : 102030
//문제 24 : 60원
//문제 25 : 합계:1020
//문제 26 : 합계:30
//문제 27 : 510 50
//문제 28 : 80 , 200 , 25

let name29 = '홍길동';
let age29 = 25;
console.log(name29+'님의 나이는 '+age29+'세입니다.');

//문제30 : 3030, 301020 , 103020 , 2030

//part4

//문제 31 : 11
//문제 32 : 8
//문제 33 : 5, 6
//문제 34 : 6, 6
//문제 35 : 10, 9
//문제 36 : 9, 9
//문제 37 : 11, 10
//문제 38 : 11, 11
//문제 39 : 6, 10, 5
//문제 40 : 6, 9, 16
//문제 41 : 9, 4, 6
//문제 42 : 6, 11
//문제 43 : 31, 21
//문제 44 : 20, 13   b = a++ + --b > 5 + 9 = 14 , a = ++a + b-- > 7 + 14= 21 a=21 b=13
//문제 45 : x = ++y + z-- => x:9 y:6 z:2 , y=x-- - ++z => x:8, y:6, z:3 , z=x++ + y-- => z:14 x:9, y:5
//        : 9, 5, 14

//part5
//문제 46 : 15
//문제 47 : 13
//문제 48 : 20
//문제 49 : 25
//문제 50 : 2
//문제 51 : 22
//문제 52 : 4
//문제 53 : a += 20; , a *= 3 , a -= 15 , a/=5

let balance = 100000;
balance += 30000;
balance -= 25000;
console.log(balance+'원');

let hp = 100;
hp -= 30;
hp += 20;
hp -= 15;
console.log(hp);

//part6

//문제 56 : true , false
//문제 57 : true , false , true , false
//문제 58 : true , false
//문제 59 : false, true
//문제 60 : false, true , false

let myAge2 = 30;
console.log(myAge2>=20);

let myScore = 90;
console.log(myScore>=60);

//문제 63 : true, false, true, true
//문제 64 : true, 6, true, 11

let a65 = 100;
let b65 ='100';
console.log(a65===b65);
console.log(a65==b65);

//part7

//문제 66 : true, false, false, false
//문제 67 : true, true, true, false
//문제 68 : false, true, true
//문제 69 : true 
//문제 70 : true
//문제 71 : false
//문제 72 : true , true
//문제 73 : let age73 = 25; (age73 >= 20) && (age73 <= 30)
//문제 74 : let score74 = 75; attendance = 90; (score74 >= 60) && (attendance >= 80)
//문제 75 : true, true, false, true, false

//part8

//문제 76 : 성인
//문제 77 : 불합격

let a78 = 10;
console.log(a78>0 ? '양수' : '음수');

a = 10;
b = 20;
console.log(a>b?'a':'b') //변수를 감싸지 않으면 변수값 출력 감싸면 변수 출력

//문제 80 : 100
//문제 81 : 15

let num82 = 17;
console.log(num82%2==0?'짝수':'홀수');

let price83 = 25000;
console.log(price83>=30000?'무료배송':'배송비 발생');

//문제 84 : B
//문제 85 : 25

//part9
//문제 86 : 100
//문제 87 : '100' 
//문제 88 : '1020'
//문제 89 : 30
//문제 90 : '1020'
//문제 91 : '100200' , 300
//문제 92 : '102030', 60
//문제 93 : 5.14 , '100200'
//문제 94 : 5020, 30, 1000, 2.5
//문제 95 : '102030', 60, 2010, 1020
//문제 96
let item = 15000;
let quantity = 3;
let fee = 3000;
let price96;
item = item*quantity;
price96 = item + fee;
console.log(price96);
console.log(price96>=50000?'고액주문':'일반주문');

//문제 97
let korean = 85;
let english = 90;
let math = 75;
let total = korean + english + math ;
let avg = total/3
console.log(avg>=80?'우수':'보통');

//문제 98
let money = 100000;
money += 50000;
money -= 30000;
money -= 20000;
console.log(money);
console.log(money>=100000?'잔액충분':'잔액부족');

//문제99
let age99 = 15;
let height99 = 155;
let withParent = true;
let possibility = (age99>=14&&height99>=150)||(age99<14&&(height99>=150&&withParent))
console.log(possibility?'입장가능':'입장불가');
age99 = 12;
possibility = (age99>=14&&height99>=150)||(age99<14&&(height99>=150&&withParent))
console.log(possibility?'입장가능':'입장불가');
withParent = false;
possibility = (age99>=14&&height99>=150)||(age99<14&&(height99>=150&&withParent))
console.log(possibility?'입장가능':'입장불가');
// 변수가 바뀌었기 때문에 possibility도 다시 정해줘야 값이 바뀐다. 
// 직접 다시 계산하라고 명령하지 않으면 이전 결과를 그대로 기억하고 있다

//문제 100
/* a=15,b=19,a=35,b=20
35, ++b = 20 +a--(15) = 35
20, b--; ++b; > b=20
'30', c는 문자열
'5530', a+b=55먼저하고 문자열과의 덧셈이므로 그냥 나열
85, c를 숫자형으로 변환했으므로 그냥 다 덧셈
true, 35>20 참
true, a =='35' =='숫자문자형'->숫자형값으로 본다.
false,   ===은 자료형도 같아야 참이다.
true, 양쪽 둘다 참
true, c==30 자료형값이 다르지만 ==을 썼으니 참
55, result1이 true이므로 앞의값 a+b출력 35+20=55


*/
