import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
  @Prop({
    required: true,
  })
  activityId: string;

  @Prop({
    required: true,
  })
  statement: string;

  @Prop({
    required: true,
  })
  explanation: string;

  @Prop({
    required: true,
  })
  order: number;

  // todo ver isso depois
  // @ManyToOne(() => Activity, (activity) => activity.questions, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn({ name: 'activityId' })
  // activity: Activity;

  // @OneToMany(() => QuestionOption, (option) => option.question, {
  //   cascade: true,
  // })
  // options: QuestionOption[];

  // @ManyToMany(() => Skill)
  // @JoinTable({
  //   name: 'question_skills',
  //   joinColumn: { name: 'questionId', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'skillId', referencedColumnName: 'id' },
  // })
  // skills: Skill[];

  // @OneToMany(() => QuestionAnswer, (answer) => answer.question)
  // answers: QuestionAnswer[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
