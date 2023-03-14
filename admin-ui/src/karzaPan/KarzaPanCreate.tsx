import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const KarzaPanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="panNumber" source="panNumber" />
      </SimpleForm>
    </Create>
  );
};
