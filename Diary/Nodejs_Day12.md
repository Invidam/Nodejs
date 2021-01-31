
# WEB2 Node.js Day 12


## 31. [App] 출력정보에 대한 보안

### 1. 소개

+ create에서 description이 밑에 내용이라면?
```
<script>
alert('merong');
</script>
```
alert가 실행된다.
+ `<script> </script>`안에는 javascript로 간주하여 js의 문법으로 실행된다.

이밖에도 
```
<script>
location.href = 'https://naver.com'
</script>  
```
이나 사용자의 로그인 정보 갈취등의 문제가 발생할 수 있다.

따라서 많은 웹사이트에서는 문제가 될 정보를 필터링한다.

+ 방법 1. `<script>`태그를  삭제시킨다.
+ 방법 2. entity를 이용하여 `< , >`을 `&lt; &gt;`로 표기한다.


### 2. 보안 및 npm을 이용한 모듈 사용

+ npm sanitize(소독) 을 다운받자.
	+ Weekly download를 보고 평판을 판단한 뒤 다운받자.
	
+ `npm init` : app을 npm으로 관리하기 위한 절차 시작.
	+ packagename, version, description, . . . 엔터 후 yes로 시작
	+ -g : 글로벌, 어디서든 사용하게끔
	+ -S : 우리가 진행하는 프로젝트에서만 사용.
+ `npm -S sanitize-html` : sanitize-html 설치
	+  sanitize-html에 의존하게 된다.
		+ 복잡한 의존관계가 있는데 이를 npm이 대신해준다.
		
## 3. main.js에 적용
+ title, description을 `sanitizeHtml(variable)`로 처리해준다.
	+ create할 때, `<script>`들이 data에는 있음에도 웹페이지에서는 보이지 않는다. (페이지 소스도 마찬가지로 안보인다.)
	+ 예민한 태그는 살균하여 보여준다.
	+ 예민하지 않은 태그중에 allowedTag가 아닌 태그도 보이지 않는다.
	+, {allowedTags : ['tag name']}으로 허용시키면 보이게 된다.
	
## 32. API
+ Application Programming Interace의 약자.

+ fs.readFile이라는 함수는 node.js의 개발자가 만든 것이다.
	+ 사용 설명서를 통해 말하고 있다. (이름, 파라미터, 리턴 값)
		+ 이러한 것들을 node.js개발자와 사용자간의 약속된 조작장치 (InterFace)라고 부른다.

+ InterFace를 실행하며 App을 만든다.
	+ App을 Programming하기 위한 InterFace을 API라고 한다.
	+ 즉 사용설명서가 API문서이다.
	
+ CreateServer의 API
	+ 파라미터 : 함수 (main.js를 지탱하는 커다란 익명함수)
		+ 익명함수는 요청힌 request와 응답인 response를 인자로 가진다.
	+ 리턴 값 : http.server()
		+ server.listen() : 요청에 대해 응답할 수 있도록 http server을 구동시키는 함수.
			+ 넣어주었던 3000은 port번호인데, listening을 시작할 때, 3000번 포트를 보다가 웹브라우저가 3000번 포트로 들어오면 만든 app을 동작시켜 응답할 수 있도록 하는 것이다.


## 33. 수업을 마치며
+ Javascript + Node.js -> Web App을 제작하였다.
	+ web app의 필수요소 + Internet의 동작원리를 배웠다.
	
### 추가로 공부할 것들

+ JavaScript : 웹브라우저를 프로그래밍적으로 제어하기 위해 고안됨.
	+ 클라이언트 와 서버측 의 언어를 js로 구현.
		+ js와 js로 제어하는 여러 시스템을 구분 -> 시스템 사용 실력 상승
+ DataBase
	+ 정보를 파일로 저장. (불편, 위험, 느림)
		+ 안전, 빠름을 위해 고안된 것이 database.
			+ database의 성능 보안 편리를 이용가능.
				+ ex) mongoDB MySQL
+ Framework
	+ 웹의 공통부분 :사용자의 요청 처리, 인증, 보안, 파일 서비스
		+ 공통부분을 구현해 놓은 것이 Framework이다.
+ Module & API 
	+ pm2같은 것들. 
	+ AWESOME: 주목받는 모듈들을 모아놓음.