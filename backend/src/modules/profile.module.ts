import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileInfo, ProfileInfoSchema } from '../schemas/profile.schema';
import { ProfileController } from '../controllers/profile.controller';
import { ProfileService } from '../services/profile.service';

@Module({
  //agregamos el módulo
  imports: [
    //agregamos el módulo de mongoose
    MongooseModule.forFeature([
      //agregamos el feature
      { name: ProfileInfo.name, schema: ProfileInfoSchema }, //agregamos el schema
    ]),
  ],
  controllers: [ProfileController], //agregamos el controlador
  providers: [ProfileService], //agregamos el servicio
})
export class ProfileModule {}
