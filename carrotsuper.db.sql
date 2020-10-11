-- MySQL dump 10.13  Distrib 8.0.21, for osx10.15 (x86_64)
--
-- Host: localhost    Database: carrot_super
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='카테고리';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'디지털/가전'),(2,'가구/인테리어'),(3,'스포츠/레저'),(4,'여성잡화');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_url` varchar(2048) NOT NULL,
  `product_id` int NOT NULL,
  `order` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_product_images_product_id_products_id` (`product_id`),
  CONSTRAINT `FK_product_images_product_id_products_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/C6223BE4F4DD955F99FE41A9FC08DAEFD37B3ADBDB77846E9BF19C73C4F31D4A.jpg?q=95&s=1440x1440&t=inside',1,1),(2,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/25EE41077384FAA1FF8BA57F08C9FDF67A58AEAFA9710EA3AB14B3FEF9210361.jpg?q=95&s=1440x1440&t=inside',1,2),(3,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/21CBCC5342800DB202829CFB7916583CB344AEFAB234D5757FB5DB916DAD3C7D.jpg?q=95&s=1440x1440&t=inside',1,3),(4,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/62CCD6D75F6BFADFD73F7D267BDC54195F2DDA606075DD8BB119CCBABD858DA1.jpg?q=95&s=1440x1440&t=inside',1,4),(5,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/B7E8F46B116F94B1F6CAE67357F6E1F275E7549EFE37BA2F43946000902CE780.jpg?q=95&s=1440x1440&t=inside',1,5),(6,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/3EB0D2896F6CE8CF734EC582D78FE91302E1C1E79480E9B51437FB85C49EB15B.jpg?q=95&s=1440x1440&t=inside',2,1),(7,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/B47299019272CE702DC99BE254664614D9078F230BDA88E152F0119657967B9E.jpg?q=95&s=1440x1440&t=inside',2,2),(8,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/F642223C75910B17C67ACD18635AA7688738153546C427AF89B4701DACCA3109.jpg?q=95&s=1440x1440&t=inside',2,3),(9,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/09377BBC61F18EFC116197E258BD525FE3896AD7F8CFCCA1EF55512856A3C35A.jpg?q=95&s=1440x1440&t=inside',2,4),(10,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/DA32A8EE3669F7F699458DE4B99EC1BFB300745997BD3E24C7A12F8BDC8F6073.jpg?q=95&s=1440x1440&t=inside',2,5),(11,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/f2e0bbd9ed121813ad95fad5141f6f9468983f0f6a987afa70289ed33a659ae1.webp?q=95&s=1440x1440&t=inside',3,1),(12,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/1b518c32470b28310d51964b372d6a7741a0260df4f3707e71872a7594a48ea0.webp?q=95&s=1440x1440&t=inside',3,2),(13,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/5dea4d7b754af0763346d0a9429d27db2c84839a619a2fcf1c2fbb92f507f332.webp?q=95&s=1440x1440&t=inside',3,3),(14,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/55339c90909ef13cf85569e1e56db8f0e2b3dc97db391ea064b0f1f68a97d164.webp?q=95&s=1440x1440&t=inside',3,4),(15,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/05aac5734c5f825930722e3e917d85ee41ea64fa5546bed345935d32b9e0c059.webp?q=95&s=1440x1440&t=inside',3,5),(16,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',4,1),(17,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',4,2),(18,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',4,3),(19,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',4,4),(20,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',4,5),(21,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/1e091e19ffbdd592ce4564dfa1d23cf1525db3c4d7b67add0c2c73d3d04c97dd.webp?q=95&s=1440x1440&t=inside',5,1),(22,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/7700ff7c9760a5998cf7acc554ae93a135be24f3c52f792ee97134009c5eb32e.webp?q=95&s=1440x1440&t=inside',5,2),(23,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/3f6275a32413f93910e38421dc31ddd2ec18761c509e8165954f6864f1abff8d.webp?q=95&s=1440x1440&t=inside',5,3),(24,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/1e091e19ffbdd592ce4564dfa1d23cf1525db3c4d7b67add0c2c73d3d04c97dd.webp?q=95&s=1440x1440&t=inside',5,4),(25,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/7700ff7c9760a5998cf7acc554ae93a135be24f3c52f792ee97134009c5eb32e.webp?q=95&s=1440x1440&t=inside',5,5),(26,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/C6223BE4F4DD955F99FE41A9FC08DAEFD37B3ADBDB77846E9BF19C73C4F31D4A.jpg?q=95&s=1440x1440&t=inside',6,1),(27,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/25EE41077384FAA1FF8BA57F08C9FDF67A58AEAFA9710EA3AB14B3FEF9210361.jpg?q=95&s=1440x1440&t=inside',6,2),(28,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/21CBCC5342800DB202829CFB7916583CB344AEFAB234D5757FB5DB916DAD3C7D.jpg?q=95&s=1440x1440&t=inside',6,3),(29,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/62CCD6D75F6BFADFD73F7D267BDC54195F2DDA606075DD8BB119CCBABD858DA1.jpg?q=95&s=1440x1440&t=inside',6,4),(30,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/B7E8F46B116F94B1F6CAE67357F6E1F275E7549EFE37BA2F43946000902CE780.jpg?q=95&s=1440x1440&t=inside',6,5),(31,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/3EB0D2896F6CE8CF734EC582D78FE91302E1C1E79480E9B51437FB85C49EB15B.jpg?q=95&s=1440x1440&t=inside',7,1),(32,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/B47299019272CE702DC99BE254664614D9078F230BDA88E152F0119657967B9E.jpg?q=95&s=1440x1440&t=inside',7,2),(33,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/F642223C75910B17C67ACD18635AA7688738153546C427AF89B4701DACCA3109.jpg?q=95&s=1440x1440&t=inside',7,3),(34,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/09377BBC61F18EFC116197E258BD525FE3896AD7F8CFCCA1EF55512856A3C35A.jpg?q=95&s=1440x1440&t=inside',7,4),(35,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/DA32A8EE3669F7F699458DE4B99EC1BFB300745997BD3E24C7A12F8BDC8F6073.jpg?q=95&s=1440x1440&t=inside',7,5),(36,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/f2e0bbd9ed121813ad95fad5141f6f9468983f0f6a987afa70289ed33a659ae1.webp?q=95&s=1440x1440&t=inside',8,1),(37,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/1b518c32470b28310d51964b372d6a7741a0260df4f3707e71872a7594a48ea0.webp?q=95&s=1440x1440&t=inside',8,2),(38,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/5dea4d7b754af0763346d0a9429d27db2c84839a619a2fcf1c2fbb92f507f332.webp?q=95&s=1440x1440&t=inside',8,3),(39,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/55339c90909ef13cf85569e1e56db8f0e2b3dc97db391ea064b0f1f68a97d164.webp?q=95&s=1440x1440&t=inside',8,4),(40,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/05aac5734c5f825930722e3e917d85ee41ea64fa5546bed345935d32b9e0c059.webp?q=95&s=1440x1440&t=inside',8,5),(41,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',9,1),(42,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',9,2),(43,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',9,3),(44,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',9,4),(45,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2d81b8ab52efc04a90458176c956c38f14028d81783bc6953c8e5583a479202a.webp?q=95&s=1440x1440&t=inside',9,5),(46,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/1e091e19ffbdd592ce4564dfa1d23cf1525db3c4d7b67add0c2c73d3d04c97dd.webp?q=95&s=1440x1440&t=inside',10,1),(47,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/7700ff7c9760a5998cf7acc554ae93a135be24f3c52f792ee97134009c5eb32e.webp?q=95&s=1440x1440&t=inside',10,2),(48,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/3f6275a32413f93910e38421dc31ddd2ec18761c509e8165954f6864f1abff8d.webp?q=95&s=1440x1440&t=inside',10,3),(49,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/1e091e19ffbdd592ce4564dfa1d23cf1525db3c4d7b67add0c2c73d3d04c97dd.webp?q=95&s=1440x1440&t=inside',10,4),(50,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/7700ff7c9760a5998cf7acc554ae93a135be24f3c52f792ee97134009c5eb32e.webp?q=95&s=1440x1440&t=inside',10,5),(51,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/FA2389A5A89EF5AE4381B59924421571C812FEAB61193D69E48BE32AA8CB1572.jpg?q=95&s=1440x1440&t=inside',11,1),(52,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/FFEF1143829C541D4B952367FD20029E2B47DDD8BDF4A4F3FC7DB69F8DB0C726.jpg?q=95&s=1440x1440&t=inside',11,2),(53,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/C9DC8F0B912451D6B886E0154C323EFEB6C4E2B59CA08C6A6B93390A709614A3.jpg?q=95&s=1440x1440&t=inside',11,3),(54,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/FA2389A5A89EF5AE4381B59924421571C812FEAB61193D69E48BE32AA8CB1572.jpg?q=95&s=1440x1440&t=inside',11,4),(55,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/FFEF1143829C541D4B952367FD20029E2B47DDD8BDF4A4F3FC7DB69F8DB0C726.jpg?q=95&s=1440x1440&t=inside',11,5),(56,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/2A1CA513CDD52DBE4EBEA8A459EF574C7C1035E9399E67D9DF2FD388E77656D8.jpg?q=95&s=1440x1440&t=inside',12,1),(57,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/47078A4F982B07D0B7EEF7505E0E1B51EF5F31D66DE5785046A8D4211A543324.jpg?q=95&s=1440x1440&t=inside',12,2),(58,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/2A1CA513CDD52DBE4EBEA8A459EF574C7C1035E9399E67D9DF2FD388E77656D8.jpg?q=95&s=1440x1440&t=inside',12,3),(59,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/47078A4F982B07D0B7EEF7505E0E1B51EF5F31D66DE5785046A8D4211A543324.jpg?q=95&s=1440x1440&t=inside',12,4),(60,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/2A1CA513CDD52DBE4EBEA8A459EF574C7C1035E9399E67D9DF2FD388E77656D8.jpg?q=95&s=1440x1440&t=inside',12,5),(61,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/beafb22450c641c78236f735697ebbfa5f32812ce69c5dac8e568cb1c25b7758.webp?q=95&s=1440x1440&t=inside',13,1),(62,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/8a2ffaac3056b67d7319bfdeefcecb10e38d19c0a1ad26625ff0433f032cf8eb.webp?q=95&s=1440x1440&t=inside',13,2),(63,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/631429e9f6027952073aee00dce9f401d91f35b9001b780373e2f79895dbd402.webp?q=95&s=1440x1440&t=inside',13,3),(64,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/99073205e61351d2d6981cf64c213633d6b2c9bef510d44bf39ceebf25191348.webp?q=95&s=1440x1440&t=inside',13,4),(65,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/beafb22450c641c78236f735697ebbfa5f32812ce69c5dac8e568cb1c25b7758.webp?q=95&s=1440x1440&t=inside',13,5),(66,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/63585ff480a1c31bcf539b3b9506bceaa7e75bf68ebb904ec3e01aa445392da3.webp?q=95&s=1440x1440&t=inside',14,1),(67,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/2e70f011e12ed5a47c07626a83a54696270e6cd866302832e2f947d62c9c167f.webp?q=95&s=1440x1440&t=inside',14,2),(68,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/04f37baf6621769cfd527abf233d9a0bf0cd82fd1dba6ff164e1c21c86790362.webp?q=95&s=1440x1440&t=inside',14,3),(69,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/b4f03442084c3fc3089c00c7cd03898966843edfdcecef481e331fc19e685efd.webp?q=95&s=1440x1440&t=inside',14,4),(70,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/8076457ae7d408bbb7469ea8f7dea63ea23f5e988e43099bbd3e9b08b5ffe863.webp?q=95&s=1440x1440&t=inside',14,5),(71,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/F7C16571CFECD50EEAA70E2456206DF12BCBC3BD50B80B959C90CBF62191084F.jpg?q=95&s=1440x1440&t=inside',15,1),(72,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/F7C16571CFECD50EEAA70E2456206DF12BCBC3BD50B80B959C90CBF62191084F.jpg?q=95&s=1440x1440&t=inside',15,2),(73,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/F7C16571CFECD50EEAA70E2456206DF12BCBC3BD50B80B959C90CBF62191084F.jpg?q=95&s=1440x1440&t=inside',15,3),(74,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/F7C16571CFECD50EEAA70E2456206DF12BCBC3BD50B80B959C90CBF62191084F.jpg?q=95&s=1440x1440&t=inside',15,4),(75,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/F7C16571CFECD50EEAA70E2456206DF12BCBC3BD50B80B959C90CBF62191084F.jpg?q=95&s=1440x1440&t=inside',15,5),(76,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/357F7CA89F720D425587391957880DF94843EDB281DDB7054CCA19C075F14CEF.jpg?q=95&s=1440x1440&t=inside',16,1),(77,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/357F7CA89F720D425587391957880DF94843EDB281DDB7054CCA19C075F14CEF.jpg?q=95&s=1440x1440&t=inside',16,2),(78,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/357F7CA89F720D425587391957880DF94843EDB281DDB7054CCA19C075F14CEF.jpg?q=95&s=1440x1440&t=inside',16,3),(79,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/357F7CA89F720D425587391957880DF94843EDB281DDB7054CCA19C075F14CEF.jpg?q=95&s=1440x1440&t=inside',16,4),(80,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/357F7CA89F720D425587391957880DF94843EDB281DDB7054CCA19C075F14CEF.jpg?q=95&s=1440x1440&t=inside',16,5),(81,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/93D098FDCA7177752C071F7634D33AA9220CEB1D7C0B26C5FF8C44ECD0C5B2E2.jpg?q=95&s=1440x1440&t=inside',17,1),(82,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/93D098FDCA7177752C071F7634D33AA9220CEB1D7C0B26C5FF8C44ECD0C5B2E2.jpg?q=95&s=1440x1440&t=inside',17,2),(83,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/93D098FDCA7177752C071F7634D33AA9220CEB1D7C0B26C5FF8C44ECD0C5B2E2.jpg?q=95&s=1440x1440&t=inside',17,3),(84,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/93D098FDCA7177752C071F7634D33AA9220CEB1D7C0B26C5FF8C44ECD0C5B2E2.jpg?q=95&s=1440x1440&t=inside',17,4),(85,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/93D098FDCA7177752C071F7634D33AA9220CEB1D7C0B26C5FF8C44ECD0C5B2E2.jpg?q=95&s=1440x1440&t=inside',17,5),(86,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/ecb0c3066c48cf38ba540c53efeb0f7fba133abc18942bf152844f2fa2eff781.webp?q=95&s=1440x1440&t=inside',18,1),(87,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/c7e3b69856806a436153a8df4a1b61f78a703ce615afcf0fac2ea17bed039f0e.webp?q=95&s=1440x1440&t=inside',18,2),(88,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/ecb0c3066c48cf38ba540c53efeb0f7fba133abc18942bf152844f2fa2eff781.webp?q=95&s=1440x1440&t=inside',18,3),(89,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/ecb0c3066c48cf38ba540c53efeb0f7fba133abc18942bf152844f2fa2eff781.webp?q=95&s=1440x1440&t=inside',18,4),(90,'https://dnvefa72aowie.cloudfront.net/origin/article/202009/c7e3b69856806a436153a8df4a1b61f78a703ce615afcf0fac2ea17bed039f0e.webp?q=95&s=1440x1440&t=inside',18,5),(91,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/3c3010455541d9ddac21833d688866d2a3af4aad9bcf8a6f98c169f0704efa77.webp?q=95&s=1440x1440&t=inside',19,1),(92,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/d3c2b5a9a5e8111b29c08fe77d77ce6b7752715cd14da5e528a0ded906c1b887.webp?q=95&s=1440x1440&t=inside',19,2),(93,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/3c3010455541d9ddac21833d688866d2a3af4aad9bcf8a6f98c169f0704efa77.webp?q=95&s=1440x1440&t=inside',19,3),(94,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/d3c2b5a9a5e8111b29c08fe77d77ce6b7752715cd14da5e528a0ded906c1b887.webp?q=95&s=1440x1440&t=inside',19,4),(95,'https://dnvefa72aowie.cloudfront.net/origin/article/202010/3c3010455541d9ddac21833d688866d2a3af4aad9bcf8a6f98c169f0704efa77.webp?q=95&s=1440x1440&t=inside',19,5),(96,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/15F638BFA55533542C920D0B755A101CF8F71FCDC25D7FE5121542023D682E17.jpg?q=95&s=1440x1440&t=inside',20,1),(97,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/40694FD7CDE08E502016B6F0B3E00E730EC1864CE869FFFA4FB777B96BCE3567.jpg?q=95&s=1440x1440&t=inside',20,2),(98,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/F030B77CD7261461F5D890B6EB40D046E39B943C7B3D08ED414F83E91F961F09.jpg?q=95&s=1440x1440&t=inside',20,3),(99,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/763FE311A7DB478D3420DFC328660A6367E1788D27096610BA115C0000778E74.jpg?q=95&s=1440x1440&t=inside',20,4),(100,'https://dnvefa72aowie.cloudfront.net/origin/article/202008/F9A50CD3ED5E77181FD5AC706D02FDD55838539BB965FDFC04D6728120BFAEF9.jpg?q=95&s=1440x1440&t=inside',20,5);
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(256) NOT NULL COMMENT '제목',
  `description` text NOT NULL COMMENT '설명',
  `price` int NOT NULL COMMENT '가격',
  `category_id` int NOT NULL COMMENT '카테고리 아이디 FK',
  `user_id` int NOT NULL COMMENT '유저 아이디 FK',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `view` int NOT NULL DEFAULT '0',
  `like_count` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_products_category_id_categories_id` (`category_id`),
  KEY `FK_products_user_id_users_id` (`user_id`),
  CONSTRAINT `FK_products_category_id_categories_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_products_user_id_users_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'캠핑 용품(캠핑 의자, 타프, bbq 테이블, 텐트, 침낭 등)','캠핑 빌리지 캠핑의자 두 개: 15,000 판매완료\n코베아 캠핑의자 어른용͎, 아이용͎, 네 개:60,000 예약중\nJACKAL 7, 8인용͎ 텐트:50,000 예약중\nColeman 침낭 겨울용͎ 2개:50,000 판매완료\n코베아 슬림 풀딩 bbq 테이블: 100,000\ncoleman 타프 30,000 예약중\n자칼 성인 남자 1인용͎ 침낭:10000\n캠핑 의자는 실사용͎ 4회 정도입니다. 텐트도 비슷하게 쓴 거 같아요!꙼̈ 연락 주세용',15000,3,1,'2020-10-09 21:45:10',123,1),(2,'이케아 철제 선반(순서대로 연락드리고 있습니다!)','이케아 철제 선반 4단 판매합니다.\n사진 보이는 그대로 사용감 있어요.\n가까운 역은 부개역, 송내역 이고\n직접 가질러 오셔야 해요.\n\n선입금 확인 후 거래 진행하겠습니다 :)',5000,2,2,'2020-10-09 21:45:10',23,0),(3,'자전거 팝니다','2년전 구입. 2번정도 탔습니다. 가격 네고 가능합니다!',50000,3,1,'2020-10-09 21:45:10',213,0),(4,'스팸통조림','이번추석에 선물받은거에요\n독립문역이나 영천시장에서 거래가능',10000,1,2,'2020-10-09 21:58:52',123,0),(5,'스탠드 김치 냉장고','2015년 가을에 구입한 딤채 스탠드 김치 냉장고입니다 리모델링으로 가전 바꾸느라 저렴히 내 놓습니다~사용에 전혀 문제 없구요‥김치통 같이 드릴께요(김치 냄새가 베긴 했지만~) 새 가전 들어올 때 가져가심 좋을 기사분들이 실어 들이지 않을까 싶네요~ 참고로 저희집이 1층이라 엘레베이터 이용은 안 해도 되구요ㅜ 아마도 다음 주쯤 새가전 배송될 것 같네요.',100000,1,1,'2020-10-09 21:58:52',3232,0),(6,'캠핑의자 큰것 2','버팔로 캠핑의자 큰것 2개 팔아요\n똑같은 의자가 2개 있어요\n요즘은 아이들이 커서 캠핑 잘 안게 되네요',3000,3,2,'2020-10-09 21:58:52',12,0),(7,'LG 스마트TV (42인치)','2013년 12월식/14년 구매\n상태좋고 하자없습니다~\n구매의사 있으신분\n연락주세요*^^*',150000,1,1,'2020-10-09 21:58:52',321,0),(8,'나노휠 전동킥보드 NQ01 팝니다','구성품은 사진과 같이 전동킥보드, 핸드폰거치대 자물쇠, 킥보드전용 가방, 전동킥보드전용 안장, 배터리 충전기선 입니다.\n작년 10월쯤에 샀는데 사용을 거의 10회 미만으로 해서 상태는 매우 좋습니다. 필요하시면 박스도 드리겠습니다.',200000,3,2,'2020-10-09 21:58:52',223,0),(9,'40cm전후 노랑국화팝니다','작은화분아니라\n40cm 중간짜리 큰 화분이에요~\n시중에서 8000 ~ 10000원씩에파는겁니다\n가게에서 팔고있는데 만개 해버려서\n가져다가 심으실분에게 싸게 넘깁니다~\n여유많아요~~\n사진보다 조금더 만개해서\n지금 가져가셔서 심으시면 딱 보기좋을거에요^^',3500,2,1,'2020-10-09 21:58:52',123,0),(10,'여성잡화 우산 새제품','우산 3단 새상품\n검정색1개 예쁜겨자색 1개입니다\n1개는 4000원 입니다^^',8000,4,2,'2020-10-09 21:58:52',614,0),(11,'삼성 비스포크 냉장고 팝니다. (새제품/미사용/4도어/프리스탠딩/사틴스카이블루/RF85T9111AP)','삼성 비스포크 냉장고 새제품 팝니다.\n사진처럼 설치만 하고 전혀 사용하지 않았습니다.\n전문업체 통해서 직접 이전설치 하셔야합니다.\n(하이마트 이전설치 서비스 추천)\n\n위치 : 경기도 광명시 소하동\n\n모델 : RF85T9111AP\n색상 : 사틴스카이블루\n용량 : 871L\n유형 : 4도어, 프리스탠딩, 1등급',1500000,1,2,'2020-10-09 21:27:28',3413,0),(12,'공무원 지방직 경기도 면접책 피티윤 2019, 스티마 2020\n','거의 새 책 입니다.\n지방직 합격해서 제가 본 책 내놓습니다.',4000,1,1,'2020-10-09 21:27:28',8,0),(13,'코스모스 쿨러(아이스박스)33리터 팔아요\n','사용감은 살짝 있지만 성능 빵빵합니다.\n직거래 경기도 광명에서만 가능합니다.\n​\n구성품 모두 있습니다.',40000,3,1,'2020-10-09 21:29:48',42,0),(14,'삼성전자 초절전 인버터 16평형 냉온풍 에어컨 겸용 팔아요.\n','삼성전자 초절전 인버터 냉온풍 겸용 벽걸이 에어컨 16평 판매 합니다.\n구입은 2017년에 했습니다.\n냉방 난방 바람 작동 정말 잘되구요. 사무실에서 사용한 제품입니다.\n참고로 냉방은 16평형 난방은 19평까지 되어서 냉방 난방 면에서 정말 강력하구요. 제품 상태는 에어컨이 한자리에만 있다보니 외관도 새것처럼 정말 깨끗 합니다.\n지역은 경기도 광명이구요.\n제품 냉온풍기 90만 판매해요.\n참고로 현제 철거비용 들여서 철거해둔상태로 보관 중입니다.\n상단에 사진 첨부했스니 참고 하심되요.\n자세한것은 ***-****-**** 문의 주세요.',900000,1,2,'2020-10-09 21:30:49',35,0),(15,'십자수 실(무료배송)','미니멀라이프를 위해 물건 정리중입니다\n구경해보시구 당근 채팅 주세요:)\n반값택배로 보내드려요~\n\n사이즈 :\n사용감 : 있음\n\n📦 직거래,택배, GS•CU 반값택배 가능\n🤙🏻직거래는 월드마트에서 가능\n(경기 광명시 오리로985번안길 38-1)\n시간조율 후 광명사거리역도 가능\n💰(선문의 후)기프티콘교환 가능\n🎁(선문의 후)물물교환 가능\n❌에눌 문의 사절',20000,4,1,'2020-10-09 21:33:45',20,0),(16,'요가매트\n','사진상과 같은 요가매트\n연한 회색 미사용\n미니멀라이프를 위해 물건 정리중입니다\n구경해보시구 당근 채팅 주세요:)\n\n사이즈 : 173x61(두께5mm)\n사용감 : 없음 새것\n\n📦 직거래,택배, GS•CU 반값택배 가능\n🤙🏻직거래는 월드마트에서 가능\n(경기 광명시 오리로985번안길 38-1)\n시간조율 후 광명사거리역도 가능\n💰(선문의 후)기프티콘교환 가능\n🎁(선문의 후)물물교환 가능\n❌에눌 문의 사절',3000,4,2,'2020-10-09 21:34:56',30,0),(17,'에펠체어 디자인 의자\n','미니멀라이프를 위해 물건 정리중입니다\n구경해보시구 당근 채팅 주세요:)\n\n사이즈 : 일반의자\n사용감 : 생활기스,사용감있음\n\n📦 직거래,택배, GS•CU 반값택배 가능\n🤙🏻직거래는 월드마트에서 가능\n(경기 광명시 오리로985번안길 38-1)\n시간조율 후 광명사거리역도 가능\n💰(선문의 후)기프티콘교환 가능\n🎁(선문의 후)물물교환 가능\n❌에눌 문의 사절',5000,2,1,'2020-10-09 21:38:21',35,0),(18,'고사양 슬림 삼성노트북 펜!! 싸게팝니다.\n','2019년초에 190만원에 구입해서 6개월\n정도 사용하다가 안쓰고 보관하던 노트북\n싸게 팝니다. 비싸게 새거 사지마시고 반값에\n고사양 노트북 구입해가세요~~\n\n일단 노트북 설명드리자면 가볍고 슬림해서\n휴대하고 다니기 편합니다. 1키로도 안되서\n무지가볍습니다. 베터리도 풀충하면8시간\n찍히네요. 또 터치스크린 가능해서 무지 편리\n하고 반으로 접어서 테블릿처럼 이용도가능\n합니다. 대학생이나,직장인들 작업용으로 사용하기 좋습니다.\n\n대략적인 사양은\n-ssd 256\n-램8기가\n-ddr4\n-i7 7세대\n등등 무지 빠르고부팅도 바로켜져요.\n마우스 충전기 등등 챙겨드려요.\n바로사용하시면됩니ㄷㅏ!!\n판매가격:89만원\n***-****-**** 로 연락주세요.\n직거래 서울경기지역 입니다.',890000,1,2,'2020-10-09 21:42:53',381,0),(19,'개인렌트올려봅니다 닛산큐브10만원\n','안녕하세요\n자동차 개인렌트합니다.\n차가 2대여서 남는차 개인렌트합니다.\n보증금300 월리스 10만원에 저렴히 렌트해봅니다.\n지역은 경기도 광명입니다.\n업자나 차를험하게 타시는분은 정중히 사절합니다.\n2주전에 닛산서비스센터에서\n차량정비 모두 마쳤습니다.내부는 열시트 들어옵니다.\n내비사제매립형이구요.\n기름도 적당히 넣어놨습니다.\n주행거리 32000입니다. 거의안탔습니다 차 잘나가구요.\n내부엄청깨끗합니다.\n010 5674 8493 연락주세요 늦은시간도 연락됩니다.',100000,3,1,'2020-10-09 21:44:38',52,0),(20,'하객룩 원피스💓 ','부케를 받기로 했는데 밝은색 하객룩 없어서\n7-8만원 주고 \'로즐리\' 라는 쇼핑몰에서 구입했어용!\n소재 찰랑찰랑하고 시원한 소재라 여름에도 무난하게 입었어용^^ 저는 밝은 색을 입을 일이 없어서\n딱 한번 결혼식때 입고 바로 팝니당~\n사이즈 55~66이에용!\n\n2000원 추가하시면 택배도 가능합니다~\n직거래는 아래주소에서만 할게용^^!\n철산동 \'치읓시옷디귿\' 카페앞에서 만나용~\n(경기 광명시 오리로857번길 22 1층 102호)',30000,4,2,'2020-10-09 21:45:53',269,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_product`
--

DROP TABLE IF EXISTS `user_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_product_product_id_products_id` (`product_id`),
  KEY `FK_user_product_user_id_users_id` (`user_id`),
  CONSTRAINT `FK_user_product_product_id_products_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_user_product_user_id_users_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='like';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
INSERT INTO `user_product` VALUES (1,1,1);
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_products`
--

DROP TABLE IF EXISTS `user_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_products` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`productId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_products_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_products_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_products`
--

LOCK TABLES `user_products` WRITE;
/*!40000 ALTER TABLE `user_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phone_number` varchar(16) NOT NULL,
  `name` varchar(64) NOT NULL,
  `maner` decimal(3,1) NOT NULL DEFAULT '36.5',
  `address` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='유저 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'01029380536','yeonuk',36.5,'경기도 광명시'),(2,'01025358357','yeheum',36.5,'서울시 성북구');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-11  5:27:41
