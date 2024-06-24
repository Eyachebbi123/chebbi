/*
  Warnings:

  - You are about to drop the column `message` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - Added the required column `Password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adresse` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullname` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobilephone` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `message`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    ADD COLUMN `Password` VARCHAR(191) NOT NULL,
    ADD COLUMN `adresse` VARCHAR(191) NOT NULL,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `fullname` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobilephone` INTEGER NOT NULL;
