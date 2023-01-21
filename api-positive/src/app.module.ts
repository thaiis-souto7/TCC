import { Module } from '@nestjs/common';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

@Module({
  imports: [FuncionariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
