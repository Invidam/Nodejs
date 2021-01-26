
# WEB2 Node.js Day 4

- - -

## 10. [Node.js] 콘솔에서의 입력값
+ Input Parameter(정보의 형식) Argument(실제 값)
+ 콘솔, 실행할 명령에 따라 다른 아웃풋을 만들어 내보자.
+ node.js console input parameters 검색 -> var args = process.argv를 복붙
+ `node.js (위치) (입력값)` 을 콘솔에서 실행했을 때, args를 console.log하여 얻는 정보들
	+ L1 : 런타임의 위치
	+ L2 : 실행한 파일의 경로
	+ L3 : 입력값   = args[2]
+ 콘솔에서의 입력값을 바탕으로 여러 동작을 할 수 있는 확장성 있는 페이지를 만들 수 있다.

- - - 
## 11. [App] Not foun 오류 구현

+ url.parse(_url,true)를 보면,
	+ 주어진 url정보(protocol, hash,host . . .) 분석 -> 쉽게 표현해줌
	+ pathname : querystring을 제외한 path만을 보여줌.
	+ query : querystring만 보여줌.

+pathname이 '/'일 때 파일 출력  (참고로 ==은 같을 때가 맞지만, ===은 완전히 같을 때를 의미)
	+ 아닐 때 404 err 출력

+ writehead : 200 {서버가 브라우저에 200을 주면 파일 성공적 전송 의미}
	+ 404 : 파일을 찾을 수 없을 때.

- - -
## 12. [App] 홈페이지 구현			

+ querydata.id === undefined && pathname === '/' 일 때 index를 출력하게끔 해야한다.
+ description, title을 index에 맞게 입력해준다.
