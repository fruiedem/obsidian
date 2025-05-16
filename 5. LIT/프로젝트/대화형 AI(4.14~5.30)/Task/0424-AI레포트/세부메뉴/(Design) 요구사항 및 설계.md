
## 요구사항
menus API 응답으로 온 정보를 기반으로 iframe 메뉴 호출
전체실적, 영업실적, 매출실적

## API 형태
[URL]
https://longview-dev.llion.ai/LI_REPORT.html?resocID=1004&partyID=14&orgID=1

[소스코드]
https://longview-dev.llion.ai/LI_CARD_VIEW.html?resocId=${encodeURIComponent(resocId)}&partyId=${encodeURIComponent(partyId)}&orgPartyId=${encodeURIComponent(orgPartyId)}

[호출 파라미터]
- resocId
- partyId
- orgId

## menu 정보 응답
```text
{
            "id": 1003,
            "upResId": 1001,
            "menuUrl": "aireport",
            "name": "전체실적",
            "partyId": 14,
            "orgPartyId": 1,
            "sortSeq": 1
        },
        {
            "id": 1004,
            "upResId": 1001,
            "menuUrl": "aireport",
            "name": "영업실적",
            "partyId": 14,
            "orgPartyId": 1,
            "sortSeq": 2
        },
        {
            "id": 1005,
            "upResId": 1001,
            "menuUrl": "aireport",
            "name": "매출실적",
            "partyId": 14,
            "orgPartyId": 1,
            "sortSeq": 3
        }
```

## 고려사항
1. menus API 응답 정보를 보관 및 사용 방식 => 상태관리
2. 상태관리 => Pinia 상태관리 공식 라이브러리 
   [상태 관리 | Vue.js](https://ko.vuejs.org/guide/scaling-up/state-management)
3. defineStore 사용 방법 알기, async 필요성 확인
   [Defining a Store | Pinia](https://pinia.vuejs.org/core-concepts/)
4. 객체 배열 데이터 추출 (data, computed, methods)
5. 사이드바에서 클릭 시 화면 전환(동적 라우팅)

## 이슈사항

## 필요 개념
1. Vue 문법 스타일 : option API, composition API 스타일 차이
	option API => data, computed, methods 등과 같은 객체 사용
	composition API => setup 객체 사용
2. 상태관리 라이브러리 Pinia 사용 방법
3. const / let 차이
   const => 재할당 불가
   let => 재할당 가능
   vat => 미사용 권장
4. 객체 배열 중 특정 키에 해당하는 원소 추출
```js
submenu.value = menus.find((item) => item.id==menuId.value)
```
5. 동적 라우팅
	1. path 문법
	   [동적 라우트 매칭 | Vue Router](https://v3.router.vuejs.org/kr/guide/essentials/dynamic-matching.html)
	2. 동적 파라미터값 사용 방법(Composition API)
	```JS
	const route = useRoute();
	const menuId = ref(route.params.id);
	const loadSubmenu = () => {
	    submenu.value = menus.find((item) => item.id==menuId.value)
	}
	```
	3. 템플릿 참조 : ref
	   라우팅 파라미터 참조하기 위해서 사용
	   [반응형 API: 핵심 | Vue.js](https://ko.vuejs.org/api/reactivity-core)
6. 



```js
{
      const menuStore = useMenuStore();
      console.log('Node selected:', event);
      this.selectedAIReport = menuStore.menus.find((item) => item.id == event.key)
      let node = event.data;
      if(node == 'aireport' && Object.keys(this.selectedAIReport).includes('upResId')){
        if(this.selectedAIReport.upResId == 0)
          return;
        else if(this.selectedAIReport.upResId > 0 && this.selectedAIReport.name != 'AI Report 생성')
          node = 'aireport_submenu';
      }
      if (node) {
        console.log('node:', node);
        this.routingMenu(node);
        // if (node.data && (!node.children || node.children.length === 0)) {
        //   this.routingMenu(node.data, node.label);
        // } else {
        //   console.error('Selected node has no data or has children:', node);
        // }
      } else {
        console.error('Selected node is undefined');
      }
    },
```



