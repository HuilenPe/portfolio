import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  //para obtener información básica
  @Get()
  getProfileInfo() {
    const profileInfo = {
      name: '',
      titulo: '',
      summary: '',
      contactLinks: [
        { platform: 'LinkedIn', link: '' },
        { platform: 'GitHub', link: '' },
      ],
    };

    return profileInfo;
  }
  //para actualizar la información personal
  @Post()
  updateProfileInfo(@Body() updatedInfo) {
    // 1. Buscar el documento correspondiente en la base de datos
    // 2. Actualizar los campos que se recibieron en el objeto "updatedInfo"
    // 3. Guardar el documento actualizado en la base de datos
    // Por simplicidad, en este ejemplo, simplemente devolvemos el objeto actualizado
    return updatedInfo;
  }
}
