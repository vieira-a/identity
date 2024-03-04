CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE account_user_status as enum ('active', 'inactive', 'blocked', 'expired');


CREATE TABLE system_modules (
  cd_module SERIAL NOT NULL PRIMARY KEY,
  cd_guid uuid NOT NULL DEFAULT uuid_generate_v4(),
  ds_module VARCHAR(255)
);

CREATE TABLE identity_groups (
    cd_group SERIAL NOT NULL PRIMARY KEY,
    cd_guid uuid NOT NULL DEFAULT uuid_generate_v4(),
    cd_module_id INT,
    FOREIGN KEY (cd_module_id) REFERENCES system_modules (cd_module),
    ds_group VARCHAR(30) not null,
    dh_created_at timestamp with time zone not null default now(),
    dh_updated_at timestamp with time zone not null default now(),
    dh_deleted_at timestamp with time zone not null default now()
);

CREATE TABLE account_users (
    cd_user SERIAL NOT NULL PRIMARY KEY,
    cd_guid uuid NOT NULL DEFAULT uuid_generate_v4(),
    ds_firstname VARCHAR(40) NOT NULL,
    ds_lastname VARCHAR(120) NOT NULL,
    ds_address VARCHAR(255) NULL,
    ds_email VARCHAR(255) NULL,
    ds_phone VARCHAR(13) NULL,
    ds_status VARCHAR(15) NOT NULL DEFAULT 'expired',
    dh_created_at timestamp with time zone not null default now(),
    dh_updated_at timestamp with time zone not null default now(),
    dh_deleted_at timestamp with time zone not null default now(),
    UNIQUE (ds_email, ds_phone)
);

CREATE TABLE identity_users (
    cd_account SERIAL NOT NULL PRIMARY KEY,
    cd_guid uuid NOT NULL DEFAULT uuid_generate_v4(),
    cd_user_id INT NOT NULL,
    ds_username VARCHAR(30) NOT NULL,
    ds_password VARCHAR(255) NOT NULL,
    dh_created_at timestamp with time zone not null default now(),
    dh_updated_at timestamp with time zone not null default now(),
    dh_deleted_at timestamp with time zone not null default now(),
    CONSTRAINT fk_identity_accounts_account_users1
    FOREIGN KEY (cd_user_id) REFERENCES account_users (cd_user)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
    UNIQUE (ds_username)
);

CREATE TABLE identity_users_groups (
    cd_guid uuid NOT NULL DEFAULT uuid_generate_v4(),
    cd_group_id INT NOT NULL PRIMARY KEY,
    cd_user_id INT NOT NULL,
    CONSTRAINT fk_identity_groups_has_identity_users_identity_groups1
    FOREIGN KEY (cd_group_id) REFERENCES identity_groups (cd_group)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
    CONSTRAINT fk_identity_groups_has_identity_users_identity_users1
    FOREIGN KEY (cd_user_id) REFERENCES identity_users (cd_account)
      ON UPDATE CASCADE
      ON DELETE NO ACTION
);

INSERT INTO system_modules (cd_module, cd_guid, ds_module) VALUES (1, uuid_generate_v4(), '*')