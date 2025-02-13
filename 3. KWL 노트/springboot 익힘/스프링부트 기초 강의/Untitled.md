[스프링 부트가 나오게 된 이유]
편리한 설정 ex. Transaction Manager, Hibernate Datasource, Entity Manager, Session Factory 등


[스프링부트 제공 기능]
자동설정
	모든 디펜던시를 프레임워크에서 관리
	jar파일이 클래스 경로에 있는 경우 스프링부트는 dispatcher servlet으로 자동 구성됨
	스프링부트는 미리 설정되어 있는 starter 프로젝트를 제공
	xml 설정 없이 자바 코드를 통해 설정 가능
버전관리
	springboot-starter를 통해 자동으로 호환되는 버전 관리


[스프링부트 프로젝트의 starter 디펜던시]
spring-boot-starter-web : restful 응용 프로그램
spring-boot-starter-test : 단위 테스트, 통합 테스트
spring-boot-starter-data-jpa : spring data jpa (hibernate)
spring-boot-starter-security : 스프링 시큐리티 (인증, 권한)
spring-boot-starter-cache : 캐시
spring-boot-starter-jdbc : 기본적인 jdbc(jpa 대체제)
spring-boot-starter-web-service : soap 웹 서비스 (위에 것들에 비해 덜 사용됨)

[프로젝트 생성]
spring 공홈 > [Spring Initializr](https://start.spring.io/)
intellij > file > new > Generator > Spring Initializer (plugins > spring-boot 설치=>community 버전에 없음)

springboot 2.x.x -> spring 5버전
springboot 3.0.0 -> spring 6버전

프로젝트 : 메이븐
언어 : 자바
스프링부트 버전 

spring-web
JPA
H2 database(mariadb 대신)

강사는 java17에서 springboot 2.x.x 버전을 설치
공홈의 spring initializer 는 3.x.x 이상만을 지원

intellij 에서 프로젝트를 생성할 때 Middle Package 들이 모두 트리구조 형태로 구성되어 있으면 아직 인덱싱이 덜 된 상태

[프로젝트 구조]
pom.xml
	요즘에는 gradle을 많이 사용
	maven -> gradle 전환 수월

[enable annotation]
settings(ctrl + alt + s) > compiler > Annotation Processors > Enable annotation processing

일단 당장은 설정하지 않더라도 main 실행이 안 되진 않음


[컨트롤러 만들기 : input 받기]
최하단 패키지 > 도메인 패키지 생성 > controller 패키지 생성 > controller 클래스 생성
user > controller > UserController

[@Controller vs @RestController]

레이어드 아키텍처
rest 관점의 stateless
view 가 포함되면 session 등 불필요한 요소가 첨가됨