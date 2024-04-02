/*
  Warnings:

  - You are about to drop the column `reclamationId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_reclamationId_fkey`;

-- AlterTable
ALTER TABLE `reclamation` ADD COLUMN `usersId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `reclamationId`;

-- AddForeignKey
ALTER TABLE `Reclamation` ADD CONSTRAINT `Reclamation_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
