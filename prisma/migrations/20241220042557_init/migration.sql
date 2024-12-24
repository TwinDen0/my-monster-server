/*
  Warnings:

  - A unique constraint covering the columns `[telegram_id]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "daily_monsters" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" TEXT NOT NULL,
    "is_coins_price" BOOLEAN NOT NULL,
    "monster_id" TEXT,

    CONSTRAINT "daily_monsters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pack" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "end_at" TIMESTAMP(3),
    "price_coin" INTEGER NOT NULL,
    "price_crystal" INTEGER NOT NULL,
    "coin_min" INTEGER NOT NULL,
    "coin_max" INTEGER NOT NULL,
    "crystal_min" INTEGER NOT NULL,
    "crystal_max" INTEGER NOT NULL,
    "percent_drop_monster" INTEGER NOT NULL,
    "monsters" JSONB,

    CONSTRAINT "pack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_telegram_id_key" ON "user"("telegram_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "daily_monsters" ADD CONSTRAINT "daily_monsters_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monster"("id") ON DELETE SET NULL ON UPDATE CASCADE;
