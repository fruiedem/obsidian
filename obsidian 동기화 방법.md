
obsidian sync를 이용하지 않더라도 동기화 가능하다.
github를 이용하여 모든 기기 연동 가능
github는 회사에서도 방화벽으로 막혀있지 않기 때문에 다른 메모앱에 비해 엄청난 장점!
github 와 연동만 가능하면 됨!

PC에서 연결하는 방법 `obsidian-git` 또는 `git` 플러그인 이용
[PAT 을 이용한 계정 연결]
1. 레포지토리를 생성할 폴더 위치로 이동
2. git clone <https github 주소>
3. id, pw 입력 -> 이때 pw를 PAT 으로 입력 (pw를 통한 입력은 현재 github 정책상 막혀 있음)

[SSH-KEY 를 통한 계정 연결]
1. 클라이언트에서 ssh-keygen 을 통하여 pub key 와 private key 생성
2. pub key 내용을 github(서버) 의 `New SSH Key` 를 클릭하여 등록

스마트폰에서 연결하는 방법 `git` 플러그인 이용
- username 과 PAT 만 있으면 연결 가능


