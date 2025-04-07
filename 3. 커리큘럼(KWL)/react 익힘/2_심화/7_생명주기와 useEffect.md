생명주기 Mounting Updating Unmounting
Mounting 처음 렌더링 시점
Updating 리렌더링
Unmounting 컴포넌트가 DOM에서 제거되는 시점
class 컴포넌트 정의하고 componentDidMount, componentDidUpdate, componentWillUnmount 함수에서 콘솔 로그 찍어보기(단, StrictMode를 제거해야 정상적으로 출력됨)
Class 컴포넌트에서는 라이프사이클 메서드, 상태관리 메서드, static 메서드, forceUpdate(), getDerivedStateFromProps() 등을 제공함
함수 컴포넌트에서는 이러한 기능이 없기 때문에 여러 Hook 을 제공(useState, useReducer, useRef, useEffect, useMemo, useContext...)
이중에 라이프사이클 메서드의 역할을 하는 것이 useEffect hook 임

[] 빈 배열을 넘기면 클래스 컴포넌트의 componentDidMount 함수와 같이 마운트 시점에 딱 한번 호출
[] 빈 배열의 return 에 명시한 함수(()=>{}) 는 unmount 시점에 호출
클래스 컴포넌트의 componentWillUnMount 함수에 해당
[state] state가 명시되어 있을 경우엔 mount와 update 시점에 호출

클래스 컴포넌트만큼 직관적이지 않기 때문에 반복 익힘 필요
배열에는 state 뿐만 아니라 props 도 전달 가능
useEffect의 두번째인자를 아예 없애면 모든 업데이트 반응하게 됨
의도하지 않은 동작으로 이어질 수 있기 때문에 두번째 인자를 넣지 않는 것은 권장되지 않음

useEffect는 API를 사용해서 서버에서 받아온 데이터를 화면에 렌더링하는 용도로 많이 사용

보통 언마운트 시점에는 자원 해제를 해줌 ex) clearInterval

Practice. ClassComp.jsx
