# WEB2 Node.js Day 6




## 16. [App] 함수를 이용해서 정리 정돈하기
+ template = templateHTML();
	+ parameter : title, list, body(description)
	+ operate: 리터럴에서, title과 list, body를 이용하여 페이지 내용을 만들어 리턴한다.
	+ return : 페이지 내용을 담은 리터럴
+ list = templateList(filelist); 
	+ parpameter : filelist (디렉토리에서의 파일이름을 배열로 가진 것)
	+ operator : while문을 돌며, filelist[i]를 list에 추가시켜 완성된 list를 리턴한다.
	+ return : 완성된 list
	
+ 함수 리턴 값으로 template literal을 리턴하여 end()나 다른 함수의 파라미터로 사용된다.

## 17. [Node.js] 동기와 비동기 그리고 콜백

### 동기와 비동기
+ 동기(synchronous)
	+ 순서대로 처리
+ 비동기(asynchronous)
	+ 시간이 오래 걸리는 일을 맡겨놓고 다른 일을 처리하여 동시에 효율적으로 처리함.
	+ 병렬처리
	+ node.js에서 할 수 있음.

+ node.js문서의 여러 컨텐츠들은 sync기능들을 가진 것과 갖지 않은 것으로 2종류나 있음.

+ 실습 (동기와 비동기의 차이에 대해서)
	+ readFileSync(동기방식) : A -> B -> C로 출력
	+ readFile(비동기 방식): A ->C -> B로 출력
	+ A,C : 문자
	+ B : fs.readfile('위치','인코딩방식' ,function(err,text){ 내용 }); 에서의 내용
	+ 즉, 비동기방식은 시간이 오래 걸리는 일을 나중에 처리한다. (맡겨놓고 다른일을 먼저 처리한다.)

### 그리고 콜백
+ 콜백: 비동기방식에서, 맡겨놓았던 일을 처리하면 {}안의 코드를 실행시키는 것이다.
	+ ex) `fs.readfile('loc','utf8', function(err,text) {코드});`
		+ loc의 파일을 읽어오면 안의 코드를 실행시킨다. (정확하게는 3번 째 인자인 function(err,text {})를 실행시키는 것이다.)
+ 이름이 없는 함수 : 익명 함수 (변수가 지명함)
	+ 실행시에는 변수명();
	+ `var a = function() {console.log('a');}` 같은 경우이다.
+ 콜백함수는 함수안에서 처리될 때 실행되는 (3번째 인자였던) (익명)함수이다.
+ js, 함수는 값이다.
   `var a = function() {console.log('a');}`
   `function slowfunc(callback) {callback()};`
   `slowfunc(a);`
+ slowfunc가 실행되며 콜백함수로 a가 실행된다.

## 18. [Node.js] 패키지 매니저와 PM2
+ 패키지 매니저{Package Manager}
	+ SW를 관리 생성 업데이트 삭제를 해줌 
	+ 패키지 : SW를 부르는 표현 중 하나
+ PM2
	+ 파일 수정시 자동 프로그램 재시작해줌
	+ pm2 start main.js : main.js 실행 후 여러 정보 알려줌
		+ --watch : 수정시에 자동으로 수정사항 갱신
	+ pm2 monit : 리소스 모니터링(변경사항 cpu 사용 등)
	+ pm2 list : 켜진 목록 확인
	+ pm2 log : 변경사항, 에러 확인
