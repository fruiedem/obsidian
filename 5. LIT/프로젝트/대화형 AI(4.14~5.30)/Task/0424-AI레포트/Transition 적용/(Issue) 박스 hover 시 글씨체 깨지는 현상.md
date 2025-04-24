

## 소스코드
[기존 코드]
```css
  .box:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px rgba(0,0,0,0.5);
    cursor: pointer;
  }
```


## 원인
마우스 hover 시 확대되면서 글씨체가 약간 흐려졌다가 다시 원 상태로 돌아오는 현상은 브라우저의 서브픽셀 렌더링(subpixel rendering) 문제로 인해 발생할 수 있습니다. 이 문제는 요소가 변환(transform)될 때 브라우저가 텍스트를 다시 렌더링하면서 발생할 수 있습니다.

이 문제를 해결하기 위해 `transform` 속성 대신 `scale` 속성을 사용하지 않고, `box-shadow`와 `border`를 사용하여 요소를 강조하는 방법을 사용할 수 있습니다. 또는 `transform` 속성을 사용하되, `will-change` 속성을 추가하여 브라우저가 요소의 변화를 미리 예측하고 최적화하도록 할 수 있습니다.

다음은 두 가지 방법을 제시합니다: