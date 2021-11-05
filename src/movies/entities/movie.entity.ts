import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: number;

  @Column({ type: 'varchar', default: '' })
  title: string;

  @Column({ type: 'varchar', default: '' })
  director: string;

  @Column({ type: 'varchar', default: '' })
  writers: string;

  @Column()
  year: number;

  @Column({ type: 'varchar', default: '' })
  length: string;

  @Column({ type: 'varchar', default: '' })
  rated: string;
}
