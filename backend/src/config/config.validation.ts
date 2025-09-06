import { plainToInstance } from "class-transformer"
import { IsString, IsNumber, IsOptional, validateSync } from "class-validator"

class EnvironmentVariables {
  @IsOptional()
  @IsNumber()
  PORT?: number = 3001

  @IsString()
  SUPABASE_URL: string

  @IsString()
  SUPABASE_SERVICE_KEY: string

  @IsOptional()
  @IsString()
  CORS_ORIGIN?: string = "http://localhost:3000"

  @IsOptional()
  @IsString()
  NODE_ENV?: string = "development"
}

export function configValidation(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  })

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  })

  if (errors.length > 0) {
    throw new Error(errors.toString())
  }

  return validatedConfig
}
