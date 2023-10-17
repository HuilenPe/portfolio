import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './modules/profile.module';
import { AuthModule } from './modules/auth.module';
import { AdminModule } from './modules/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://huilenpe:Mariab30@portfolio.k0jvh09.mongodb.net/Portfolio',
    ),
    AdminModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
