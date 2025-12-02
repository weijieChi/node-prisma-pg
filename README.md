# 前言
這是用於分享我在 node.js 使用 Prisma 記錄心得的程式碼範例。

# 環境需求

* Node.js v22.6.0+
* Git
* postgreSQL server

# 步驟

1. 在 postgreSQL server 建立 `node-prisma-pg` 資料庫
2. 從 github clone 檔案 `git clone git@github.com:weijieChi/node-prisma-pg.git`
3. 進入專案資料夾 `cd ./node-prisma-pg`
4. 使用 npm 安裝執行所需的套件 `npm install`
5. 建立 .env 檔案，設定資料庫連線環境變數 `DATABASE_URL` ，EX: `DATABASE_URL="postgresql://username:password@localhost:5432/node-prisma-pg?schema=public"` 
   username 跟 password 根據各自的環境設定
6. 執行 migrate 指令 `npx prisma migrate dev` 建立資料表
7. 使用 `npx prisma generate` 產生 prisma client 資料庫操作模型
8. 依據 seed 檔案建立資料庫初始檔案 `npx prisma db seed`
9. 使用 Prisma Studio 查看建立的資料庫跟數據是否成功 `npx prisma studio --config ./prisma.config.ts`

# 參考
[Quickstart with Prisma ORM and PostgreSQL](https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/postgresql)