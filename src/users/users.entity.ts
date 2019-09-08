import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class users{
     @PrimaryGeneratedColumn()
     id: number;

     @Column({length: 500})
     username: string;

     @Column({length:500})
     password: string;
}