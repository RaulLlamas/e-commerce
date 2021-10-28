-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: rogers
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table rogers for table `addresses`
--

DROP DATABASE IF EXISTS rogers;
CREATE DATABASE rogers;
USE rogers;

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `Id_addresses` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Street` varchar(100) NOT NULL,
  `Number_ext` varchar(100) NOT NULL,
  `Colony` varchar(100) NOT NULL,
  `Number_int` varchar(100) DEFAULT NULL,
  `Reference` text DEFAULT NULL,
  PRIMARY KEY (`Id_addresses`),
  UNIQUE KEY `Addresses_un` (`Street`,`Number_ext`,`Colony`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Norte 81',56,'Centro',NULL,''),(2,'Río Bravo',286,'Santa Fe',NULL,NULL),(3,'Nicolas Bravo',1012,'San Manuel',NULL,NULL),(4,'Sur 31',92,'Hidalgo',NULL,NULL);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
--Table rogers for table 'admin'
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `Id_users` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Telephone` varchar(10) DEFAULT NULL,
  `Password` varchar(100) NOT NULL,
  `Birthday_date` date DEFAULT NULL,
  `Id_Addresses` int(11) unsigned DEFAULT NULL,
  `Image` text DEFAULT NULL,
  PRIMARY KEY (`Id_users`),
  UNIQUE KEY `Users_un` (`Email`),
  KEY `users_FK` (`Id_Addresses`),
  CONSTRAINT `users_FK` FOREIGN KEY (`Id_Addresses`) REFERENCES `addresses` (`Id_addresses`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'David','david@gmail.com','9856213475','david00',NULL,1,'users1.jpg  '),(2,'Raúl','raul@gmail.com','5623478915','raul01',NULL,2,'users2.jpg'),(3,'Rebeca','rebeca@gmail.com','2211568493','rebeca02',NULL,4,'users3.jpg');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table rogers for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `Id_categories` int(11) unsigned  NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  PRIMARY KEY (`Id_categories`),
  UNIQUE KEY `Categories_un` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Entrada'),(2,'Por lo que vienes'),(3,'Postres');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table rogers for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `Id_products` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Price` varchar(100) NOT NULL,
  `Id_Categories` int(11) unsigned DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Image` text DEFAULT NULL,
  PRIMARY KEY (`Id_products`),
  UNIQUE KEY `Products_un` (`Name`,`Price`) USING HASH,
  KEY `products_FK` (`Id_Categories`),
  CONSTRAINT `products_FK` FOREIGN KEY (`Id_Categories`) REFERENCES `categories` (`Id_categories`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Hamburguesa Clásica ','85.00',2,'Hamburguesa con una jugosa carne 100% de res, queso tipo americano, lechuga, cebolla y jitomate',''),(2,'Alitas BBQ','115.00',1,'Deliciosas alitas de pollo cubiertas de salsa BBQ',''),(3,'Brownie Sundae','80.00',3,'Rico brownie de chocolate acompañado con helado de vainilla cubierto de caramelo y decorado con frutos secos',''),(4,'Papas a la francesa','59.00',1,'Las mejores papas fritas con corte a la francesa acompañadas de un rico aderezo.',NULL),(5,'Aros de Cebolla','65.00',1,'Crujientes aros de cebolla que con un bocado te hará tocar las estrellas ',NULL),(6,'Nachos','50.00',1,'Lo mejor para empezar;  totopos crujientes con sabrosos frijoles refritos, queso derretido, tomates y cebollitas.',NULL),(7,'Hot Dog','89.00',2,'El mejor sabor esta en un hot dog con salsa de tomate, mostaza, jalapeño y cebolla',NULL),(8,'Pizza','115',2,'Exquisita pizza hecha solo para ti, con masa recien horneada y exquisitas especias',NULL),(9,'Sushi','140',2,'El mejor sushi de la ciudad acompañado de aderezos deliciosos',NULL),(10,'Dona glaseada','40',3,'Las donas que te enamoraran a primera vista, cubierta con chocolate y con deliciosos rellenos',NULL),(11,'Cheese cake','70',3,'Delicioso Cheese cake con orilla de galleta sabor vainilla',NULL),(12,'Nieve','50',3,'Las mejores nieves caseras, hechas solo para ti',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table rogers for table `shopping cart`
--

DROP TABLE IF EXISTS `shopping cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shopping cart` (
  `Id_shopping_cart` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Id_Categories` int(11) unsigned DEFAULT NULL,
  `Id_users` int(11) unsigned DEFAULT NULL,
  `Number_of_items` int(11) NOT NULL,
  `Id_products` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`Id_shopping_cart`),
  KEY `shopping_cart_FK` (`Id_users`),
  KEY `shopping_cart_FK_1` (`Id_products`),
  KEY `shopping_cart_FK_2` (`Id_Categories`),
  CONSTRAINT `shopping_cart_FK` FOREIGN KEY (`Id_users`) REFERENCES `users` (`Id_users`),
  CONSTRAINT `shopping_cart_FK_1` FOREIGN KEY (`Id_products`) REFERENCES `products` (`Id_products`),
  CONSTRAINT `shopping_cart_FK_2` FOREIGN KEY (`Id_Categories`) REFERENCES `categories` (`Id_categories`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping cart`
--

LOCK TABLES `shopping cart` WRITE;
/*!40000 ALTER TABLE `shopping cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table rogers for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `Id_users` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Telephone` varchar(10) DEFAULT NULL,
  `Password` varchar(100) NOT NULL,
  `Birthday_date` date DEFAULT NULL,
  `Id_Addresses` int(11) unsigned DEFAULT NULL,
  `Image` text DEFAULT NULL,
  PRIMARY KEY (`Id_users`),
  UNIQUE KEY `Users_un` (`Email`),
  KEY `users_FK` (`Id_Addresses`) USING BTREE,
  CONSTRAINT `users_FK_copy` FOREIGN KEY (`Id_Addresses`) REFERENCES `addresses` (`Id_addresses`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jorge','jorge@gmail.com','2896413525','456789',NULL,3,'users4.jpg'),(2,'María','maria@gmail.com','2574896135','qwerty',NULL,3,NULL),(3,'Pablo','pablo@gmail.com','3658941207','zxcvbn',NULL,3,NULL),(4,'Fatima','fatima@gmail.com','5468941238','678890',NULL,3,NULL),(5,'Laura','laura@gmail.com','5962431785','jkloiu',NULL,3,NULL),(6,'Marcos','marcos@gmail.com','5623489715','589632',NULL,3,NULL),(7,'Gabriel','gabriel@gmail.com','4582639847','023568',NULL,3,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'rogers'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-15 18:51:16
