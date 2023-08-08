import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from '../services/admin.service';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(
    @Body() body: { username: string; password: string },
  ): Promise<{ message: string }> {
    await this.adminService.createAdmin(body.username, body.password);
    return { message: 'Admin creado exitosamente' };
  }
}
