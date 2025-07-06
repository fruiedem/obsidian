import net.ldcc.localpms.common.repository.common.role.UserGroupRoleRepository;
userGroupRoleRepository.

pms_role => 권한관리 1:1 맵핑


시스템 관리자 권한, 위플젝 관리자 권한 
=> pms_role 테이블에만 생성, pms_group 테이블에 생성X
=> pms_user_group_role : default group 과 role 간에 다대일 생성
group 테이블에 없으면 map 생성 안함





FKhehve6rqwpoe5w2to5988dl9i
FKdmtqwds31fx3hvjdwxl4d8c10