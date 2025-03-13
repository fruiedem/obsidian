안전교육 등록, 삭제 버튼 노출 이슈 => 브라우저 캐시인 recoil-persist 의 userstateinfo 안에 있는 isLdcc 체크

[작업현황]
recoil-persist > isldcc = true  변경 필요 / pms_user 테이블 is_ldcc = true 변경 필요
- 변경 안 할 경우, 검색 조건에 전체가 아닌 특정 소속 회사명으로 파라미터가 전달되어 예상하는 통계값이 표시가 안됨