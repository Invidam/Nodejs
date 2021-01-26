# WEB2 Node.js Day 7




## 19 [HTML] form
+ 기존의 문제점 : 컨텐츠 생성을 관리자만 할 수 있다. (Data 폴더 접근때문)
+ html의 form기능으로 해결이 가능하다.
	+ 사용자->관리자에게 data 전송 기능
	+ `<form action = "loc" method="post"> </form>` : 서버의 loc로 post방식을 통해 전송한다는 것을 의미
	+ textarea : 긴 입력 창
	+ input type = "text" : 한 줄 입력창
		+ place hold 태그 : 검색하시오. 라고 옅은 글씨로 샘플이미지 생성
		+ type = "submit" : 
	+ method : 전송방식
		+ get : url이 data에 따라 바뀜. (기본) [용도: data를 서버로부터 가져올 때]
		+ post : url이 보이지 않음. data가 짤릴 수도 있음. [용도: 수정 생성 삭제]

## 20. [App] 글생성 UI 만들기
+ anchor을 이용하여 /create 리스트를 만든다.
	+ /create로 이동하였을 때, description을 htmld의 form 내용으로 바꾼다.
	+ form기능이 /create 페이지에 적용이 된다.
		+ network-headers-form data에 입력한 데이터가 보인다.
