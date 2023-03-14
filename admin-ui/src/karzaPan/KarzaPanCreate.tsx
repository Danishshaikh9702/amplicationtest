import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const KarzaPanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="mobileNumber" source="mobileNumber" />
        <TextInput label="panNumber" source="panNumber" />
      </SimpleForm>
    </Create>
  );
};
