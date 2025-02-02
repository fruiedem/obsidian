[학습 목표]
useRef 사용하는 목적
1) 리렌더링 없이 어떤 변경되는 것을 추적해야할 때 유용
2) DOM 요소 직접 제어
useRef와 useState, useReducer 차이
useRef 임포트
useRef 정의 방법
useRef 함수에 초기값을 넣으면 배열이 아닌 객체 타입의 결과가 하나 반환
ex) const count1 = useRef(0)

useRef_객체.current
current 값을 직접 참조하고 수정하는 방식으로 사용
useRef_객체.current의 값은 바뀌나 리렌더링이 되지는 않음 => useState, useReducer와의 차이
해당 컴포넌트가 리렌더링이 될 때 같이 변경되어 보임

Practice. Counter 예제
useRef와 컴포넌트 내 변수의 차이
useRef와 컴포넌트 밖 변수의 차이

Practice. FocusInput 예제
Dom 요소 직접 제어 => useRef 에는 숫자, 문자뿐만 아니라 DOM 요소도 담을 수 있음
로그인 화면에 접속하면 특정 입력창이 포커스되어서 이를 클릭하지 않고도 바로 키보드 입력할 수 있는 상태가 되어 있는 경우 
console.log(useRef_객체.current) => DOM 객체 확인
useRef_객체.current.focus()

Practice. Timer 예제



Practice. Counter 예제
값 유지하기(렌더링에 영향x)
useRef.current 값은 내부적으로 변경이되다가 state가 변경되어 리렌더링이 될 때 함께 반영이되는 웹 페이지
![[Pasted image 20250202152028.png]]
![[Pasted image 20250202152050.png]]


[개선된 버전]
useRef 객체를 렌더링하는 부분에 직접 사용하는 것은 코드의 의도가 명확히 드러나지 않음
렌더링에 사용될 값에는 모두 state 사용
내부적으로 변경될 갑은 useRef 객체로 분리
![[Pasted image 20250202152810.png]]


[Practice. Timer 예제]
리렌더링이 되어도 useRef 객체의 값은 유지된다.
컴포넌트 내 console.log 로 리렌더링을 확인하고 useRef 객체의 current 값은 유지되는 것을 확인

```js
import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null); // 타이머 ID 저장
  console.log('Timer 컴포넌트 리렌더링 확인');
  useEffect(() => {
    // 타이머를 설정하고 timerRef에 ID 저장
    timerRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      // 컴포넌트 언마운트 시 타이머 클리어
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <p>시간: {count}</p>
    </div>
  );
}

export default Timer;

```












