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

  async createProfileInfo(profileInfo: ProfileInfo): Promise<ProfileInfo> {
    const newProfile = new this.profileModel(profileInfo);
    return newProfile.save();
  }

  async editProfileInfo(editedInfo: ProfileInfo): Promise<ProfileInfo> {
    const profile = await this.profileModel.findOne().exec();
    profile.name = editedInfo.name;
    profile.title = editedInfo.title;
    profile.summary = editedInfo.summary;
    profile.contactLinks = editedInfo.contactLinks;
    return profile.save();
  }
}
