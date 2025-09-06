import { Injectable, Logger } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { createClient, type SupabaseClient } from "@supabase/supabase-js"

@Injectable()
export class SupabaseService {
  private readonly logger = new Logger(SupabaseService.name)
  private supabase: SupabaseClient

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>("SUPABASE_URL")
    const supabaseKey = this.configService.get<string>("SUPABASE_SERVICE_KEY")

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase configuration is missing")
    }

    this.supabase = createClient(supabaseUrl, supabaseKey)
    this.logger.log("Supabase client initialized successfully")
  }

  getClient(): SupabaseClient {
    return this.supabase
  }

  async query(table: string, select = "*") {
    try {
      const { data, error } = await this.supabase.from(table).select(select)

      if (error) {
        this.logger.error(`Query error for table ${table}:`, error)
        throw error
      }

      return data
    } catch (error) {
      this.logger.error(`Failed to query table ${table}:`, error)
      throw error
    }
  }

  async insert(table: string, data: any) {
    try {
      const { data: result, error } = await this.supabase.from(table).insert(data).select()

      if (error) {
        this.logger.error(`Insert error for table ${table}:`, error)
        throw error
      }

      return result
    } catch (error) {
      this.logger.error(`Failed to insert into table ${table}:`, error)
      throw error
    }
  }
}
