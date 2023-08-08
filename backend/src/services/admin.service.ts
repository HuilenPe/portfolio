import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Admin } from '../schemas/admin.schema';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async findByUsername(username: string): Promise<Admin | null> {
    return this.adminModel.findOne({ username }).exec();
  }

  async createAdmin(username: string, password: string): Promise<void> {
    // Verificar si ya existe un administrador en la base de datos
    const existingAdmin = await this.adminModel.findOne().exec();

    if (existingAdmin) {
      throw new ConflictException('Ya existe un administrador en el sistema');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newAdmin = new this.adminModel({
      username,
      passwordHash,
    });

    await newAdmin.save();
  }
}
