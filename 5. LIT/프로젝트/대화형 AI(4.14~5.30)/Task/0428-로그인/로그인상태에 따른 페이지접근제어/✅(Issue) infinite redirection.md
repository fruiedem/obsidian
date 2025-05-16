


## 오류 콘솔로그

```text
[Vue Router warn]: Detected a possibly infinite redirection in a navigation guard when going from "/" to "/login". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.
```
![[Pasted image 20250508104326.png]]


## 소스코드
[수정전]
```js
router.beforeEach((to, from, next) => {
    if(!authGuard()){
        next({ path: '/login' })
        return;
    }
    else
        next()
    return;
})
```

[수정후]
```js
router.beforeEach((to, from, next) => {
    console.log(`${JSON.stringify(from.path)} ------------------> ${JSON.stringify(to.path)}`);
    
    if (authGuard()) {
        if (to.path === '/login') {
            next({ path: '/' }); // 로그인된 상태에서 /login으로 이동하려고 하면 홈으로 리디렉션
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
