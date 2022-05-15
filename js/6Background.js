const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"]; 
const chosenImage = images[Math.floor(Math.random() * images.length)] //[]숫자 선택
                                                                      //floor, random * .length = 명언과 동일
const bgImage = document.createElement("img"); //.createElement (html 요소 JS에서 만들기 성공)

bgImage.src = `img/${chosenImage}`; //bgImage source(.src) = `img/${chosenImage}`; -> img/는 소스 , ${chosenImage}는 변수 
document.body.appendChild(bgImage); //Html에 document, body에 .appendChild(메서드)이용해서(bgImage) 추가
//JS 에서 HTML 만들기 