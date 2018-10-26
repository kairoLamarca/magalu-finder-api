create database magalu_finder;

use magalu_finder;

create table lojas (	
    filial int not null primary key,
    descricao varchar(200) not null,
    cep int not null,
    cidade varchar(200) not null,
    estado varchar(2) not null,
    endereco varchar(200) not null,
    bairro varchar(100) not null,
    numero varchar(50) not null
);

create table produtos (
	id int not null primary key auto_increment,
    codigo varchar(100) not null unique,
    descricao varchar(200) not null,
    valor decimal(15,2) not null
);

create table produtos_lojas (
	id int not null primary key auto_increment,
	id_produto int not null,
    filial int not null ,    
    unique (id_produto, filial),
    constraint fk_filial foreign key (filial) references lojas(filial),
    constraint fk_id_produto foreign key (id_produto) references produtos(id)
);