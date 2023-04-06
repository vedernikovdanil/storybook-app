import React from 'react';

export interface FormFieldProps extends React.ComponentProps<'div'> {}

function Field(props: FormFieldProps) {
  return <div {...props} />;
}

export default Field;
