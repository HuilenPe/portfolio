import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // Configurar la conexión a MongoDB
    MongooseModule.forRoot('mongodb://localhost:27017/my-portfolio'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
