import { Entity,Column, PrimaryGeneratedColumn, Timestamp, OneToOne, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./users.entities";
import { RealEstate } from "./realEstate.entities";
import { time } from "console";

@Entity('schedules')
class Schedule{
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type:'date'})
    date:string

    @Column({type:'time'})
    hour: string

    @ManyToOne(()=> RealEstate)
    @JoinColumn()
    realEstate: RealEstate

    @ManyToOne(() => User)
    @JoinColumn()
    user:User
}
export {Schedule}