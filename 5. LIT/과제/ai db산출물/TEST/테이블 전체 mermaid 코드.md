

CHMM_CATEGORY_INFO {
        varchar(255) CATEGORY_ID PK
        varchar(1000) CATEGORY_DESC
        int ORDER_NUM
        varchar(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
        varchar(100) REAL_VALUE
        tinyint(1) is_delete
        varchar(255) service_code
    }

CHMM_EXCEPTION_LOG_INFO {
        varchar(32) EXCEPTION_LOG_ID PK
        varchar(32) USER_ID
        varchar(32) ACCESS_IP
        varchar(100) SESSION_ID
        varchar(100) REQUEST_URI
        varchar(400) EXCEPTION_OCCUR_LINE
        varchar(400) EXCEPTION_METHOD_CAUSE
        longtext EXCEPTION_METHOD_INFO
        longtext EXCEPTION_LOG_MSG
        datetime OCCUR_LOG_DATE
        datetime SYS_INSERT_DTM
        varchar(32) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(32) SYS_UPDATE_USER_ID
    }

CHMM_CODE_INFO {
        CATEGORY_ID varchar(255) PK
        CODE_ID varchar(255) PK
        CODE_DESC varchar(1000)
        ORDER_NUM int
        USE_YN varchar(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
        REAL_VALUE varchar(100)
        is_delete tinyint(1)
    }

CHMM_CODE_ITEM_INFO {
        CATEGORY_ID varchar(255) PK
        CODE_ID varchar(255) PK
        CODE_ITEM_ID varchar(255) PK
        CODE_ITEM_DESC varchar(1000)
        ORDER_NUM int
        USE_YN varchar(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
        REAL_VALUE varchar(100)
        is_delete tinyint(1)
    }

CHMM_BUTTON_INFO {
        BUTTON_ID varchar(255) PK
        BUTTON_NAME varchar(255)
        BUTTON_DESC varchar(1000)
        BUTTON_CODE varchar(255)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
    }

CHMM_LANGUAGE_INFO {
        varchar(5) LANGUAGE_CODE PK
        varchar(5) COUNTRY_CODE PK
        varchar(1000) DESCRIPTION
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_FILE_METADATA_INFO {
        varchar(50) FILE_METADATA_CODE PK
        varchar(250) FILE_UPLOAD_PATH
        varchar(250) folder_path
        varchar(250) URI
        varchar(100) ORIGINAL_FILE_NAME
        varchar(200) UPLOAD_FILE_NAME
        varchar(10) FILE_SIZE
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime(6) sys_update_dtm
        varchar(255) sys_update_user_id
        bigint project_file_seq FK
    }

CHMM_FILE_DOWNLOAD_HIS {
        varchar(50) FILE_DOWNLOAD_CODE PK
        varchar(255) URI
        varchar(100) ORIGINAL_FILE_NAME
        varchar(200) UPLOAD_FILE_NAME
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime(6) sys_update_dtm
        varchar(255) sys_update_user_id
        varchar(50) file_code FK
    }

CHMM_GROUP_INFO {
        GROUP_ID varchar(255) PK
        GROUP_NAME varchar(255)
        GROUP_DESC varchar(1000)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
    }

CHMM_GROUP_ROLE_MAP {
        GROUP_ID varchar(255) PK
        ROLE_ID varchar(255) PK
        USE_YN char(1)
        SYS_INSERT_DTM datetime
    }

CHMM_MULTI_ROLE_GROUP_INFO {
        PARENT_ROLE_ID varchar(255) PK
        CHILD_ROLE_ID varchar(255) PK
    }

CHMM_MASK_PATTERN_INFO {
        varchar(40) PATTERN_ID PK
        varchar(100) PATTERN_NAME
        varchar(500) CLASS
        varchar(2000) PATTERN
        varchar(2000) REPLACES
        varchar(10) ENABLED
        datetime REGDATE
        char(1) REGEX_YN
    }

CHMM_MENU_INFO {
        MENU_ID varchar(255) PK
        MENU_LVL int
        MENU_URI varchar(255)
        MENU_NAME varchar(255)
        UPPER_MENU_ID varchar(255)
        MENU_DESC varchar(1000)
        MENU_SEQ int
        LEFT_MENU_YN char(1)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
        ADMIN_MENU_YN char(1)
        MENU_HELP_URI varchar(255)
        MENU_SCRIPT varchar(255)
    }

CHMM_PERFORM_INFO {
        SERVICE_ID varchar(40) PK
        PERFORM_TYPE varchar(40)
        THREAD_COUNT int
        REPEAT_TYPE varchar(40)
        REPEAT_VALUE int
        TPS varchar(40)
    }

CHMM_MULTI_USER_GROUP_INFO {
        varchar(255) PARENT_GROUP_ID PK
        varchar(255) CHILD_GROUP_ID PK
    }

CHMM_PERFORM_TREE_INFO {
        varchar(40) SERVICE_ID PK
        varchar(255) SERVICE_NAME
        varchar(20) SERVICE_ICON
        varchar(40) UPPER_FOLDER_ID
        varchar(120) UPPER_FOLDER_IDS
        char(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_PERFORM_TEST_CASE_HIS {
        varchar(40) CHMM_PERFORM_HIS_ID PK
        varchar(40) LABEL PK
        int AVERAGE
        int MIN
        int MAX
        decimal THROUGHPUT
        decimal RECVKB
        decimal SENTKB
        decimal AVGBYTES
        decimal STDDEV
        decimal ERROR
        int SAMPLES
        int ORDER_NUMBER
    }

CHMM_RESOURCE_BUTTON_MAP {
        varchar(255) RESOURCE_ID PK
        varchar(255) BUTTON_ID PK
        char(1) USE_YN
        timestamp SYS_INSERT_DTM
    }

CHMM_RESOURCE_INFO {
        varchar(255) RESOURCE_ID PK
        varchar(255) RESOURCE_URI
        varchar(255) RESOURCE_NAME
        varchar(1000) RESOURCE_DESC
        varchar(400) RESOURCE_HTTPMETHOD
        int SECURITY_ORDER
        char(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_PROPERTY_INFO {
        PROPERTY_KEY varchar(300) PK
        PROPERTY_VALUE varchar(300)
        PROPERTY_DESC varchar(1000)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
    }

CHMM_REST_ASSERTION_INFO {
        varchar(40) SERVICE_ID PK
        varchar(40) TEST_ASSERTION_CODE PK
        varchar(200) TEST_KEY PK
        varchar(40) TEST_COMPARISON PK
        varchar(200) TEST_VALUE
    }

CHMM_RESOURCE_ROLE_MAP {
        varchar(255) RESOURCE_ID PK
        varchar(255) ROLE_ID PK
        char(1) USE_YN
        datetime SYS_INSERT_DTM
    }

CHMM_REST_INFO {
        varchar(40) SERVICE_ID PK
        varchar(255) SERVICE_URI PK
        varchar(10) SERVICE_METHOD
        varchar(1024) SERVICE_BASEURL
    }

CHMM_REST_HEADER_INFO {
        varchar(40) SERVICE_ID PK
        varchar(200) TEST_KEY PK
        varchar(200) TEST_VALUE
    }

CHMM_RESOURCE_ROLE_BUTTON_MAP {
        varchar(255) RESOURCE_ID PK
        varchar(255) ROLE_ID PK
        varchar(255) BUTTON_ID PK
        char(1) USE_YN
        datetime SYS_INSERT_DTM
    }

CHMM_REST_TREE_INFO {
        SERVICE_ID varchar(40) PK
        SERVICE_NAME varchar(255)
        SERVICE_ICON varchar(20)
        UPPER_FOLDER_ID varchar(40)
        UPPER_FOLDER_IDS varchar(120)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
    }

CHMM_ROLE_INFO {
        varchar(255) ROLE_ID PK
        varchar(255) ROLE_NAME
        varchar(1000) ROLE_DESC
        varchar(8) ROLE_START_DT
        varchar(8) ROLE_END_DT
        char(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_SERVICE_CONTROL_INFO {
        varchar(40) SERVICE_ID PK
        varchar(650) RM_PATHS PK
        varchar(100) RM_METHOD PK
        char(1) APPROVAL_REQUIRED
        varchar(650) DESCRIPTION
        varchar(100) ERR_MESSAGE
        date START_DATE
        date END_DATE
        char(1) APPROVAL_YN
        char(1) ACTIVATION
    }

CHMM_ROLE_MENU_MAP {
        varchar(255) MENU_ID PK
        varchar(255) ROLE_ID PK
        char(1) USE_YN
        datetime SYS_INSERT_DTM
    }

CHMM_REST_SCHEDULE_INFO {
        varchar(40) SCHEDULE_ID PK
        varchar(100) CRON_EXPR
        varchar(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_SYSTEM_DEFAULT_INFO {
        varchar(200) ENV_ID PK
        varchar(2000) ENV_VALUE
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_USER_ROLE_MAP {
        USER_ID varchar(255) PK
        ROLE_ID varchar(255) PK
        USE_YN char(1)
        SYS_INSERT_DTM datetime
    }

CHMM_USER_INFO {
        USER_ID varchar(255) PK
        USER_EMAIL varchar(255)
        USER_MOBILE varchar(14)
        USER_NAME varchar(255)
        USER_NICK varchar(255)
        USER_PWD varchar(255)
        USER_IMG varchar(4000)
        USER_MSG varchar(4000)
        USER_DESC varchar(1000)
        USER_STAT_CD varchar(16)
        USER_SNSID varchar(255)
        ACCOUNT_NON_LOCK char(1)
        ACCOUNT_START_DT varchar(8)
        ACCOUNT_END_DT varchar(8)
        PASSWORD_EXPIRE_DT varchar(8)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
        PASSWORD_LOCK_CNT int
        EXCEPTION_SEND_YN char(1)
        LOG_SEND_YN char(1)
        appointment varchar(255)
        department_id varchar(255)
        employee_id varchar(255)
        pms_authority varchar(255)
        position varchar(255)
    }

CHMM_STATISTICS_CLIENTSYSTEM {
        int CLIENTSYSTEM_ID PK
        varchar(50) BROWSERNAME
        varchar(50) DEVICE
        varchar(50) OSNAME
        varchar(50) ACCESSDATE
    }

CHMM_USER_GROUP_MAP {
        GROUP_ID varchar(255) PK
        USER_ID varchar(255) PK
        USE_YN char(1)
        SYS_INSERT_DTM datetime
    }

pms_board {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bit(1) is_use
        bigint read_count
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_menu_seq FK
    }

PMS_BUTTON {
        bigint seq PK
        varchar(255) id
        varchar(255) code
        varchar(255) description
        varchar(255) name
        bigint is_use_seq FK
    }

pms_button_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_button_seq bigint FK
        project_seq bigint FK
        role_seq bigint FK
        is_default bit(1)
    }

PMS_ANSWER {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bit(1) is_use
        bigint read_count
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_menu_seq FK
        bigint question_seq FK
    }

pms_action_item {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(4000) title
        date end_date
        date plan_end_date
        date request_date
        varchar(4000) result
        bigint view_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint action_status_seq FK
        bigint assignee_seq FK
        bigint priority_seq FK
        bigint project_id FK
        bigint request_user_seq FK
        mediumblob content
        bigint request_type_seq FK
    }

pms_comment {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint board_sequence
        varchar(255) board_type_code
        mediumblob content
        bit(1) is_use
        bigint creator_seq FK
        bigint updater_seq FK
        bigint parent_comment_seq FK
        bigint project_seq FK
    }

pms_contract {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        biz varchar(255)
        contract_id varchar(255)
        description varchar(255)
        first_level varchar(255)
        fourth_level varchar(255)
        note varchar(255)
        proposal varchar(255)
        request_proposal varchar(255)
        second_level varchar(255)
        system varchar(255)
        technical_negotiation varchar(255)
        third_level varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        project_seq bigint FK
        type_seq bigint FK
    }

PMS_CODE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) code
        bit(1) is_use
        varchar(255) name
        varchar(255) real_value
        varchar(255) service_code
        bigint creator_seq FK
        bigint updater_seq FK
        varchar(255) category_id FK
        varchar(255) code_id FK
        varchar(255) code_item_id FK
    }

PMS_COMPANY_REGISTRATION_MANAGEMENT {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        abbreviation varchar(255)
        english_name varchar(255)
        is_abbreviation_changeable bit(1)
        is_delete bit(1)
        is_moin_use bit(1)
        is_tenant bit(1)
        is_usage_fee_end bit(1)
        is_use bit(1)
        moin_code varchar(255)
        name varchar(255)
        note varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        category_seq bigint FK
        representative_seq bigint FK
    }

pms_contract_requirement_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        contract_seq bigint
        requirement_seq bigint
    }

PMS_DAILY_INTERFACE_RESULT {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) interface_type
        bit(1) result
        bigint data_size
        varchar(255) note
    }

pms_defect_aggregation {
        seq bigint PK
        aggregation_date date
        project_seq bigint FK
        test_phase_seq bigint FK
        is_open bit(1)
        open bigint
        assign bigint
        resolved bigint
        pending bigint
        closed bigint
        create_date_time datetime
        creator_seq bigint FK
    }

pms_defect_deletion_history {
        seq bigint PK
        project_seq bigint FK
        screen_name varchar(50)
        defect_id varchar(20)
        detail varchar(1000)
        creator_seq bigint FK
        updater_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

pms_department {
        varchar(5) dept_id PK
        datetime(6) create_date_time
        bit(1) is_use
        varchar(5) level
        varchar(100) name
        int sort
        varchar(5) type
        datetime(6) update_date_time
        varchar(5) parent_department_dept_id FK
        bigint creator_seq FK
        bigint updater_seq FK
    }

pms_deliverable {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) document_number
        date end_date
        text link_url
        varchar(255) name
        varchar(255) note
        varchar(255) phase
        date start_date
        varchar(255) task_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint assignee_seq FK
        bigint project_seq FK
        bigint status_code_seq FK
        varchar(255) deliverable_type
        text dynamic_extra_field11
        text dynamic_extra_field12
        text dynamic_extra_field13
        text dynamic_extra_field14
        text dynamic_extra_field15
        text dynamic_extra_field16
        text dynamic_extra_field17
        text dynamic_extra_field18
        text dynamic_extra_field19
        text dynamic_extra_field20
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
    }

pms_design {
        bigint seq PK
        datetime(6) create_date_time
        varchar(80) output
        datetime(6) plan_end_date
        datetime(6) plan_start_date
        datetime(6) real_end_date
        datetime(6) real_start_date
        varchar(30) status
        datetime(6) update_datetime
    }

pms_education_work {
        bigint seq PK
        varchar(1000) description
        int item_number
        varchar(1000) name
    }

pms_export_management {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
    }

pms_dynamic_field_management {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint content_length
        varchar(255) content_type
        bit(1) is_use
        varchar(225) name
        varchar(225) screen_code
        bigint sort
        bigint creator_seq FK
        bigint updater_seq FK
        varchar(255) field_code_type FK
        bigint project_seq FK
    }

PMS_GROUP {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) description
        varchar(255) name
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        bit(1) is_default
        varchar(255) group_id
    }

pms_group_pms_user_group_map {
        project_group_seq FK
        user_group_list_seq PK
        user_group_list_seq PK
    }

pms_headquarter_item_onsite_management_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        best_practice bigint
        evaluation bigint
        inspection_result varchar(255)
        management_level_seq bigint
        onsite_management_seq bigint
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_headquarter_item_safety_awareness {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) factor_name
        bigint factor_seq
        varchar(255) middle_category_name
        bigint middle_category_seq
        bit(1) small_category_apply
        varchar(255) small_category_checklist
        varchar(255) small_category_evaluation_name
        varchar(255) small_category_fine_name
        double small_category_score
        bigint small_category_seq
        bigint small_category_weight
        bigint creator_seq FK
        bigint updater_seq FK
    }

pms_headquarter_item_onsite_safety_standard_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        collision bigint
        crash bigint
        electric_explosion bigint
        entrapment bigint
        fall bigint
        flying bigint
        inspection_result varchar(255)
        management_level_seq bigint
        safety_standard_seq bigint
        slip bigint
        suffocation bigint
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_headquarter_item_onsite_safety_standard {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) major_category_name
        bigint major_category_seq
        varchar(255) middle_category_name
        bigint middle_category_seq
        varchar(255) small_category_inspect_criteria_name
        varchar(255) small_category_inspect_item_name
        bigint small_category_seq
        bigint creator_seq FK
        bigint updater_seq FK
    }

pms_headquarter_safety_practice {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) best_practices
        bigint creator_seq FK
        bigint updater_seq FK
        bigint headquarter_safety_inspect_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        varchar(255) company_name
    }

pms_headquarter_safety_inspect_action {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(5000) action_content
        date action_deadline
        varchar(255) inappropriate_content
        date occurrence_date
        varchar(255) origin_site
        varchar(255) risk_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint headquarter_safety_inspect_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        varchar(255) company_name
        bit(1) action_status
    }

pms_headquarter_management_level {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text content
        varchar(255) division
        date inspect_date
        varchar(255) project_name
        bigint rating
        varchar(255) rating_label
        bigint ratio
        bigint score
        varchar(255) type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint headquarter_safety_inspect_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        bigint partner_seq FK
    }

pms_headquarter_safety_inspect {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) action_status
        date inspect_date
        varchar(255) main_task
        bigint other_score
        varchar(255) overall_evaluation
        bigint overall_rating
        varchar(255) title
        varchar(255) writing_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint approval_user_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        varchar(255) overall_grade
        varchar(255) pre_action_status
        bigint checker_seq FK
        datetime(6) approval_date_time
    }

pms_headquarter_item_safety_awareness_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        evaluation bigint
        inspection_result varchar(255)
        management_level_seq bigint
        safety_awareness_seq bigint
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_input_person_individual_total_result {
        bigint seq PK
        double cumulative_rate
        double current_month_rate
        double plan
        double rate
        double result
        bigint input_person_seq FK
    }

pms_input_person_result {
        bigint seq PK
        date month
        double plan
        double result
        bigint input_person_seq FK
    }

pms_input_person {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(330) note
        bigint order_number
        date plan_end_date
        date plan_start_date
        date real_end_date
        date real_start_date
        varchar(30) role
        varchar(30) task
        bigint view_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint field_seq FK
        bigint is_participated_seq FK
        bigint project_seq FK
        bigint tech_grade_seq FK
        bigint user_seq FK
        bigint input_person_seq FK
        text dynamic_extra_field11
        text dynamic_extra_field12
        text dynamic_extra_field13
        text dynamic_extra_field14
        text dynamic_extra_field15
        text dynamic_extra_field16
        text dynamic_extra_field17
        text dynamic_extra_field18
        text dynamic_extra_field19
        text dynamic_extra_field20
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
    }

pms_holiday {
        bigint seq PK
        varchar(255) day
        datetime(6) holiday_date
        varchar(255) name
        varchar(330) note
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
    }

pmsLocalAreaNetworkManager {
        bigint seq PK
        varchar(255) address
        datetime(6) createDateTime
        varchar(255) note
    }

pms_manual_image {
        bigint seq PK
        text caution_list
        text description_list
        varchar(50) image_meta_data_file_metadata_code FK
        bigint manual_seq FK
    }

pms_manual {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint menu_seq FK
        varchar(50) video_file_metadata_code FK
    }

pms_mail_verification {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) verification_code
        bigint user_seq FK
    }

pms_meeting_minute {
        + seq : bigint PK
        create_date_time : datetime(6)
        update_date_time : datetime(6)
        is_use : bit(1)
        negotiations : varchar(10000)
        status : int
        title : varchar(255)
        creator_seq : bigint FK
        updater_seq : bigint FK
        approver_seq : bigint FK
        commissioner_seq : bigint FK
        division_seq : bigint FK
        partner_seq : bigint FK
        pic_seq : bigint FK
        project_seq : bigint FK
        user_seq : bigint FK
        validator_seq : bigint FK
        worker_seq : bigint FK
        review : varchar(10000)
        open_date : datetime(6)
        creation_month : int
        creation_year : int
    }

pms_meeting_minute_division {
        bigint seq PK
        varchar(255) CODE
        varchar(255) en_name
        varchar(255) kr_name
    }

pms_meeting_minute_resolution_type {
        bigint seq PK
        varchar(255) code
        varchar(1000) en_name
        varchar(1000) kr_name
        int priority
    }

pms_meeting_minute_user_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        type varchar(30)
        creator_seq bigint FK
        updater_seq bigint FK
        meeting_minute_seq bigint FK
        user_seq bigint FK
    }

pms_meeting_room {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) facility
        varchar(255) name
        bigint number_of_seats
        bit(1) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bit(1) is_use
    }

pms_meeting_minute_division {
        bigint meeting_minute_division_seq FK
        bigint resolution_types_seq FK
    }

pms_meeting_room_reservation {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) description
        datetime(6) reserved_end_date_time
        datetime(6) reserved_start_date_time
        varchar(30) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint meeting_room_seq FK
    }

pms_menu_button_map {
        seq bigint PK
        is_map bit(1)
        button_seq bigint FK
        menu_seq bigint FK
        project_seq bigint FK
        is_default bit(1)
    }

pms_message_recipient_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_stored bit(1)
        is_use bit(1)
        read_datetime datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        message_seq bigint FK
        user_seq bigint FK
        project_seq bigint FK
    }

pms_menu_role_map {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bit(1) is_map
        bigint creator_seq FK
        bigint updater_seq FK
        bigint menu_seq FK
        bigint project_seq FK
        bigint role_seq FK
        bit(1) is_default
    }

pms_menu {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) menu_desc
        varchar(255) menu_id
        bigint menu_order
        varchar(255) name
        datetime(6) order_history_datetime
        bigint order_histroy
        bigint tree_id
        varchar(255) url
        bit(1) use_history
        datetime(6) use_history_datetime
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint parent_id FK
        bigint pms_code_seq FK
        bigint project_seq FK
        bit(1) is_admin
        char(1) is_manual_use
    }

PMS_MESSAGE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bit(1) is_stored
        bit(1) is_use
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
    }

PMS_NOTE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint project_menu_seq FK
    }

pms_occupational_safety_health {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint amount_used
        date date_used
        varchar(100) ITEM
        varchar(255) item_used
        bigint quantity
        bigint unit_price
        varchar(255) year_and_month_use
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bit(1) is_use
        varchar(255) company_name
        varchar(255) company
    }

pms_notice {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bit(1) is_post_pinned_checked
        bit(1) is_use
        bit(1) is_use_popup_checked
        date post_pinned_end_date
        date post_pinned_start_date
        bigint read_count
        varchar(255) title
        date use_popup_end_date
        date use_popup_start_date
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_menu_seq FK
    }

pms_notice_image {
        bigint seq PK
        varchar(255) file_address
    }

pms_onsite_safety_inspection_daily {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) check_result
        varchar(255) company
        varchar(255) major_risk_factors
        varchar(255) number_of_workers
        varchar(255) type_of_work
        varchar(255) work_detail
        varchar(255) work_position
        bigint creator_seq FK
        bigint updater_seq FK
        bigint onsite_inspection_seq FK
        varchar(255) detail_work_type
        bigint risk_assessment_item_seq
        varchar(255) work_representative
    }

pms_open_activity {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(100) assignee_department_name
        text first_level
        date plan_end_date
        datetime(6) plan_end_time
        bigint plan_minutes
        date plan_start_date
        datetime(6) plan_start_time
        date real_end_date
        datetime(6) real_end_time
        bigint real_minutes
        date real_start_date
        datetime(6) real_start_time
        text remark
        text second_level
        text task_id
        text task_name
        text third_level
        bigint creator_seq FK
        bigint updater_seq FK
        bigint assignee_seq FK
        bigint project_seq FK
        bigint status_seq FK
        bigint test_phase_seq FK
        bigint type_seq FK
        bigint validator_seq FK
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
    }

pms_onsite_safety_inspection_nonconformity {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(5000) action_content
        date action_deadline
        bit(1) action_status
        varchar(255) checker
        date date_of_occurrence
        varchar(5000) nonconforming_content
        varchar(255) occurrence_location
        varchar(255) risk_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint onsite_inspection_seq FK
        bigint partner_seq FK
        bigint inspector_seq FK
        bigint onsite_inspection_daily_seq FK
        varchar(255) company_name
        int onsite_risk_type
    }

pms_partner {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) company_name
        bigint contract_amount
        date input_date
        date input_end_date
        varchar(255) type_of_work_in_charge
        bigint creator_seq FK
        bigint updater_seq FK
        bigint pic_seq FK
        bigint project_seq FK
        bigint is_use_seq FK
        bigint safety_management_fee
        bigint company_seq FK
    }

pms_onsite_safety_inspection {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) check_content
        varchar(1000) checker_opinion
        varchar(1000) inspector_opinion
        varchar(255) rating
        date registration_date
        text review_content
        decimal score
        varchar(255) status
        varchar(255) title
        varchar(255) type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint checker_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        bigint approver_seq FK
        varchar(255) inspectors
    }

pms_pon_menu_button_map {
        seq bigint PK
        is_map bit(1)
        button_seq bigint FK
        menu_seq bigint FK
        project_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

pms_prefix_history {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) as_is_prefix
        varchar(255) to_be_prefix
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
    }

pms_personal_grid {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text grid
        bigint creator_seq FK
        bigint updater_seq FK
        bigint menu_seq FK
        bigint user_project_seq FK
        text filter_model
        int page_size
        bigint user_seq FK
        bigint grid_tab_code
    }

pms_post {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        content mediumblob
        is_use bit(1)
        is_interfaced bit(1)
        read_count bigint
        service_code varchar(30)
        title varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        project_seq bigint FK
        quality_report_seq bigint
        text mediumblob
        is_post_pinned_checked bit(1)
        is_use_popup_checked bit(1)
        post_pinned_end_date date
        post_pinned_start_date date
        use_popup_end_date date
        use_popup_start_date date
    }

pms_pon_menu_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_seq bigint FK
        project_seq bigint FK
        role_seq bigint FK
    }

pms_privacy_policy {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text content
        tinyint(1) is_delete
        tinyint(1) is_show
        text note
        text title
        double version
        bigint creator_seq FK
        bigint updater_seq FK
    }

pms_project {
        seq bigint PK
        customer_name varchar(255)
        is_delete bit(1)
        name varchar(255)
        note varchar(255)
        open_date datetime(6)
        plan_end_date datetime(6)
        plan_start_date datetime(6)
        real_end_date datetime(6)
        prefix varchar(255)
        sap_project_id varchar(255)
        department_dept_id varchar(5) FK
        pm_seq bigint FK
        sales_user_seq bigint FK
        status_seq bigint FK
        team_dept_id varchar(5) FK
        type_seq bigint FK
        weekly_report_day_code_seq bigint FK
        updater_seq bigint FK
        creator_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
        construction_amount bigint
        contract_amount bigint
        execution_position varchar(255)
        safety_health_management_expenses bigint
        number_of_risk_conduct int
        risk_evaluation_type varchar(100)
        phase_seq bigint FK
        division_dept_id varchar(5) FK
        address varchar(255)
        address_detail varchar(255)
        is_implementation_cost tinyint(1)
        is_intellectual_property_right tinyint(1)
        is_license tinyint(1)
        is_view_after_completion tinyint(1)
        company_seq bigint FK
        customer_company_seq bigint FK
        remark varchar(100)
    }

pms_program_history {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        base_date date
        first_level varchar(255)
        plan_end_date date
        plan_start_date date
        real_end_date date
        real_start_date date
        assignee_seq bigint FK
        difficulty_seq bigint FK
        importance_seq bigint FK
        pl_seq bigint FK
        project_seq bigint FK
        status_code_seq bigint FK
        type_seq bigint FK
    }

pms_program {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date confirm_date
        varchar(255) first_level
        varchar(255) name
        date plan_end_date
        date plan_start_date
        varchar(255) program_id
        bigint progress_rate
        date real_end_date
        date real_start_date
        varchar(255) screen_id
        varchar(255) screen_name
        varchar(255) second_level
        varchar(255) third_level
        bigint creator_seq FK
        bigint updater_seq FK
        bigint assignee_seq FK
        bigint difficulty_seq FK
        bigint importance_seq FK
        bigint project_seq FK
        bigint requirement_seq FK
        bigint status_code_seq FK
        bigint type_seq FK
        bigint pl_seq FK
        varchar(255) fourth_level
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
    }

pms_program_requirement_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        program_seq bigint FK
        requirement_seq bigint FK
    }

pmsProjectDraftAssigneeUserMap {
        sequence bigint PK
        assigneeType varchar(255)
        projectDraftSeq bigint FK
        userSeq bigint FK
    }

pms_project_draft {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        address varchar(255)
        address_detail varchar(255)
        customer_name varchar(255)
        is_delete bit(1)
        is_implementation_cost tinyint(1)
        is_intellectual_property_right tinyint(1)
        is_license tinyint(1)
        is_view_after_completion tinyint(1)
        name varchar(255)
        note varchar(255)
        open_date datetime(6)
        plan_end_date datetime(6)
        plan_start_date datetime(6)
        prefix varchar(255)
        sap_project_id varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        company_seq bigint FK
        customer_company_seq bigint FK
        department_dept_id varchar(5) FK
        division_dept_id varchar(5) FK
        phase_seq bigint FK
        pm_seq bigint FK
        sales_user_seq bigint FK
        status_seq bigint FK
        team_dept_id varchar(5) FK
        type_seq bigint FK
        weekly_report_day_code_seq bigint FK
    }

pms_project_assignee_user_map {
        bigint sequence PK
        varchar(255) assignee_type
        bigint project_seq FK
        bigint user_seq FK
    }

PMS_PROJECT_CODE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) code
        varchar(255) description
        varchar(255) name
        bigint order_num
        bigint creator_seq FK
        bigint updater_seq FK
        varchar(255) category_id FK
        varchar(255) code_id FK
        bigint is_use_seq FK
        bigint project_seq FK
    }

pms_project_dashboard {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) description
        bit(1) is_use
        varchar(255) service_type
        bigint sort_order
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint test_phase_seq FK
    }

pms_project_draft_map {
        bigint sequence PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) message
        varchar(255) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint project_draft_seq FK
    }

pmsProjectHoliday {
        seq bigint PK
        createDateTime datetime(6)
        updateDateTime datetime(6)
        day varchar(255)
        holidayDate datetime(6)
        name varchar(255)
        note varchar(330)
        creatorSeq bigint FK
        updaterSeq bigint FK
        projectSeq bigint FK
    }

pmsProjectNotificationManagementHistory {
        seq bigint PK
        createDateTime datetime(6)
        content varchar(500)
        creatorSeq bigint FK
        projectSeq bigint FK
        projectNotificationManagementSeq bigint FK
    }

pmsProjectNotificationRecipientManagement {
        + seq : bigint PK
        createDateTime : datetime(6)
        updateDateTime : datetime(6)
        isSendDirectMessage : bit(1)
        isSendMail : bit(1)
        recipientType : varchar(255)
        creatorSeq : bigint FK
        updaterSeq : bigint FK
        projectNotificationManagementSeq : bigint FK
    }

pmsProjectNotificationManagement {
        + seq : bigint PK
        createDateTime : datetime(6)
        updateDateTime : datetime(6)
        note : varchar(1000)
        notificationType : varchar(255)
        serviceType : varchar(255)
        creatorSeq : bigint FK
        updaterSeq : bigint FK
        projectSeq : bigint FK
    }

pms_qrs_manager {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text note
        bigint creator_seq FK
        bigint updater_seq FK
        bigint role_seq FK
        bigint user_seq
        bit(1) is_use
    }

pms_question {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(30) action_status
        mediumblob content
        varchar(30) in_charge
        bit(1) is_common
        bit(1) is_use
        varchar(255) menu_location
        bigint read_count
        varchar(255) title
        int top_pin
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_menu_seq FK
        bigint project_seq FK
        tinyint(1) is_secret_message
    }

pmsProjectNotificationSendHistory {
        seq bigint PK
        createDateTime datetime(6)
        isSendSuccess bit(1)
        notificationTitle varchar(255)
        notificationType varchar(255)
        recipientList text
        sendDateTime datetime(6)
        serviceCode varchar(255)
        transmissionType varchar(255)
        creatorSeq bigint FK
        projectSeq bigint FK
        senderSeq bigint FK
        recipientType varchar(255)
    }

pms_project_safety_council_activity {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint division_seq FK
    }

pms_quality_report {
        bigint seq PK
        bigint project_seq FK
        bigint ldcc_weekly_report_sequence
        decimal achievement_rate
        decimal change_rate
        decimal plan_progress_rate
        decimal result_progress_rate
        date opening_date
        date report_date
        bigint project_type_seq FK
        varchar(255) title
        varchar(5000) next_week_plan
        varchar(5000) week_product_result
        varchar(200) note1
        varchar(100) note2
        varchar(100) note3
        varchar(100) note4
        varchar(100) note5
        varchar(100) note6
        varchar(100) note7
        varchar(100) note8
        datetime(6) create_date_time
        datetime(6) update_date_time
        date requirement_confirm_plan_end_date
        date requirement_confirm_real_end_date
        double requirement_confirm_plan_rate
        double requirement_confirm_real_rate
        bigint requirement_confirm_total_count
        bigint implementation_phase_seq FK
        date interfaced_date
        double requirement_confirm_count
        date requirement_confirm_date
        double requirement_confirm_rate
        double requirement_total_count
        double unit_test_finish_count
        double unit_test_finish_rate
        double unit_test_success_count
        double unit_test_success_rate
        double unit_test_total_count
        double development_finish_count
        double development_progress_rate
        double development_total_count
        double fault_fix_count
        double fault_fix_rate
        double fault_report_count
        double integration_test_finish_count
        double integration_test_finish_rate
        double integration_test_success_count
        double integration_test_success_rate
        double integration_test_total_count
        bigint design_finish_count
        varchar(80) design_note
        bigint design_plan_count
        date design_plan_end_date
        double design_plan_rate
        date design_real_end_date
        double design_real_rate
        bigint design_total_count
        varchar(80) development_note
        bigint development_plan_count
        date development_plan_end_date
        double development_plan_rate
        date development_real_end_date
        double development_real_rate
        varchar(80) integration_test_note
        bigint integration_test_plan_count
        date integration_test_plan_end_date
        double integration_test_plan_rate
        date integration_test_real_end_date
        double integration_test_real_rate
        bigint integration_test_defect_action_finish_count
        varchar(80) integration_test_defect_action_note
        bigint integration_test_defect_action_plan_count
        date integration_test_defect_action_plan_end_date
        double integration_test_defect_action_plan_rate
        date integration_test_defect_action_real_end_date
        double integration_test_defect_action_real_rate
        bigint integration_test_defect_action_total_count
        bigint open_defect_action_finish_count
        varchar(80) open_defect_action_note
        bigint open_defect_action_plan_count
        date open_defect_action_plan_end_date
        double open_defect_action_plan_rate
        date open_defect_action_real_end_date
        double open_defect_action_real_rate
        bigint open_defect_action_total_count
        bigint requirement_confirm_plan_count
        bigint requirement_confirm_finish_count
        varchar(80) requirement_confirm_note
        varchar(80) unit_test_note
        bigint unit_test_plan_count
        date unit_test_plan_end_date
        double unit_test_plan_rate
        date unit_test_real_end_date
        double unit_test_real_rate
        bigint unit_test_defect_action_finish_count
        varchar(80) unit_test_defect_action_note
        bigint unit_test_defect_action_plan_count
        date unit_test_defect_action_plan_end_date
        double unit_test_defect_action_plan_rate
        date unit_test_defect_action_real_end_date
        double unit_test_defect_action_real_rate
        bigint unit_test_defect_action_total_count
    }

pms_quotation_reference_system_company_staff {
        bigint seq PK
        bigint creator_seq FK
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) category
        varchar(255) company_name
        varchar(255) difference_explanation
        decimal final_man_month
        decimal init_man_month
        tinyint(1) is_use
        bigint quotation_reference_system_lesson_for_approval_seq FK
        decimal final_man_month_
        decimal init_man_month_
    }

pms_quotation_reference_system_customer_information {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) capital_sale
        varchar(1000) key_mile_store
        varchar(1000) main_business
        varchar(1000) main_staff
        varchar(1000) note
        varchar(1000) number_of_staff
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_biz_overview FK
    }

pms_quotation_reference_system_customer {
        trade_code varchar(10) PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        address varchar(1000)
        business_type varchar(1000)
        corporation_no varchar(11)
        credit_rating_agency varchar(1000)
        credit_rating varchar(1000)
        industry_group varchar(1000)
        industry_sector varchar(1000)
        internal_with_external varchar(1000)
        name varchar(1000)
        primary_contact_name varchar(1000)
        representative_name varchar(1000)
        creator_seq bigint FK
        updater_seq bigint FK
        quotation_reference_system_map_seq bigint
        quotation_reference_system_customer_trade_code varchar(10)
    }

PMS_QUOTATION_REFERENCE_SYSTEM_BIZ_CONTRACT_STRUCTURE {
        seq bigint PK
        category varchar(255)
        biz_scope varchar(1000)
        company_name varchar(255)
        role varchar(1000)
        scope_million decimal
        quotation_reference_system_biz_overview_seq bigint FK
        is_use tinyint(1)
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        criteria_code_seq bigint FK
    }

PMS_QUOTATION_REFERENCE_SYSTEM_BIZ_OVERVIEW {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        business_scope varchar(1000)
        cost_structure varchar(255)
        customer_concern varchar(1000)
        chamomile varchar(255)
        main_partner varchar(255)
        open_date datetime(6)
        risk varchar(1000)
        risk_rating varchar(255)
        webject varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        quotation_reference_system_map_seq bigint FK
        quotation_reference_system_customer_trade_code varchar(10) FK
    }

PMS_QUOTATION_REFERENCE_SYSTEM_CUSTOMER_INFORMATION_PROJECT {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date end_date
        varchar(255) pm_name
        varchar(255) project_name
        decimal scope
        date start_date
        varchar(255) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_customer_info_seq FK
        tinyint(1) is_use
    }

pms_quotation_reference_system_final_committed_resource {
        bigint seq PK
        varchar(255) affiliate
        bigint role_seq FK
        bigint residence_seq FK
        bigint whether_full_seq FK
        bigint whether_full_time_seq FK
        text role_detail
        text work
        varchar(255) name
        bigint grade_seq FK
        tinyint(1) is_use
        decimal plan_man_month
        decimal performance_man_month
        bigint creator_seq FK
        bigint updater_seq FK
        text resource_time
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint quotation_reference_system_map_seq FK
    }

pms_quotation_reference_system_final_biz_contract {
        bigint seq PK
        text biz_scope
        text role
        varchar(255) company_name
        decimal scope_million
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_final_biz_overview_seq FK
        varchar(255) category
        bigint criteria_seq FK
        tinyint(1) is_use
        datetime(6) create_date_time
        datetime(6) update_date_time
    }

pms_quotation_reference_system_final_biz_overview {
        bigint seq PK
        text change_reason
        decimal scope
        text main_partner
        text risk
        bigint creator_seq FK
        text biz_scope
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date openDate
        date endDate
        date startDate
        bigint quotation_reference_system_map_seq
        bigint quotation_reference_system_map_seq FK
        date end_date
        date open_date
        date start_date
    }

pms_quotation_reference_system_final_partner {
        bigint seq PK
        text work
        text detail_scope
        decimal employee_rate
        text appropriateness
        text management
        text communication
        bigint creator_seq FK
        bigint updater_seq FK
        bigint contract_structure FK
        bigint partner_recommendation FK
        varchar(255) partner
        tinyint(1) is_use
        bigint quotation_reference_system_map_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
    }

pms_quotation_reference_system_final_work_list {
        bigint seq PK
        text work
        text main_category
        int total_number_of_copies
        decimal man_month
        text note
        bigint creator_seq FK
        bigint updater_seq FK
        tinyint(1) is_use
        bigint quotation_reference_system_map_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
    }

pms_quotation_reference_system_final_profit_loss {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        contribution_profit varchar(255)
        contribution_profit_rate varchar(255)
        expenses varchar(255)
        gross_profit varchar(255)
        gross_profit_rate varchar(255)
        indirect_cost varchar(255)
        labor_cost varchar(255)
        material_cost varchar(255)
        operating_profit varchar(255)
        operating_profit_rate varchar(255)
        order_amount varchar(255)
        out_sourcing_cost varchar(255)
        reason_for_change varchar(255)
        sale_administrative_expenses varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        quotation_reference_system_map_seq bigint
        quotation_reference_system_map_seq bigint FK
    }

pms_quotation_reference_system_function {
        bigint seq PK
        varchar(255) function_name
        varchar(255) main_category
        varchar(255) middle_category
        int number_of_step
        varchar(255) sub_category
        int subtotal
        int total_of_hour
        varchar(255) work
        tinyint(1) is_use
        bigint quotation_reference_system_biz_overview_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint estimated_grade_code_seq FK
        bigint complexity_code_seq FK
        bigint type_code_seq FK
    }

pms_quotation_reference_system_lessons_for_approval {
        bigint seq PK
        bigint creator_seq FK
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date open_date
        text risk
        varchar(255) biz_scope
        text lesson_learned_content
        varchar(255) main_partner
        text management_area_lesson_content
        text project_completion_status_content
        bigint quotation_reference_system_map_seq
        bigint quotation_reference_system_map_seq FK
    }

pms_quotation_reference_system_infra {
        bigint seq PK
        varchar(255) asis_infra
        varchar(255) note
        varchar(255) product_name
        varchar(255) spec
        varchar(255) supplier
        varchar(255) work
        tinyint(1) is_use
        bigint quotation_reference_system_biz_overview_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint category_code_seq FK
    }

pms_quotation_reference_system_resource {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) affiliate
        varchar(255) detail_role
        decimal mm
        varchar(255) name
        bigint residence_code_seq FK
        varchar(1) whether
        varchar(1) whether_full
        varchar(255) work
        tinyint(1) is_use
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_biz_overview_seq FK
        bigint grade_code_seq FK
        bigint role_code_seq FK
        bigint whether_code_seq FK
        bigint whether_full_code_seq FK
        text resource_time
    }

pms_quotation_reference_system_project {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        biz_type varchar(10)
        end_date date
        orderer varchar(100)
        performing_department varchar(100)
        performing_division varchar(255)
        pm varchar(20)
        pm_id varchar(20)
        po varchar(20)
        po_id varchar(20)
        project_name varchar(200)
        project_status varchar(20)
        sale_representative varchar(100)
        sap_project_id varchar(12)
        sale_representative_id varchar(20)
        scope decimal
        start_date date
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_quotation_reference_system_map {
        seq bigint PK
        creator_seq bigint FK
        updater_seq bigint FK
        final_progress_bar varchar(255)
        init_progress_bar varchar(255)
        init_last_modifier bigint FK
        final_last_modifier bigint FK
        init_last_modify_date_time datetime(6)
        final_last_modify_date_time datetime(6)
        init_submitted_pms_status varchar(20)
        final_submitted_pms_status varchar(20)
        create_date_time datetime(6)
        update_date_time datetime(6)
        quotation_reference_system_project_seq bigint FK
        assignee_seq bigint FK
        delegated_seq bigint FK
    }

pms_requirement {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text architecture_id
        date baseline_date
        text batch_id
        date change_date
        text change_id
        text collection_phase
        date confirmed_date
        text content
        text first_level
        text fourth_level
        text implementation_content
        text inspection_standard
        text integration_test_id
        text interface_id
        bigint order_number
        text program_id
        date request_date
        varchar(100) request_department
        varchar(100) request_user
        text requirement_id
        text requirement_name
        text restriction
        text screen_id
        text second_level
        text source
        text third_level
        text unit_test_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint assignee_seq FK
        bigint change_status_seq FK
        bigint difficulty_seq FK
        bigint implementation_priority_seq FK
        bigint importance_seq FK
        bigint is_confirmed_seq FK
        bigint is_inspection_seq FK
        bigint project_seq FK
        bigint type_seq FK
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
        text dynamic_extra_field11
        text dynamic_extra_field12
        text dynamic_extra_field13
        text dynamic_extra_field14
        text dynamic_extra_field15
        text dynamic_extra_field16
        text dynamic_extra_field17
        text dynamic_extra_field18
        text dynamic_extra_field19
        text dynamic_extra_field20
        varchar(255) performing_department
        varchar(20) req_type
        date review_date
        bigint acceptance_seq FK
        bigint client_pm_seq FK
        bigint project_pm_seq FK
        bigint test_availability_seq FK
        bigint acceptance_status FK
        bigint type_code_seq FK
    }

pms_requirement_approval {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        datetime(6) approval_date_time
        varchar(255) status
        varchar(255) type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint approval_seq FK
    }

pms_requirement_change_requirement_map {
        bigint seq FK
        bigint requirement_change_seq FK
    }

pms_requirement_change {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) assignee
        varchar(255) change_department
        varchar(255) change_id
        varchar(255) change_result
        date complete_date
        varchar(255) impact_analysis_result
        varchar(255) next_state
        date request_date
        varchar(255) request_department
        varchar(255) request_detail
        varchar(255) request_note
        varchar(255) request_reason
        varchar(255) request_title
        varchar(255) requester
        varchar(255) result_note
        varchar(255) reviewer
        bigint creator_seq FK
        bigint updater_seq FK
        bigint acceptance_code_seq FK
        bigint change_category_code_seq FK
        bigint impact_analysis_code_seq FK
        bigint project_seq FK
        bigint status_code_seq FK
    }

pms_requirement_change_meeting {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date meeting_date
        varchar(1000) meeting_note
        varchar(255) meeting_participant
        varchar(255) meeting_title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint meeting_result_code_seq FK
        bigint requirement_change_seq FK
    }

pms_requirement_change_impact {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint requirement_change_seq FK
        bigint type_code_seq FK
    }

pms_requirement_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        related_requirement_seq bigint FK
        requirement_seq bigint FK
    }

pms_risk_assessment_meeting {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creation_month int
        creation_week int
        creation_year int
        meeting_date date
        negotiations mediumblob
        opinion mediumblob
        status int
        times int
        title varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        project_seq bigint FK
        approver_seq bigint FK
        registrant_seq bigint FK
        approver_opinion varchar(1000)
        modifier_date datetime(6)
        previous_result_opinion mediumblob
        progress varchar(255)
        registration_date datetime(6)
        modifier_seq bigint FK
    }

pms_risk_assessment {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        created_byldcc bit(1)
        creation_company varchar(255)
        creation_month int
        creation_week int
        status varchar(100)
        creation_year int
        end_date date
        registration_date datetime(6)
        start_date date
        times int
        writing_type varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        partner_seq bigint FK
        risk_assessment_meeting_seq bigint FK
        progress_seq bigint FK
        project_seq bigint FK
        modifier_date datetime(6)
        updater_person varchar(255)
        modifier_seq bigint FK
        registrant_seq bigint FK
        unique_project_year_month_week_company varchar(255)
    }

pms_requirement_record {
        bigint seq PK
        datetime(6) update_date_time
        bigint change_status_seq FK
        bigint is_confirmed_seq FK
        bigint requirement_seq FK
        bigint updater_seq FK
    }

pms_risk_assessment_item {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) creation_company
        date end_date
        varchar(255) improvement_measure
        varchar(255) improvement_proponent
        varchar(255) risk_factors
        varchar(100) risk_important
        int risk_level
        varchar(100) risk_possibility
        varchar(255) species
        date start_date
        varchar(255) work_participant
        varchar(255) work_position
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint risk_assessment_seq FK
        varchar(255) risk_rating_system_type
        varchar(255) detail_work_type
        varchar(255) major_categories
        varchar(255) medium_category
        varchar(100) risk_type
        varchar(255) work_type
        bigint work_plan_seq FK
    }

pms_risk_assessment_meeting_ldcc {
        bigint seq PK
        bigint ldcc_seq FK
        bigint risk_assessment_meeting_seq FK
    }

pms_risk_assessment_meeting_project_safety {
        bigint seq PK
        bigint risk_assessment_meeting_seq FK
        bigint user_project_safety_seq FK
    }

pms_risk_assessment_the_first_routine_item {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) detail_work_type
        date end_date
        varchar(255) improvement_measure
        varchar(255) improvement_proposer
        varchar(255) investor
        varchar(255) major_categories
        varchar(255) medium_category
        varchar(255) risk_factors
        varchar(100) risk_important
        int risk_level
        varchar(100) risk_possibility
        varchar(255) risk_rating_system_type
        varchar(100) risk_type
        date start_date
        varchar(255) wbs_task_number
        varchar(255) work_location
        varchar(255) work_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint risk_assessment_seq FK
    }

pms_risk_assessment_progress {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) code
        varchar(255) name
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
    }

pms_risk_assessment_meeting_partner {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        partner_seq bigint FK
        risk_assessment_meeting_seq bigint FK
    }

PMS_RISK_ASSESSMENT_MEETING_PRIORITY {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) additional_measures_search
        date end_date
        varchar(255) improvement_measure
        varchar(255) risk_factors
        int risk_level
        varchar(255) species
        date start_date
        varchar(255) work_position
        bigint creator_seq FK
        bigint updater_seq FK
        bigint partner_seq FK
        bigint risk_assessment_item_seq FK
        bigint risk_assessment_meeting_seq FK
        bit(1) is_use
        varchar(255) risk_rating_system_type
        varchar(100) after_improvement_importance
        varchar(100) after_improvement_possibility
        varchar(255) after_improvement_risk_level
        varchar(255) after_improvement_risk_rating_system_type
    }

pms_role_safety {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) name
        varchar(255) role_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
    }

pms_risk_opportunity_issue {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        action_plan varchar(255)
        action_result varchar(255)
        company_wide_response_action varchar(255)
        content varchar(255)
        delay_reason varchar(255)
        evaluation varchar(255)
        plan_end_date datetime(6)
        predict_date datetime(6)
        real_end_date datetime(6)
        view_id varchar(50)
        view_index bigint
        creator_seq bigint FK
        updater_seq bigint FK
        assignee_seq bigint FK
        impact_rating_code_seq bigint FK
        manager_seq bigint FK
        partner_department_dept_id varchar(5) FK
        probability_rating_code_seq bigint FK
        project_seq bigint FK
        rating_code_seq bigint FK
        team_dept_id varchar(5) FK
        type_code_seq bigint FK
    }

PMS_ROLE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) description
        datetime(6) end_date
        varchar(255) name
        varchar(255) role_id
        datetime(6) start_date
        bigint view_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bit(1) is_default
        bit(1) is_admin
        bit(1) is_qrs
    }

pms_role_map_log {
        bigint seq PK
        bit(1) after_map
        bit(1) before_map
        varchar(255) button_id
        varchar(255) button_name
        varchar(255) group_id
        varchar(255) group_name
        varchar(255) menu_id
        varchar(255) menu_name
        varchar(255) role_id
        varchar(255) role_map_log_type
        varchar(255) role_map_type
        varchar(255) role_name
        datetime(6) update_date_time
        varchar(255) user_id
        varchar(255) user_name
        bigint project_seq FK
        bigint updater_seq FK
    }

pms_safety_education {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) division
        int participant_total
        varchar(255) title
        text training_content
        datetime(6) training_date
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        time end_training_time
        time start_training_time
        varchar(255) status
        bigint approver_seq FK
    }

pms_safety_education_attendees {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint partner_seq FK
        bigint safety_education_seq FK
    }

pms_security_inspection {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date end_approval_date
        date end_inspection_date
        text inspection_guide
        varchar(255) inspection_type
        varchar(100) name
        date start_approval_date
        date start_inspection_date
        varchar(255) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
    }

pms_safety_education_trainer {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint safety_education_seq FK
        bigint user_seq FK
    }

pms_safety_education_work {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint safety_education_seq FK
        bigint work_item_seq FK
    }

pms_safety_education_participant {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint safety_education_seq FK
        bigint user_seq FK
        varchar(255) company_name
        varchar(255) user_name
        int number_of_people
    }

pms_special_department {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) dept_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint type_seq FK
    }

pms_security_inspection_project [
        { bigint seq PK }
        { datetime(6) create_date_time }
        { datetime(6) update_date_time }
        { varchar(255) customer }
        { date end_date }
        { varchar(255) host_department }
        { varchar(255) host_head_quarter }
        { date open_date }
        { varchar(255) project_name }
        { date start_date }
        { varchar(255) status }
        { bigint creator_seq FK }
        { bigint updater_seq FK }
        { varchar(5) host_team_code_dept_id FK }
        { bigint is_use_seq FK }
        { bigint pm_seq FK }
        { bigint security_inspection_seq FK }
        { varchar(255) exclusion_type }
        { varchar(1000) inspection_excluded }
        { bigint delegator_seq FK }
        { bigint submission_user_seq FK }
    ]

PMS_SYSTEM_MANAGER {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bit(1) is_use
        text note
        bigint creator_seq FK
        bigint updater_seq FK
        bigint role_seq FK
        bigint user_seq FK
    }

pms_security_inspection_project_category {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        action_plan varchar(255)
        expected_completion_date date
        response_option varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        inspection_category_seq bigint FK
        inspection_project_seq bigint FK
        is_use_seq bigint FK
        security_inspection_seq bigint FK
        response_option_subjective varchar(255)
    }

pms_security_inspection_category {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) area
        varchar(1000) detail
        varchar(255) inspection_item
        bit(1) is_action_plan_required
        bit(1) is_response_required
        varchar(255) order_number
        varchar(255) response_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint security_inspection_seq FK
        bigint area_seq FK
    }

pmsSystemMenuButtonRoleMap {
        seq bigint PK
        createDateTime datetime(6)
        updateDateTime datetime(6)
        isMap bit(1)
        creatorSeq bigint FK
        updaterSeq bigint FK
        menuButtonSeq bigint FK
        roleSeq bigint FK
    }

pmsSystemNotificationManagement {
        bigint seq PK
        datetime(6) createDateTime
        datetime(6) updateDateTime
        varchar(255) notificationType
        varchar(255) serviceType
        bigint creatorSeq FK
        bigint updaterSeq FK
    }

pmsSystemMenuButtonMap {
        seq bigint PK
        createDateTime datetime(6)
        updateDateTime datetime(6)
        isMap bit(1)
        creatorSeq bigint FK
        updaterSeq bigint FK
        buttonSeq bigint FK
        menuSeq bigint FK
    }

pmsSystemMenuButtonSetting {
        bigint seq PK
        datetime(6) createDateTime
        datetime(6) updateDateTime
        bit(1) isMap
        bigint creatorSeq FK
        bigint updaterSeq FK
        bigint buttonSeq FK
        bigint menuSeq FK
    }

pmsSystemMenuRoleMap {
        seq bigint PK
        createDateTime datetime(6)
        updateDateTime datetime(6)
        isMap bit(1)
        creatorSeq bigint FK
        updaterSeq bigint FK
        menuSeq bigint FK
        roleSeq bigint FK
    }

pmsSystemNotificationManagementHistory {
        bigint seq PK
        datetime(6) createDateTime
        varchar(500) content
        bigint creatorSeq FK
        bigint systemNotificationManagementSeq FK
    }

pmsSystemNotificationRecipientManagement {
        bigint seq PK
        datetime(6) createDateTime
        datetime(6) updateDateTime
        bit(1) isSendMail
        varchar(255) recipientType
        bigint creatorSeq FK
        bigint updaterSeq FK
        bigint systemNotificationManagementSeq FK
    }

pmsTaskHistory {
        + seq : bigint PK
        baseDate : datetime(6)
        isLeaf : bit(1)
        isUpdate : bit(1)
        level : bigint
        note : varchar(255)
        output : varchar(255)
        packageWeight : int
        parentTaskNumber : varchar(255)
        planEndDate : datetime(6)
        planRate : decimal
        planStartDate : datetime(6)
        realEndDate : datetime(6)
        realRate : decimal
        realStartDate : datetime(6)
        taskName : varchar(255)
        taskNumber : varchar(255)
        thisWeekPlanRate : decimal
        totalDuration : bigint
        weight : int
        assigneeSeq : bigint FK
        projectSeq : bigint FK
        statusCodeSeq : bigint FK
        createDateTime : datetime(6)
        updateDateTime : datetime(6)
        predecessorTaskList : varchar(255)
        successorTaskList : varchar(255)
    }

pms_task {
        seq bigint PK
        is_leaf bit(1)
        level bigint
        output varchar(255)
        plan_end_date datetime(6)
        plan_rate decimal
        plan_start_date datetime(6)
        real_end_date datetime(6)
        real_rate decimal
        real_start_date datetime(6)
        task_name varchar(255)
        task_number varchar(255)
        total_duration bigint
        weight int
        project_seq bigint FK
        status_code_seq bigint FK
        this_week_plan_rate decimal
        note varchar(255)
        package_weight int
        parent_task_number varchar(255)
        assignee_seq bigint FK
        is_update bit(1)
        predecessor_task_list text
        successor_task_list text
    }

PMS_SYSTEM_NOTIFICATION_SEND_HISTORY {
        seq bigint PK
        create_date_time datetime(6)
        is_send_success bit(1)
        notification_title varchar(255)
        notification_type varchar(255)
        recipient_list text
        send_date_time datetime(6)
        service_code varchar(255)
        transmission_type varchar(255)
        creator_seq bigint FK
        project_seq bigint FK
        sender_seq bigint FK
        project_draft_map_sequence bigint FK
    }

pms_template {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint type_seq FK
    }

pms_template_modification_history {
        bigint seq PK
        datetime(6) create_date_time
        varchar(255) content
        varchar(50) screen_name
        bigint creator_seq FK
        bigint button_seq FK
        bigint menu_seq FK
        bigint role_seq FK
        bigint template_seq FK
    }

pms_template_menu_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_seq bigint FK
        role_seq bigint FK
        template_seq bigint FK
    }

pms_template_menu_button_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        button_seq bigint
        menu_seq bigint
        template_seq bigint
    }

    % 관계 정의
    pms_template_menu_button_map ||--o{ pms_buttons : 지원
    pms_template_menu_button_map ||--o{ pms_menus : 포함
    pms_template_menu_button_map ||--o{ pms_templates : 기반

    % 추가 설명
    note "FK: 외래키, PK: 기본키"

pms_template_menu_button_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_button_seq bigint
        role_seq bigint
        template_seq bigint
    }

    pms_template_menu_button_role_map.menu_button_seq --> pms_menu_button : FK
    pms_template_menu_button_role_map.role_seq --> pms_role : FK
    pms_template_menu_button_role_map.template_seq --> pms_template : FK

pms_user_group_map {
        bigint seq PK
        bigint project_group_seq FK
        bigint user_project_seq
        bigint user_project_seq
        bigint user_project_seq FK
    }

pms_user_group_role_map {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bit(1) is_map
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint project_group_seq FK
        bigint role_seq FK
        bit(1) is_default
    }

pms_test_defect {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) id
        mediumblob content
        date create_date
        bigint defect_count
        datetime(6) end_date_time
        varchar(255) first_level
        bit(1) is_open
        date plan_action_date
        varchar(255) program_id
        date real_action_date
        varchar(255) scenario_id
        varchar(255) screen_id
        varchar(255) screen_name
        bigint step
        varchar(255) test_id
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint action_user_seq FK
        bigint assignee_user_seq FK
        bigint priority_code_seq FK
        bigint project_seq FK
        bigint status_code_seq FK
        bigint test_case_seq FK
        bigint test_phase_seq FK
        bigint test_type_code_seq FK
        bigint test_user_seq FK
        bigint type_code_seq FK
    }

pms_test_case {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) duplicate_key
        varchar(255) first_level
        varchar(255) fourth_level
        varchar(5000) input
        varchar(255) name
        varchar(1000) note
        date plan_date
        varchar(5000) procedure_content
        date real_date
        varchar(255) scenario_id
        varchar(255) scenario_name
        varchar(255) screen_route
        varchar(255) screen_url
        varchar(255) second_level
        bigint step
        varchar(255) test_id
        varchar(255) third_level
        bigint creator_seq FK
        bigint updater_seq FK
        bigint program_seq FK
        bigint project_seq FK
        bigint result_seq FK
        bigint test_assignee_seq FK
        bigint test_phase_seq FK
        varchar(5000) expectation
        text dynamic_extra_field11
        text dynamic_extra_field12
        text dynamic_extra_field13
        text dynamic_extra_field14
        text dynamic_extra_field15
        text dynamic_extra_field16
        text dynamic_extra_field17
        text dynamic_extra_field18
        text dynamic_extra_field19
        text dynamic_extra_field20
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
        varchar(255) main_module
    }

pms_test_phase {
        seq bigint PK
        project_seq bigint FK
        phase_seq bigint FK
        title varchar(255)
        sort bigint
        is_default bit(1)
        start_date date
        end_date date
        creator_seq bigint FK
        updater_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

pms_user_group_role_map_0518 {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        project_seq bigint FK
        project_group_seq bigint FK
        role_seq bigint FK
        is_default bit(1)
    }

pms_user_history {
        bigint seq PK
        datetime(6) sys_insert_dtm
        varchar(255) sys_insert_user_id
        datetime(6) sys_update_dtm
        varchar(255) sys_update_user_id
        varchar(5000) detail
        varchar(255) screen_name
        varchar(255) user_id
        varchar(255) user_name
        bigint project_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        varchar(255) ip_address
    }

pms_user_ignore_notice {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date ignore_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint notice_seq FK
        bigint user_seq FK
        bigint post_seq FK
        bigint project_seq FK
    }

pms_user_project_safety_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        safety_role_seq bigint FK
        user_project_safety_seq bigint FK
    }

pms_user_read_post {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint post_seq FK
        bigint user_read_seq FK
    }

pms_user_read_entity {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(30) service_code
        bigint creator_seq FK
        bigint updater_seq FK
        bigint action_item_seq FK
        bigint notice_seq FK
        bigint post_seq FK
        bigint project_board_seq FK
        bigint question_seq FK
        bigint user_read_seq FK
        bigint issue_risk_seq FK
    }

pms_vep_user_project {
        bigint seq PK
        bigint user_project_seq FK
        date view_start_date
        tinyint(1) is_done
        bigint creator_seq FK
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
    }

pms_user_read_action_item {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint action_item_seq FK
        bigint user_read_seq FK
    }

pms_viewing_end_project_apply {
        bigint seq PK
        varchar(50) pid
        bigint applier_seq FK
        bigint project_seq FK
        bigint status_seq FK
        date view_end_date
        date view_start_date
        varchar(2000) reason
        date review_date
        bigint creator_seq FK
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        datetime(6) apply_date_time
    }

pms_wbs_management {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bit(1) is_modification
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq
        varchar(255) session_id
        bigint user_seq FK
    }

pms_work_plan {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date complete_date
        varchar(255) detail
        varchar(255) position
        date start_date
        varchar(255) type
        varchar(255) detail_work_type
        varchar(100) status
        varchar(100) change_status
        varchar(255) major_category
        varchar(255) medium_category
        int assessment_year
        int assessment_month
        int assessment_week
        varchar(255) task_number
        varchar(255) whether_meeting_is_in_progress
        varchar(255) work_force
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint partner_seq FK
        bigint project_seq FK
        bigint task_seq FK
        bigint assignee_seq FK
        bigint risk_assessment_seq FK
        datetime(6) modifier_date
        datetime(6) registration_date
        bigint modifier_seq FK
        bigint registrant_seq FK
    }

ShedLock {
        varchar(64) name PK
        datetime(6) lock_until
        datetime(6) locked_at
        varchar(255) locked_by
    }

pms_wbs_statistics_history {
        seq bigint PK
        achievement_rate decimal
        base_date datetime(6)
        completed bigint
        delay bigint
        in_progress bigint
        not_coming bigint
        plan_rate decimal
        real_rate decimal
        this_week_plan_rate decimal
        total_task_count bigint
        project_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

CHMM_BUTTON_INFO {
        BUTTON_ID varchar(255) PK
        BUTTON_NAME varchar(255)
        BUTTON_DESC varchar(1000)
        BUTTON_CODE varchar(255)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
    }

CHMM_CATEGORY_INFO {
        varchar(255) CATEGORY_ID PK
        varchar(1000) CATEGORY_DESC
        int ORDER_NUM
        varchar(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
        varchar(100) REAL_VALUE
        tinyint(1) is_delete
        varchar(255) service_code
    }

CHMM_CODE_INFO {
        CATEGORY_ID varchar(255) PK
        CODE_ID varchar(255) PK
        CODE_DESC varchar(1000)
        ORDER_NUM int
        USE_YN varchar(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
        REAL_VALUE varchar(100)
        is_delete tinyint(1)
    }

CHMM_CODE_ITEM_INFO {
        CATEGORY_ID varchar(255) PK
        CODE_ID varchar(255) PK
        CODE_ITEM_ID varchar(255) PK
        CODE_ITEM_DESC varchar(1000)
        ORDER_NUM int
        USE_YN varchar(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
        REAL_VALUE varchar(100)
        is_delete tinyint(1)
    }

CHMM_EXCEPTION_LOG_INFO {
        varchar(32) EXCEPTION_LOG_ID PK
        varchar(32) USER_ID
        varchar(32) ACCESS_IP
        varchar(100) SESSION_ID
        varchar(100) REQUEST_URI
        varchar(400) EXCEPTION_OCCUR_LINE
        varchar(400) EXCEPTION_METHOD_CAUSE
        longtext EXCEPTION_METHOD_INFO
        longtext EXCEPTION_LOG_MSG
        datetime OCCUR_LOG_DATE
        datetime SYS_INSERT_DTM
        varchar(32) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(32) SYS_UPDATE_USER_ID
    }

chmm_file_download_his {
        varchar(50) FILE_DOWNLOAD_CODE PK
        varchar(255) URI
        varchar(100) ORIGINAL_FILE_NAME
        varchar(200) UPLOAD_FILE_NAME
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime(6) sys_update_dtm
        varchar(255) sys_update_user_id
        varchar(50) file_code FK
    }

CHMM_FILE_METADATA_INFO {
        varchar(50) FILE_METADATA_CODE PK
        varchar(250) FILE_UPLOAD_PATH
        varchar(250) folder_path
        varchar(250) URI
        varchar(100) ORIGINAL_FILE_NAME
        varchar(200) UPLOAD_FILE_NAME
        varchar(10) FILE_SIZE
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime(6) sys_update_dtm
        varchar(255) sys_update_user_id
        bigint project_file_seq FK
    }

CHMM_GROUP_INFO {
        GROUP_ID varchar(255) PK
        GROUP_NAME varchar(255)
        GROUP_DESC varchar(1000)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
    }

CHMM_GROUP_ROLE_MAP {
        GROUP_ID varchar(255) PK
        ROLE_ID varchar(255) PK
        USE_YN char(1)
        SYS_INSERT_DTM datetime
    }

CHMM_LANGUAGE_INFO {
        varchar(5) LANGUAGE_CODE PK
        varchar(5) COUNTRY_CODE PK
        varchar(1000) DESCRIPTION
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_MASK_PATTERN_INFO {
        varchar(40) PATTERN_ID PK
        varchar(100) PATTERN_NAME
        varchar(500) CLASS
        varchar(2000) PATTERN
        varchar(2000) REPLACES
        varchar(10) ENABLED
        datetime REGDATE
        char(1) REGEX_YN
    }

CHMM_MENU_INFO {
        MENU_ID varchar(255) PK
        MENU_LVL int
        MENU_URI varchar(255)
        MENU_NAME varchar(255)
        UPPER_MENU_ID varchar(255)
        MENU_DESC varchar(1000)
        MENU_SEQ int
        LEFT_MENU_YN char(1)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
        ADMIN_MENU_YN char(1)
        MENU_HELP_URI varchar(255)
        MENU_SCRIPT varchar(255)
    }

CHMM_MULTI_ROLE_GROUP_INFO {
        PARENT_ROLE_ID varchar(255) PK
        CHILD_ROLE_ID varchar(255) PK
    }

CHMM_MULTI_USER_GROUP_INFO {
        varchar(255) PARENT_GROUP_ID PK
        varchar(255) CHILD_GROUP_ID PK
    }

CHMM_PERFORM_INFO {
        SERVICE_ID varchar(40) PK
        PERFORM_TYPE varchar(40)
        THREAD_COUNT int
        REPEAT_TYPE varchar(40)
        REPEAT_VALUE int
        TPS varchar(40)
    }

CHMM_PERFORM_TEST_CASE_HIS {
        varchar(40) CHMM_PERFORM_HIS_ID PK
        varchar(40) LABEL PK
        int AVERAGE
        int MIN
        int MAX
        decimal THROUGHPUT
        decimal RECVKB
        decimal SENTKB
        decimal AVGBYTES
        decimal STDDEV
        decimal ERROR
        int SAMPLES
        int ORDER_NUMBER
    }

CHMM_PERFORM_TREE_INFO {
        varchar(40) SERVICE_ID PK
        varchar(255) SERVICE_NAME
        varchar(20) SERVICE_ICON
        varchar(40) UPPER_FOLDER_ID
        varchar(120) UPPER_FOLDER_IDS
        char(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_PROPERTY_INFO {
        PROPERTY_KEY varchar(300) PK
        PROPERTY_VALUE varchar(300)
        PROPERTY_DESC varchar(1000)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
    }

CHMM_RESOURCE_BUTTON_MAP {
        varchar(255) RESOURCE_ID PK
        varchar(255) BUTTON_ID PK
        char(1) USE_YN
        timestamp SYS_INSERT_DTM
    }

CHMM_RESOURCE_INFO {
        varchar(255) RESOURCE_ID PK
        varchar(255) RESOURCE_URI
        varchar(255) RESOURCE_NAME
        varchar(1000) RESOURCE_DESC
        varchar(400) RESOURCE_HTTPMETHOD
        int SECURITY_ORDER
        char(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_RESOURCE_ROLE_BUTTON_MAP {
        varchar(255) RESOURCE_ID PK
        varchar(255) ROLE_ID PK
        varchar(255) BUTTON_ID PK
        char(1) USE_YN
        datetime SYS_INSERT_DTM
    }

CHMM_RESOURCE_ROLE_MAP {
        varchar(255) RESOURCE_ID PK
        varchar(255) ROLE_ID PK
        char(1) USE_YN
        datetime SYS_INSERT_DTM
    }

CHMM_REST_ASSERTION_INFO {
        varchar(40) SERVICE_ID PK
        varchar(40) TEST_ASSERTION_CODE PK
        varchar(200) TEST_KEY PK
        varchar(40) TEST_COMPARISON PK
        varchar(200) TEST_VALUE
    }

CHMM_REST_HEADER_INFO {
        varchar(40) SERVICE_ID PK
        varchar(200) TEST_KEY PK
        varchar(200) TEST_VALUE
    }

CHMM_REST_INFO {
        varchar(40) SERVICE_ID PK
        varchar(255) SERVICE_URI PK
        varchar(10) SERVICE_METHOD
        varchar(1024) SERVICE_BASEURL
    }

CHMM_REST_SCHEDULE_INFO {
        varchar(40) SCHEDULE_ID PK
        varchar(100) CRON_EXPR
        varchar(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_REST_TREE_INFO {
        SERVICE_ID varchar(40) PK
        SERVICE_NAME varchar(255)
        SERVICE_ICON varchar(20)
        UPPER_FOLDER_ID varchar(40)
        UPPER_FOLDER_IDS varchar(120)
        USE_YN char(1)
        SYS_INSERT_DTM datetime
        SYS_INSERT_USER_ID varchar(255)
        SYS_UPDATE_DTM datetime
        SYS_UPDATE_USER_ID varchar(255)
    }

CHMM_ROLE_INFO {
        varchar(255) ROLE_ID PK
        varchar(255) ROLE_NAME
        varchar(1000) ROLE_DESC
        varchar(8) ROLE_START_DT
        varchar(8) ROLE_END_DT
        char(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_ROLE_MENU_MAP {
        MENU_ID varchar(255) PK
        ROLE_ID varchar(255) PK
        USE_YN char(1)
        SYS_INSERT_DTM datetime
    }

CHMM_SERVICE_CONTROL_INFO {
        varchar(40) SERVICE_ID PK
        varchar(650) RM_PATHS PK
        varchar(100) RM_METHOD PK
        char(1) APPROVAL_REQUIRED
        varchar(650) DESCRIPTION
        varchar(100) ERR_MESSAGE
        date START_DATE
        date END_DATE
        char(1) APPROVAL_YN
        char(1) ACTIVATION
    }

CHMM_STATISTICS_CLIENTSYSTEM {
        int CLIENTSYSTEM_ID PK
        varchar(50) BROWSERNAME
        varchar(50) DEVICE
        varchar(50) OSNAME
        varchar(50) ACCESSDATE
    }

CHMM_SYSTEM_DEFAULT_INFO {
        varchar(200) ENV_ID PK
        varchar(2000) ENV_VALUE
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
    }

CHMM_USER_GROUP_MAP {
        GROUP_ID varchar(255) PK
        USER_ID varchar(255) PK
        USE_YN char(1)
        SYS_INSERT_DTM datetime
    }

CHMM_USER_INFO {
        varchar(255) USER_ID PK
        varchar(255) USER_EMAIL
        varchar(14) USER_MOBILE
        varchar(255) USER_NAME
        varchar(255) USER_NICK
        varchar(255) USER_PWD
        varchar(4000) USER_IMG
        varchar(4000) USER_MSG
        varchar(1000) USER_DESC
        varchar(16) USER_STAT_CD
        varchar(255) USER_SNSID
        char(1) ACCOUNT_NON_LOCK
        varchar(8) ACCOUNT_START_DT
        varchar(8) ACCOUNT_END_DT
        varchar(8) PASSWORD_EXPIRE_DT
        char(1) USE_YN
        datetime SYS_INSERT_DTM
        varchar(255) SYS_INSERT_USER_ID
        datetime SYS_UPDATE_DTM
        varchar(255) SYS_UPDATE_USER_ID
        int PASSWORD_LOCK_CNT
        char(1) EXCEPTION_SEND_YN
        char(1) LOG_SEND_YN
        varchar(255) appointment
        varchar(255) department_id
        varchar(255) employee_id
        varchar(255) pms_authority
        varchar(255) position
    }

CHMM_USER_ROLE_MAP {
        USER_ID varchar(255) PK
        ROLE_ID varchar(255) PK
        USE_YN char(1)
        SYS_INSERT_DTM datetime
    }

pms_action_item {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(4000) title
        date end_date
        date plan_end_date
        date request_date
        varchar(4000) result
        bigint view_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint action_status_seq FK
        bigint assignee_seq FK
        bigint priority_seq FK
        bigint project_id FK
        bigint request_user_seq FK
        mediumblob content
        bigint request_type_seq FK
    }

PMS_ANSWER {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bit(1) is_use
        bigint read_count
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_menu_seq FK
        bigint question_seq FK
    }

pms_board {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bit(1) is_use
        bigint read_count
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_menu_seq FK
    }

PMS_BUTTON {
        bigint seq PK
        varchar(255) id
        varchar(255) code
        varchar(255) description
        varchar(255) name
        bigint is_use_seq FK
    }

pms_button_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_button_seq bigint FK
        project_seq bigint FK
        role_seq bigint FK
        is_default bit(1)
    }

PMS_CODE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) code
        bit(1) is_use
        varchar(255) name
        varchar(255) real_value
        varchar(255) service_code
        bigint creator_seq FK
        bigint updater_seq FK
        varchar(255) category_id FK
        varchar(255) code_id FK
        varchar(255) code_item_id FK
    }

pms_comment {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint board_sequence
        varchar(255) board_type_code
        mediumblob content
        bit(1) is_use
        bigint creator_seq FK
        bigint updater_seq FK
        bigint parent_comment_seq FK
        bigint project_seq FK
    }

pms_company_registration_management {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        abbreviation varchar(255)
        english_name varchar(255)
        is_abbreviation_changeable bit(1)
        is_delete bit(1)
        is_moin_use bit(1)
        is_tenant bit(1)
        is_usage_fee_end bit(1)
        is_use bit(1)
        moin_code varchar(255)
        name varchar(255)
        note varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        category_seq bigint FK
        representative_seq bigint FK
    }

pms_contract {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) biz
        varchar(255) contract_id
        varchar(255) description
        varchar(255) first_level
        varchar(255) fourth_level
        varchar(255) note
        varchar(255) proposal
        varchar(255) request_proposal
        varchar(255) second_level
        varchar(255) system
        varchar(255) technical_negotiation
        varchar(255) third_level
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq
        bigint project_seq FK
        bigint type_seq FK
    }

pms_contract_requirement_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        contract_seq bigint
        requirement_seq bigint
    }

PMS_DAILY_INTERFACE_RESULT {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) interface_type
        bit(1) result
        bigint data_size
        varchar(255) note
    }

pms_defect_aggregation {
        seq bigint PK
        aggregation_date date
        project_seq bigint FK
        test_phase_seq bigint FK
        is_open bit(1)
        open bigint
        assign bigint
        resolved bigint
        pending bigint
        closed bigint
        create_date_time datetime
        creator_seq bigint FK
    }

pms_defect_deletion_history {
        seq bigint PK
        project_seq bigint FK
        screen_name varchar(50)
        defect_id varchar(20)
        detail varchar(1000)
        creator_seq bigint FK
        updater_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

pms_deliverable {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) document_number
        date end_date
        text link_url
        varchar(255) name
        varchar(255) note
        varchar(255) phase
        date start_date
        varchar(255) task_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint assignee_seq FK
        bigint project_seq FK
        bigint status_code_seq FK
        varchar(255) deliverable_type
        text dynamic_extra_field11
        text dynamic_extra_field12
        text dynamic_extra_field13
        text dynamic_extra_field14
        text dynamic_extra_field15
        text dynamic_extra_field16
        text dynamic_extra_field17
        text dynamic_extra_field18
        text dynamic_extra_field19
        text dynamic_extra_field20
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
    }

pms_department {
        varchar(5) dept_id PK
        datetime(6) create_date_time
        bit(1) is_use
        varchar(5) level
        varchar(100) name
        int sort
        varchar(5) type
        datetime(6) update_date_time
        varchar(5) parent_department_dept_id FK
        bigint creator_seq FK
        bigint updater_seq FK
    }

pms_design {
        bigint seq PK
        datetime(6) create_date_time
        varchar(80) output
        datetime(6) plan_end_date
        datetime(6) plan_start_date
        datetime(6) real_end_date
        datetime(6) real_start_date
        varchar(30) status
        datetime(6) update_datetime
    }

pms_dynamic_field_management {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint content_length
        varchar(255) content_type
        bit(1) is_use
        varchar(225) name
        varchar(225) screen_code
        bigint sort
        bigint creator_seq FK
        bigint updater_seq FK
        varchar(255) field_code_type FK
        bigint project_seq FK
    }

pms_education_work {
        bigint seq PK
        varchar(1000) description
        int item_number
        varchar(1000) name
    }

pms_export_management {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
    }

PMS_GROUP {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) description
        varchar(255) name
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        bit(1) is_default
        varchar(255) group_id
    }

pms_group_pms_user_group_map {
        project_group_seq FK
        user_group_list_seq PK
        user_group_list_seq PK
    }

pms_headquarter_item_onsite_management_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        best_practice bigint
        evaluation bigint
        inspection_result varchar(255)
        management_level_seq bigint
        onsite_management_seq bigint
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_headquarter_item_onsite_safety_standard {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        major_category_name varchar(255)
        major_category_seq bigint
        middle_category_name varchar(255)
        middle_category_seq bigint
        small_category_inspect_criteria_name varchar(255)
        small_category_inspect_item_name varchar(255)
        small_category_seq bigint
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_headquarter_item_onsite_safety_standard_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        collision bigint
        crash bigint
        electric_explosion bigint
        entrapment bigint
        fall bigint
        flying bigint
        inspection_result varchar(255)
        management_level_seq bigint
        safety_standard_seq bigint
        slip bigint
        suffocation bigint
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_headquarter_item_safety_awareness {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) factor_name
        bigint factor_seq
        varchar(255) middle_category_name
        bigint middle_category_seq
        bit(1) small_category_apply
        varchar(255) small_category_checklist
        varchar(255) small_category_evaluation_name
        varchar(255) small_category_fine_name
        double small_category_score
        bigint small_category_seq
        bigint small_category_weight
        bigint creator_seq FK
        bigint updater_seq FK
    }

pms_headquarter_item_safety_awareness_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        evaluation bigint
        inspection_result varchar(255)
        management_level_seq bigint
        safety_awareness_seq bigint
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_headquarter_management_level {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text content
        varchar(255) division
        date inspect_date
        varchar(255) project_name
        bigint rating
        varchar(255) rating_label
        bigint ratio
        bigint score
        varchar(255) type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint headquarter_safety_inspect_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        bigint partner_seq FK
    }

pms_headquarter_safety_inspect {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) action_status
        date inspect_date
        varchar(255) main_task
        bigint other_score
        varchar(255) overall_evaluation
        bigint overall_rating
        varchar(255) title
        varchar(255) writing_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint approval_user_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        varchar(255) overall_grade
        varchar(255) pre_action_status
        bigint checker_seq FK
        datetime(6) approval_date_time
    }

pms_headquarter_safety_inspect_action {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(5000) action_content
        date action_deadline
        varchar(255) inappropriate_content
        date occurrence_date
        varchar(255) origin_site
        varchar(255) risk_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint headquarter_safety_inspect_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        varchar(255) company_name
        bit(1) action_status
    }

pms_headquarter_safety_practice {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) best_practices
        bigint creator_seq FK
        bigint updater_seq FK
        bigint headquarter_safety_inspect_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        varchar(255) company_name
    }

pms_holiday {
        bigint seq PK
        varchar(255) day
        datetime(6) holiday_date
        varchar(255) name
        varchar(330) note
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
    }

pms_input_person [
        { bigint seq PK }
        { datetime(6) create_date_time }
        { datetime(6) update_date_time }
        { varchar(330) note }
        { bigint order_number }
        { date plan_end_date }
        { date plan_start_date }
        { date real_end_date }
        { date real_start_date }
        { varchar(30) role }
        { varchar(30) task }
        { bigint view_id }
        { bigint creator_seq FK }
        { bigint updater_seq FK }
        { bigint field_seq FK }
        { bigint is_participated_seq FK }
        { bigint project_seq FK }
        { bigint tech_grade_seq FK }
        { bigint user_seq FK }
        { bigint input_person_seq FK }
        { text dynamic_extra_field11 }
        { text dynamic_extra_field12 }
        { text dynamic_extra_field13 }
        { text dynamic_extra_field14 }
        { text dynamic_extra_field15 }
        { text dynamic_extra_field16 }
        { text dynamic_extra_field17 }
        { text dynamic_extra_field18 }
        { text dynamic_extra_field19 }
        { text dynamic_extra_field20 }
        { text dynamic_extra_field01 }
        { text dynamic_extra_field02 }
        { text dynamic_extra_field03 }
        { text dynamic_extra_field04 }
        { text dynamic_extra_field05 }
        { text dynamic_extra_field06 }
        { text dynamic_extra_field07 }
        { text dynamic_extra_field08 }
        { text dynamic_extra_field09 }
        { text dynamic_extra_field10 }
    ]

pms_input_person_individual_total_result {
        bigint seq PK
        double cumulative_rate
        double current_month_rate
        double plan
        double rate
        double result
        bigint input_person_seq FK
    }

pms_input_person_result {
        bigint seq PK
        date month
        double plan
        double result
        bigint input_person_seq FK
    }

pmsLocalAreaNetworkManager {
        bigint seq PK
        varchar(255) address
        datetime(6) createDateTime
        varchar(255) note
    }

pms_mail_verification {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) verification_code
        bigint user_seq FK
    }

pms_manual {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint menu_seq FK
        varchar(50) video_file_metadata_code FK
    }

pms_manual_image {
        bigint seq PK
        text caution_list
        text description_list
        varchar(50) image_meta_data_file_metadata_code FK
        bigint manual_seq FK
    }

pms_meeting_minute {
        + seq : bigint PK
        create_date_time : datetime(6)
        update_date_time : datetime(6)
        is_use : bit(1)
        negotiations : varchar(10000)
        status : int
        title : varchar(255)
        creator_seq : bigint FK
        updater_seq : bigint FK
        approver_seq : bigint FK
        commissioner_seq : bigint FK
        division_seq : bigint FK
        partner_seq : bigint FK
        pic_seq : bigint FK
        project_seq : bigint FK
        user_seq : bigint FK
        validator_seq : bigint FK
        worker_seq : bigint FK
        review : varchar(10000)
        open_date : datetime(6)
        creation_month : int
        creation_year : int
    }

pms_meeting_minute_division {
        bigint seq PK
        varchar(255) CODE
        varchar(255) en_name
        varchar(255) kr_name
    }

pms_meeting_minute_division {
        bigint meeting_minute_division_seq FK
        bigint resolution_types_seq FK
    }

pms_meeting_minute_resolution_type {
        bigint seq PK
        varchar(255) code
        varchar(1000) en_name
        varchar(1000) kr_name
        int priority
    }

pms_meeting_minute_user_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        type varchar(30)
        creator_seq bigint FK
        updater_seq bigint FK
        meeting_minute_seq bigint FK
        user_seq bigint FK
    }

pms_meeting_room {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) facility
        varchar(255) name
        bigint number_of_seats
        bit(1) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bit(1) is_use
    }

pms_meeting_room_reservation {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) description
        datetime(6) reserved_end_date_time
        datetime(6) reserved_start_date_time
        varchar(30) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint meeting_room_seq FK
    }

pms_menu {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        menu_desc varchar(255)
        menu_id varchar(255)
        menu_order bigint
        name varchar(255)
        order_history_datetime datetime(6)
        order_histroy bigint
        tree_id bigint
        url varchar(255)
        use_history bit(1)
        use_history_datetime datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        parent_id bigint FK
        pms_code_seq bigint FK
        project_seq bigint FK
        is_admin bit(1)
        is_manual_use char(1)
    }

pms_menu_button_map {
        seq bigint PK
        is_map bit(1)
        button_seq bigint FK
        menu_seq bigint FK
        project_seq bigint FK
        is_default bit(1)
    }

pms_menu_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_seq bigint FK
        project_seq bigint FK
        role_seq bigint FK
        is_default bit(1)
    }

PMS_MESSAGE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bit(1) is_stored
        bit(1) is_use
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
    }

pms_message_recipient_map {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bit(1) is_stored
        bit(1) is_use
        datetime(6) read_datetime
        bigint creator_seq FK
        bigint updater_seq FK
        bigint message_seq FK
        bigint user_seq FK
        bigint project_seq FK
    }

pms_modification_history {
        bigint seq PK
        datetime(6) create_date_time
        varchar(5000) content
        varchar(30) service_code
        bigint service_sequence
        bigint creator_seq FK
        bigint project_seq FK
    }

PMS_NOTE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        mediumblob content
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint project_menu_seq FK
    }

pms_notice {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        content mediumblob
        is_post_pinned_checked bit(1)
        is_use bit(1)
        is_use_popup_checked bit(1)
        post_pinned_end_date date
        post_pinned_start_date date
        read_count bigint
        title varchar(255)
        use_popup_end_date date
        use_popup_start_date date
        creator_seq bigint FK
        updater_seq bigint FK
        project_menu_seq bigint FK
    }

pms_notice_image {
        bigint seq PK
        varchar(255) file_address
    }

pms_occupational_safety_health {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint amount_used
        date date_used
        varchar(100) ITEM
        varchar(255) item_used
        bigint quantity
        bigint unit_price
        varchar(255) year_and_month_use
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bit(1) is_use
        varchar(255) company_name
        varchar(255) company
    }

pms_onsite_safety_inspection {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) check_content
        varchar(1000) checker_opinion
        varchar(1000) inspector_opinion
        varchar(255) rating
        date registration_date
        text review_content
        decimal score
        varchar(255) status
        varchar(255) title
        varchar(255) type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint checker_seq FK
        bigint inspector_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        bigint approver_seq FK
        varchar(255) inspectors
    }

pms_onsite_safety_inspection_daily {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) check_result
        varchar(255) company
        varchar(255) major_risk_factors
        varchar(255) number_of_workers
        varchar(255) type_of_work
        varchar(255) work_detail
        varchar(255) work_position
        bigint creator_seq FK
        bigint updater_seq FK
        bigint onsite_inspection_seq FK
        varchar(255) detail_work_type
        bigint risk_assessment_item_seq
        varchar(255) work_representative
    }

pms_onsite_safety_inspection_nonconformity {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(5000) action_content
        date action_deadline
        bit(1) action_status
        varchar(255) checker
        date date_of_occurrence
        varchar(5000) nonconforming_content
        varchar(255) occurrence_location
        varchar(255) risk_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint onsite_inspection_seq FK
        bigint partner_seq FK
        bigint inspector_seq FK
        bigint onsite_inspection_daily_seq FK
        varchar(255) company_name
        int onsite_risk_type
    }

pms_open_activity {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(100) assignee_department_name
        text first_level
        date plan_end_date
        datetime(6) plan_end_time
        bigint plan_minutes
        date plan_start_date
        datetime(6) plan_start_time
        date real_end_date
        datetime(6) real_end_time
        bigint real_minutes
        date real_start_date
        datetime(6) real_start_time
        text remark
        text second_level
        text task_id
        text task_name
        text third_level
        bigint creator_seq FK
        bigint updater_seq FK
        bigint assignee_seq FK
        bigint project_seq FK
        bigint status_seq FK
        bigint test_phase_seq FK
        bigint type_seq FK
        bigint validator_seq FK
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
    }

pms_partner {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) company_name
        bigint contract_amount
        date input_date
        date input_end_date
        varchar(255) type_of_work_in_charge
        bigint creator_seq FK
        bigint updater_seq FK
        bigint pic_seq FK
        bigint project_seq FK
        bigint is_use_seq FK
        bigint safety_management_fee
        bigint company_seq FK
    }

pms_personal_grid {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text grid
        bigint creator_seq FK
        bigint updater_seq FK
        bigint menu_seq FK
        bigint user_project_seq FK
        text filter_model
        int page_size
        bigint user_seq FK
        bigint grid_tab_code
    }

pms_pon_menu_button_map {
        seq bigint PK
        is_map bit(1)
        button_seq bigint FK
        menu_seq bigint FK
        project_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

pms_pon_menu_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_seq bigint FK
        project_seq bigint FK
        role_seq bigint FK
    }

pms_post {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        content mediumblob
        is_use bit(1)
        is_interfaced bit(1)
        read_count bigint
        service_code varchar(30)
        title varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        project_seq bigint FK
        quality_report_seq bigint
        text mediumblob
        is_post_pinned_checked bit(1)
        is_use_popup_checked bit(1)
        post_pinned_end_date date
        post_pinned_start_date date
        use_popup_end_date date
        use_popup_start_date date
    }

PMS_PREFIX_HISTORY {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) as_is_prefix
        varchar(255) to_be_prefix
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
    }

pms_privacy_policy {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text content
        tinyint(1) is_delete
        tinyint(1) is_show
        text note
        text title
        double version
        bigint creator_seq FK
        bigint updater_seq FK
    }

pms_program {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date confirm_date
        varchar(255) first_level
        varchar(255) name
        date plan_end_date
        date plan_start_date
        varchar(255) program_id
        bigint progress_rate
        date real_end_date
        date real_start_date
        varchar(255) screen_id
        varchar(255) screen_name
        varchar(255) second_level
        varchar(255) third_level
        bigint creator_seq FK
        bigint updater_seq FK
        bigint assignee_seq FK
        bigint difficulty_seq FK
        bigint importance_seq FK
        bigint project_seq FK
        bigint requirement_seq FK
        bigint status_code_seq FK
        bigint type_seq FK
        bigint pl_seq FK
        varchar(255) fourth_level
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
    }

pms_program_history {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date base_date
        varchar(255) first_level
        date plan_end_date
        date plan_start_date
        date real_end_date
        date real_start_date
        bigint assignee_seq FK
        bigint difficulty_seq FK
        bigint importance_seq FK
        bigint pl_seq FK
        bigint project_seq FK
        bigint status_code_seq FK
        bigint type_seq FK
    }

pms_program_requirement_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        program_seq bigint FK
        requirement_seq bigint FK
    }

pms_project {
        seq bigint PK
        customer_name varchar(255)
        is_delete bit(1)
        name varchar(255)
        note varchar(255)
        open_date datetime(6)
        plan_end_date datetime(6)
        plan_start_date datetime(6)
        real_end_date datetime(6)
        prefix varchar(255)
        sap_project_id varchar(255)
        department_dept_id varchar(5) FK
        pm_seq bigint FK
        sales_user_seq bigint FK
        status_seq bigint FK
        team_dept_id varchar(5) FK
        type_seq bigint FK
        weekly_report_day_code_seq bigint FK
        updater_seq bigint FK
        creator_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
        construction_amount bigint
        contract_amount bigint
        execution_position varchar(255)
        safety_health_management_expenses bigint
        number_of_risk_conduct int
        risk_evaluation_type varchar(100)
        phase_seq bigint FK
        division_dept_id varchar(5) FK
        address varchar(255)
        address_detail varchar(255)
        is_implementation_cost tinyint(1)
        is_intellectual_property_right tinyint(1)
        is_license tinyint(1)
        is_view_after_completion tinyint(1)
        company_seq bigint FK
        customer_company_seq bigint FK
        remark varchar(100)
    }

pms_project_assignee_user_map {
        bigint sequence PK
        varchar(255) assignee_type
        bigint project_seq FK
        bigint user_seq FK
    }

PMS_PROJECT_CODE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) code
        varchar(255) description
        varchar(255) name
        bigint order_num
        bigint creator_seq FK
        bigint updater_seq FK
        varchar(255) category_id FK
        varchar(255) code_id FK
        bigint is_use_seq FK
        bigint project_seq FK
    }

pms_project_dashboard {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) description
        bit(1) is_use
        varchar(255) service_type
        bigint sort_order
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint test_phase_seq FK
    }

pms_project_draft {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        address varchar(255)
        address_detail varchar(255)
        customer_name varchar(255)
        is_delete bit(1)
        is_implementation_cost tinyint(1)
        is_intellectual_property_right tinyint(1)
        is_license tinyint(1)
        is_view_after_completion tinyint(1)
        name varchar(255)
        note varchar(255)
        open_date datetime(6)
        plan_end_date datetime(6)
        plan_start_date datetime(6)
        prefix varchar(255)
        sap_project_id varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        company_seq bigint FK
        customer_company_seq bigint FK
        department_dept_id varchar(5) FK
        division_dept_id varchar(5) FK
        phase_seq bigint FK
        pm_seq bigint FK
        sales_user_seq bigint FK
        status_seq bigint FK
        team_dept_id varchar(5) FK
        type_seq bigint FK
        weekly_report_day_code_seq bigint FK
    }

pmsProjectDraftAssigneeUserMap {
        sequence bigint PK
        assigneeType varchar(255)
        projectDraftSeq bigint FK
        userSeq bigint FK
    }

pms_project_draft_map {
        bigint sequence PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) message
        varchar(255) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint project_draft_seq FK
    }

pmsProjectHoliday {
        seq bigint PK
        createDateTime datetime(6)
        updateDateTime datetime(6)
        day varchar(255)
        holidayDate datetime(6)
        name varchar(255)
        note varchar(330)
        creatorSeq bigint FK
        updaterSeq bigint FK
        projectSeq bigint FK
    }

pmsProjectNotificationManagement {
        + seq : bigint PK
        createDateTime : datetime(6)
        updateDateTime : datetime(6)
        note : varchar(1000)
        notificationType : varchar(255)
        serviceType : varchar(255)
        creatorSeq : bigint FK
        updaterSeq : bigint FK
        projectSeq : bigint FK
    }

pmsProjectNotificationManagementHistory {
        bigint seq PK
        datetime(6) createDateTime
        varchar(500) content
        bigint creatorSeq FK
        bigint projectSeq FK
        bigint projectNotificationManagementSeq FK
    }

pmsProjectNotificationRecipientManagement {
        + seq : bigint PK
        createDateTime : datetime(6)
        updateDateTime : datetime(6)
        isSendDirectMessage : bit(1)
        isSendMail : bit(1)
        recipientType : varchar(255)
        creatorSeq : bigint FK
        updaterSeq : bigint FK
        projectNotificationManagementSeq : bigint FK
    }

pmsProjectNotificationSendHistory {
        bigint seq PK
        datetime(6) createDateTime
        bit(1) isSendSuccess
        varchar(255) notificationTitle
        varchar(255) notificationType
        text recipientList
        datetime(6) sendDateTime
        varchar(255) serviceCode
        varchar(255) transmissionType
        bigint creatorSeq FK
        bigint projectSeq FK
        bigint senderSeq FK
        varchar(255) recipientType
    }

pms_project_safety_council_activity {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq FK
        bigint division_seq FK
    }

pms_qrs_manager {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text note
        bigint creator_seq FK
        bigint updater_seq FK
        bigint role_seq FK
        bigint user_seq
        bit(1) is_use
    }

pms_quality_report {
        bigint seq PK
        bigint project_seq FK
        bigint ldcc_weekly_report_sequence
        decimal achievement_rate
        decimal change_rate
        decimal plan_progress_rate
        decimal result_progress_rate
        date opening_date
        date report_date
        bigint project_type_seq FK
        varchar(255) title
        varchar(5000) next_week_plan
        varchar(5000) week_product_result
        varchar(200) note1
        varchar(100) note2
        varchar(100) note3
        varchar(100) note4
        varchar(100) note5
        varchar(100) note6
        varchar(100) note7
        varchar(100) note8
        datetime(6) create_date_time
        datetime(6) update_date_time
        date requirement_confirm_plan_end_date
        date requirement_confirm_real_end_date
        double requirement_confirm_plan_rate
        double requirement_confirm_real_rate
        bigint requirement_confirm_total_count
        bigint implementation_phase_seq FK
        date interfaced_date
        double requirement_confirm_count
        date requirement_confirm_date
        double requirement_confirm_rate
        double requirement_total_count
        double unit_test_finish_count
        double unit_test_finish_rate
        double unit_test_success_count
        double unit_test_success_rate
        double unit_test_total_count
        double development_finish_count
        double development_progress_rate
        double development_total_count
        double fault_fix_count
        double fault_fix_rate
        double fault_report_count
        double integration_test_finish_count
        double integration_test_finish_rate
        double integration_test_success_count
        double integration_test_success_rate
        double integration_test_total_count
        bigint design_finish_count
        varchar(80) design_note
        bigint design_plan_count
        date design_plan_end_date
        double design_plan_rate
        date design_real_end_date
        double design_real_rate
        bigint design_total_count
        varchar(80) development_note
        bigint development_plan_count
        date development_plan_end_date
        double development_plan_rate
        date development_real_end_date
        double development_real_rate
        varchar(80) integration_test_note
        bigint integration_test_plan_count
        date integration_test_plan_end_date
        double integration_test_plan_rate
        date integration_test_real_end_date
        double integration_test_real_rate
        bigint integration_test_defect_action_finish_count
        varchar(80) integration_test_defect_action_note
        bigint integration_test_defect_action_plan_count
        date integration_test_defect_action_plan_end_date
        double integration_test_defect_action_plan_rate
        date integration_test_defect_action_real_end_date
        double integration_test_defect_action_real_rate
        bigint integration_test_defect_action_total_count
        bigint open_defect_action_finish_count
        varchar(80) open_defect_action_note
        bigint open_defect_action_plan_count
        date open_defect_action_plan_end_date
        double open_defect_action_plan_rate
        date open_defect_action_real_end_date
        double open_defect_action_real_rate
        bigint open_defect_action_total_count
        bigint requirement_confirm_plan_count
        bigint requirement_confirm_finish_count
        varchar(80) requirement_confirm_note
        varchar(80) unit_test_note
        bigint unit_test_plan_count
        date unit_test_plan_end_date
        double unit_test_plan_rate
        date unit_test_real_end_date
        double unit_test_real_rate
        bigint unit_test_defect_action_finish_count
        varchar(80) unit_test_defect_action_note
        bigint unit_test_defect_action_plan_count
        date unit_test_defect_action_plan_end_date
        double unit_test_defect_action_plan_rate
        date unit_test_defect_action_real_end_date
        double unit_test_defect_action_real_rate
        bigint unit_test_defect_action_total_count
    }

pms_question {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(30) action_status
        mediumblob content
        varchar(30) in_charge
        bit(1) is_common
        bit(1) is_use
        varchar(255) menu_location
        bigint read_count
        varchar(255) title
        int top_pin
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_menu_seq FK
        bigint project_seq FK
        tinyint(1) is_secret_message
    }

PMS_QUOTATION_REFERENCE_SYSTEM_BIZ_CONTRACT_STRUCTURE {
        seq bigint PK
        category varchar(255)
        biz_scope varchar(1000)
        company_name varchar(255)
        role varchar(1000)
        scope_million decimal
        quotation_reference_system_biz_overview_seq bigint FK
        is_use tinyint(1)
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        criteria_code_seq bigint FK
    }

pms_quotation_reference_system_biz_overview {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) business_scope
        varchar(255) cost_structure
        varchar(1000) customer_concern
        varchar(255) chamomile
        varchar(255) main_partner
        datetime(6) open_date
        varchar(1000) risk
        varchar(255) risk_rating
        varchar(255) webject
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_map_seq FK
        varchar(10) quotation_reference_system_customer_trade_code FK
    }

pms_quotation_reference_system_company_staff {
        bigint seq PK
        bigint creator_seq FK
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) category
        varchar(255) company_name
        varchar(255) difference_explanation
        decimal final_man_month
        decimal init_man_month
        tinyint(1) is_use
        bigint quotation_reference_system_lesson_for_approval_seq FK
        decimal final_man_month_
        decimal init_man_month_
    }

pms_quotation_reference_system_customer {
        trade_code varchar(10) PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        address varchar(1000)
        business_type varchar(1000)
        corporation_no varchar(11)
        credit_rating_agency varchar(1000)
        credit_rating varchar(1000)
        industry_group varchar(1000)
        industry_sector varchar(1000)
        internal_with_external varchar(1000)
        name varchar(1000)
        primary_contact_name varchar(1000)
        representative_name varchar(1000)
        creator_seq bigint FK
        updater_seq bigint FK
        quotation_reference_system_map_seq bigint
        quotation_reference_system_customer_trade_code varchar(10)
    }

pms_quotation_reference_system_customer_information {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(1000) capital_sale
        varchar(1000) key_mile_store
        varchar(1000) main_business
        varchar(1000) main_staff
        varchar(1000) note
        varchar(1000) number_of_staff
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_biz_overview FK
    }

PMS_QUOTATION_REFERENCE_SYSTEM_CUSTOMER_INFORMATION_PROJECT {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date end_date
        varchar(255) pm_name
        varchar(255) project_name
        decimal scope
        date start_date
        varchar(255) status
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_customer_info_seq FK
        tinyint(1) is_use
    }

pms_quotation_reference_system_final_biz_contract {
        bigint seq PK
        text biz_scope
        text role
        varchar(255) company_name
        decimal scope_million
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_final_biz_overview_seq FK
        varchar(255) category
        bigint criteria_seq FK
        tinyint(1) is_use
        datetime(6) create_date_time
        datetime(6) update_date_time
    }

pms_quotation_reference_system_final_biz_overview {
        seq bigint PK
        change_reason text
        scope decimal
        main_partner text
        risk text
        creator_seq bigint FK
        biz_scope text
        updater_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
        openDate date
        endDate date
        startDate date
        quotation_reference_system_map_seq bigint
        quotation_reference_system_map_seq bigint FK
        end_date date
        open_date date
        start_date date
    }

pms_quotation_reference_system_final_committed_resource {
        bigint seq PK
        varchar(255) affiliate
        bigint role_seq FK
        bigint residence_seq FK
        bigint whether_full_seq FK
        bigint whether_full_time_seq FK
        text role_detail
        text work
        varchar(255) name
        bigint grade_seq FK
        tinyint(1) is_use
        decimal plan_man_month
        decimal performance_man_month
        bigint creator_seq FK
        bigint updater_seq FK
        text resource_time
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint quotation_reference_system_map_seq FK
    }

pms_quotation_reference_system_final_partner {
        seq bigint PK
        work text
        detail_scope text
        employee_rate decimal
        appropriateness text
        management text
        communication text
        creator_seq bigint FK
        updater_seq bigint FK
        contract_structure bigint FK
        partner_recommendation bigint FK
        partner varchar(255)
        is_use tinyint(1)
        quotation_reference_system_map_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

pms_quotation_reference_system_final_profit_loss {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) contribution_profit
        varchar(255) contribution_profit_rate
        varchar(255) expenses
        varchar(255) gross_profit
        varchar(255) gross_profit_rate
        varchar(255) indirect_cost
        varchar(255) labor_cost
        varchar(255) material_cost
        varchar(255) operating_profit
        varchar(255) operating_profit_rate
        varchar(255) order_amount
        varchar(255) out_sourcing_cost
        varchar(255) reason_for_change
        varchar(255) sale_administrative_expenses
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_map_seq
        bigint quotation_reference_system_map_seq FK
    }

pms_quotation_reference_system_final_work_list {
        bigint seq PK
        text work
        text main_category
        int total_number_of_copies
        decimal man_month
        text note
        bigint creator_seq FK
        bigint updater_seq FK
        tinyint(1) is_use
        bigint quotation_reference_system_map_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
    }

pms_quotation_reference_system_function {
        bigint seq PK
        varchar(255) function_name
        varchar(255) main_category
        varchar(255) middle_category
        int number_of_step
        varchar(255) sub_category
        int subtotal
        int total_of_hour
        varchar(255) work
        tinyint(1) is_use
        bigint quotation_reference_system_biz_overview_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint estimated_grade_code_seq FK
        bigint complexity_code_seq FK
        bigint type_code_seq FK
    }

pms_quotation_reference_system_infra {
        bigint seq PK
        varchar(255) asis_infra
        varchar(255) note
        varchar(255) product_name
        varchar(255) spec
        varchar(255) supplier
        varchar(255) work
        tinyint(1) is_use
        bigint quotation_reference_system_biz_overview_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint category_code_seq FK
    }

pms_quotation_reference_system_lessons_for_approval {
        bigint seq PK
        bigint creator_seq FK
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date open_date
        text risk
        varchar(255) biz_scope
        text lesson_learned_content
        varchar(255) main_partner
        text management_area_lesson_content
        text project_completion_status_content
        bigint quotation_reference_system_map_seq
        bigint quotation_reference_system_map_seq FK
    }

pms_quotation_reference_system_map {
        seq bigint PK
        creator_seq bigint FK
        updater_seq bigint FK
        final_progress_bar varchar(255)
        init_progress_bar varchar(255)
        init_last_modifier bigint FK
        final_last_modifier bigint FK
        init_last_modify_date_time datetime(6)
        final_last_modify_date_time datetime(6)
        init_submitted_pms_status varchar(20)
        final_submitted_pms_status varchar(20)
        create_date_time datetime(6)
        update_date_time datetime(6)
        quotation_reference_system_project_seq bigint FK
        assignee_seq bigint FK
        delegated_seq bigint FK
    }

pms_quotation_reference_system_project {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        biz_type varchar(10)
        end_date date
        orderer varchar(100)
        performing_department varchar(100)
        performing_division varchar(255)
        pm varchar(20)
        pm_id varchar(20)
        po varchar(20)
        po_id varchar(20)
        project_name varchar(200)
        project_status varchar(20)
        sale_representative varchar(100)
        sap_project_id varchar(12)
        sale_representative_id varchar(20)
        scope decimal
        start_date date
        creator_seq bigint FK
        updater_seq bigint FK
    }

pms_quotation_reference_system_resource {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) affiliate
        varchar(255) detail_role
        decimal mm
        varchar(255) name
        bigint residence_code_seq FK
        varchar(1) whether
        varchar(1) whether_full
        varchar(255) work
        tinyint(1) is_use
        bigint creator_seq FK
        bigint updater_seq FK
        bigint quotation_reference_system_biz_overview_seq FK
        bigint grade_code_seq FK
        bigint role_code_seq FK
        bigint whether_code_seq FK
        bigint whether_full_code_seq FK
        text resource_time
    }

pms_requirement {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        text architecture_id
        date baseline_date
        text batch_id
        date change_date
        text change_id
        text collection_phase
        date confirmed_date
        text content
        text first_level
        text fourth_level
        text implementation_content
        text inspection_standard
        text integration_test_id
        text interface_id
        bigint order_number
        text program_id
        date request_date
        varchar(100) request_department
        varchar(100) request_user
        text requirement_id
        text requirement_name
        text restriction
        text screen_id
        text second_level
        text source
        text third_level
        text unit_test_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint assignee_seq FK
        bigint change_status_seq FK
        bigint difficulty_seq FK
        bigint implementation_priority_seq FK
        bigint importance_seq FK
        bigint is_confirmed_seq FK
        bigint is_inspection_seq FK
        bigint project_seq FK
        bigint type_seq FK
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
        text dynamic_extra_field11
        text dynamic_extra_field12
        text dynamic_extra_field13
        text dynamic_extra_field14
        text dynamic_extra_field15
        text dynamic_extra_field16
        text dynamic_extra_field17
        text dynamic_extra_field18
        text dynamic_extra_field19
        text dynamic_extra_field20
        varchar(255) performing_department
        varchar(20) req_type
        date review_date
        bigint acceptance_seq FK
        bigint client_pm_seq FK
        bigint project_pm_seq FK
        bigint test_availability_seq FK
        bigint acceptance_status FK
        bigint type_code_seq FK
    }

pms_requirement_approval {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        datetime(6) approval_date_time
        varchar(255) status
        varchar(255) type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint approval_seq FK
    }

pms_requirement_change {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) assignee
        varchar(255) change_department
        varchar(255) change_id
        varchar(255) change_result
        date complete_date
        varchar(255) impact_analysis_result
        varchar(255) next_state
        date request_date
        varchar(255) request_department
        varchar(255) request_detail
        varchar(255) request_note
        varchar(255) request_reason
        varchar(255) request_title
        varchar(255) requester
        varchar(255) result_note
        varchar(255) reviewer
        bigint creator_seq FK
        bigint updater_seq FK
        bigint acceptance_code_seq FK
        bigint change_category_code_seq FK
        bigint impact_analysis_code_seq FK
        bigint project_seq FK
        bigint status_code_seq FK
    }

pms_requirement_change_impact {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint requirement_change_seq FK
        bigint type_code_seq FK
    }

pms_requirement_change_meeting {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date meeting_date
        varchar(1000) meeting_note
        varchar(255) meeting_participant
        varchar(255) meeting_title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint meeting_result_code_seq FK
        bigint requirement_change_seq FK
    }

pms_requirement_change_requirement_map {
        bigint seq FK
        bigint requirement_change_seq FK
    }

pms_requirement_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        related_requirement_seq bigint FK
        requirement_seq bigint FK
    }

pms_risk_assessment {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        created_byldcc bit(1)
        creation_company varchar(255)
        creation_month int
        creation_week int
        status varchar(100)
        creation_year int
        end_date date
        registration_date datetime(6)
        start_date date
        times int
        writing_type varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        partner_seq bigint FK
        risk_assessment_meeting_seq bigint FK
        progress_seq bigint FK
        project_seq bigint FK
        modifier_date datetime(6)
        updater_person varchar(255)
        modifier_seq bigint FK
        registrant_seq bigint FK
        unique_project_year_month_week_company varchar(255)
    }

pms_risk_assessment_item {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) creation_company
        date end_date
        varchar(255) improvement_measure
        varchar(255) improvement_proponent
        varchar(255) risk_factors
        varchar(100) risk_important
        int risk_level
        varchar(100) risk_possibility
        varchar(255) species
        date start_date
        varchar(255) work_participant
        varchar(255) work_position
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint risk_assessment_seq FK
        varchar(255) risk_rating_system_type
        varchar(255) detail_work_type
        varchar(255) major_categories
        varchar(255) medium_category
        varchar(100) risk_type
        varchar(255) work_type
        bigint work_plan_seq FK
    }

pms_risk_assessment_meeting {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creation_month int
        creation_week int
        creation_year int
        meeting_date date
        negotiations mediumblob
        opinion mediumblob
        status int
        times int
        title varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        project_seq bigint FK
        approver_seq bigint FK
        registrant_seq bigint FK
        approver_opinion varchar(1000)
        modifier_date datetime(6)
        previous_result_opinion mediumblob
        progress varchar(255)
        registration_date datetime(6)
        modifier_seq bigint FK
    }

pms_risk_assessment_meeting_ldcc {
        bigint seq PK
        bigint ldcc_seq FK
        bigint risk_assessment_meeting_seq FK
    }

pms_risk_assessment_meeting_partner {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        partner_seq bigint FK
        risk_assessment_meeting_seq bigint FK
    }

PMS_RISK_ASSESSMENT_MEETING_PRIORITY {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) additional_measures_search
        date end_date
        varchar(255) improvement_measure
        varchar(255) risk_factors
        int risk_level
        varchar(255) species
        date start_date
        varchar(255) work_position
        bigint creator_seq FK
        bigint updater_seq FK
        bigint partner_seq FK
        bigint risk_assessment_item_seq FK
        bigint risk_assessment_meeting_seq FK
        bit(1) is_use
        varchar(255) risk_rating_system_type
        varchar(100) after_improvement_importance
        varchar(100) after_improvement_possibility
        varchar(255) after_improvement_risk_level
        varchar(255) after_improvement_risk_rating_system_type
    }

pms_risk_assessment_meeting_project_safety {
        bigint seq PK
        bigint risk_assessment_meeting_seq FK
        bigint user_project_safety_seq FK
    }

pms_risk_assessment_progress {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) code
        varchar(255) name
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
    }

pms_risk_assessment_the_first_routine_item {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) detail_work_type
        date end_date
        varchar(255) improvement_measure
        varchar(255) improvement_proposer
        varchar(255) investor
        varchar(255) major_categories
        varchar(255) medium_category
        varchar(255) risk_factors
        varchar(100) risk_important
        int risk_level
        varchar(100) risk_possibility
        varchar(255) risk_rating_system_type
        varchar(100) risk_type
        date start_date
        varchar(255) wbs_task_number
        varchar(255) work_location
        varchar(255) work_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint risk_assessment_seq FK
    }

pms_risk_opportunity_issue {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        action_plan varchar(255)
        action_result varchar(255)
        company_wide_response_action varchar(255)
        content varchar(255)
        delay_reason varchar(255)
        evaluation varchar(255)
        plan_end_date datetime(6)
        predict_date datetime(6)
        real_end_date datetime(6)
        view_id varchar(50)
        view_index bigint
        creator_seq bigint FK
        updater_seq bigint FK
        assignee_seq bigint FK
        impact_rating_code_seq bigint FK
        manager_seq bigint FK
        partner_department_dept_id varchar(5) FK
        probability_rating_code_seq bigint FK
        project_seq bigint FK
        rating_code_seq bigint FK
        team_dept_id varchar(5) FK
        type_code_seq bigint FK
    }

PMS_ROLE {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) description
        datetime(6) end_date
        varchar(255) name
        varchar(255) role_id
        datetime(6) start_date
        bigint view_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bit(1) is_default
        bit(1) is_admin
        bit(1) is_qrs
    }

pms_role_map_log {
        bigint seq PK
        bit(1) after_map
        bit(1) before_map
        varchar(255) button_id
        varchar(255) button_name
        varchar(255) group_id
        varchar(255) group_name
        varchar(255) menu_id
        varchar(255) menu_name
        varchar(255) role_id
        varchar(255) role_map_log_type
        varchar(255) role_map_type
        varchar(255) role_name
        datetime(6) update_date_time
        varchar(255) user_id
        varchar(255) user_name
        bigint project_seq FK
        bigint updater_seq FK
    }

pms_role_safety {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) name
        varchar(255) role_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
    }

pms_safety_education {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) division
        int participant_total
        varchar(255) title
        text training_content
        datetime(6) training_date
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        time end_training_time
        time start_training_time
        varchar(255) status
        bigint approver_seq FK
    }

PMS_SAFETY_EDUCATION_ATTENDEES {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint partner_seq FK
        bigint safety_education_seq FK
    }

pms_safety_education_participant {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint safety_education_seq FK
        bigint user_seq FK
        varchar(255) company_name
        varchar(255) user_name
        int number_of_people
    }

pms_safety_education_trainer {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint safety_education_seq FK
        bigint user_seq FK
    }

pms_safety_education_work {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        safety_education_seq bigint FK
        work_item_seq bigint FK
    }

pms_security_inspection {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        end_approval_date date
        end_inspection_date date
        inspection_guide text
        inspection_type varchar(255)
        name varchar(100)
        start_approval_date date
        start_inspection_date date
        status varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        project_seq bigint FK
    }

pms_security_inspection_category {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) area
        varchar(1000) detail
        varchar(255) inspection_item
        bit(1) is_action_plan_required
        bit(1) is_response_required
        varchar(255) order_number
        varchar(255) response_type
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint security_inspection_seq FK
        bigint area_seq FK
    }

pms_security_inspection_project [
        { bigint seq PK }
        { datetime(6) create_date_time }
        { datetime(6) update_date_time }
        { varchar(255) customer }
        { date end_date }
        { varchar(255) host_department }
        { varchar(255) host_head_quarter }
        { date open_date }
        { varchar(255) project_name }
        { date start_date }
        { varchar(255) status }
        { bigint creator_seq FK }
        { bigint updater_seq FK }
        { varchar(5) host_team_code_dept_id FK }
        { bigint is_use_seq FK }
        { bigint pm_seq FK }
        { bigint security_inspection_seq FK }
        { varchar(255) exclusion_type }
        { varchar(1000) inspection_excluded }
        { bigint delegator_seq FK }
        { bigint submission_user_seq FK }
    ]

pms_security_inspection_project_category {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        action_plan varchar(255)
        expected_completion_date date
        response_option varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        inspection_category_seq bigint FK
        inspection_project_seq bigint FK
        is_use_seq bigint FK
        security_inspection_seq bigint FK
        response_option_subjective varchar(255)
    }

pms_special_department {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) dept_id
        bigint creator_seq FK
        bigint updater_seq FK
        bigint type_seq FK
    }

PMS_SYSTEM_MANAGER {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bit(1) is_use
        text note
        bigint creator_seq FK
        bigint updater_seq FK
        bigint role_seq FK
        bigint user_seq FK
    }

pmsSystemMenuButtonMap {
        seq bigint PK
        createDateTime datetime(6)
        updateDateTime datetime(6)
        isMap bit(1)
        creatorSeq bigint FK
        updaterSeq bigint FK
        buttonSeq bigint FK
        menuSeq bigint FK
    }

pmsSystemMenuButtonRoleMap {
        seq bigint PK
        createDateTime datetime(6)
        updateDateTime datetime(6)
        isMap bit(1)
        creatorSeq bigint FK
        updaterSeq bigint FK
        menuButtonSeq bigint FK
        roleSeq bigint FK
    }

pmsSystemMenuButtonSetting {
        bigint seq PK
        datetime(6) createDateTime
        datetime(6) updateDateTime
        bit(1) isMap
        bigint creatorSeq FK
        bigint updaterSeq FK
        bigint buttonSeq FK
        bigint menuSeq FK
    }

pms_system_menu_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_seq bigint FK
        role_seq bigint FK
    }

pmsSystemNotificationManagement {
        bigint seq PK
        datetime(6) createDateTime
        datetime(6) updateDateTime
        varchar(255) notificationType
        varchar(255) serviceType
        bigint creatorSeq FK
        bigint updaterSeq FK
    }

pmsSystemNotificationManagementHistory {
        bigint seq PK
        datetime(6) create_date_time
        varchar(500) content
        bigint creator_seq FK
        bigint system_notification_management_seq FK
    }

pmsSystemNotificationRecipientManagement {
        bigint seq PK
        datetime(6) createDateTime
        datetime(6) updateDateTime
        bit(1) isSendMail
        varchar(255) recipientType
        bigint creatorSeq FK
        bigint updaterSeq FK
        bigint systemNotificationManagementSeq FK
    }

PMS_SYSTEM_NOTIFICATION_SEND_HISTORY {
        seq bigint PK
        create_date_time datetime(6)
        is_send_success bit(1)
        notification_title varchar(255)
        notification_type varchar(255)
        recipient_list text
        send_date_time datetime(6)
        service_code varchar(255)
        transmission_type varchar(255)
        creator_seq bigint FK
        project_seq bigint FK
        sender_seq bigint FK
        project_draft_map_sequence bigint FK
    }

pms_task {
        seq bigint PK
        is_leaf bit(1)
        level bigint
        output varchar(255)
        plan_end_date datetime(6)
        plan_rate decimal
        plan_start_date datetime(6)
        real_end_date datetime(6)
        real_rate decimal
        real_start_date datetime(6)
        task_name varchar(255)
        task_number varchar(255)
        total_duration bigint
        weight int
        project_seq bigint FK
        status_code_seq bigint FK
        this_week_plan_rate decimal
        note varchar(255)
        package_weight int
        parent_task_number varchar(255)
        assignee_seq bigint FK
        is_update bit(1)
        predecessor_task_list text
        successor_task_list text
    }

pmsTaskHistory {
        + seq : bigint PK
        baseDate : datetime(6)
        isLeaf : bit(1)
        isUpdate : bit(1)
        level : bigint
        note : varchar(255)
        output : varchar(255)
        packageWeight : int
        parentTaskNumber : varchar(255)
        planEndDate : datetime(6)
        planRate : decimal
        planStartDate : datetime(6)
        realEndDate : datetime(6)
        realRate : decimal
        realStartDate : datetime(6)
        taskName : varchar(255)
        taskNumber : varchar(255)
        thisWeekPlanRate : decimal
        totalDuration : bigint
        weight : int
        assigneeSeq : bigint FK
        projectSeq : bigint FK
        statusCodeSeq : bigint FK
        createDateTime : datetime(6)
        updateDateTime : datetime(6)
        predecessorTaskList : varchar(255)
        successorTaskList : varchar(255)
    }

pms_template {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint type_seq FK
    }

pms_template_menu_button_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        button_seq bigint
        menu_seq bigint
        template_seq bigint
    }

    % Relationships
    pms_template_menu_button_map ||--o{ pms_buttons : button_seq
    pms_template_menu_button_map ||--o{ pms_menus : menu_seq
    pms_template_menu_button_map ||--o{ pms_templates : template_seq

pms_template_menu_button_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_button_seq bigint
        role_seq bigint
        template_seq bigint
    }

    % 링크 지정
    pms_template_menu_button_role_map ||--o{ pms_creator : creator_seq
    pms_template_menu_button_role_map ||--o{ pms_updater : updater_seq
    pms_template_menu_button_role_map ||--o{ pms_menu_button : menu_button_seq
    pms_template_menu_button_role_map ||--o{ pms_role : role_seq
    pms_template_menu_button_role_map ||--o{ pms_template : template_seq

pms_template_menu_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        menu_seq bigint FK
        role_seq bigint FK
        template_seq bigint FK
    }

pms_template_modification_history {
        bigint seq PK
        datetime(6) create_date_time
        varchar(255) content
        varchar(50) screen_name
        bigint creator_seq FK
        bigint button_seq FK
        bigint menu_seq FK
        bigint role_seq FK
        bigint template_seq FK
    }

pms_test_case {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) duplicate_key
        varchar(255) first_level
        varchar(255) fourth_level
        varchar(5000) input
        varchar(255) name
        varchar(1000) note
        date plan_date
        varchar(5000) procedure_content
        date real_date
        varchar(255) scenario_id
        varchar(255) scenario_name
        varchar(255) screen_route
        varchar(255) screen_url
        varchar(255) second_level
        bigint step
        varchar(255) test_id
        varchar(255) third_level
        bigint creator_seq FK
        bigint updater_seq FK
        bigint program_seq FK
        bigint project_seq FK
        bigint result_seq FK
        bigint test_assignee_seq FK
        bigint test_phase_seq FK
        varchar(5000) expectation
        text dynamic_extra_field11
        text dynamic_extra_field12
        text dynamic_extra_field13
        text dynamic_extra_field14
        text dynamic_extra_field15
        text dynamic_extra_field16
        text dynamic_extra_field17
        text dynamic_extra_field18
        text dynamic_extra_field19
        text dynamic_extra_field20
        text dynamic_extra_field01
        text dynamic_extra_field02
        text dynamic_extra_field03
        text dynamic_extra_field04
        text dynamic_extra_field05
        text dynamic_extra_field06
        text dynamic_extra_field07
        text dynamic_extra_field08
        text dynamic_extra_field09
        text dynamic_extra_field10
        varchar(255) main_module
    }

pms_test_defect {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        varchar(255) id
        mediumblob content
        date create_date
        bigint defect_count
        datetime(6) end_date_time
        varchar(255) first_level
        bit(1) is_open
        date plan_action_date
        varchar(255) program_id
        date real_action_date
        varchar(255) scenario_id
        varchar(255) screen_id
        varchar(255) screen_name
        bigint step
        varchar(255) test_id
        varchar(255) title
        bigint creator_seq FK
        bigint updater_seq FK
        bigint action_user_seq FK
        bigint assignee_user_seq FK
        bigint priority_code_seq FK
        bigint project_seq FK
        bigint status_code_seq FK
        bigint test_case_seq FK
        bigint test_phase_seq FK
        bigint test_type_code_seq FK
        bigint test_user_seq FK
        bigint type_code_seq FK
    }

pms_test_phase {
        seq bigint PK
        project_seq bigint FK
        phase_seq bigint FK
        title varchar(255)
        sort bigint
        is_default bit(1)
        start_date date
        end_date date
        creator_seq bigint FK
        updater_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

pms_user_group_map {
        bigint seq PK
        bigint project_group_seq FK
        bigint user_project_seq
        bigint user_project_seq
        bigint user_project_seq FK
    }

pms_user_group_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        project_seq bigint FK
        project_group_seq bigint FK
        role_seq bigint FK
        is_default bit(1)
    }

pms_user_group_role_map_0518 {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        is_map bit(1)
        creator_seq bigint FK
        updater_seq bigint FK
        project_seq bigint FK
        project_group_seq bigint FK
        role_seq bigint FK
        is_default bit(1)
    }

pms_user_history {
        bigint seq PK
        datetime(6) sys_insert_dtm
        varchar(255) sys_insert_user_id
        datetime(6) sys_update_dtm
        varchar(255) sys_update_user_id
        varchar(5000) detail
        varchar(255) screen_name
        varchar(255) user_id
        varchar(255) user_name
        bigint project_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        varchar(255) ip_address
    }

pms_user_ignore_notice {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        date ignore_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint notice_seq FK
        bigint user_seq FK
        bigint post_seq FK
        bigint project_seq FK
    }

pms_user_project_safety_map {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint is_use_seq FK
        bigint project_seq FK
        bigint user_seq FK
    }

pms_user_project_safety_role_map {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        safety_role_seq bigint FK
        user_project_safety_seq bigint FK
    }

pms_user_read_action_item {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint action_item_seq FK
        bigint user_read_seq FK
    }

pms_user_read_entity {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        service_code varchar(30)
        creator_seq bigint FK
        updater_seq bigint FK
        action_item_seq bigint FK
        notice_seq bigint FK
        post_seq bigint FK
        project_board_seq bigint FK
        question_seq bigint FK
        user_read_seq bigint FK
        issue_risk_seq bigint FK
    }

pms_user_read_post {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bigint creator_seq FK
        bigint updater_seq FK
        bigint post_seq FK
        bigint user_read_seq FK
    }

pms_vep_user_project {
        bigint seq PK
        bigint user_project_seq FK
        date view_start_date
        tinyint(1) is_done
        bigint creator_seq FK
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
    }

pms_viewing_end_project_apply {
        bigint seq PK
        varchar(50) pid
        bigint applier_seq FK
        bigint project_seq FK
        bigint status_seq FK
        date view_end_date
        date view_start_date
        varchar(2000) reason
        date review_date
        bigint creator_seq FK
        bigint updater_seq FK
        datetime(6) create_date_time
        datetime(6) update_date_time
        datetime(6) apply_date_time
    }

pms_wbs_management {
        bigint seq PK
        datetime(6) create_date_time
        datetime(6) update_date_time
        bit(1) is_modification
        bigint creator_seq FK
        bigint updater_seq FK
        bigint project_seq
        varchar(255) session_id
        bigint user_seq FK
    }

pms_wbs_statistics_history {
        seq bigint PK
        achievement_rate decimal
        base_date datetime(6)
        completed bigint
        delay bigint
        in_progress bigint
        not_coming bigint
        plan_rate decimal
        real_rate decimal
        this_week_plan_rate decimal
        total_task_count bigint
        project_seq bigint FK
        create_date_time datetime(6)
        update_date_time datetime(6)
    }

pms_work_plan {
        seq bigint PK
        create_date_time datetime(6)
        update_date_time datetime(6)
        complete_date date
        detail varchar(255)
        position varchar(255)
        start_date date
        type varchar(255)
        detail_work_type varchar(255)
        status varchar(100)
        change_status varchar(100)
        major_category varchar(255)
        medium_category varchar(255)
        assessment_year int
        assessment_month int
        assessment_week int
        task_number varchar(255)
        whether_meeting_is_in_progress varchar(255)
        work_force varchar(255)
        creator_seq bigint FK
        updater_seq bigint FK
        is_use_seq bigint FK
        partner_seq bigint FK
        project_seq bigint FK
        task_seq bigint FK
        assignee_seq bigint FK
        risk_assessment_seq bigint FK
        modifier_date datetime(6)
        registration_date datetime(6)
        modifier_seq bigint FK
        registrant_seq bigint FK
    }

ShedLock {
        varchar(64) name PK
        datetime(6) lock_until
        datetime(6) locked_at
        varchar(255) locked_by
    }