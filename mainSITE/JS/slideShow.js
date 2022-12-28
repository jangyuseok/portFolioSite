let slides = document.querySelectorAll("#slides > img"); //선택자를 2개 이상 사용한다면 All로 가져와야 한다.
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let current= 0;

showSlides(current); // 현재 이미지 표시할 함수(prev나 next에 클릭을 입력받아 값을 받아온다.)
prev.onclick = prevSlide; // 이전 이미지 표시
next.onclick = nextSlide; // 다음 이미지 표시

function showSlides(n) { // 인수 만들어서 current 매개 변수에 보낼 함수
  for (let i=0; i<slides.length; i++){
    slides[i].style.display = "none"; // 반복하여 모든 이미지를 화면에서 감춤
  }
  slides[n].style.display = "block"; // n번째 이미지만 화면에 표시
}

function prevSlide() {
  if (current > 0) current -= 1; // current값이 0보다 크면 이전 위치로
  else 
    current = slides.length - 1; // 그렇지 않으면(첫 번째 이미지이므로) 마지막 위치로
    showSlides(current); // 이동한 위치의 이미지 표시
}

function nextSlide() {
  if (current < slides.length -1) current += 1; // current값이 2보다 작으면 다음 위치로
  else 
    current = 0; // 그렇지 않다면(마지막 이미지이므로) 첫 번째 위치로 이동
    showSlides(current); //이동한 위치의 이미지 표시
}
