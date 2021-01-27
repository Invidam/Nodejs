
# WEB2 Node.js Day 2

- - -

## 3. 공부방법


+ Node.js로  App 만들기 : Node.js Application
	+ 각각의 스탯마다 node.js의 기능 실행 : Node.js runtime
		+ 기능 실행 위한 조작장치 : JavaScript



## 4. Node.js로 웹서버 만들기

+ 여러 도움으로 실행완료.
	+ http://nodejs-nppmw.run.goorm.io/  가 주소.
	+ 구름ide는 자체 제공 환경에서 실행되기 때문에 로컬호스트가 아니라 제공하는 도메인으로 이용해야함.
+ __dirname + url 를 이용해서 읽을 파일을 만듬. (입력한 주소 기반)
+ fs.readFileSync() : 괄호 안 경로의 파일을 읽어 그 값을 가져온다. [node.js]
+ response.end() :  가져온 값을 화면에 띄운다.(?)

+ __즉, 주소에 어떠한 값을 넣느냐에 따라 사용자가 받아오는 정보가 달라진다.__
	+ 사용자에게 전송할 데이터를 생성할 수 있다.