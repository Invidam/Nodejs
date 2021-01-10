
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


## 6. [Node.js] url
+ url : 모듈(여러 기능을 모은 것)

+ http://opentutorials.org:3000/main?id=HTML&page=12
	+ http <- protocol : 통신 규칙  ex) http, ftp
	+ opentutorials.org <- host(domain) : 특정 인터넷에 연결된 컴퓨터 주소
	+ 3000 <- port : 통신할 서버의 주소  ex) 80 : web server
	+ main <- path : 어떤 디렉토리의 파일인지를 가리킴
	+ ?id = HTML&page=12 <- query string : 웹서버에 data 전달하는 것 {이번에 다룰 것}
		+ 시작은 ?로, 값과 값은 &로 구분

+ 쿼리스트링{Query string}에 따라 다른 정보 보여주기
	+ ?id 값은 url 변수에 들어간다.
	+ queryData에 id값이 들어간다.


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
