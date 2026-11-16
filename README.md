# EyesOnU

EyesOnU는 실종자 신고를 접수하고, 인상착의와 CCTV 관측 정보를 바탕으로 관제자가 탐색 후보를 검토할 수 있게 만든 A204 팀 프로젝트입니다.

**SSAFY 반출 검수 준비 중.** 공식 과정 분류와 개발 기간은 확인 중입니다. 저장소에는 2026년 7월 15일 이후의 개발 기록이 있습니다. 개인 담당 범위는 확인 가능한 기여 자료를 확보한 뒤 작성합니다.

## 구현 범위

- 관리자가 사건, 탐색 조건과 카메라를 등록하고 후보를 검토합니다.
- Jetson 수신 코드가 실시간 후보 이벤트를 전달합니다. Raspberry Pi 스크립트에는 카메라 상태 보고와 녹화 업로드 흐름이 있습니다.
- 백엔드는 녹화 분석 작업의 요청·결과 연동, 후보 관리, 관측 동선과 신고자 진행 상태 조회 API를 제공합니다.
- 별도 신고자 웹앱의 접수·진행 흐름은 로컬 데모입니다. 신고 접수와 진행 조회는 브라우저 안에서 동작하며 EyesOnU 백엔드로 제출되지 않습니다. 카카오 지도 키를 설정하면 장소 검색어와 좌표가 카카오 지도 SDK를 통해 카카오에 전달될 수 있습니다.

## 구성

- apps/backend-api/eyesonu — Java 21, Spring Boot, MyBatis, Flyway
- apps/frontend/admin-dashboard — Vue 3, Vite, 관리자 화면 및 API 연동
- apps/frontend/reporter-webapp — Vue 3, Vite, 신고자 데모
- infra — MySQL, RabbitMQ, MinIO 로컬 Docker Compose
- modules — Jetson ONNX 추론 연동과 Raspberry Pi 녹화 업로드 클라이언트 소스

## 로컬 실행

1. Java 21, Node.js, npm, Docker Compose를 준비합니다. infra/.env.example을 infra/.env로 복사하고 비어 있는 항목에 본인의 로컬 전용 값을 입력합니다. RabbitMQ 사용자·비밀번호는 RABBITMQ_*와 SPRING_RABBITMQ_*에서 같은 값을 사용합니다.
2. 저장소 루트에서 다음 명령을 실행합니다.

       docker compose --env-file infra/.env -f infra/compose.local.yml up -d

3. 환경 파일에 설정한 DB·RabbitMQ·MinIO·관리자 값을 백엔드를 실행할 셸의 환경 변수로 설정합니다. SPRING_PROFILES_ACTIVE=local을 설정한 뒤 apps/backend-api/eyesonu에서 Windows는 mvnw.cmd spring-boot:run, macOS/Linux는 sh ./mvnw spring-boot:run을 사용합니다.
4. 실행하려는 프런트엔드 디렉터리에서 npm ci와 npm run dev를 실행합니다. 관리 앱은 기본적으로 localhost:8080의 API를 사용합니다. 지도 SDK를 사용할 때는 각 앱의 .env.example을 참고해 본인의 카카오 JavaScript 키와 허용 도메인을 설정합니다.

## 스냅샷 범위

운영 배포 설정·계정과 장비 인증 설정, 원본 이미지·캡처, 빌드·캐시, 미검토 테스트·fixture 및 모델 파일은 이 스냅샷에서 제외했습니다. 관리자 데모 모음은 비어 있고 신고자 앱은 합성 번호를 사용하는 데모입니다. Jetson과 Raspberry Pi의 실행에는 별도로 권한을 확보한 모델·샘플 및 장비 설정이 필요합니다. 녹화 분석 Worker 전체와 운영 배포 구성은 포함 범위 밖입니다. 이 스냅샷의 실행을 실제 CCTV·실종자 데이터 또는 운영 시스템에 연결하지 마세요.

외부 구성의 출처와 포함 범위는 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)를 참고하세요.
