-- AlterTable
ALTER TABLE "collection" ADD COLUMN     "isEvo" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "evoPlaces" INTEGER NOT NULL DEFAULT 3;
