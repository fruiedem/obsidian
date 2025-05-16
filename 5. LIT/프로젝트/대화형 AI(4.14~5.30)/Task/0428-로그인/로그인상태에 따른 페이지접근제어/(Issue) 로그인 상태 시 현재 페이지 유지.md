
## 현상
어느 화면에서든 /login 페이지로 이동화면 / 페이지로 이동됨
이동 시 from.path 경로 로그 확인해보면 항상 / 로 찍히는 것을 확인



## 소스코드
[수정전]
```js
router.beforeEach((to, from, next) => {
    console.log(`${JSON.stringify(from.path)} ------------------> ${JSON.stringify(to.path)}`);
    
    if (authGuard()) {
        if (to.path === '/login') {
            next({ path: `${from.path}` }); // 로그인된 상태에서 /login으로 이동하려고 하면 홈으로 리디렉션
        } else {
            next(); // 로그인된 상태에서 다른 경로로 이동하려고 하면 그대로 이동
        }
    } else {
        if (to.path !== '/login') {
            next({ path: '/login' }); // 로그인되지 않은 상태에서 /login이 아닌 경로로 이동하려고 하면 /login으로 리디렉션
        } else {
            next(); // 로그인되지 않은 상태에서 /login으로 이동하려고 하면 그대로 이동
        }
    }
});
```
[수정후]