# ===============================
# 1) Build Stage
# ===============================
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app

COPY gradlew gradlew.bat ./
COPY gradle ./gradle
RUN chmod +x gradlew

COPY build.gradle settings.gradle ./
COPY src ./src

RUN ./gradlew bootJar -x test --no-daemon


# ===============================
# 2) Run Stage
# ===============================
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# 빌드된 JAR 복사
COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080

ENV JAVA_OPTS="-Xms256m -Xmx512m"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
