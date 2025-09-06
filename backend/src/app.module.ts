import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { DashboardModule } from "./dashboard/dashboard.module"
import { SupabaseModule } from "./supabase/supabase.module"
import { configValidation } from "./config/config.validation"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: configValidation,
      envFilePath: ".env.local",
    }),
    SupabaseModule,
    DashboardModule,
  ],
})
export class AppModule {}
