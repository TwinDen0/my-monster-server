/*
  Warnings:

  - You are about to drop the column `time` on the `MonstersFood` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MonstersFood" DROP CONSTRAINT "MonstersFood_food_id_fkey";

-- AlterTable
ALTER TABLE "MonstersFood" DROP COLUMN "time";

-- AddForeignKey
ALTER TABLE "MonstersFood" ADD CONSTRAINT "MonstersFood_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
