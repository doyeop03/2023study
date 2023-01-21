function join1(){
    window.location.href=
    'https://www.naver.com/'
}
function join2(){
    window.location.href=
    'file:///C:/Users/doyeo/OneDrive/%EB%AC%B8%EC%84%9C/2023study/mainpage.html'
}
function signup(){
  window.open('file:///C:/Users/doyeo/OneDrive/%EB%AC%B8%EC%84%9C/2023study/signup.html')
}

//console.log(document); // html 태그 전체를 콘솔에 띄워주자.
//var signinButton = document.getElementById("signinButton") // 버튼을 만들고.
//signinButton.addEventListener('click', signinFunc) // 'click'이란 id의 버튼을 누르면 signinFunc 함수를 실행.

function signinFunc() {
  var id = document.getElementById("id").value; // userid 의 값을 받아와 넣음.
  var password = document.getElementById("password").value; // userpw 의 값을 받아와 넣음.

  if(id == "doyeop" && password == "0000") {
   // err.innerText=" 로그인 성공";
   window.location.href=
   'file:///C:/Users/doyeo/OneDrive/%EB%AC%B8%EC%84%9C/2023study/mainpage.html';

    console.log("로그인 성공했습니다.");
  } else {
    err.innerText="아이디 또는 비밀번호를 잘못 입력했습니다.";
    console.log("로그인 실패했습니다.");
  }
}

