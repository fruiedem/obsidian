1. wsl 접속
2. 사용자 계정 추가
```
## fruiedem 사용자 생성 
$ sudo useradd -m -s /bin/bash fruiedem

## fruiedem 사용자 비밀번호 설정 
$ sudo passwd fruiedem 

## codenix 사용자를 sudo 그룹에 추가(관리자 권한 추가) $ sudo usermod -aG sudo fruiedem
```
1. /etc/wsl.conf
2. default 계정 정보 추가
```sh
[user]
default=아이디
```
4. wsl 종료
```sh
wsl --shutdown
```
5. wsl 실행
```sh
wsl
```
