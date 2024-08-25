import { Module } from "@nestjs/common";
import { TrainingRegistrationModuleBase } from "./base/trainingRegistration.module.base";
import { TrainingRegistrationService } from "./trainingRegistration.service";
import { TrainingRegistrationController } from "./trainingRegistration.controller";
import { TrainingRegistrationResolver } from "./trainingRegistration.resolver";

@Module({
  imports: [TrainingRegistrationModuleBase],
  controllers: [TrainingRegistrationController],
  providers: [TrainingRegistrationService, TrainingRegistrationResolver],
  exports: [TrainingRegistrationService],
})
export class TrainingRegistrationModule {}
