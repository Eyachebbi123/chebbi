/*
  Warnings:

  - You are about to drop the column `bookmarkId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_bookmarkId_fkey`;

-- AlterTable
ALTER TABLE `bookmark` ADD COLUMN `productsId` INTEGER NULL,
    ADD COLUMN `usersId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `bookmarkId`;

-- AddForeignKey
ALTER TABLE `Bookmark` ADD CONSTRAINT `Bookmark_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `Products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookmark` ADD CONSTRAINT `Bookmark_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
