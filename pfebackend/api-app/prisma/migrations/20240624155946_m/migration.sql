/*
  Warnings:

  - You are about to drop the column `fullname` on the `user` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `fullname`,
    ADD COLUMN `fullName` VARCHAR(191) NOT NULL;
