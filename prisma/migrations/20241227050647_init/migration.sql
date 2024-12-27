-- DropForeignKey
ALTER TABLE "collection" DROP CONSTRAINT "collection_leader_id_fkey";

-- AddForeignKey
ALTER TABLE "collection" ADD CONSTRAINT "collection_leader_id_fkey" FOREIGN KEY ("leader_id") REFERENCES "user"("telegram_id") ON DELETE SET NULL ON UPDATE CASCADE;
