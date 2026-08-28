import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActivityDocument = HydratedDocument<Activity>;

export class Activity {
  @Prop({
    required: true,
  })
  teacherId: string;

  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: false,
  })
  description: string;

  @Prop({
    required: false,
    default: false,
  })
  isPublished: boolean;

  // todo mongodb não tem relacionamento, depois fazer um populate
  // @ManyToOne(() => Teacher, (teacher) => teacher.activities, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn({ name: 'teacherId' })
  // teacher: Teacher;

  // @OneToMany(() => Question, (question) => question.activity)
  // questions: Question[];

  // @OneToMany(() => ActivityAttempt, (attempt) => attempt.activity)
  // attempts: ActivityAttempt[];
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
