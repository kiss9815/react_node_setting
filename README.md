"# react_node_setting"


# 서버 사이드 코드 컴파일 하기
$ babel server --out-dir build


# webpack 을 통하여 코드를 컴파일하고 합치기
프론트 세팅하고 webpack 라고 글로벌로 실행하거나
$webpack
or
$ ./node_modules/.bin/webpack 다음과 같이 디렉토리 실행


#스크립트
/* ... */
  "scripts": {
    "clean": "rm -rf build public/bundle.js",
    "build": "babel server --out-dir build && ./node_modules/.bin/webpack",
    "start": "NODE_ENV=production node ./build/main.js",
    "development": "NODE_ENV=development node ./build/main.js"
  },
/* ... */


왜 다른 config 를 사용하나요?
기존 config 는 output인 bundle.js 를 public 디렉토리에 저장하도록 설정이 되어있습니다.
webpack-dev-server 에서도 동일한 설정을 적용한다면, public 에 있는 파일이 계속 덮어씌워지겠죠? 저희 webpack-dev-server 에선 bundle.js 를 메모리에 저장한후, 나중에 브라우저에서  bundle.js 를 요청 할 시 public 디렉토리에 이미 있는 bundle.js 보다 우선권을 가져서 메모리에 있는걸 리턴하게됩니다.
또한, 추후 react-hot-loader 를 통해 변경된 컴포넌트만 리로드 하는 시스템을 구현할 건데요, production 모드에선 이게 필요하지 않으므로 다른 config 를 설정합니다.


#실행 방법
$ npm run build

$ npm run development
or
$ npm start
