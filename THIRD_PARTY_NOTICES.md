# 외부 구성 출처

버전은 각 모듈의 pom.xml, package.json, package-lock.json 및 requirements.txt에서 확인할 수 있습니다. npm 잠금 파일에는 배포처와 잠긴 버전, 라이선스 식별자가 기록되어 있습니다. 이 문서는 포함된 출처를 안내하며 팀 전체 소스에 새 라이선스를 부여하지 않습니다.

| 구성 | 원출처와 이 스냅샷에서의 사용 |
|---|---|
| Maven Wrapper | [Apache Maven Wrapper](https://maven.apache.org/wrapper/). 래퍼 스크립트에 기존 Apache License 2.0 헤더와 [라이선스 전문](LICENSES/Apache-2.0.txt)을 유지했습니다. |
| Java 의존성 | [Spring Boot](https://spring.io/projects/spring-boot), [MyBatis](https://mybatis.org/), [Flyway](https://github.com/flyway/flyway), [MySQL Connector/J](https://github.com/mysql/mysql-connector-j), [MinIO Java SDK](https://github.com/minio/minio-java), [springdoc-openapi](https://github.com/springdoc/springdoc-openapi), [Caffeine](https://github.com/ben-manes/caffeine), [AspectJ](https://github.com/eclipse-aspectj/aspectj), [Lombok](https://projectlombok.org/), [Testcontainers](https://github.com/testcontainers/testcontainers-java). 프로젝트 의존성 선언으로 참조합니다. |
| 프런트엔드 | [Vue](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [Axios](https://github.com/axios/axios), [Pinia](https://github.com/vuejs/pinia), [Vue Router](https://github.com/vuejs/router), [Lucide](https://github.com/lucide-icons/lucide/blob/main/LICENSE), [Chart.js](https://github.com/chartjs/Chart.js), [vue-chartjs](https://github.com/apertureless/vue-chartjs), [hls.js](https://github.com/video-dev/hls.js), [browser-image-compression](https://github.com/Donaldcwl/browser-image-compression), [heic-to](https://github.com/hoppergee/heic-to/blob/main/LICENSE). heic-to 1.5.2는 잠금 파일에 LGPL-3.0으로 표시됩니다. JS 번들·node_modules는 포함 범위 밖입니다. |
| 지도, 글꼴, 번역 | [카카오맵 JavaScript SDK](https://developers.kakao.com/docs/ko/kakaomap/common), [Google Fonts](https://fonts.google.com/), [MyMemory API](https://mymemory.translated.net/doc/spec.php)는 외부 연동 참조입니다. 원본 지도 이미지와 글꼴 파일은 제외했습니다. |
| 로컬 이미지 | [MySQL](https://hub.docker.com/_/mysql), [RabbitMQ](https://hub.docker.com/_/rabbitmq), [MinIO](https://github.com/minio/minio), [MinIO Client](https://github.com/minio/mc). Compose가 이미지 이름과 태그를 참조합니다. |
| 엣지·미디어 | [ONNX Runtime](https://github.com/microsoft/onnxruntime), [Pika](https://github.com/pika/pika), [FlatBuffers](https://pypi.org/project/flatbuffers/), [coloredlogs](https://pypi.org/project/coloredlogs/), [humanfriendly](https://pypi.org/project/humanfriendly/), [OpenCV](https://github.com/opencv/opencv), [MediaMTX](https://github.com/bluenviron/mediamtx) 연동입니다. YOLO11 및 추가 ONNX 모델 경로는 코드에 남으며 실제 모델 파일과 장비용 인증 설정은 제외했습니다. [Ultralytics 조건](https://www.ultralytics.com/license)은 모델의 실제 공급처·모델 유형과 함께 확인해야 합니다. |

컨테이너 이미지나 번들의 재배포 시 적용되는 조건은 각 배포 버전의 원문으로 확인해야 합니다.

Apache Maven Wrapper의 저작권 표시는 The Apache Software Foundation (2013–2022)에 귀속됩니다. 초기 구현은 Hans Dockter와 Adam Murdoch의 Gradle Wrapper에서 유래했으며, 해당 구현의 저작권은 2007년 원저자에게 귀속됩니다. [Apache Maven Wrapper NOTICE](https://github.com/apache/maven-wrapper/blob/master/NOTICE)
