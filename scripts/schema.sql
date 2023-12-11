CREATE DATABASE IF NOT EXISTS customer;

USE customer;

CREATE TABLE customer.`customer` (
  `customer_id` varchar(100) NOT NULL,
  `first_name` varchar(256) NOT NULL,
  `last_name` varchar(256) NOT NULL,
  `email_address` varchar(256) DEFAULT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `customer_un` (`email_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE customer.`staff` (
  `staff_id` varchar(100) NOT NULL,
  `first_name` varchar(256) NOT NULL,
  `last_name` varchar(256) NOT NULL,
  `email_address` varchar(256) DEFAULT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`staff_id`),
  UNIQUE KEY `customer_un` (`email_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE DATABASE IF NOT EXISTS payment;

USE payment;

CREATE TABLE payment.`carts`(
  `cart_id` varchar(100) NOT NULL,
  `no` int(11) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  `date` varchar(10) DEFAULT NULL,
  `menu_id` varchar(100) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `properties` varchar(255) DEFAULT NULL,
  `additional_request` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE payment.`discounts` (
  `discount_code` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `value` decimal(10,0) NOT NULL,
  PRIMARY KEY (`discount_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE payment.`orders` (
  `order_id` varchar(100) NOT NULL,
  `cart_id` varchar(100) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  `sub_total` decimal(10,2) DEFAULT NULL,
  `discount_code` varchar(100) NOT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `date_time` datetime DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE DATABASE IF NOT EXISTS product;

USE product;

CREATE TABLE product.`menus` (
  `menu_id` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `display_pic` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;