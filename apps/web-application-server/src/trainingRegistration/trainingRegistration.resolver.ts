import * as graphql from "@nestjs/graphql";
import { TrainingRegistrationResolverBase } from "./base/trainingRegistration.resolver.base";
import { TrainingRegistration } from "./base/TrainingRegistration";
import { TrainingRegistrationService } from "./trainingRegistration.service";

@graphql.Resolver(() => TrainingRegistration)
export class TrainingRegistrationResolver extends TrainingRegistrationResolverBase {
  constructor(protected readonly service: TrainingRegistrationService) {
    super(service);
  }
}
