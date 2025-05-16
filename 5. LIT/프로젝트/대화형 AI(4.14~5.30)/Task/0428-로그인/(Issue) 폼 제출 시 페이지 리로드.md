## 발생 코드
`<form v-on:submit="handleSubmit">` 


## 폼 제출 시 페이지 리로드 원인



## 조치 방법

**event.preventDefault() 와 동일한 코드 추가**
1. `<form v-on:submit="handleSubmit">`  -> `<form @submit.prevent="handleLogin()">`


