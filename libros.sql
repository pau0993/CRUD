-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-10-2022 a las 02:25:38
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id_libro` int(2) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `autor` varchar(50) NOT NULL,
  `editorial` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id_libro`, `titulo`, `autor`, `editorial`) VALUES
(1, 'El principito', 'Antoine Saint', 'Oceano'),
(2, 'Informatica', 'Carlos Reyes', 'Alfaomega'),
(4, 'Fisica', 'Homero Diaz', 'Dianas'),
(6, 'Cien años de soledad', 'Gabriel Garcia Marquez', 'Delfinos'),
(7, 'Un mundo feliz', 'Aldous Huxley', 'Juanacatlan'),
(8, 'Orgullo y prejuicio', 'Jane Austen', 'Dianas'),
(9, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 'Maizal'),
(10, 'La Odisea', 'Homero', 'Santillana'),
(12, 'Algebra Lineal 2', 'Gerardo Nuñez', 'Quinta ola'),
(13, 'Medicina forense', 'Rodolfo Hitss', 'Cantia'),
(16, 'El vuelo del aguila', 'Andres Kont', 'Dayana'),
(17, 'La casa de los secretos', 'Victoria Watson', 'Planeta mexicana'),
(20, 'Trigonometria', 'Gerardo Nuñez', 'Quinto sol'),
(21, 'Titulo Nuevo', 'Autor Nuevo', 'Editorial Nuevo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id_libro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id_libro` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
