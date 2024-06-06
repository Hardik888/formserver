import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { FormService } from './form.service';
import { FormData } from './interface/form.interface';

@Controller()
export class FormController {
  constructor(private formService: FormService) {}

  @Post('profile')
  async Insert(@Body() body: FormData) {
    try {
      const response = await this.formService.Register(body);
      return response;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Error Registering',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
