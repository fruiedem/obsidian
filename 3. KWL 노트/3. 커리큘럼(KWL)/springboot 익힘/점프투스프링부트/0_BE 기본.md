
```table-of-contents
```


# 엔티티
## 엔티티 생성

### Question 엔티티
1. 엔터티 클래스 생성
   [new -> class]
```java
package com.mysite.sbb;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 200)
	private String subject;
	
	@Column(columnDefinition = "TEXT")
	private String content;
	
	private LocalDateTime createDate;
	
	@OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
	private List<Answer> answerList; // #### [Error] Answer cannot be resolved to a type 
}

```
2. 실행
3. h2 확인

#### [Error] jakarta.persistence.Entity 임포트 오류
build.gradle 에 의존성 추가
```groovy
    dependencies {
        implementation 'jakarta.persistence:jakarta.persistence-api:3.0.0'
    }
```

#### [Error] Answer cannot be resolved to a type 
Answer 엔티티 생성하면 사라짐

### Answer 엔티티

# 레포지토리
## 레포지토리 생성
1. jpa 의존성 추가
```
implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
```
1. com.mysite.sbb 패키지 [new -> interface]
2. JpaRepository 라이브러리 추가
3. JpaRepository 클래스 상속
```java
package com.mysite.sbb;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

}
```

## Junit 테스트
리포지터리를 이용하여 데이터를 저장하려면 질문을 등록하는 화면과 사용자가 입력한 질문 관련 정보를 저장하는 컨트롤러, 서비스 파일 등이 필요하다. 하지만 JUnit을 사용하면 이러한 프로세스를 따르지 않아도 리포지터리만 개별적으로 실행해 테스트해볼 수 있다.

1. junit 의존성 추가
2. test 코드 작성 (src/test/java/com/mysite/sbb 에 SbbApplicationTests.java)
```java
package com.mysite.sbb;

import java.time.LocalDateTime;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SbbApplicationTests {
	@Autowired
	private QuestionRepository questionRepository;
	
	@Test
	void contextLoads() {
		Question q1 = new Question();
		q1.setSubject("sbb가 무엇인가요?"); // [Error] The method setSubject(String) is undefined for the type Question
		q1.setContent("sbb에 대해서 알고 싶습니다."); // [Error] The method setSubject(String) is undefined for the type Question
		q1.setCreateDate(LocalDateTime.now()); // [Error] The method setSubject(String) is undefined for the type Question
		this.questionRepository.save(q1);
		
	}

}

```
3. 실행 및 결과 확인


#### [Error] The method setSubject(String) is undefined for the type Question
New install software 에서 https://projectlombok.org/p2 를 통해 lombok 설치를 진행해야 하는데
sts에서는 모듈을 찾지 못함.
eclipse 최신버전에서 lombok 모듈 조회 가능하여 설치하여 조치 완료
#### [Error] Class jakarta.persistence.GenerationType does not have member field 'jakarta.persistence.GenerationType UUID'
implementation 'jakarta.persistence:jakarta.persistence-api:3.0.0' 종속성 삭제

#### [Error] eclipse 이전 후 boot dashboard 및 run 버튼 안 보임
Eclipse Marketplace 에서 sts 설치
boot 실행을 해야 h2-console 웹도 확인 가능

#### [Error] Junit 테스트 오류
H2 데이터베이스는 파일 기반의 데이터베이스인데, 이미 로컬 서버가 동일한 데이터베이스 파일(`local.mv.db`)을 점유하고 있어 이러한 오류가 발생하는 것이다. 따라서 테스트할 때는 먼저 로컬 서버를 중지해야 한다. 로컬 서버는 다음과 같이 Boot Dashboard에서 중지 버튼을 클릭하여 중지할 수 있다.

#### [Error] Answer 엔티티 테이블 생성 불가 오류, Junit 실행 시 answer 테이블 못 찾는 오류 관련 - org.springframework.dao.InvalidDataAccessResourceUsageException: could not prepare statement [Table "ANSWER" not found; SQL statement:

application.properties 에 JPA ddl-auto 속성 추가
`spring.jpa.hibernate.ddl-auto=update`


# (별첨)도메인별 패키지 구성
유지보수 효율성 개선 목적
모든 파일을 하나의 패키지에서 관리하는 것은 유지보수성에서 안 좋음
com.mysite.sbb 우클릭 -> new -> packages

- com.mysite.sbb.question
	- Question.java (엔티티)
	- QuestionRepository.java (레포지토리)
- com.mysite.sbb.answer
	- Answer.java (엔티티)
	- AnswerRepository.java (레포지토리)
- com.mysite.sbb.user



# 템플릿
보통 브라우저에 응답하는 문자열은 자바 코드에서 직접 만들지 않는다.
템플릿이 일반적인 방식
템플릿은 자바 코드를 삽입할 수 있는 html 형식의 파일
thymeleaf 는 템플릿 엔진 종류 중 하나

## URL 맵핑
1. question 패키지 내 QuestionController 클래스 생성
2. /question/list로 getMapping (단순 String 반환)
```java
package com.mysite.sbb.question;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class QuestionController {
	@GetMapping("/question/list")
	@ResponseBody
	public String list() {
		return "question list";
	}
}

```
## 템플릿 사용
1. 타임리프 종속성 추가 -> gradle update
```
    implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
    implementation 'nz.net.ultraq.thymeleaf:thymeleaf-layout-dialect'
```
1. 템플릿 생성
   resources 내 templates 패키지에 템플릿 추가 (question_list.html)
   New -> File -> question_list.html
```html
<h2> Hello Template </h2>
```
1. 템플릿 페이지 반환
```java
@Controller
public class QuestionController {
	@GetMapping("/question/list")
	// @ResponseBody 어노테이션 삭제
	public String list() {
		return "question_list"; // template 파일 이름 반환
	}
}
```
## 데이터를 템플릿에 전달
1. Model 객체를 클래스에 인자로 전달
2. model 객체의 setAttribute 메소드로 전달할 데이터 지정
3. 템플릿 반환

```java
package com.mysite.sbb.question;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;

@RequiredArgsConstructor	// questionRepository 객체 주입 -> final이 붙은 속성을 포함하는 생성자를 자동으로 만들어주는 역할
@Controller
public class QuestionController {
	private final QuestionRepository questionRepository;
	@GetMapping("/question/list")
	public String list(Model model) {	// 따로 객체 생성 필요 없이 컨트롤러의 메서드에 매개변수로 지정하기만 하면 스프링 부트가 자동으로 Model 객체를 생성
		List<Question> questionList = this.questionRepository.findAll();
		model.addAttribute("questionList", questionList);	// Model 객체는 자바 클래스와 템플릿 간의 연결 고리 역할. Model 객체에 값을 담아 두면 템플릿에서 그 값을 사용 가능
		return "question_list";
	}
}

```

## 데이터를 화면에 출력
setAttribute에 지정한 이름으로 템플릿에서 사용
```html
<table>
    <thead>
        <tr>
            <th>제목</th>
            <th>작성일시</th>
        </tr>
    </thead>
    <tbody>
        <tr th:each="question : ${questionList}">
            <td th:text="${question.subject}"></td>
            <td th:text="${question.createDate}"></td>
        </tr>
    </tbody>
</table>
```


![[Pasted image 20250610163919.png]]

## 자주 사용하는 타임리프(Timeleaf) 3가지 속성
### 분기문 속성
```
th:if="${question != null}"
```
### 반복문 속성
`th:each` 반복문 속성은 자바의 for each 문과 유사하다.
```
th:each="question : ${questionList}"
th:each="question, loop : ${questionList}"
```

- loop.index: 루프의 순서(루프의 반복 순서, 0부터 1씩 증가)
- loop.count: 루프의 순서(루프의 반복 순서, 1부터 1씩 증가)
- loop.size: 반복 객체의 요소 개수(예를 들어 questionList의 요소 개수)
- loop.first: 루프의 첫 번째 순서인 경우 true
- loop.last: 루프의 마지막 순서인 경우 true
- loop.odd: 루프의 홀수 번째 순서인 경우 true
- loop.even: 루프의 짝수 번째 순서인 경우 true
- loop.current: 현재 대입된 객체(여기서는 question과 동일)


### 텍스트 속성
`th:text=(속성)`은 해당 요소의 텍스트값을 출력한다.
```
th:text="${question.subject}"
```

텍스트는 `th:text` 속성 대신에 다음처럼 대괄호를 사용하여 값을 직접 출력할 수 있다.
```
<tr th:each="question : ${questionList}">
    <td>[[${question.subject}]]</td>
    <td>[[${question.createDate}]]</td>
</tr>
```

# (별첨)루트 URL 사용
루트 url 접속 시 리다이렉트
1. MainController 생성
   com.mysite.sbb 패키지 내 MainController.java 생성
2. 루트 url 접속 시 리다이렉트 함수와 url 맵핑
```java
package com.mysite.sbb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	@GetMapping("/")
	public String root() {
		return "redirect:/question/list";
	}
}

```




# 서비스 활용
[Context]
우리는 그동안 `QuestionController`에서 `QuestionRepository`를 직접 접근해 질문 목록 데이터를 조회했다. 하지만 대부분의 규모 있는 스프링 부트(Spring Boot) 프로젝트는 컨트롤러에서 리포지터리를 직접 호출하지 않고 중간에 서비스를 두어 데이터를 처리한다.

[서비스가 필요한 이유]
- 복잡한 코드를 모듈화할 수 있다 
  여러 레포지토리의 메서드를 일련의 로직으로 만들어 중복없이 사용할 수 있음
- 엔티티 객체를 DTO 객체로 변환 가능
  엔티티 객체는 데이터베이스와 직접 맞닿아 있는 클래스임
  엔티티 객체에는 민감한 데이터가 포함될 수 있어 템플릿에서 엔티티 객체를 직접 사용하면 민감한 데이터 노출 위험 있기 때문
  그래서 엔티티를 대신할 DTO 클래스가 필요하고 이를 변환하는 작업을 서비스에서 처리
  서비스는 컨트롤러와 리포지토리의 중간에서 엔티티 객체와 DTO 객체를 서로 변환하여 양방향에 전달하는 역할
  이 튜토리얼에선 별도의 DTO를 만들지 않고 엔티티 객체를 컨트롤러와 타임리프에서 그대로 사용
  실제 프로그램 개발 시에는 엔티티 클래스를 대신할 DTO 클래스를 만들어 사용하기를 권장




# (활용) 상세 페이지 구현
[요구사항]
- 질문 목록에서 제목 클릭 시 상세 내용이 담긴 페이지로 이동
[학습 목표]
템플릿 엔진에서 라우팅 구현 방법
- 질문 목록에 링크 추가
- 상세 페이지 템플릿 생성
- 상세 페이지 컨트롤러 생성
	- id별 페이지 구분
- 상세 페이지에 서비스 적용
- 상세 페이지 출력





# (별첨) URL 프리픽스

# (활용) 답변 기능 구현


