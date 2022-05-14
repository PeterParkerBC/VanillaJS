/*새롭게 배운 명령문 
1. 조건문(식): esle if 
2. 논리 연산자: ||(or) &&(and) 
3. 비교 연산자: >< =

1) 조건문
프로그래밍 언어에선 위/아래 순서대로 순위.
순차적 check
if      (True or False)
else if (아니면 확인)
else if (아니면 확인)
else    (모두 해당 안됨)

2) 논리 연산자 
|| (or) <-- x 와 y 둘중 하나 True = True 
&& (and) <-- x 와 y 둘다 True (하나만 True = False) 

3) 비교 연산자 
> 는 크다
< 는 작다 
>= 는 크거나 같음 
<= 는 작거나 같음 
*/

const age = parseInt(prompt("How old are you?")); 

if(isNaN(age) || age <0) { //-minus
    console.log("Please write a number (postive).");
} 
//조건 추가 
else if (age < 20) { 
    console.log("You are too young."); 
} 
else if (age >= 20 && age<=50) { 
    console.log("You can drink. Welcome. :)");
} 
else if (age>50 && age<=80) {
    console.log("You should exercise. :)");
} 
else if(age>80) {
    console.log("Beware of your health.");
}
else { 
    console.log("You can't drink");
}

/*참고 
1. else는 조건이 필요 없다. 모두 해당 안되면 작동되는 함수이기 때문. 그리고 모든 요구 조건 충족 했기 때문 else 구지 필요 X. 
2. 꼭 크롬에서 console.log() 실습 해보자. 적용 해보면 또 색다르다. 
3. 신기한건 you are too young은 20보다 어릴때, you can't drink는 50세 보다 < 많을 때 적용된다.  
4. -minus 하는 사람들이 있을 수 있으니, ||(or)를 이용해 기능을 upgrade할 수 있다. 

*/ 