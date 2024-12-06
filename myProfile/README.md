2. 작업 환경 설정하기

2.1 Node.js 설치하기

Tailwind CSS를 사용하려면 Node.js가 필요합니다.
	1.	Node.js 다운로드 페이지로 이동하세요: Node.js 다운로드
	2.	**권장 버전(LTS)**을 선택하여 다운로드하고 설치하세요.
	•	설치 중 특별한 설정은 필요하지 않습니다. 기본 옵션으로 계속 진행하세요.
	3.	설치가 완료되면, **터미널(명령 프롬프트)**을 열고 아래 명령어로 설치가 제대로 되었는지 확인하세요:

node -v
npm -v

•	버전 번호가 표시되면 성공적으로 설치된 것입니다.

---

4. Tailwind CSS 설치하기

4.1 npm 초기화하기

	1.	프로젝트 폴더에서 npm을 초기화합니다:
    npm init -y
	•	이 명령어는 기본 설정으로 package.json 파일을 생성합니다.
4.2 Tailwind CSS 및 필수 패키지 설치하기

	1.	Tailwind CSS와 필요한 패키지를 설치합니다:
    npm install -D tailwindcss postcss autoprefixer

4.3 Tailwind CSS 초기화하기

	1.	Tailwind 설정 파일을 생성합니다:
    npx tailwindcss init
    •	이 명령어는 tailwind.config.js 파일을 생성합니다.

5. 프로젝트 구조 설정하기

프로젝트 폴더에 다음과 같은 구조를 만듭니다:
my-profile/
├── index.html
├── tailwind.config.js
├── package.json
├── src/
│   └── input.css
└── dist/
    └── output.css

	•	src 폴더와 dist 폴더를 생성합니다.
	•	src/input.css 파일을 생성합니다.
	•	dist/output.css 파일은 나중에 생성될 예정입니다.


"build": "npx tailwindcss -i ./src/input.css -o ./dist/output.css"
상세 설명
	1.	npx tailwindcss:
	•	npx는 Node.js에서 패키지를 실행하는 도구야. 여기서는 tailwindcss CLI(Command Line Interface)를 실행하고 있어.
	•	이 명령어는 Tailwind CSS를 설치하지 않아도 실행 가능하게 해줌.
	2.	-i ./src/input.css:
	•	-i는 입력 파일(input) 경로를 지정하는 옵션이야.
	•	여기서는 ./src/input.css 파일을 입력으로 사용하고 있어.
	•	이 파일에는 Tailwind의 기본 디렉티브(e.g., @tailwind base, @tailwind components, @tailwind utilities)가 포함되어 있어야 해.
	3.	-o ./dist/output.css:
	•	-o는 출력 파일(output) 경로를 지정하는 옵션이야.
	•	여기서는 컴파일된 Tailwind CSS 결과물을 ./dist/output.css에 저장해.