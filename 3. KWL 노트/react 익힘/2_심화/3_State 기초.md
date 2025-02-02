[학습 목표]
이벤트들을 웹 어플리케이션에 활용하는 구체적인 방법과 관련
state
useState 반환 결과 확인
구조분해할당
이벤트 핸들러로 useState 함수 작성방법
arrow 함수 컴포넌트 정의 방식
state에는 숫자뿐 아니라 불리언, 문자열, 객체, 배열 등 어떤 값이든 사용 가능
Practice. 새로고침없이 버튼의 모습이 동적으로 변경(Count 예제)
Practice. boolean use - 좋아요, 핀
Practice.  투두리스트 작성
![[Pasted image 20250202115307.png]]

[state]

[useState 반환 결과 확인]
console.log(useState(0)) 로 확인 가능
두 개 요소(값, 함수) 들어있는 배열 반환
`const [count, setCount] = useState(0)`
보통 이와 같이 구조분해할당으로 사용할 state와 함수를 정의

[구조분해할당]
: 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JS 표현식
: 구조분해할당을 모르면 배열의 경우 인덱스를 통해 접근하여 값 할당을 하게 될 것

배열의 구조분해할당
const letters = ['a', 'b', 'c'];
const [a, b] = letters // 구조분해할당을 통해 letter 배열의 첫번째 원소와 두번째 원소가 각각 순서대로 할당이 됨

const [count, setCount] = useState(0)

[이벤트 핸들러로 useState 함수 작성방법]
이벤트 핸들링으로 함수 호출이 아닌 함수 선언에 setCount 가 포함되어야 한다.
button onClick = {() => setCount(count + 1)} ⭕
button onClick = {(() => setCount(count + 1))()} ❌
button onClick = {handleEvent}
button onClick = {handleEvent()} ❌

[arrow 함수 컴포넌트 정의 방식]
```js
const 함수명 = () => (JSX요소)

const 함수명 = () => {
JS코드(변수 정의, 함수 정의 등)
return(JSX요소)
}
```

[state에는 숫자뿐 아니라 불리언, 문자열, 객체, 배열 등 어떤 값이든 사용 가능]

[Practice. 새로고침없이 버튼의 모습이 동적으로 변경(Count 예제)]
useState hook을 사용하는 것과 단순히 state 변수와 값을 변경시키는 함수를 정의하고 호출하는 것의 차이
: 값의 변화에 따른 리렌더링
: 실제로 후자 방식을 console.log 로 출력해보면 값은 변하지만 리렌더링이 되지 않음

[Practice. boolean use - 좋아요, 핀]
const [isPinned, setPinned] = useState(false)
boolean state 적용
새로고침없이 버튼의 모습이 동적으로 변경
이를 위해 리액트에서는 state 개념 사용
![[Pasted image 20250201230057.png]]

[Practice.  투두리스트 작성]
Todo List 제목 표시
투두리스트 세로 노출
리스트 옆에 삭제 기능
입력창 컴포넌트에 입력하고 버튼 클릭 시 리스트에 추가
todos.splice(), todos.push 배열 자체를 변경하는 것으로는 리렌더링이 되지 않음
**Issue. 리스트가 안 뿌려짐**