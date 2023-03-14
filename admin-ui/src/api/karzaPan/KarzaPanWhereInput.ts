import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type KarzaPanWhereInput = {
  id?: StringFilter;
  mobileNumber?: IntFilter;
  panNumber?: StringFilter;
};
