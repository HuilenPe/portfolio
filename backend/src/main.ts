import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // funcion asincrona porque puede tardar en crear la app
  const app = await NestFactory.create(AppModule); // crea la app
  await app.listen(3000); // el numero de puerto
}
bootstrap();
