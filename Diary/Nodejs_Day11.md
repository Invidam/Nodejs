



























# WEB2 Node.js Day 11


## 29. [App] 객체를 이용해 템플릿 기능 정리정돈하기.

+ 함수이름에 접두사 ,접미사를 많이 사용한다.
	+ 그루핑하기 위해서이다.
		+ 이후 객체화하기 편하다.
+ template 객체에
	+ html property를 만든다. (templateHTML의 내용을 옮긴다.)
	+ list property를 만든다. (templatelist의 내용을 옮긴다.)
	+ 구분은 ','로 해준다 (왜 ;나 공백이 아닌 ,인 이유는 객체의 property는 동등하며(함수든 변수든) 많이 존재하기 때문이다.)
+ 실행시킬 때  template.property로 실행시킨다.
+ template 변수가 이미 쓰고있어서 이를 html로 바꿔주었다.

+ 코드양 ↑-> 객체 이용 필수적
+ 리펙토링 : 동작 같은데, 내부 코드를 효율적으로 바꾸는 행위

## 30. [Node.js] 객체를 이용해 템플릿 기능 정리정돈하기.
+ 객체를 담은 .js파일을 `module.exports = M;` 으로 적는다.
	+ 이 파일의 'M'이라는 객체를 모듈 밖으로 export한다.

+ 모듈을 이용하려는 파일은 `var part = require('./m_part.js');` 으로 적는다.
	+ part에는 객체가 들어있으며, 이는 모듈에서 가져온 것이다.

## 31. [App] 모듈의 활용
+ lib : 작은 프로그램들을 모아놓은 것.
	+ lib/template.js에 template 객체를 옮긴다.
		+ module.exports = function(){}처럼도 가능하다.

### 코드->함수->객체->모듈->라이브러리

## 30. [App] 입력 정보에 대한 보안

+ `?id=../security.js` 
	+ readfile에서, ..(부모)/security.js(비문 저장되 파일)을 읽어 페이지에 출력한다.
		+ 비문이 다 보이며, 수정 삭제까지 가능하다.

+ `path.parse('../security.js');`
	+ root, dir, base,ext,name이 보여진다.
		+ 이 때, 여러 정보가 보여져 보안이 낮은 상태이다.

+ var filteredId = path.parse(queryData.id).base;
	+ base만 들어와 ../security.js 를 id값으로 줘도 security.js(base 값)만 주소로써 readfile에 처리된다.
		+ id, update, delete를 위 코드로 바꾸어준다.
