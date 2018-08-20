import * as React from 'react';
import {
  FormControl,
  Input,
  InputLabel,
  WithStyles,
  createStyles,
  Theme,
  withStyles
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing.unit
    }
  });
interface Props extends WithStyles<typeof styles> {}
interface State {
  nome?: string;
  idade?: number;
}
class FormUsuario extends React.Component<Props> {
  state: State = {};
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className={this.props.classes.container}>
        <FormControl className={this.props.classes.formControl}>
          <InputLabel htmlFor="nome">Nome</InputLabel>
          <Input name="nome" onChange={this.handleChange} />
        </FormControl>
        <FormControl className={this.props.classes.formControl}>
          <InputLabel htmlFor="idade">Idade</InputLabel>
          <Input
            name="idade"
            type="number"
            onChange={this.handleChange}
            inputProps={{ min: 0 }}
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(FormUsuario);
