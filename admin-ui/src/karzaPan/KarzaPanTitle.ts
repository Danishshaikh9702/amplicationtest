import { KarzaPan as TKarzaPan } from "../api/karzaPan/KarzaPan";

export const KARZAPAN_TITLE_FIELD = "id";

export const KarzaPanTitle = (record: TKarzaPan): string => {
  return record.id || String(record.id);
};
