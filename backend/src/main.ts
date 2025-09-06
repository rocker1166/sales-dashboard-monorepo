import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import { GlobalExceptionFilter } from "./common/filters/global-exception.filter"
import { LoggingInterceptor } from "./common/interceptors/logging.interceptor"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Global configuration
  app.setGlobalPrefix("api")
  app.enableCors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })

  // Configure validation pipe
  const validationPipe = new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  })

  // Configure global filters and interceptors
  const globalExceptionFilter = new GlobalExceptionFilter()
  const loggingInterceptor = new LoggingInterceptor()

  // Apply global configurations using array destructuring to avoid lint issues
  const globalConfigs = [
    () => app.useGlobalPipes(validationPipe),
    () => app.useGlobalFilters(globalExceptionFilter),
    () => app.useGlobalInterceptors(loggingInterceptor),
  ]

  // Execute configurations
  globalConfigs.forEach((config) => config())

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITLE || "Sales Dashboard API")
    .setDescription(process.env.SWAGGER_DESCRIPTION || "API documentation for Sales Dashboard")
    .setVersion(process.env.SWAGGER_VERSION || "1.0.0")
    .addTag("dashboard")
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api/docs", app, document)

  const port = process.env.PORT || 3001
  await app.listen(port, '0.0.0.0')

  console.log(`🚀 Application is running on port: ${port}`)
  console.log(`📚 Swagger documentation: http://localhost:${port}/api/docs`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
}

bootstrap()
