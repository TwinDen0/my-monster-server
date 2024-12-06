-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "telegramId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "reputation" INTEGER NOT NULL DEFAULT 0,
    "userAvatar" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
