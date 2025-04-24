
## 현상

## 원인 

## 조치 방법
`event.preventDefault();`


## 전체 소스코드

```js
<template>
	<div
	  class="draggable-icon"
	  :style="{ top: `${positionY}px` }"
	  @mousedown="startDrag"
>	
	  <img src="@/assets/images/new_AIReport.png" alt="Icon" class="icon-image" />
	</div>
</template>

<script>
import {useChatStore} from "@/stores/chatStore";

const chatStore = useChatStore();
export default {
  name: 'chatbotIcon',
  data() {
    return {
      positionY: 100, // 초기 위치
      isDragging: false,
      startY: 0,
      initialY: 0,
    };
  },
  methods: {
    startDrag(event) {
      event.preventDefault(); // 드래그 시 마우스 클릭 동작 방지
      this.isDragging = true;
      this.startY = event.clientY;
      this.initialY = this.positionY;
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    onDrag(event) {
      if (this.isDragging) {
        const deltaY = event.clientY - this.startY;
        this.positionY = this.initialY + deltaY;
      }
    },
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    },
  },
};
</script>

<style>
#app {
  height: 100vh;
  position: relative;
}

.draggable-icon {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  cursor: pointer;
}

</style>
```