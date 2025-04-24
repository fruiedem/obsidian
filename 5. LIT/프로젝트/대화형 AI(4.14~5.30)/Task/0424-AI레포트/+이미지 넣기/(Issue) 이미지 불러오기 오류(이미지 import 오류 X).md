
## 현상
- 이미지 import 오류 발생x
- vue에서 img 태그 src 속성을 통해 불러올 때 불러오기 오류 발생

## 조치 방법
Vue 컴포넌트 내에서 이미지를 불러올 때는 `import` 문을 사용하여 이미지를 가져와야 합니다. 또한, `data` 함수 내에서 변수를 정의하고 이를 템플릿에서 사용해야 합니다.

## 소스코드
[기존 코드]

```js
<template>
  <div class="container">
    
    <div class="box" v-for="n in 6" :key="n" @click="openChat">
      <img :src="plusIcon" alt="+"/>
      차트를 추가해주세요
    </div>
  </div>
</template>
<script>
  import {useChatStore} from "@/stores/chatStore";
  import plusIcon from '@/assets/images/plus_small.png'

  const chatStore = useChatStore();
  export default {

    methods: {
      openChat(){
        chatStore.toggleChatbot();
      }
    }
  }

</script>
```

[수정 코드]
```js
<template>
  <div class="container">
    
    <div class="box" v-for="n in 6" :key="n" @click="openChat">
      <img :src="plusIcon" alt="+"/>
      차트를 추가해주세요
    </div>
  </div>
</template>
<script>
  import {useChatStore} from "@/stores/chatStore";
  import plusIcon from '@/assets/images/plus_small.png'

  const chatStore = useChatStore();
  export default {
    data(){
      return{
        plusIcon
      };
    },
    methods: {
      openChat(){
        chatStore.toggleChatbot();
      }
    }
  }

</script>
```