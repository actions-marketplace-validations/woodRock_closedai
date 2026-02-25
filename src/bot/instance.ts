import { Telegraf } from 'telegraf'
import * as https from 'https'
import 'dotenv/config'

const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
if (!token) {
  console.error('❌ TELEGRAM_BOT_TOKEN is missing or empty in environment variables.');
  process.exit(1);
}

export const bot = new Telegraf(token, {
  handlerTimeout: 86400000,
  telegram: { agent: new https.Agent({ family: 4 }) },
})
