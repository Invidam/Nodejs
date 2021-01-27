



























# WEB2 Node.js Day 10

## 26. [App] 글삭제 - 글삭제 버튼 구현



+ 삭제버튼은 링크로하면 안된다.
	+ 링크는 주소가 창에 뜬다. (이를 카피해 보낼 수 있다.)
	+ ex) 구글의 사이트 주소를 미리 캐싱받는 시스템이 있었는데 (get방식으로 구현한)delete주소까지 캐싱받아 문제가 되었었다.
	+ 따라서, post방식인 form으로 구현한다.
		+ form을 이용해, 버튼을 눌렀을 때, id값을 delete_process에 넘겨준다.
		+ input type = hidden : 안보임. (id값 넘겨줌)
		+ input type = submit : 버튼 구현 (delete버튼 보이게)
		

## 27. [App] 글삭제 - 기능완성
+ update_process에서 복붙한다.
+ delete 역할을 하는 함수는 `fs.unlink(path,callback)` 이다.
+ 삭제 후 홈페이지로 보내준다.

### CRED
+ C: create_process
+ R : file.read()
+ E : update_process
+ D : delete_process


## 28. [JavaScript] 객체

### 객체 - 형식
+ 객체 배열 모두 정보저장.
	+ 배열은 순서에 따라
	+ 객체는 그렇지 않다.

+ 배열 : `['hsp','ana','inv']`  참고 : []

+ 객체 : `{	'name': 'hsp','ps': 'ana','git':'inv'}`  참고 : .

### 객체 - 반복문
+ 객체 반복문은 `for(var name in roles) {}`
	+ name은 객체
	+ roles[name]은 값

### 객체 - 값으로써의 함수
+ JS, 함수는 독특한 특성(처리할 일에 대한 정보를 가진 구문이면서 동시에 값인 특성)을 갖고 있다.
	+ var f = func()
	+ f() : func() 실행.

	+ var a = [f]   : 배열 원소로써 존재가능 (값이니까)
	+ a[0]() : 실행

	+ var o = {func:f}  
		+ func는 property , 
	+ o.func() :  실행

+즉, JS에서 배열 객체는 모두 data(함수도 포함)를 담을 수 있다.


### 객체 - Data, value를 담는 그릇으로써의 객체
+ 객체의 변수명 변수값을 담는다.
	+ 즉 여러 변수들을 특정 집합안으로 정리정돈한다.
	+ this 기능도 존재한다. (포인터가 아니다.)

>  객체를 통해 함수와 변수를 그루핑함으로써 코드의 복잡성을 획기적으로 낮출 수 있다.