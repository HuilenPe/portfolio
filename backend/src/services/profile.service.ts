import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfileInfo } from '../schemas/profile.schema';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(ProfileInfo.name) private profileModel: Model<ProfileInfo>,
  ) {}

  async getProfileInfo(): Promise<ProfileInfo> {
    const profile = await this.profileModel.findOne().exec();
    if (!profile) {
      throw new NotFoundException('Profile information not found.');
    }
    return profile;
  }

  async updateProfileInfo(
    updatedProfileInfo: ProfileInfo,
  ): Promise<ProfileInfo> {
    const existingProfile = await this.profileModel.findOne().exec();
    if (!existingProfile) {
      throw new NotFoundException('Profile information not found.');
    }

    // Actualizar las propiedades del documento existente con los valores de updatedProfileInfo
    existingProfile.name = updatedProfileInfo.name;
    existingProfile.title = updatedProfileInfo.title;
    existingProfile.summary = updatedProfileInfo.summary;
    existingProfile.contactLinks = updatedProfileInfo.contactLinks;

    // Guardar el documento actualizado en la base de datos
    const updatedProfile = await existingProfile.save();

    return updatedProfile;
  }
}
