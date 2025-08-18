[학습 목표]

[리렌더링 케이스]
컴포넌트는 state가 변경될 때, props가 변경될 때, 부모가 리렌더링될 때 리렌더링 됨
- 컨텍스트의 값에 따라서도 변경됨(추후 배움)

컴포넌트 리렌더링을 확인하는 방법 => 컴포넌트마다 console.log('컴포넌트명') 를 작성하여 확인 가능
[Practice1. Profile]
- 부모 컴포넌트의 state를 props로 자식 컴포넌트에 전달
- console.log 두번 출력 이유 : StrictMode 컴포넌트 때문
- 자식 컴포넌트의 state가 변경될 때 부모 컴포넌트에서 이 state와 상관이 없을 경우 자식 컴포넌트만 리렌더링 됨
- 부모에서 전달된 state가 변경될 경우, 부모와 자식 컴포넌트 모두 리렌더링됨
- 부모컴포넌트에서만 사용되는 state는 자식컴포넌트와는 상관이 없다. 하지만 값이 변경될 경우 부모컴포넌트와 자식컴포넌트 모두 리렌더링됨
- 즉, 컴포넌트는 state가 변경될 때, props가 변경될 때, 부모가 리렌더링될 때 리렌더링 됨
- 컨텍스트의 값에 따라서도 변경됨(추후 배움)

[State 끌어올리기]
여러 컴포넌트들이 state를 공유해야 할 때, 이들을 부모 컴포넌트로 끌어올린 다음 변경 함수를 props 로 전달하는 패턴
부모컴포넌트에서 전달된 state를 자식컴포넌트에서 수정하는 방법 => useState 함수를 props로 전달하여 해당 함수를 이벤트 핸들러로 사용하면 됨
[Practice2. Temperature Converter]
![[Pasted image 20250202132618.png]]
변수 초기화 부분은 컴포넌트가 재실행되면서 다시 계산되어 할당됨
예를 들어 아래와 같이 정의되어 있다면 unit 또는 temperature state 값이 바뀌면서 해당 컴포넌트가 리렌더링될 때 convertedTemp 값은 다시 계산되어 초기화된다.
```js
const convertedTemp = unit === "Celsius"
	? (temperature * 9/5 + 32).toFixed(1)
	:((temperature-32) * 5/9).toFixed(1)
```

[같은 form 안의 다수 입력요소(state)를 하나의 state와 핸들링 함수로 다루는 방법]
하나의 객체로 다루기
```js
// before
const [username, setUsername] = useState('')
const [isSubscribed, setSubscribed] = useState(false)
const [role, setRole] = useState('user')
const roles = ['user', 'admin', 'guest']

// after
const [formData, setFormData] = useState(
	{
		username: '',
		isSubscribed: false,
		role: 'user'
	}
)
const roles = ['user', 'admin', 'guest']

```

state를 변경하는 방법
```js
const handleChange = (e) => {
	const { name, value, type, checked } = e.target
	setFormData({
		...formData, // 먼저 작성 필요
		[name]: type === 'checkbox' ? checked : value // 덮어쓰기
	})
}
```


[Practice3. Form]
![[Pasted image 20250202133624.png]]