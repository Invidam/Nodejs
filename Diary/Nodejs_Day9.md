# WEB2 Node.js Day 9

	

## 23.[App] 글수정-수정링크 생성
+ 수정 버튼 만들어야 한다.
	+ home : create
	+ file : create, update
	+ create : x
		+ templateHTML 함수에 control 인자 추가 후, create&update 페이지를 수동으로 넣어준다.

+ 수정은 id값을 이용하여 한다.
	+ <a href = "~?id=${title}"> 로 변경

## 24.[App] 글수정-수정할 정보 전송
+ 필요한 것들
	+ form, read 기능

+ read 기능 : 가져온다 (id값을 통해 파일->페이지로 출력해주는 if문)에서
+ form 기능 : 가져온다 (/create의 form)에서
+ form에서, read한 정보들을 알려주어야 한다.
	+ input :`value = "${variable}"`
	+ textarea :  <ta>${var} </ta>
+ 수정한 정보와 식별한 정보를 구분해야한다. (바꾼 값이 다른 값이면 참조할 수가 없다)
	+ `<input type= "hidden" name = "id" value = ${title}`>
		+ 굳이 input을 사용해서 기존의 정보를 전달하는 이유는 submit은 input의 내용만을 전송하기 때문이다.
		
## 25.[App] 글수정- 수정된 내용 저장
+ if문에 "update_process"일 때를 추가
	+ 가져온다 (/create_process)에서의 파일 읽기

+ fs.rename으로 제목을 바꾼다
+ fs.writeFile로 내용을 바꾼다.
+ `` 사용할 때 : ${var}을 쓰려고 할 때 주로 사용함. 
+ fs. 함수들을 잘 알아놓기. (조금 헷갈린다.)