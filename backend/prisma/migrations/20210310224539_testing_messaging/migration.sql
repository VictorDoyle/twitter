/*
  Warnings:

  - You are about to drop the column `friendId` on the `Message` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey1";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "friendId";
