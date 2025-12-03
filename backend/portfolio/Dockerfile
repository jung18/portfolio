# ===============================
# 1) Build Stage (Gradle + JDK21)
# ===============================
FROM gradle:8.8-jdk21 AS builder
WORKDIR /app

# 먼저 빌드 스크립트만 복사 → 캐시 최적화
COPY build.gradle settings.gradle ./

# Gradle wrapper, 기타 설정 파일 복사
COPY gradlew gradlew.bat ./
COPY gradle ./gradle

# 이후 src 전체 복사
COPY src ./src

# BootJar 빌드 (테스트 제외)
RUN ./gradlew bootJar -x test --no-daemon

# ===============================
# 2) Run Stage (경량 Alpine JRE)
# ===============================
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# 빌드 결과물 복사 (자동 JAR 탐색)
COPY --from=builder /app/build/libs/*.jar app.jar

# 애플리케이션 포트
EXPOSE 8080

# JVM 옵션 설정(선택)
ENV JAVA_OPTS="-Xms256m -Xmx512m"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
