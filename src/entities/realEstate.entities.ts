import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Address } from "./addresses.entities";
import { Category } from "./categories.entities";
import { Schedule } from "./schendules.entities";
import { scheduler } from "timers/promises";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  sold: number;

  @Column({ type: "decimal",precision:12, scale:2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToOne(() => Address, (address) => address.realEstate)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category, (category) => category.realEstate)
  @JoinColumn()
  category: Category | number;

  @OneToMany(() => Schedule, (schedules) =>  schedules.realEstate)
  @JoinColumn()
  schedules: Schedule[];
  realEstate: any;
}

export  { RealEstate };
