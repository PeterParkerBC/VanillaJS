/*몇 살 인지 물어보기 
parseInt: parse(문장 문법) 분석 Int(integer)정수 
문장(string)을 숫자(정수)로 바꿔준다 
예) "1515" --> 15 
예2) "adnvksd" --> NaN (not a number)
prompt: "사용자 모니터에 나타나는 창" 
요약: 1) 숫자를 이름으로 대체가능 (ex. parseInt)
2) 함수 안에 (함수)를 쓸 수 있다는 것  
*/

const age = parseInt(prompt("How old are you?")); 


/*conditionals 조건문
if (boolean) 만 들어올수 있다 
why? 만약! 조건은 Yes, No 둘중에 하나다  
if: 만약에 (조건문) True
else: 반대 or 다른 (조건문) False
참고: if(isNan(숫자)) <-- 만약, 숫자가 아니면 True(false) (Please write number)
                    <--   숫자면 False(true) (Thank you for writing your age)
                    *If와 isNaN <- True기 때문에 엄청 헷갈리지만 익숙해 지면 될거 같다.                
*/
if (isNaN(age)) { 
    console.log("Please write a number.");
} else {
    console.log("Thank you for writing your age.");
}