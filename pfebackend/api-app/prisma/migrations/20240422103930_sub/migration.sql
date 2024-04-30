/*
  Warnings:

  - You are about to drop the column `subCategoryId` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_subCategoryId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `subCategoryId`;

-- AlterTable
ALTER TABLE `subcategory` ADD COLUMN `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `SubCategory` ADD CONSTRAINT `SubCategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
