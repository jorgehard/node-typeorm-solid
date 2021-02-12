import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column("varchar", { length: 196 })
  email: string;

  @Column()
  password: string;

  @OneToMany((type) => Product, (products) => products.user)
  products: Product[];

  constructor(props: Omit<User, "id" | "products">) {
    Object.assign(this, props);
  }
}
