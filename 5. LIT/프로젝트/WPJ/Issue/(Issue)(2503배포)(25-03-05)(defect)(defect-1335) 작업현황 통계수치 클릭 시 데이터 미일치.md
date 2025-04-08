## 결함 내용
1. 재현 스텝: 작업현황 > 진행상태 클릭 시 데이터 불일치(공통코드 이슈)
2. 내용 : 작업현황 > 진행상태 클릭 시 데이터 불일치(공통코드 이슈)
   ![[Pasted image 20250305161416.png]]
3. 기대 결과: 작업현황 > 진행상태 클릭 시 데이터 일치

## 조치 상세
[수정범위]
수정 : 
위험성평가, 작업 공종 현황 - API 내 status 코드 (미수정 : 점검 개선 활동)
- 위험성평가-승인완료 : 공통코드값(SF0112 = WORK APPROVAL)으로 하드코딩
- 위험성평가-평가중 : 'In evaluation' 코드가 여러 상태(평가(진행)~회의(검토))를 포괄하여 그대로 유지
- 위험성평가-평가전 : 공통코드값으로 하드코딩
- 작업 공종 현황-진행중 : 공통코드값(SF0112 = WORK APPROVAL)으로 하드코딩
- 작업 공종 현황-예정 : 공통코드값(SF0112 = WORK APPROVAL)으로 하드코딩
- 작업 공종 현황-종료 : 공통코드값(SF0112 = WORK APPROVAL)으로 하드코딩




[화면별 API 상이 확인]
주간 작업 계획 화면 - 대시보드 통계 수치 클릭 API
http://localhost:3000/project/491/safetyMgt/weeklyWorkPlan?from=safetyDashboard&status=SF0112&isRedirectStatus=inProgress&week=1&month=3&year=2025

주간 작업 계획 화면 - 주간 작업 계획 검색 API
http://localhost:3000/api/v1/work-plan/491/weekly?menuSeq=2121&year=2025&month=3&week=2

점검 조치 이력 화면 - 대시보드 통계 수치 클릭 API
http://localhost:3000/project/491/safetyMgt/inspectionMeasure?from=safetyDashboard&status=INSPECTION_COMPLETED&searchDateType=inspectionDate

점검 조치 이력 화면 - 점검 조치 이력 검색 API
http://localhost:3000/api/v1/projects/491/inspection-measure?endDate=20250309&startDate=20250303
