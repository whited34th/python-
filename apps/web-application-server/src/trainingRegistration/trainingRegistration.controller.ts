import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainingRegistrationService } from "./trainingRegistration.service";
import { TrainingRegistrationControllerBase } from "./base/trainingRegistration.controller.base";

@swagger.ApiTags("trainingRegistrations")
@common.Controller("trainingRegistrations")
export class TrainingRegistrationController extends TrainingRegistrationControllerBase {
  constructor(protected readonly service: TrainingRegistrationService) {
    super(service);
  }
}
