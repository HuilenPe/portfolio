import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { OperationException } from 'src/exceptions/bad-request.exception';

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
    try {
      return this.profileService.createProfileInfo(profileInfo);
    } catch (error) {
      throw new OperationException('No se pudo crear el perfil');
    }
  }
  //para editar la info
  @Patch()
  editProfileInfo(@Body() editedInfo) {
    try {
      return this.profileService.editProfileInfo(editedInfo);
    } catch (error) {
      throw new OperationException('No se pudo editar el perfil');
    }
  }
}
