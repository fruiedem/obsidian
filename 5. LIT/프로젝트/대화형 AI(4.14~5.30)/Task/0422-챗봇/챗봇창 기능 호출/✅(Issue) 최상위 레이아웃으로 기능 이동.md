## 학습 목적
- MainLayout.vue 의 레이아웃 구조를 이해한다.
- Dashboard 화면에만 적용되어 있던 채팅창 기능을 어떤 화면에서든 동작하도록 최상위 레이어로 올린다.

## 소스코드
[기존 코드]
MainLayout.vue
```html
<template>
  <div class="show-chatbot overflow-hidden">
    <MenuBar />
    <Header />
    <div id="dashboard" class="flex flex-col h-screen bg-black text-white">
      <main class="flex overflow-hidden w-full h-full">
        <router-view />
      </main>
      <ChatbotIcon />
    </div>
    <Footer />
  </div>
  <ChartSaveModal />
</template>
```

Dashboard.vue
```html
<template>
    <iframe :src="`${longviewUrl}/LI_CARD_VIEW.html`" width="100%" height="100%"></iframe>
	<Chatbot/>
</template>
```



[수정 코드]
```html
    <div id="dashboard" class="flex flex-col h-screen bg-black text-white">
      <main class="flex overflow-hidden w-full h-full">
        <router-view />
        <Chatbot/>
      </main>
      <ChatbotIcon />
    </div>
```


## 조치 방법
`<router-view>`는 최상위 outlet 이므로 url에 따라 뿌려주는 역할을 한다.
`<router-view>` 를 포함하는 MainLayout 에서 Chatbot 기능이 호출되도록 처리를 해주었다.


## 참고
[중첩된 라우트 | Vue Router](https://v3.router.vuejs.org/kr/guide/essentials/nested-routes.html)
