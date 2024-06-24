/*
  Warnings:

  - You are about to drop the column `adresse` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `mdp` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `mobilephone` on the `user` table. All the data in the column will be lost.
  - Added the required column `address` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatarUrl` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `adresse`,
    DROP COLUMN `age`,
    DROP COLUMN `mdp`,
    DROP COLUMN `mobilephone`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `avatarUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;
