# WEB2 Node.js Day 9

	

## 23.[App] 글수정-수정링크 생성
+ 수정 버튼 만들어야 한다.
	+ home page: create
	+ file page: create, update
	+ create page: 필요x
		+ templateHTML 함수에 control 인자 추가 후, create와 update 앵커를 페이지에 넣을 건지, 인자에 넣어준다.

+ 수정은 id값을 이용하여 한다.
	+ `<a href = "update?id=${title}">` 로 변경

## 24.[App] 글수정-수정할 정보 전송
+ 필요한 것들
	+ form, read 기능

+ read 기능
	+ 역할 : 페이지의 정보를 표시하는 역할
	+ 가져온다 (readir + readfile을 가진 ?id={}인 조건문)에서 
+ form 기능
	+ 역할: data를 사용자->서버로 전송하는 역할
	+ 가져온다 (/create의 form)에서
+ form에서, read한 정보들을 알려주어야 한다.
	+ input :`value = "${variable}"`
	+ textarea :  <ta>${var} </ta>
+ 수정한 정보와 식별한 정보를 구분해야한다. (제목의 경우 바꾼 제목이 기존의 파일에 없으면 참조할 수가 없다)
	+ `<input type= "hidden" name = "id" value = ${title}`>
		+ id에 해당하는 파일의 제목을 title, 내용을 description으로 변경한다.
		+ 굳이 input을 사용해서 기존의 정보를 전달하는 이유는 submit은 input의 내용만을 전송하기 때문이다.
		
## 25.[App] 글수정- 수정된 내용 저장
+ if문에 "update_process"일 때를 추가
	+ 가져온다 (/create_process)에서의 파일 읽기

+ fs.rename으로 제목만 바꾼다
	+`fs.rename('loc/id(바뀌기 전 제목)','loc/title(바뀔 제목)', function(error) {}`
+ fs.writeFile로 내용을 넣는다. 
	+ 넣는다고 표현하는게 맞지만, 기능은 바꾼다 덮어쓴다 라고 봐야한다.
	+ 내용은 writehead 302, end 즉 update와 같다.
+ \`(리터럴)\` 사용할 때 : ${var}을 쓰려고 할 때 + \n쓰기 싫을 때주로 사용함. 
	+ **코드를 리터럴로 감싸서 옮길 때 사용함. -> reponse.end() or ${description} or writeFile (,description,) 등의 경우 페이지 제작을 위한 코드로써 사용됨.
