```table-of-contents
```

## 개발환경
### 이클립스 설치
이클립스로 실행
이클립스는 최소 jdk 버전이 있으므로 확인하고 설치 필요
쇼핑 IR은 1.7 버전이므로 이클립스 4.4 버전이 필요

### 프로젝트 import
#### import 관련 오류
##### jsp 깨짐 현상
현상 : jsp 파일 내 영문을 포함하여 모든 글자가 깨져보임
조치 방법 : 
jdk 버전에 호환되는 eclipse 설치
쇼핑IR은 1.7 버전 -> 이클립스 4.4 설치

##### 파일 경로를 못 찾는 현상
[오류 로그]
Fragment "/jpn/include/top.jsp" was not found at expected path /depart_ir-main/depart/jpn/include/top.jsp

[오류 부분]
```html
<jsp:include page="/jpn/include/top.jsp" ></jsp:include>
```

[추정 원인]
1. **파일 경로 문제**: JSP 파일이 실제로 존재하지 않거나 경로가 잘못 지정된 경우.
2. **프로젝트 설정 문제**: 프로젝트의 웹 루트 디렉토리가 올바르게 설정되지 않은 경우.
	- 프로젝트의 웹 루트 디렉토리가 올바르게 설정되어 있는지 확인합니다.
	- 프로젝트 탐색기에서 프로젝트를 마우스 오른쪽 버튼으로 클릭하고 `Properties`를 선택합니다.
	- `Web Project Settings`를 선택하고 `Web Content` 디렉토리가 올바르게 설정되어 있는지 확인합니다. 일반적으로 `WebContent` 또는 `src/main/webapp` 디렉토리가 웹 루트로 설정됩니다.
3. **빌드 경로 문제**: 프로젝트의 빌드 경로가 올바르게 설정되지 않은 경우.
	- 프로젝트의 빌드 경로가 올바르게 설정되어 있는지 확인합니다.
	- 프로젝트 탐색기에서 프로젝트를 마우스 오른쪽 버튼으로 클릭하고 `Properties`를 선택합니다.
	- `Java Build Path`를 선택하고 `Source` 탭에서 소스 폴더가 올바르게 설정되어 있는지 확인합니다.



##### Compile Error : java compiler level does not match the version of the installed java project facet
project > properties > project facets > java 버전 확인(build.xml 의 javac 컴파일러 버전과 비교)


##### Compile Error : Access restriction: The constructor 'BASE64Decoder()' is not API (restriction on required library 'C:\Users\LDCC\openjdk-1.8.0\jre\lib\rt.jar')
project > properties > java build path > labraries 탭
JRE System library 클릭 > remove
Add library 클릭 > JRE System Library 다시 추가 

#### 톰캣 서버 실행 관련 오류
##### server(톰캣) 를 추가할 수 없는 현상
java ee 버전 필요 (4.4 루나 버전 java ee)
[Luna R | Eclipse Packages](https://www.eclipse.org/downloads/packages/release/luna/r)

##### eclipse에 원하는 톰캣 버전이 없는 경우
eclipse 에 톰캣 런타임 환경 설정을 아예 할 수 없는 경우가 아니라 몇개의 버전들만 존재하는 상태이고 원하는 톰캣 버전을 설정할 수 없다면 이클립스 버전 문제이므로 이클립스 버전을 변경하여 설치하거나 아니면 리스트에 존재하는 톰캣을 다운로드하여 설정하는 것이 빠르다.



#### 요청 오류
##### HTTP Status 404 - /
[현상]
HTTP Status 404 - /
**type** Status report
**message** /
**description** The requested resource is not available.
Apache Tomcat/8.0.9

[추정 원인]
- 도메인이 더 이상 존재하지 않을 때.
- 요청된 리소스가 삭제되었거나, 다른 URL로 이동되었을 때.
- URL이 브라우저에 잘못 기입되었을 때.

[첨언]
@RequestMapping 관련 주요 익셉션 중 하나이므로 잘 알아두자

