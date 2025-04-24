
## 콘솔 로그
```
runtime-core.esm-bundler.js:268 Uncaught TypeError: Cannot read properties of undefined (reading 'toggleChatbot') at _createElementVNode.onClick._cache.<computed>._cache.<computed> (ChatbotIcon.vue:7:25)

|   |   |
|---|---|
||_createElementVNode.onClick|
```

## 조치 방법

함수 처리
```js
    <button
      class="draggable-icon"
      :style="{ top: `${positionY}px` }"
      
      @click="openChat"
    >
      <img src="@/assets/images/new_AIReport.png" alt="Icon" class="icon-image" />
  </button>


---

  methods: {

    openChat(){

      chatStore.toggleChatbot();

    },
```


## 참고
[Computed Properties and Watchers — Vue.js](https://v2.vuejs.org/v2/guide/computed.html)