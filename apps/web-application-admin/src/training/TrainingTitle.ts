import { Training as TTraining } from "../api/training/Training";

export const TRAINING_TITLE_FIELD = "id";

export const TrainingTitle = (record: TTraining): string => {
  return record.id?.toString() || String(record.id);
};
