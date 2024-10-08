/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  TrainingRegistration as PrismaTrainingRegistration,
} from "@prisma/client";

export class TrainingRegistrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TrainingRegistrationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.trainingRegistration.count(args);
  }

  async trainingRegistrations(
    args: Prisma.TrainingRegistrationFindManyArgs
  ): Promise<PrismaTrainingRegistration[]> {
    return this.prisma.trainingRegistration.findMany(args);
  }
  async trainingRegistration(
    args: Prisma.TrainingRegistrationFindUniqueArgs
  ): Promise<PrismaTrainingRegistration | null> {
    return this.prisma.trainingRegistration.findUnique(args);
  }
  async createTrainingRegistration(
    args: Prisma.TrainingRegistrationCreateArgs
  ): Promise<PrismaTrainingRegistration> {
    return this.prisma.trainingRegistration.create(args);
  }
  async updateTrainingRegistration(
    args: Prisma.TrainingRegistrationUpdateArgs
  ): Promise<PrismaTrainingRegistration> {
    return this.prisma.trainingRegistration.update(args);
  }
  async deleteTrainingRegistration(
    args: Prisma.TrainingRegistrationDeleteArgs
  ): Promise<PrismaTrainingRegistration> {
    return this.prisma.trainingRegistration.delete(args);
  }
}
