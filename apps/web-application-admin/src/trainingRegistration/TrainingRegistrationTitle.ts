import { TrainingRegistration as TTrainingRegistration } from "../api/trainingRegistration/TrainingRegistration";

export const TRAININGREGISTRATION_TITLE_FIELD = "id";

export const TrainingRegistrationTitle = (
  record: TTrainingRegistration
): string => {
  return record.id?.toString() || String(record.id);
};
