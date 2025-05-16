![[Pasted image 20250428165633.png]]

```js
pinia.mjs:1700 
 Uncaught Error: [🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.
    at Login.vue:26:19
(anonymous)	@	Login.vue:26

```

관련 소스코드
```js
<script>
import { useAuthStore } from '../stores/authStore';
const authStore = useAuthStore();
```