import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

export class Student {
  @Prop({
    required: true,
  })
  classroomId: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    length: 6,
  })
  accessCode: string;

  // todo mongo não tem relacionamento

  // @ManyToOne(() => Classroom, (classroom) => classroom.students, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn({ name: 'classroomId' })
  // classroom: Classroom;

  // @OneToMany(() => ActivityAttempt, (attempt) => attempt.student)
  // attempts: ActivityAttempt[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
