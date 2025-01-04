-- AlterTable
ALTER TABLE "MonstersFood" ADD COLUMN     "time" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "food" ALTER COLUMN "is_coins" SET DEFAULT true;
