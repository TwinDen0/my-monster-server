-- AlterTable
ALTER TABLE "monster" ALTER COLUMN "hunger" SET DEFAULT 100;

-- AlterTable
ALTER TABLE "pack" ALTER COLUMN "price_coin" DROP NOT NULL,
ALTER COLUMN "price_crystal" DROP NOT NULL;

-- AlterTable
ALTER TABLE "type_monster" ADD COLUMN     "img" TEXT;
