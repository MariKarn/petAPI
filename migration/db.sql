/*  
    AUTO CONFIG
    powered by beekeper studio
    import in your SGBD engine as you like

    DATABASE --> vet
*/

/* IMPORTANT: Uncomment this if the DBMS needs the db name
 * 
 * CREATE DATABASE vet;
 * use vet;
*/

CREATE TABLE IF NOT EXISTS cliente (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  cedula VARCHAR(15) NOT NULL,
  direccion TEXT DEFAULT 'no especificada',
  contacto VARCHAR(20) DEFAULT 'no especificado',
  
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS paciente (
  id INT NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  especie VARCHAR(255) NOT NULL,
  raza VARCHAR(255) DEFAULT 'desconocido',
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

CREATE TABLE IF NOT EXISTS cita (
  id INT NOT NULL AUTO_INCREMENT,
  id_paciente INT NOT NULL,
  doctor VARCHAR(255) NOT NULL,
  fecha DATE NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);

CREATE TABLE IF NOT EXISTS historia (
  id INT NOT NULL AUTO_INCREMENT,
  id_paciente INT NOT NULL,
  emision DATE NOT NULL,
  receta TEXT NOT NULL,
  diagnostico TEXT NOT NULL,
  procedimiento TEXT NOT NULL,
  ingreso DATE NOT NULL,
  egreso DATE NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_paciente) REFERENCES paciente(id)
);