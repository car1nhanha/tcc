import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClassroomDocument = HydratedDocument<Classroom>;

export class Classroom {
  @Prop({
    required: true,
  })
  teacherId: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    index: true,
  })
  code: string;

  // todo ver isso aqui depois
  // @ManyToOne(() => Teacher, (teacher) => teacher.classrooms, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn({ name: 'teacherId' })
  // teacher: Teacher;

  // @OneToMany(() => Student, (student) => student.classroom)
  // students: Student[];
}

export const ClassroomSchema = SchemaFactory.createForClass(Classroom);
