/*조건문 안에 연산자 우선순위 
<JS는 작은 괄호 부터 연산한다>
*/
if((a && b) || (c && d) || (x || w)) {
//1위 (x || w) = x or w, 둘중 하나 일치 True
//2위 (c && d) = c and d, 둘다 일치 True  
//3위 (a && b) = "     "    "       "
//결과 예) False or True or False = ||(or)이기 때문에 'True'
} 

