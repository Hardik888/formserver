import { Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FormSchema } from './formentity/form.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Form',
        schema: FormSchema,
      },
    ]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
