import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const KarzaPanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="panNumber" source="panNumber" />
      </SimpleForm>
    </Edit>
  );
};
