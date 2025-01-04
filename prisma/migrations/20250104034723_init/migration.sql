/*
  Warnings:

  - You are about to drop the column `hungerLevel` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `isSleep` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `miningXp` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `xp` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `hunger` on the `monster` table. All the data in the column will be lost.
  - You are about to drop the column `xpNextLvl` on the `monster` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "collection" DROP COLUMN "hungerLevel",
DROP COLUMN "isSleep",
DROP COLUMN "miningXp",
DROP COLUMN "xp",
ADD COLUMN     "days" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "food_minutes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isStop" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "monster" DROP COLUMN "hunger",
DROP COLUMN "xpNextLvl",
ADD COLUMN     "days_next_lvl" INTEGER NOT NULL DEFAULT 3,
ALTER COLUMN "starts" SET DEFAULT 3;
