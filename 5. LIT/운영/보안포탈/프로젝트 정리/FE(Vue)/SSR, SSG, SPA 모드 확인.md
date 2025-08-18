SSR
- Node.js 서버에서 HTML을 사전 렌더링해서 클라이언트에 전달
- SEO, 초기 로딩 속도에 유리

SPA
- 모든 렌더링이 클라이언트 측에서 수행됨
- HTML 템플릿은 `index.html` 하나만 사용
	- SPA 모드에서는 Nuxt가 라우팅에 따라 **다양한 URL로 이동하더라도**,  **브라우저는 항상 동일한 HTML 파일(index.html)** 하나만 다운로드합니다.
	- ⚠️ **HTML은 같지만**, 브라우저 안의 Vue 라우터가 URL에 따라 **동적으로 내용만 변경**합니다.

| 요청 URL       | 서버에서 전달되는 파일 | 실제 보여지는 내용 |
| ------------ | ------------ | ---------- |
| `/`          | `index.html` | 홈 페이지      |
| `/about`     | `index.html` | About 페이지  |
| `/users/123` | `index.html` | 사용자 상세 페이지 |

- 초기 로딩은 느릴 수 있으나, 서버 필요 없음
- HTML 템플릿은 Nuxt가 **브라우저에 전달할 최초의 HTML 문서의 기본 구조**
- 일반적으로 `nuxt-app/.nuxt/views/app.template.html`로 존재하거나
- 사용자가 `app.html`이라는 이름으로 루트에 직접 커스터마이징 할 수 있습니다.
```
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```
- `{{ APP }}` → Vue 앱이 mount되는 위치
- 이 HTML은 Nuxt가 내부적으로 Vue 앱을 삽입해 최종 HTML을 생성합니다.






SSG
- 빌드 시 HTML 파일을 미리 생성
- CDN에 정적으로 배포 가능 (Netlify, GitHub Pages 등)
- 동적 콘텐츠가 적은 사이트에 적합


## 🔄 SSR / SSG와의 차이점

|구분|SSR|SSG|SPA|
|---|---|---|---|
|HTML 생성|요청마다 서버에서 동적 생성|빌드시 미리 HTML 생성|하나의 index.html|
|SEO|우수|우수|상대적으로 불리|
|라우팅 처리|서버와 브라우저 둘 다 가능|정적으로 처리|브라우저에서만 처리|
|첫 페이지 로딩|빠름 (SSR)|빠름 (CDN 기반)|느릴 수 있음 (JS 다운로드 후 렌더링됨)|


## 🔍 예시 비교

### 🔸 SSR일 때

- `/about` 요청 시 서버가 직접 `<h1>About</h1>`이 포함된 HTML을 생성해서 반환
    

### 🔸 SPA일 때

- `/about` 요청 시 `index.html`만 반환됨
    
- Vue 라우터가 브라우저에서 URL을 감지하고 `About.vue`를 로딩해 화면 렌더링

## ✅ 결론

> **“SPA에서 index.html 하나만 사용한다는 것은, 모든 경로 요청에 대해 브라우저는 동일한 HTML 파일을 받고, 그 이후의 화면 전환은 브라우저 내부의 자바스크립트(Vue + Vue Router)가 동적으로 처리한다”는 뜻입니다.**

따라서 SEO나 초기 로딩 성능이 중요한 경우에는 SSR 또는 SSG를 선택하는 것이 일반적입니다.



## Nuxt(Vue SPA) 에서 브라우저 내부의 자바스크립트(Vue + Vue Router) 가 동적으로 페이지 처리하는 원리
SPA에서는 **한 번만 HTML(index.html)**을 받아오고, 그 이후부터는 **Vue + Vue Router가 브라우저 안에서 모든 페이지 전환을 담당**합니다. 서버는 다시 개입하지 않아요.












## 🔧 작동 원리 단계별 설명

### 1️⃣ 초기 진입 시: HTML + JS 로딩

- 사용자가 `/` 또는 `/about` 등의 URL로 접속
    
- 서버는 항상 **`index.html` 하나만** 응답함
    
- `index.html` 내부에는 `main.js`와 같은 **Vue 앱 번들 자바스크립트 파일**이 포함됨
    

```html
<script src="/_nuxt/app.123abc.js"></script>
```


---

### 2️⃣ Vue 앱이 브라우저에서 mount됨

- Vue 앱이 `index.html` 안의 `<div id="__nuxt">` 같은 엘리먼트에 mount
    
- 이 시점부터 **DOM 조작은 Vue가 담당**
    

```js
new Vue({   router,   render: h => h(App) }).$mount('#__nuxt')
```



---

### 3️⃣ Vue Router가 현재 URL 감지

- `Vue Router`는 `history` 또는 `hash` 모드를 사용해 현재 URL을 확인함  
- 예: `/about` 경로로 접속했다면, Vue Router는 그에 대응하는 컴포넌트(`About.vue`)를 로딩
    

---

### 4️⃣ 동적으로 컴포넌트 로딩

- `pages/about.vue` → 내부적으로 컴포넌트가 비동기 import로 분할되어 있으므로 필요할 때만 로딩됨

```js
`{   path: '/about',   component: () => import('~/pages/about.vue') }`
```
- 이걸 **코드 스플리팅 (lazy-loading)** 이라고 합니다

---

### 5️⃣ 페이지 전환 시: 브라우저 재요청 없음

- 사용자가 NuxtLink 또는 router.push로 `/users/1`으로 이동
    
- Vue Router가 **브라우저 주소만 바꾸고**, 해당 컴포넌트를 로딩
    
- **새로고침 없이 페이지 전환됨**
    

---

## 🌐 브라우저가 요청하는 리소스 비교

|상황|브라우저 요청|실제 동작|
|---|---|---|
|첫 접속|`GET /index.html`, `GET /_nuxt/app.js`|앱 전체 초기화|
|이후 전환|없음 (주소만 변경됨)|Vue Router가 컴포넌트 교체|

---

## 🔄 이 구조의 장점

- 빠른 페이지 전환 (브라우저 내에서만 DOM 변경)
    
- 사용자 경험이 매끄러움
    
- 프론트엔드가 모든 라우팅을 컨트롤함
    

---

## ⚠️ 단점 및 한계

- **SEO가 불리함**: 검색 엔진이 JS를 실행하지 않으면 페이지 내용을 못 읽음
    
- **초기 로딩 무거움**: 모든 JS 번들을 먼저 내려받아야 함
    

---

## 🔚 정리

|항목|설명|
|---|---|
|HTML|단 하나의 `index.html`만 사용|
|페이지 전환|`Vue Router`가 URL에 따라 컴포넌트만 바꿔 끼움|
|서버 역할|최초 접속 시 HTML+JS만 응답|
|이후|모든 UI 변경은 브라우저 안에서 일어남 (JavaScript 기반)|
