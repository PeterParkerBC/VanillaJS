const clock = document.querySelector("h2#clock"); 


function getClock() {
    const date = new Date(); //object가지고 올때 꼭 대문자 D
    const hours = String(date.getHours()).padStart(2, "0");      //object가지고 올때 꼭 대문자 S
    const minutes = String(date.getMinutes()).padStart(2, "0"); 
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
    //fucntion이 실행되기 위해선 
    getClock(); //바로실행
    setInterval(getClock, 1000);

/*
1. setInterval : 간격 (점검, 주식 api 확인 등)
ex. setInterval(sayHello, 5000); //(function, time(ms))

2. setTimeout : 한번 호출 (정해진 시간) 
ex. setTimeout(sayHello, 5000);

3. date.function 을 사용하면 많은 날짜 정보를 가지고 올수 있다 
-date Object(객체)는 엄청 많은 .function(기능) 을 가지고 있다
※https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
예) date.getDate(); , date.getDay(); , date.getFullYear(); , date.getHours(); , date.getMinutes();

4. padStart : at the start  of the string add (many, "what") 
ex) "1".padStart(2, "0") -> "01"
                 2 means string should have Minimum of two characters 
                "0"  means to add a "0" charater at the start

    padEnd : at the end of the string add (many, "what")
ex) "1".padEnd(2, "0") -> "10"
                  2 means string should have Minimum of two characters 
                 "0"  means to add a "0" charater at the end 

5. String -> Number, add String(info)
    new Date().getHours()
    = 22
    String(new Date().getHours())
    = '22'
*/

