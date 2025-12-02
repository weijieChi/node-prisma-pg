import "dotenv/config";
import { PrismaClient } from '../generated/client'

// Prisma v6 會自動使用 DATABASE_URL
const prisma = new PrismaClient();

export { prisma }