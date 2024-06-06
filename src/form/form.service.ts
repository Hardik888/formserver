import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FormData } from './interface/form.interface';
import { Model } from 'mongoose';

Injectable();
export class FormService {
  @InjectModel('Form')
  private readonly FormModel: Model<FormData>;

  async Register(data: FormData) {
    const { firstName, lastName, email, address, profilePicture } = data;

    const register = new this.FormModel({
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      profilePicture: profilePicture,
    });
    await register.save();
  }
}
