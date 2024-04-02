/*
  Warnings:

  - You are about to drop the column `rating` on the `review` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `review` DROP COLUMN `rating`,
    DROP COLUMN `title`;
