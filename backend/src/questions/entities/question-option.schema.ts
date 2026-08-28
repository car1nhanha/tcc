import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type QuestionOptionDocument = HydratedDocument<QuestionOption>;

@Schema()
export class QuestionOption {
  @Prop({
    required: true,
  })
  @ApiProperty({ format: 'uuid' })
  questionId: string;

  @Prop({
    required: true,
  })
  text: string;

  @Prop({
    required: true,
  })
  isCorrect: boolean;

  // todo ver isso aqui depois
  // @ManyToOne(() => Question, (question) => question.options, {
  //   onDelete: 'CASCADE',
  // })
  // @JoinColumn({ name: 'questionId' })
  // question: Question;
}

export const QuestionOptionSchema =
  SchemaFactory.createForClass(QuestionOption);
