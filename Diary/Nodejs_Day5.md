
# WEB2 Node.js Day 5  


## 13 [Node.js] 파일 목록 알아내기
+ Data 추가 삭제 편집 시 -> 글의 목록들을 추가 삭제 편집해야한다.
	+ fs.readdir 명령어로, 특정 폴더안에 있는 파일들을 arr로 출력이 가능하다.
+ `fs.readdir( '위치' , function(error,filelist) {console.log(ilelist)})` : 위치에 있는 파일들을 arr로 출력한다.

## 14. [App] 글목록 출력하기

+ fs.readdir( '위치' , function(error,filelist) {})에서
	+ fielist[]라는 배열에 디렉토리의 파일이름들이 담겨있다.
	+ list 변수에 `<ul>` +(while문 돌며 /?id=${filelist[i]}를 `<a>`로 갖는 ${filelist[i]}) +`<ul>`를 추가시킨 후 기존 list위치에 이 변수를 옮긴다.
		+ `
		  var i = 0;
		  var list = '<ul>';
		  while(i < filelist.length)
		  {	
		    list = list + '<li><a href = "?id=${filelist[i]}"> ${filelist[i]} </a> </li>';
		    i = i+1;   //backtick을 작음따옴표로 표기함.
		   }
		  list = list + '</ul>';
		  `
	+ 그러면 Data에 있는 파일명이 list에 뜨며, 클릭시 id값이 바뀌어 id에 해당하는 data를 decription으로 갖는 웹페이지가 열린다.



## 15.[JavaScript] 함수의 문법 및 입출력
+ 
   `function fun(parameter1, parameter2) {
	return parameter1+ parameter2;
	}`

+ 위 함수 `fun(arg1, arg2)`는 arg1+ arg2가 리턴된다.
