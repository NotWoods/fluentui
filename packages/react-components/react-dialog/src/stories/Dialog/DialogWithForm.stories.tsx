import * as React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
} from '@fluentui/react-dialog';
import { Button, Input, Label, makeStyles } from '@fluentui/react-components';
import story from './DialogWithForm.md';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
  },
});

export const WithForm = () => {
  const styles = useStyles();
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    alert('form submitted!');
  };
  return (
    <Dialog modalType="non-modal">
      <DialogTrigger>
        <Button>Open formulary dialog</Button>
      </DialogTrigger>
      <DialogSurface>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent className={styles.content}>
              <Label required htmlFor={'email-input'}>
                Email input
              </Label>
              <Input required type="email" id={'email-input'} />
              <Label required htmlFor={'password-input'}>
                Password input
              </Label>
              <Input required type="password" id={'password-input'} />
            </DialogContent>
            <DialogActions>
              <DialogTrigger>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
            </DialogActions>
          </DialogBody>
        </form>
      </DialogSurface>
    </Dialog>
  );
};

WithForm.parameters = {
  docs: {
    description: {
      story,
    },
  },
};
