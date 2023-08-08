import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdminService } from '../services/admin.service';
import { InvalidCredentialsException } from '../exceptions/inalid-credentials.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService,
  ) {}

  async validateAdmin(username: string, pass: string): Promise<any> {
    const admin = await this.adminService.findByUsername(username);

    if (admin && (await bcrypt.compare(pass, admin.passwordHash))) {
      //compara la contraseña ingresada con la contraseña hasheada
      const token = await this.generateToken(admin.id); //genera el token
      return token; //devuelve el token
    }

    throw new InvalidCredentialsException();
  }

  async generateToken(adminId: number): Promise<string> {
    const payload = { sub: adminId };
    return this.jwtService.sign(payload);
  }
}
