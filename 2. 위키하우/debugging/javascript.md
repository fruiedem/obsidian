개발자도구
	소스 breakpoint(소스탭)
		왼쪽에 로딩된 파일
		call stack 
			호출 관계 확인
			break를 걸고 어떤 행위를 함 step over 가 아닌 play 를 햇을 때 break 가 없으면 빠져 나옴
			콜스택은 비동기여도 모든 호출 관계를 보여줌
			원래 비동기는 잠깐 호출되고 사라짐. 그러나 콜스택에는 남아있음
			비동기함수는 실행이 끝나고 콜스택에 이미 존재하지 않음. 비동기함수에서 내부 함수를 호출하는게 아니라 별도의 브라우저 공간에서 호출함
			가장 상단이 마지막으로 호출된 함수
		conditional break
			Add conditional breakpoint
			새로고침
		이벤트 breakpoint(소스탭)
			소스탭 내 Event Listener Breakpoints
		작성/배포 기준 그룹화
			Group by Authored/Deployed
			디폴트는 빌드파일과 작성파일이 혼재되어 있어 디버깅 하기에 적절하지 않은 상태
			작성 파일과 빌드 파일이 구분되어 작성 파일에서 디버깅 수행
		무시 목록에 있는 원본 숨기기
			Hide ignore-listed sources
			불필요한 디버깅 대상들을 제외할 수 있음
			상단 톱니바퀴 > Ignore list > Add Pattern 
				node_modules 같은 파일들 제외 가능
		Scope 내 변수
			난독화 : 원래 변수이름 추론 불가
	Dom breakpoint(요소탭)
		break on -> attribute modifications : DOM 요소가 바뀔 때 해당하는 소스코드에서 멈춰서 확인 가능
	네트워크 통신 과정에서의 breakpoint(Network탭)
		소스탭 내 XHR/fetch Breakpoints 에 ULR에 포함되는 특정 문자열을 입력하여 break를 걸 수 잇음





서버로부터 응답받고 멈춰있는 부분 확인 방법