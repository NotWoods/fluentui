import * as React from 'react';
import { tokens, useId, Label, Radio, RadioGroup, Text } from '@fluentui/react-components';

export const LabelSubtext = () => {
  const labelId = useId('label');

  return (
    <div style={{ display: 'grid', gridRowGap: tokens.spacingVerticalS }}>
      <Label id={labelId}>Favorite Fruit</Label>
      <RadioGroup aria-labelledby={labelId}>
        <Radio
          value="A"
          label={
            <>
              Banana
              <br />
              <Text size={200}>This is an example subtext of the first option</Text>
            </>
          }
        />
        <Radio
          value="B"
          label={
            <>
              Pear
              <br />
              <Text size={200}>This is some more example subtext</Text>
            </>
          }
        />
      </RadioGroup>
    </div>
  );
};
LabelSubtext.parameters = {
  docs: {
    description: {
      story: "Radio's label supports any formatted text. In this example, smaller text is below the main label text.",
    },
  },
};
