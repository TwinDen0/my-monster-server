-- CreateEnum
CREATE TYPE "EnumTypeElement" AS ENUM ('FIRE', 'WATER', 'GROUND', 'ICE', 'ELECTRIC', 'AIR', 'DARK', 'GRASS', 'LIGHT', 'NEUTRAL');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "crystals" INTEGER NOT NULL DEFAULT 0,
    "telegram_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "reputation" INTEGER NOT NULL DEFAULT 0,
    "user_avatar" TEXT NOT NULL,
    "evoPlaces" INTEGER NOT NULL DEFAULT 3,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_monster" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT,
    "element" "EnumTypeElement" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "type_monster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monster" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "leader_id" TEXT,
    "subtype_name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "stage_evo" INTEGER NOT NULL DEFAULT 0,
    "branch_evo" INTEGER NOT NULL DEFAULT 0,
    "starts" INTEGER NOT NULL DEFAULT 3,
    "days_next_lvl" INTEGER NOT NULL DEFAULT 3,

    CONSTRAINT "monster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "leader_id" TEXT,
    "monster_id" TEXT,
    "name" TEXT,
    "days" INTEGER NOT NULL DEFAULT 0,
    "food_minutes" INTEGER NOT NULL DEFAULT 120,
    "food_places" INTEGER NOT NULL DEFAULT 3,
    "isEvo" BOOLEAN NOT NULL DEFAULT false,
    "isStop" BOOLEAN NOT NULL DEFAULT false,
    "isNewDay" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonstersFood" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "food_id" TEXT NOT NULL,
    "collection_id" TEXT NOT NULL,

    CONSTRAINT "MonstersFood_pkey" PRIMARY KEY ("id")
);

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
    "price_coin" INTEGER,
    "price_crystal" INTEGER,
    "coin_min" INTEGER NOT NULL,
    "coin_max" INTEGER NOT NULL,
    "crystal_min" INTEGER NOT NULL,
    "crystal_max" INTEGER NOT NULL,
    "percent_drop_monster" INTEGER NOT NULL,
    "monsters" JSONB,

    CONSTRAINT "pack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "is_coins" BOOLEAN NOT NULL DEFAULT true,
    "mucus" INTEGER NOT NULL DEFAULT 0,
    "tentacle" INTEGER NOT NULL DEFAULT 0,
    "fish" INTEGER NOT NULL DEFAULT 0,
    "eye" INTEGER NOT NULL DEFAULT 0,
    "wing" INTEGER NOT NULL DEFAULT 0,
    "fly" INTEGER NOT NULL DEFAULT 0,
    "bone" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_telegram_id_key" ON "user"("telegram_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "monster" ADD CONSTRAINT "monster_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "type_monster"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection" ADD CONSTRAINT "collection_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "user"("telegram_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection" ADD CONSTRAINT "collection_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monster"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonstersFood" ADD CONSTRAINT "MonstersFood_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonstersFood" ADD CONSTRAINT "MonstersFood_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_monsters" ADD CONSTRAINT "daily_monsters_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monster"("id") ON DELETE SET NULL ON UPDATE CASCADE;
