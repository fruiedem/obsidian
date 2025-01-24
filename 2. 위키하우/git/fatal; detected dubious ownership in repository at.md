[이슈]
폴더 구조 변경 시 git branch 정보 를 못 찾는 문제

[조치 방법]
`git config --global safe.directory = '폴더경로';
경로는 `\` 가 아닌 `/` 로 입력

