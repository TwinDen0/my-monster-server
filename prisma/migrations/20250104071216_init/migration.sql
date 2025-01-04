-- AlterTable
ALTER TABLE "collection" ADD COLUMN     "food_places" INTEGER NOT NULL DEFAULT 3;

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
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "is_coins" BOOLEAN NOT NULL,
    "mucus" INTEGER NOT NULL DEFAULT 0,
    "tentacle" INTEGER NOT NULL DEFAULT 0,
    "fish" INTEGER NOT NULL DEFAULT 0,
    "eye" INTEGER NOT NULL DEFAULT 0,
    "wing" INTEGER NOT NULL DEFAULT 0,
    "fly" INTEGER NOT NULL DEFAULT 0,
    "bone" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MonstersFood" ADD CONSTRAINT "MonstersFood_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonstersFood" ADD CONSTRAINT "MonstersFood_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
