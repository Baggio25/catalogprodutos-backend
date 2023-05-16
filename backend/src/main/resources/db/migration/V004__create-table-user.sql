create table tb_user(
  id serial not null, 
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  email varchar(100) not null,
  password varchar(100) not null,
  
  primary key(id)
);

create table tb_user_role(
  user_id integer not null, 
  role_id integer not null,
  
  primary key(user_id, role_id),
  constraint fk_tb_user_tb_user_role foreign key (user_id) references tb_user(id),
  constraint fk_tb_role_tb_user_role foreign key (role_id) references tb_role(id)
)
