create table tb_product(
  id serial not null, 
  name varchar(100) not null,
  price decimal(10, 2) not null, 
  date timestamp not null, 
  description text not null, 
  img_url text,     
  
  primary key(id)
);

create table tb_product_category(
  product_id integer not null, 
  category_id integer not null,
  
  primary key(product_id, category_id),
  constraint fk_tb_product_tb_product_category foreign key (product_id) references tb_product(id),
  constraint fk_tb_category_tb_product_category foreign key (category_id) references tb_category(id)
)
