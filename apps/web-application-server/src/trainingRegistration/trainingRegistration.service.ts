import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainingRegistrationServiceBase } from "./base/trainingRegistration.service.base";

@Injectable()
export class TrainingRegistrationService extends TrainingRegistrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
