
# WEB2 Node.js Day 3

- - -

## 5.  [JS] Temlplate Literals

+ 문자열에서, 줄바꿈을 하는 방법
	+ 줄바꿈을 하려는 곳에 '\'을 붙이고 줄바꿈을 한다
		+ 코드상에서는 되는데, 출력에서는 변화가 없다.
	+ \ -> \n\으로 교체
		+ 출력에서도 가능.
	+ template literal : 
		+literal : data를 표현하는 기호.
		+ ` (문장) ` 로 표현
			+ ` (문장) ${변수} 
		+ 메모장에 적듯이 적으면 알아서 줄바꿈


- - -
### 작성한 코드 설명
+ X = require('X') : 'X'라는 모듈(여러기능의 집합체)을 X라는 객체로 가져온다.

+ http.createServer(function(request,response) 에서,
	+ request : 사용자가 요청한 값(입력한 주소)
		+ url의 경우 request객체에서 가져온다. (주소와 관련이 있으므로)
	+ response : 서버가 응답한 값
		+ writeHead or end 함수는 response객체에서 가져온다. (출력or응답과 관련이 있으므로)
	+ `_url = request.url` : /?id=@@@ 를 담고있다.
		+ (나는 url 전체은 http부터 담고있을 것이라 생각했는데, 상대 url이나 프로토콜에서의 url등은 꼭 그렇게 전체를 담고있는게 아니었다.)
		+ path + querystring만 담고 있다.)
+ app.listen(3000) : 3000포트로 리스닝하여 접속 성공시 콜백함수로 전체 코드를 출력

- - -

## 6. [Node.js] url
+ url : 모듈(여러 기능을 모은 것) & IP주소를 언어로 표현한 것 ex) http://www.google.com/  

+ http://opentutorials.org:3000/main?id=HTML&page=12
	+ http <- protocol : 통신 규칙  ex) http, ftp
	+ opentutorials.org <- host(domain) : 특정 인터넷에 연결된 컴퓨터 주소
	+ 3000 <- port : 통신할 서버의 주소  ex) 80 : web server
	+ main <- path : 어떤 디렉토리의 파일인지를 가리킴
	+ ?id = HTML&page=12 <- query string : 웹서버에 data 전달하는 것 {이번에 다룰 것}
		+ 시작은 ?로, 값과 값은 &로 구분

+ 쿼리스트링{Query string}에 따라 다른 정보 보여주기
	+ ?id 값은 url 변수에 들어간다.
	+ queryData(`=url.parse(_url, true).query;`)에 querystring들이 들어간다. 
	+ ?id=html&page = 12 , id(변수) - html(값)  & page(변수) - 12(값)이다.

- - -


## 7. [App] 동적인 웹페이지 만들기
+ template literal의 ${}안에 queryData.id를 넣어 동적으로 텍스트가 바뀌게 한다.
	+ 추가로, <a>에도 ?id=[  ]로 이동하게끔 바꾼다.

+ 본문을 동적으로 바꾸려면, template의 내용도 바꾸어야 한다.




- - -
## 8. [Node.j] Node.js의 파일 읽기 기능
+ System의 핵심 매커니즘
	+ C : create
	+ R : read
	+ U : update
	+ D : delete
		+C,R을 중요히 해야한다.

+ 오늘 할 것 : 파일을 node.js로 읽는 법.  = R

+ fs.readFile('주소','인코딩 방식', function(err,data) {
	console.log(data);
});
	+ utf8방식으로 주소에 있는 파일을 읽어 console.log로 출력한다.


- - -

## 9. [App] 파일을 이용해 본문 구현

+ 1,2,3.html의 본문 내용을 각각 제목의 파일로 생성한다.
+ fsreadfile함수로 `data/${title}` (입력한 id값)에 있는 파일을 읽어 description에 넣는다.
+ template을 읽을 때, template안에 있는 (p태그의 내용에 위치시킨 )description도 같이 읽힌다.
+ title : querydata(id값) 가 들어있고 description은 파일의 내용(본문에 해당할 db에 있는 파일의 내용)이다.
