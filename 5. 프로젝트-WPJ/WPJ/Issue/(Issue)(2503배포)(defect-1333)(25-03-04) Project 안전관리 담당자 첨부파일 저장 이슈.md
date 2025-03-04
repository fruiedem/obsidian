
원인
- GET API와 POST API 의 menuId 설정 차이에 의해 발생
	- GET API
		- project-safety/491/safety-roles
		- ```PROJECT_SAFETY("safety", MenuTypeCode.FIXED.getCode(),  
		        Arrays.asList("menu200079")),```
	- POST API
		- project-safety/491/pic?menu-sequence=2125
		- 2125 해당 menuId에 해당하는 seq로 자동 설정됨
		- 이 seq는 pms_file_chmm_map의 project_menu_seq와 pms_menu의 seq에 해당
조치 방법
- Project 안전관리 메뉴 id를 운영계 기준으로 menuId 및 FileServiceScreenType(PROJECT_SAFETY) 동일하게 변경