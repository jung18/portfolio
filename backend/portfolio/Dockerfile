FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app

COPY gradlew gradlew.bat ./
COPY gradle ./gradle
RUN chmod +x gradlew

COPY build.gradle settings.gradle ./
COPY src ./src

RUN ./gradlew bootJar -x test --no-daemon
