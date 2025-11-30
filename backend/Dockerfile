
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY pom.xml ./
COPY mvnw ./
COPY .mvn .mvn

RUN ./mvnw dependency:go-offline -B

COPY src ./src

RUN ./mvnw clean package -DskipTests

CMD ["java", "-jar", "target/prueba-tecnica-mente-0.0.1-SNAPSHOT.jar"]
