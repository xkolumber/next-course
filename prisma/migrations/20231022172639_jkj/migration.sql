/*
  Warnings:

  - You are about to drop the `accounttt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verificationtoken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `accounttt` DROP FOREIGN KEY `Accounttt_userId_fkey`;

-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `Session_userId_fkey`;

-- DropTable
DROP TABLE `accounttt`;

-- DropTable
DROP TABLE `session`;

-- DropTable
DROP TABLE `user`;

-- DropTable
DROP TABLE `verificationtoken`;