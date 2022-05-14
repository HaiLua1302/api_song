-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 12, 2022 at 03:40 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbsong`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbinforsong`
--

DROP TABLE IF EXISTS `tbinforsong`;
CREATE TABLE IF NOT EXISTS `tbinforsong` (
  `id` int(11) NOT NULL,
  `title` varchar(30) DEFAULT NULL,
  `singer` varchar(30) DEFAULT NULL,
  `publication` varchar(30) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbinforsong`
--

INSERT INTO `tbinforsong` (`id`, `title`, `singer`, `publication`, `image`) VALUES
(724, 'All rise 2 3', 'Blue3', '19978', 'https://avatar-ex-swe.nixcdn.com/playlist/2018/09/06/4/2/b/6/1536234340256_500.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
