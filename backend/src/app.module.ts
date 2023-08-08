import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './modules/profile.module';

@Module({
  imports: [
    ProfileModule,
    // Configurar la conexión a MongoDB
    MongooseModule.forRoot(
      'mongodb+srv://huilenpe:Mariab30@portfolio.k0jvh09.mongodb.net/Portfolio',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
