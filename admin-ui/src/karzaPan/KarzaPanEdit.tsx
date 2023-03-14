import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KarzaPanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="mobileNumber" source="mobileNumber" />
        <TextInput label="panNumber" source="panNumber" />
      </SimpleForm>
    </Edit>
  );
};
