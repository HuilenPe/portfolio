import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  //para traer la info
  @Get()
  getProfileInfo() {
    return this.profileService.getProfileInfo();
  }
  //para crear la info
  @Post()
  createProfile(@Body() profileInfo) {
    return this.profileService.createProfileInfo(profileInfo);
  }
  //para editar la info
  @Patch()
  editProfileInfo(@Body() editedInfo) {
    return this.profileService.editProfileInfo(editedInfo);
  }
}
