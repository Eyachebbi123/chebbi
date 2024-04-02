/*
  Warnings:

  - You are about to drop the column `title` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productName]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productName` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adresse` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobilephone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Products_title_key` ON `products`;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `title`,
    ADD COLUMN `productName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `review` ADD COLUMN `usersId` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `adresse` VARCHAR(191) NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `mobilephone` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Products_productName_key` ON `Products`(`productName`);

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
