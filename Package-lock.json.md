- package.json과 package-lock.json 각각 무엇인지, 둘의 차이를 알자
- npm, 과 node.js 와의 관계를 알자
- 각 json 파일의 생성 시점을 알자


npm 패키지 매니저에서 npm install 시 생성되는 의존성 파일
yarn.lock : yarn 패키지 매니저에서 yarn install 시 생성되는 의존성 파일

npm과 yarn 모두 node.js 의 패키지 매니저

node.js 는 오픈소스 자바스크립트 런타임 환경

런타임 환경 : 프로그램이 실행되는 환경을 제공하는 소프트웨어 도구 세트


파일 생성 목적 : 라이브러리 강제 업데이트를 방지하여 실행환경의 변경을 막는다.

파일 생성 시점: `npm install` 명령어 실행 시

