
FROM openjdk:17-alpine

WORKDIR /app

COPY pom.xml ./
COPY mvnw ./
COPY .mvn .mvn

RUN ./mvnw dependency:go-offline -B

COPY src ./src

RUN ./mvnw clean package -DskipTests


CMD ["java", "-jar", "target/nombre-app.jar"]
