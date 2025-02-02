
## 1단계. InfoCard 컴포넌트 정의 및 props 전달
App.jsx
```js
import './App.css';
import './Card.module.css';
import InfoCard from './InfoCard';
/*
1단계. InfoCard 컴포넌트 정의 및 props 전달
 */
function App() {
  return (
    <>
      <InfoCard
        title="Props in React"
        content="Porps pass data from one component to another"
        author="Alice"
      />
      <InfoCard
        title="React Composition"
        content="Composition makes your components mor reusable"
        author="Charlie"
      />
    </>
  )
}

export default App

```

InfoCard.jsx
```js
import styles from './Card.module.css';
const InfoCard = (props) => (
    <div className={styles.card}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>Author: {props.author}</p>
    </div>
)

export default InfoCard
```

Card.module.css
```css
.card {
    width: 224px;
    margin: 12px auto;
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card h2 {
    margin: 0 0 8px;
    font-size: 1.33rem;
    color: #333;
}

.card p {
    margin: 2px 0;
}

.card p:last-child {
    font-size: 0.92rem;
    color: #888;
}
```



## 2단계. props 구조분해할당 - 코드 중복 개선

## 3단계. props 기본값 설정

## 4단계. props spreading - 코드 가독성 개선


![[Pasted image 20250201193706.png]]


## 6단계. 함수 Props 전달
![[Pasted image 20250201193626.png]]




## 7단계. JSX요소 props 전달
![[Pasted image 20250201200555.png]]

## 8단계. 고차 컴포넌트