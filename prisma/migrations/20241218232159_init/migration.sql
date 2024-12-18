-- CreateEnum
CREATE TYPE "EnumTypeElement" AS ENUM ('FIRE', 'WATER', 'GROUND', 'ICE', 'ELECTRIC', 'AIR', 'DARK', 'GRASS', 'LIGHT', 'NEUTRAL');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "telegram_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "reputation" INTEGER NOT NULL DEFAULT 0,
    "user_avatar" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_monster" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
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
    "starts" INTEGER NOT NULL,
    "hunger" INTEGER NOT NULL,

    CONSTRAINT "monster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "leader_id" TEXT,
    "monster_id" TEXT,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "monster" ADD CONSTRAINT "monster_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "type_monster"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection" ADD CONSTRAINT "collection_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collection" ADD CONSTRAINT "collection_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "monster"("id") ON DELETE SET NULL ON UPDATE CASCADE;
