import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: string;
  @Column()
  link: string;

  @ManyToOne((type) => User, (user) => user.products)
  user: User;
}
