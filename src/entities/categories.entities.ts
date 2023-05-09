import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { RealEstate } from "./realEstate.entities";

 @Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45, unique: true })
  name: string;

  @OneToMany(() => RealEstate, (realEstate) =>  realEstate.category)
  @JoinColumn()
  realEstate: RealEstate[]

}
export  {Category}
