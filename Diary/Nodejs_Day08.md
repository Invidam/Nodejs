# WEB2 Node.js Day 8




## 21. [App] POST 방식으로 저장된 데이터 받기	
+ else if에 pathname === '/create_process'일 때를 추가한다.
### http.createServer(fun(request,response){}); 의 파라미터
	+ request: 요청할때 보낸 정보 
	+ response: 응답할때 전송할 정보

+ Node.js에서 POST방식으로 입력된 data가 많을 경우를 대비하여
	+ (조각내어진) 데이터를 수신할 때 특정 인자(data)로 수신한 정보를 줌
		+이 data를 body에 더함. (즉 나뉘어진 data를 body에 차곡히 모음)
	+ 데이터가 다 들어오면 end콜백 함수를 호출 -> 정보 수신이 끝났음을 의미
		+ `var post = qs.parse(body)(data들을 저장함)의 정보를 줌`
			+ post를 console.log를 하니 title: 제목, description : 본문이 나온 것을 확인. 
			+ post는 객체고, post.title , post.desc 에 제목과 본문 data가 담겨져 있다.
	+ data, end 를 event라고 한다.

## 22. [App] 파일생성과 리다이렉션

### 파일생성
+ `fs.writeFile('loc/${title}(위치/만들파일제목)',desc(본문 내용),'utf8',function(err) {}
;+ fs.writeFile함수로 title과 description에 따라 파일을 만든다.
	+ 파일을 만들면 list에서 확인가능하며, id값으로 파일에 대한 웹페이지를 볼 수 있다.

## 리다이렉션
+ 사용자를 특정 페이지로 이동시키는 것.
+ response.writeHead()
	+ 200: 성공
	+ 301 : 영구히 주소가 바뀌었으니 이리로 오라는 뜻
	+ 302:  일시적으로 바뀌었으니 이리로 오라는 뜻
		+ `response.writeHead(302, {Location : '/?id=${title}'});`
	+ 403 : page not found 사용자 요청 에러
	+ 300~ : 서버 에러
