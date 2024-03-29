-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2024-01-16 08:54:52
-- 服务器版本： 5.7.15-log
-- PHP Version: 5.6.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `material_project`
--

-- --------------------------------------------------------

--
-- 表的结构 `material`
--

CREATE TABLE `material` (
  `id` int(11) NOT NULL,
  `material_id` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `input_sequence` int(11) NOT NULL DEFAULT '1',
  `Q_number` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `wu_1` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `wu_2` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `shang_1` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `shang_2` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `xia_1` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `xia_2` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `material_date` datetime NOT NULL,
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `height1` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `height2` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `height3` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `height4` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `height5` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `height6` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `height7` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `height8` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `small1` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `small2` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `small3` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `small4` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `big1` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `big2` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `big3` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `big4` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `input_date` datetime DEFAULT NULL,
  `input_name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `material`
--

INSERT INTO `material` (`id`, `material_id`, `input_sequence`, `Q_number`, `wu_1`, `wu_2`, `shang_1`, `shang_2`, `xia_1`, `xia_2`, `material_date`, `username`, `height1`, `height2`, `height3`, `height4`, `height5`, `height6`, `height7`, `height8`, `small1`, `small2`, `small3`, `small4`, `big1`, `big2`, `big3`, `big4`, `input_date`, `input_name`) VALUES
(61, 'A004', 1, '5000', '1200.0', '1200.0', '1200.0', '1200.0', '1200.0', '1200.0', '2024-01-16 12:51:23', 'yq', '110.0', '110.0', '110.0', '110.0', '110.0', '110.0', '110.0', '110.0', '200.0', '200.0', '200.0', '200.0', '200.0', '200.0', '200.0', '200.0', '2024-01-16 12:57:48', 'yq');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL COMMENT '用户编号',
  `username` varchar(20) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(80) COLLATE utf8_unicode_ci NOT NULL COMMENT '密码',
  `identity` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'user',
  `Registered_Date` datetime NOT NULL COMMENT '注册日期',
  `nickname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '注册状态'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `identity`, `Registered_Date`, `nickname`, `email`, `avatar`, `status`) VALUES
(1, 'yq', '$2a$10$Bf9SJVc77GMkCfTUQkZ29.DhPGVYXW4J00HDc9/a3dLxrAc0A.6W2', 'administrator', '2023-12-13 15:49:53', '杨群', '2537148609@qq.com', 'uploads\\1.png', 1),
(2, 'mc', '$2a$10$jlmsmV80zZex1VysFeNkXOk2l0BrS7TB7C86jnz6d1TSk4mKTNube', 'user', '2024-01-10 21:54:30', NULL, NULL, NULL, 1),
(3, 'administrator', '$2a$10$JGH/iA1HvhicQQqKCDSUjOMJqe.H1XXt7ltvnSpVRztkEY5nQs7tu', 'administrator', '2024-01-11 10:39:06', '管理员', NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `material`
--
ALTER TABLE `material`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户编号', AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
