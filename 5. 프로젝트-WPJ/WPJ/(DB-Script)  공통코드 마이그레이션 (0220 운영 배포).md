```sql
-- pms_work_plan 테이블. 대분류 컬럼 마이그레이션
update pms_work_plan set major_category='CONSTRUCTION' where major_category='건설공통';
update pms_work_plan set major_category='CIVIL_ENGINEERING' where major_category='토목';
update pms_work_plan set major_category='ARCHITECTURE' where major_category='건축';
update pms_work_plan set major_category='MECHANICAL_EQUIPMENT' where major_category='기계설비';
update pms_work_plan set major_category='INFORMATION_COMMUNICATION' where major_category='정보통신';
update pms_work_plan set major_category='ELECTRIC_WORK' where major_category='전기공사';
update pms_work_plan set major_category='RENEWABLE_ENERGY' where major_category='신재생에너지';
update pms_work_plan set major_category='ETC' where major_category='기타';

-- pms_risk_assessment_the_first_routine_item 테이블. 대분류 컬럼 마이그레이션
update pms_risk_assessment_the_first_routine_item set major_categories='CONSTRUCTION' where major_categories='건설공통';
update pms_risk_assessment_the_first_routine_item set major_categories='CIVIL_ENGINEERING' where major_categories='토목';
update pms_risk_assessment_the_first_routine_item set major_categories='ARCHITECTURE' where major_categories='건축';
update pms_risk_assessment_the_first_routine_item set major_categories='MECHANICAL_EQUIPMENT' where major_categories='기계설비';
update pms_risk_assessment_the_first_routine_item set major_categories='INFORMATION_COMMUNICATION' where major_categories='정보통신';
update pms_risk_assessment_the_first_routine_item set major_categories='ELECTRIC_WORK' where major_categories='전기공사';
update pms_risk_assessment_the_first_routine_item set major_categories='RENEWABLE_ENERGY' where major_categories='신재생에너지';
update pms_risk_assessment_the_first_routine_item set major_categories='ETC' where major_categories='기타';

-- pms_work_plan 테이블. 중분류 컬럼 마이그레이션
update pms_work_plan set medium_category='TEMPORARY_WORK' where medium_category='가설공사';
update pms_work_plan set medium_category='EARTH_WORK' where medium_category='토공사';
update pms_work_plan set medium_category='LANDSCAPE_WORK' where medium_category='조경공사';
update pms_work_plan set medium_category='FOUNDATION_WORK' where medium_category='기초공사';
update pms_work_plan set medium_category='RETAINING_WORK' where medium_category='흙막이공사';
update pms_work_plan set medium_category='REINFORCED_CONCRETE_WORK' where medium_category='철근콘크리트공사';
update pms_work_plan set medium_category='DEMOLITION_WORK' where medium_category='해체공사';
update pms_work_plan set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_work_plan set medium_category='ROAD_PAVEMENT_WORK' where medium_category='도로포장공사';
update pms_work_plan set medium_category='TUNNEL_WORK' where medium_category='터널공사';
update pms_work_plan set medium_category='TRACK_WORK' where medium_category='궤도공사';
update pms_work_plan set medium_category='PIPELINE_WORK' where medium_category='관부설/접합공사';
update pms_work_plan set medium_category='SUBSURFACE_EXPLORATION' where medium_category='지반조사';
update pms_work_plan set medium_category='MEASURE' where medium_category='측량';
update pms_work_plan set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_work_plan set medium_category='STEEL_STRUCTURE' where medium_category='철골공사';
update pms_work_plan set medium_category='MASONRY' where medium_category='조적공사';
update pms_work_plan set medium_category='TILE_CONSTRUCTION' where medium_category='타일공사';
update pms_work_plan set medium_category='WOODWORKING' where medium_category='목공사';
update pms_work_plan set medium_category='INTERIOR_FINISHING_WORK' where medium_category='수장공사';
update pms_work_plan set medium_category='WATERPROOFING_WORK' where medium_category='방수공사';
update pms_work_plan set medium_category='ROOF' where medium_category='지붕공사';
update pms_work_plan set medium_category='METAL_WORK' where medium_category='금속공사';
update pms_work_plan set medium_category='PLASTER_WORK' where medium_category='미장공사';
update pms_work_plan set medium_category='GLASS_WORK' where medium_category='창호/유리공사';
update pms_work_plan set medium_category='IRON_WORK' where medium_category='칠공사';
update pms_work_plan set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_work_plan set medium_category='PLUMBING' where medium_category='배관공사';
update pms_work_plan set medium_category='DUCT' where medium_category='덕트공사';
update pms_work_plan set medium_category='INSULATION_WORK' where medium_category='보온공사';
update pms_work_plan set medium_category='PUMP_WORK' where medium_category='펌프/공기설비공사';
update pms_work_plan set medium_category='VALVE_FACILITY_CONSTRUCTION' where medium_category='밸브설비공사';
update pms_work_plan set medium_category='MEASURING_EQUIPMENT_CONSTRUCTION' where medium_category='측정기기공사';
update pms_work_plan set medium_category='HVAC' where medium_category='공기조화설비공사';
update pms_work_plan set medium_category='AUTOMATIC_CONTROL_CONSTRUCTION' where medium_category='자동제어설비공사';
update pms_work_plan set medium_category='TRANSPORTATION_CONSTRUCTION' where medium_category='운송설비/기계공사';
update pms_work_plan set medium_category='FREEZER_CONSTRUCTION' where medium_category='냉동기/냉각탑공사';
update pms_work_plan set medium_category='BOILER_WORK' where medium_category='보일러/냉온수공사';
update pms_work_plan set medium_category='FIREFIGHTING_CONSTRUCTION' where medium_category='소방설비공사';
update pms_work_plan set medium_category='GAS_FACILITY_CONSTRUCTION' where medium_category='가스설비공사';
update pms_work_plan set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_work_plan set medium_category='PIPELINE_CONSTRUCTION' where medium_category='관로공사';
update pms_work_plan set medium_category='INTERCOMMUNICATION_LINE_FACILITIES' where medium_category='구내통신배관공사';
update pms_work_plan set medium_category='CABLE_TRAY' where medium_category='트레이공사';
update pms_work_plan set medium_category='DUCT' where medium_category='덕트공사';
update pms_work_plan set medium_category='ACCESS_FLOOR' where medium_category='액세스플로어 공사';
update pms_work_plan set medium_category='ADDITIONAL_CONSTRUCTION' where medium_category='부대공사';
update pms_work_plan set medium_category='COMMUNICATION_CABLE_CONSTRUCTION' where medium_category='통신케이블공사';
update pms_work_plan set medium_category='EXCHANGE_FACILITY_CONSTRUCTION' where medium_category='교환설비공사';
update pms_work_plan set medium_category='TRANSMISSION_FACILITY_CONSTRUCTION' where medium_category='전송설비공사';
update pms_work_plan set medium_category='BROADCASTING_EQUIPMENT_CONSTRUCTION' where medium_category='방송설비공사';
update pms_work_plan set medium_category='NETWORK_FACILITY_CONSTRUCTION' where medium_category='네트워크설비공사';
update pms_work_plan set medium_category='HOME_NETWORK_CONSTRUCTION' where medium_category='홈네트워크 공사';
update pms_work_plan set medium_category='INTELLIGENT_TRANSPORTATION_SYSTEM' where medium_category='지능형 교통시스템 공사';
update pms_work_plan set medium_category='TRAFFIC_SIGNAL_CONSTRUCTION' where medium_category='교통신호기 공사';
update pms_work_plan set medium_category='SECURITY_FACILITY_CONSTRUCTION' where medium_category='보안설비공사';
update pms_work_plan set medium_category='CCTV_SYSTEM_CONSTRUCTION' where medium_category='cctv시스템 공사';
update pms_work_plan set medium_category='INTEGRATED_CONTROL_CENTER_CONSTRUCTION' where medium_category='통합관제센터 공사';
update pms_work_plan set medium_category='ACCESS_CONTROL_SYSTEM_CONSTRUCTION' where medium_category='출입통제시스템 공사';
update pms_work_plan set medium_category='PMS_CONSTRUCTION' where medium_category='객실관리시스템 공사';
update pms_work_plan set medium_category='SMART_CONVERGENCE_FACILITY_CONSTRUCTION' where medium_category='스마트 융합설비 공사';
update pms_work_plan set medium_category='SMART_PARKING_SYSTEM_CONSTRUCTION' where medium_category='스마트 파킹시스템 공사';
update pms_work_plan set medium_category='SMART_FARM_CONSTRUCTION' where medium_category='스마트팜 공사';
update pms_work_plan set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_work_plan set medium_category='TRANSMISSION_FACILITY_CONSTRUCTION' where medium_category='송전설비공사';
update pms_work_plan set medium_category='ELECTRIC_POWER_TRANSFORMATION' where medium_category='변전설비공사';
update pms_work_plan set medium_category='ELECTRIC_POWER_DISTRIBUTION_CONSTRUCTION' where medium_category='배전설비공사';
update pms_work_plan set medium_category='INDOOR_WIRING_ENGINEERING' where medium_category='내선설비공사';
update pms_work_plan set medium_category='BUILDING_AUTOMATION_SYSTEM_CONSTRUCTION' where medium_category='자동제어설비공사';
update pms_work_plan set medium_category='EV_CHARGING_INFRASTRUCTURE_CONSTRUCTION' where medium_category='전기차 충전설비 공사';
update pms_work_plan set medium_category='ETC_WORK' where medium_category='기타공사';

-- pms_risk_assessment_the_first_routine_item 테이블. 중분류 컬럼 마이그레이션
update pms_risk_assessment_the_first_routine_item set medium_category='TEMPORARY_WORK' where medium_category='가설공사';
update pms_risk_assessment_the_first_routine_item set medium_category='EARTH_WORK' where medium_category='토공사';
update pms_risk_assessment_the_first_routine_item set medium_category='LANDSCAPE_WORK' where medium_category='조경공사';
update pms_risk_assessment_the_first_routine_item set medium_category='FOUNDATION_WORK' where medium_category='기초공사';
update pms_risk_assessment_the_first_routine_item set medium_category='RETAINING_WORK' where medium_category='흙막이공사';
update pms_risk_assessment_the_first_routine_item set medium_category='REINFORCED_CONCRETE_WORK' where medium_category='철근콘크리트공사';
update pms_risk_assessment_the_first_routine_item set medium_category='DEMOLITION_WORK' where medium_category='해체공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ROAD_PAVEMENT_WORK' where medium_category='도로포장공사';
update pms_risk_assessment_the_first_routine_item set medium_category='TUNNEL_WORK' where medium_category='터널공사';
update pms_risk_assessment_the_first_routine_item set medium_category='TRACK_WORK' where medium_category='궤도공사';
update pms_risk_assessment_the_first_routine_item set medium_category='PIPELINE_WORK' where medium_category='관부설/접합공사';
update pms_risk_assessment_the_first_routine_item set medium_category='SUBSURFACE_EXPLORATION' where medium_category='지반조사';
update pms_risk_assessment_the_first_routine_item set medium_category='MEASURE' where medium_category='측량';
update pms_risk_assessment_the_first_routine_item set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_risk_assessment_the_first_routine_item set medium_category='STEEL_STRUCTURE' where medium_category='철골공사';
update pms_risk_assessment_the_first_routine_item set medium_category='MASONRY' where medium_category='조적공사';
update pms_risk_assessment_the_first_routine_item set medium_category='TILE_CONSTRUCTION' where medium_category='타일공사';
update pms_risk_assessment_the_first_routine_item set medium_category='WOODWORKING' where medium_category='목공사';
update pms_risk_assessment_the_first_routine_item set medium_category='INTERIOR_FINISHING_WORK' where medium_category='수장공사';
update pms_risk_assessment_the_first_routine_item set medium_category='WATERPROOFING_WORK' where medium_category='방수공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ROOF' where medium_category='지붕공사';
update pms_risk_assessment_the_first_routine_item set medium_category='METAL_WORK' where medium_category='금속공사';
update pms_risk_assessment_the_first_routine_item set medium_category='PLASTER_WORK' where medium_category='미장공사';
update pms_risk_assessment_the_first_routine_item set medium_category='GLASS_WORK' where medium_category='창호/유리공사';
update pms_risk_assessment_the_first_routine_item set medium_category='IRON_WORK' where medium_category='칠공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_risk_assessment_the_first_routine_item set medium_category='PLUMBING' where medium_category='배관공사';
update pms_risk_assessment_the_first_routine_item set medium_category='DUCT' where medium_category='덕트공사';
update pms_risk_assessment_the_first_routine_item set medium_category='INSULATION_WORK' where medium_category='보온공사';
update pms_risk_assessment_the_first_routine_item set medium_category='PUMP_WORK' where medium_category='펌프/공기설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='VALVE_FACILITY_CONSTRUCTION' where medium_category='밸브설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='MEASURING_EQUIPMENT_CONSTRUCTION' where medium_category='측정기기공사';
update pms_risk_assessment_the_first_routine_item set medium_category='HVAC' where medium_category='공기조화설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='AUTOMATIC_CONTROL_CONSTRUCTION' where medium_category='자동제어설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='TRANSPORTATION_CONSTRUCTION' where medium_category='운송설비/기계공사';
update pms_risk_assessment_the_first_routine_item set medium_category='FREEZER_CONSTRUCTION' where medium_category='냉동기/냉각탑공사';
update pms_risk_assessment_the_first_routine_item set medium_category='BOILER_WORK' where medium_category='보일러/냉온수공사';
update pms_risk_assessment_the_first_routine_item set medium_category='FIREFIGHTING_CONSTRUCTION' where medium_category='소방설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='GAS_FACILITY_CONSTRUCTION' where medium_category='가스설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_risk_assessment_the_first_routine_item set medium_category='PIPELINE_CONSTRUCTION' where medium_category='관로공사';
update pms_risk_assessment_the_first_routine_item set medium_category='INTERCOMMUNICATION_LINE_FACILITIES' where medium_category='구내통신배관공사';
update pms_risk_assessment_the_first_routine_item set medium_category='CABLE_TRAY' where medium_category='트레이공사';
update pms_risk_assessment_the_first_routine_item set medium_category='DUCT' where medium_category='덕트공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ACCESS_FLOOR' where medium_category='액세스플로어 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ADDITIONAL_CONSTRUCTION' where medium_category='부대공사';
update pms_risk_assessment_the_first_routine_item set medium_category='COMMUNICATION_CABLE_CONSTRUCTION' where medium_category='통신케이블공사';
update pms_risk_assessment_the_first_routine_item set medium_category='EXCHANGE_FACILITY_CONSTRUCTION' where medium_category='교환설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='TRANSMISSION_FACILITY_CONSTRUCTION' where medium_category='전송설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='BROADCASTING_EQUIPMENT_CONSTRUCTION' where medium_category='방송설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='NETWORK_FACILITY_CONSTRUCTION' where medium_category='네트워크설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='HOME_NETWORK_CONSTRUCTION' where medium_category='홈네트워크 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='INTELLIGENT_TRANSPORTATION_SYSTEM' where medium_category='지능형 교통시스템 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='TRAFFIC_SIGNAL_CONSTRUCTION' where medium_category='교통신호기 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='SECURITY_FACILITY_CONSTRUCTION' where medium_category='보안설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='CCTV_SYSTEM_CONSTRUCTION' where medium_category='cctv시스템 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='INTEGRATED_CONTROL_CENTER_CONSTRUCTION' where medium_category='통합관제센터 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ACCESS_CONTROL_SYSTEM_CONSTRUCTION' where medium_category='출입통제시스템 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='PMS_CONSTRUCTION' where medium_category='객실관리시스템 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='SMART_CONVERGENCE_FACILITY_CONSTRUCTION' where medium_category='스마트 융합설비 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='SMART_PARKING_SYSTEM_CONSTRUCTION' where medium_category='스마트 파킹시스템 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='SMART_FARM_CONSTRUCTION' where medium_category='스마트팜 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ETC_WORK' where medium_category='기타공사';
update pms_risk_assessment_the_first_routine_item set medium_category='TRANSMISSION_FACILITY_CONSTRUCTION' where medium_category='송전설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ELECTRIC_POWER_TRANSFORMATION' where medium_category='변전설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ELECTRIC_POWER_DISTRIBUTION_CONSTRUCTION' where medium_category='배전설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='INDOOR_WIRING_ENGINEERING' where medium_category='내선설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='BUILDING_AUTOMATION_SYSTEM_CONSTRUCTION' where medium_category='자동제어설비공사';
update pms_risk_assessment_the_first_routine_item set medium_category='EV_CHARGING_INFRASTRUCTURE_CONSTRUCTION' where medium_category='전기차 충전설비 공사';
update pms_risk_assessment_the_first_routine_item set medium_category='ETC_WORK' where medium_category='기타공사';

-- pms_risk_assessment_progress 테이블. 위험성평가상태 컬럼 마이그레이션
update pms_risk_assessment_progress set code='CREATE_REQUEST' where code='Create Request';
update pms_risk_assessment_progress set code='CREATING' where code='Creating';
update pms_risk_assessment_progress set code='REVIEW_REQUEST' where code='Review Request';
update pms_risk_assessment_progress set code='APPROVAL_REQUEST' where code='Approval Request';
update pms_risk_assessment_progress set code='NOT_REGISTERED' where code='Not Registered';
update pms_risk_assessment_progress set code='MEETING_NON_OBJECT' where code='Meeting (Non Object)';
update pms_risk_assessment_progress set code='BEFORE_ASSESSMENT' where code='Before Assessment';
update pms_risk_assessment_progress set code='REGISTERED' where code='Registered';
update pms_risk_assessment_progress set code='ASSESSMENT_IN_PROGRESS' where code='Assessment (In-Progress)';
update pms_risk_assessment_progress set code='MEETING_OBJECT' where code='Meeting (Object)';
update pms_risk_assessment_progress set code='MEETING_IN_PROGRESS' where code='Meeting (In-Progress)';
update pms_risk_assessment_progress set code='MEETING_REVIEW' where code='Meeting (Review)';
update pms_risk_assessment_progress set code='WORK_APPROVAL' where code='Work Approval';

-- pms_risk_assessment_item 테이블. 중요성 컬럼 마이그레이션
ALTER TABLE pms_risk_assessment_item MODIFY risk_important varchar(100);
update pms_risk_assessment_item set risk_important='ONE' where risk_important='1';
update pms_risk_assessment_item set risk_important='TWO' where risk_important='2';
update pms_risk_assessment_item set risk_important='THREE' where risk_important='3';
update pms_risk_assessment_item set risk_important='FOUR' where risk_important='4';

-- pms_risk_assessment_item 테이블. 가능성 컬럼 마이그레이션
ALTER TABLE pms_risk_assessment_item MODIFY risk_possibility  varchar(100);
update pms_risk_assessment_item set risk_possibility='ONE' where risk_possibility='1';
update pms_risk_assessment_item set risk_possibility='TWO' where risk_possibility='2';
update pms_risk_assessment_item set risk_possibility='THREE' where risk_possibility='3';
update pms_risk_assessment_item set risk_possibility='FOUR' where risk_possibility='4';
update pms_risk_assessment_item set risk_possibility='FIVE' where risk_possibility='5'; -- NEW

-- pms_risk_assessment_meeting_priority 테이블. 개선후 중요성 컬럼 마이그레이션
ALTER TABLE pms_risk_assessment_meeting_priority MODIFY after_improvement_importance  varchar(100);
update pms_risk_assessment_meeting_priority set after_improvement_importance='ONE' where after_improvement_importance='1';
update pms_risk_assessment_meeting_priority set after_improvement_importance='TWO' where after_improvement_importance='2';
update pms_risk_assessment_meeting_priority set after_improvement_importance='THREE' where after_improvement_importance='3';
update pms_risk_assessment_meeting_priority set after_improvement_importance='FOUR' where after_improvement_importance='4';

-- pms_risk_assessment_the_first_routine_item 테이블. 중요성 컬럼 마이그레이션
ALTER TABLE pms_risk_assessment_the_first_routine_item MODIFY risk_important  varchar(100);
update pms_risk_assessment_the_first_routine_item set risk_important='ONE' where risk_important='1';
update pms_risk_assessment_the_first_routine_item set risk_important='TWO' where risk_important='2';
update pms_risk_assessment_the_first_routine_item set risk_important='THREE' where risk_important='3';
update pms_risk_assessment_the_first_routine_item set risk_important='FOUR' where risk_important='4';

-- pms_risk_assessment_meeting_priority 테이블. 개선후 가능성 컬럼 마이그레이션
ALTER TABLE pms_risk_assessment_meeting_priority MODIFY after_improvement_possibility  varchar(100);
update pms_risk_assessment_meeting_priority set after_improvement_possibility='ONE' where after_improvement_possibility='1';
update pms_risk_assessment_meeting_priority set after_improvement_possibility='TWO' where after_improvement_possibility='2';
update pms_risk_assessment_meeting_priority set after_improvement_possibility='THREE' where after_improvement_possibility='3';
update pms_risk_assessment_meeting_priority set after_improvement_possibility='FOUR' where after_improvement_possibility='4';
update pms_risk_assessment_meeting_priority set after_improvement_possibility='FIVE' where after_improvement_possibility='5'; -- NEW

-- pms_risk_assessment_the_first_routine_item 테이블. 가능성 컬럼 마이그레이션
ALTER TABLE pms_risk_assessment_the_first_routine_item MODIFY risk_possibility  varchar(100);
update pms_risk_assessment_the_first_routine_item set risk_possibility='ONE' where risk_possibility='1';
update pms_risk_assessment_the_first_routine_item set risk_possibility='TWO' where risk_possibility='2';
update pms_risk_assessment_the_first_routine_item set risk_possibility='THREE' where risk_possibility='3';
update pms_risk_assessment_the_first_routine_item set risk_possibility='FOUR' where risk_possibility='4';
update pms_risk_assessment_the_first_routine_item set risk_possibility='FIVE' where risk_possibility='5'; -- NEW

-- pms_safety_education 테이블. 교육구분 컬럼 마이그레이션
ALTER TABLE pms_safety_education MODIFY division  varchar(255); 
update pms_safety_education set division='REGULAR_TRAINING' where division='정기교육';
update pms_safety_education set division='HIRING_TRAINING' where division='채용시 교육';
update pms_safety_education set division='SPECIAL_TRAINING' where division='특별교육';
update pms_safety_education set division='WORK_CONTENTS_CHANGING_TRAINING' where division='작업내용 변경 시 교육';

-- pms_occupational_safety_health 테이블. 산업안전보건관리비 항목 컬럼 마이그레이션
ALTER TABLE pms_occupational_safety_health MODIFY ITEM  varchar(100);
update pms_occupational_safety_health set ITEM='SAFETY_WAGES' where ITEM='0';
update pms_occupational_safety_health set ITEM='SAFETY_FACILITIES' where ITEM='1';
update pms_occupational_safety_health set ITEM='PROTECTIVE_EQUIPMENT' where ITEM='2';
update pms_occupational_safety_health set ITEM='SAFETY_EXAMINATION' where ITEM='3';
update pms_occupational_safety_health set ITEM='SAFETY_EDUCATION' where ITEM='4';
update pms_occupational_safety_health set ITEM='EMPLOYEE_HEALTH_DISABILITY_PREVENTION_EXPENSES' where ITEM='5';
update pms_occupational_safety_health set ITEM='CONSTRUCTION_DISASTER_PREVENTION_PROFESSIONAL' where ITEM='6';
update pms_occupational_safety_health set ITEM='EMPLOYEE_WAGES' where ITEM='7';
update pms_occupational_safety_health set ITEM='REQUIRED_COST_RISK_ASSESSMENT' where ITEM='8';

-- pms_meeting_minute_division 테이블. 협의체회의록 구분 컬럼 마이그레이션
ALTER TABLE pms_meeting_minute_division MODIFY CODE  varchar(255); -- 변경 이전 타입 확인 필요
update pms_meeting_minute_division set CODE='SF1901' where CODE='sd00001';
update pms_meeting_minute_division set CODE='SF1902' where CODE='sd00002';
update pms_meeting_minute_division set CODE='SF1903' where CODE='sd00003';

-- pms_risk_assessment_the_first_routine_item 테이블. 위험유형 컬럼 마이그레이션
ALTER TABLE pms_risk_assessment_the_first_routine_item MODIFY risk_type varchar(100); 
update pms_risk_assessment_the_first_routine_item set risk_type='ELECTRIC_SHOCK' where risk_type='0';
update pms_risk_assessment_the_first_routine_item set risk_type='FIRE' where risk_type='1';
update pms_risk_assessment_the_first_routine_item set risk_type='CRASH' where risk_type='2';
update pms_risk_assessment_the_first_routine_item set risk_type='FALL' where risk_type='3';
update pms_risk_assessment_the_first_routine_item set risk_type='SUFFOCATION' where risk_type='4';
update pms_risk_assessment_the_first_routine_item set risk_type='SLIP' where risk_type='5';
update pms_risk_assessment_the_first_routine_item set risk_type='DROP' where risk_type='6';
update pms_risk_assessment_the_first_routine_item set risk_type='CATCH' where risk_type='7';

-- pms_role_safety 테이블. Project안전관리 역할 컬럼 마이그레이션
update pms_role_safety set role_id='SAFETY_GENERAL_MANAGER' where role_id='ROLE_SAFETY_01';
update pms_role_safety set role_id='SAFETY_HEALTH_MANAGEMENT_MANAGER' where role_id='ROLE_SAFETY_02';
update pms_role_safety set role_id='SAFETY_MANAGER' where role_id='ROLE_SAFETY_03';
update pms_role_safety set role_id='SAFETY_HEALTH_MANAGER' where role_id='ROLE_SAFETY_04';
update pms_role_safety set role_id='SAFETY_MANAGEMENT_SUPERVISOR' where role_id='ROLE_SAFETY_05';
update pms_role_safety set role_id='HEADQUARTER_SAFETY_MANAGER' where role_id='ROLE_SAFETY_06';

-- pms_headquarter_safety_inspect 테이블. 본사안전점검 제목 컬럼 마이그레이션
update pms_headquarter_safety_inspect set title='SF2703' where title='본사 안전점검';

-- pms_risk_assessment_the_first_routine_item 테이블. 위험유형 컬럼 마이그레이션
ALTER TABLE pms_risk_assessment_item MODIFY risk_type varchar(100); 
update pms_risk_assessment_item set risk_type='ELECTRIC_SHOCK' where risk_type='0';
update pms_risk_assessment_item set risk_type='FIRE' where risk_type='1';
update pms_risk_assessment_item set risk_type='CRASH' where risk_type='2';
update pms_risk_assessment_item set risk_type='FALL' where risk_type='3';
update pms_risk_assessment_item set risk_type='SUFFOCATION' where risk_type='4';
update pms_risk_assessment_item set risk_type='SLIP' where risk_type='5';
update pms_risk_assessment_item set risk_type='DROP' where risk_type='6';
update pms_risk_assessment_item set risk_type='CATCH' where risk_type='7';
```