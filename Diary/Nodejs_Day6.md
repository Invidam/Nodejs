# WEB2 Node.js Day 6




## 16. [App] 함수를 이용해서 정리 정돈하기
+ template 내용을 templateHTML()로 옮기기.
	+ parameter : title, list, body(description)
+ list 내용을 templateList()로 옮기기
	+ parpameter : filelist

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
	+ fs.readfile('위치','인코딩방식' ,function(err,text){ 내용 });

### 그리고 콜백
+ 콜백: node.js에게 나중에 결과를 알리게 하는 것
+ 이름이 없는 함수 : 익명 함수 (변수가 지명함)
	+ 실행시에는 변수명();

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