import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { v4 } from "uuid";
import { Customer } from "./customer.entity";
import { User } from "./user.entity";

@Entity()
export class Tenant {
       @PrimaryKey()
       id: string = v4();

       @Property()
       name!: string;

       @Property()
       createdAt: Date = new Date();

       @ManyToOne(() => Customer, { nullable: true, inversedBy: "tenant" })
       customer?: Customer;

       @Property({ nullable: true })
       customerId?: string;

       @OneToMany(() => User, (user) => user.tenant)
       users = new Collection<User>(this);


}