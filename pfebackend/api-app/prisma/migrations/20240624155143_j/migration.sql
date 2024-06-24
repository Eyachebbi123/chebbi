/*
  Warnings:

  - You are about to drop the column `usersId` on the `bookmark` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `reclamation` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `review` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `bookmark` DROP FOREIGN KEY `Bookmark_usersId_fkey`;

-- DropForeignKey
ALTER TABLE `reclamation` DROP FOREIGN KEY `Reclamation_usersId_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_usersId_fkey`;

-- AlterTable
ALTER TABLE `bookmark` DROP COLUMN `usersId`,
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `reclamation` DROP COLUMN `usersId`,
    ADD COLUMN `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `usersId`,
    ADD COLUMN `userId` INTEGER NULL;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `mobilephone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mdp` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookmark` ADD CONSTRAINT `Bookmark_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reclamation` ADD CONSTRAINT `Reclamation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
