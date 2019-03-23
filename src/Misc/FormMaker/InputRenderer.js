import React from "react"
import ReactDOM from 'react-dom';
import { FormControl, InputLabel, Input, TextField, Radio, FormControlLabel, Checkbox, InputAdornment, IconButton, Select, OutlinedInput, MenuItem, withStyles } from "@material-ui/core";
import { PostModel } from "../../4-Models/PostModel";
import { PropType } from "../../4-Models/Types";
import Editor  from "../../2-Components/editor";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

export class InputRenderer extends React.Component {

    
    state = {
        labelWidth: 10,
        [this.props.Name] : ''
    };
    componentDidMount() {
        if (this.InputLabelRef){
            this.setState({
                labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
            });
        } 
        
    }

    handleChange = event => {
        console.log([event.target.name]);
        console.log(event.target.value);
        
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        var { Name, Type, Required, DisplayName, value, SelectItems, classes } = this.props;
        Required = Required === undefined ? false : true;
        DisplayName = DisplayName == null ? Name : DisplayName;

        var id = `${PostModel.name}_${Name}`;
        switch (Type) {
            case PropType.Text:
                return (

                    <TextField
                        id={id}
                        key={id}
                        label={DisplayName}
                        // className={classes.textField}
                        value={value}
                        fullWidth
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                        name={Name}
                        required={Required}

                    />

                )

            case PropType.Password:
                return (

                    <TextField
                        id="outlined-password-input"
                        label={DisplayName}
                        type="password"
                        name={Name}
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                    //   onClick={this.handleClickShowPassword}
                                    >
                                        {/* {this.state.showPassword ? <VisibilityOff /> : <Visibility />} */}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                )
            case PropType.Select:
                return (

                    <FormControl fullWidth variant="outlined" className={classes.formControl}>
                    <InputLabel
                      ref={ref => {
                        this.InputLabelRef = ref;
                      }}
                      htmlFor={id}
                    >
                      {DisplayName}
                    </InputLabel>
                    <Select
                      value={this.state[Name]}
                      onChange={this.handleChange}
                      input={
                        <OutlinedInput
                          labelWidth={this.state.labelWidth}
                          name={Name}
                          id={id}
                        />
                      }
                    >
                     
                      {SelectItems.map(s=>
                        <MenuItem value={s.value}>{s.key}</MenuItem>
                        )}
                    </Select>
                  </FormControl>
                )

            case PropType.TextArea:
                return (

                    <TextField
                        id={id}
                        key={id}
                        label={DisplayName}
                        // className={classes.textField}
                        // value={value}
                        fullWidth
                        multiline
                        rows={4}
                        // onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                        name={Name}
                        required={Required}

                    />

                )

            case PropType.RichText:
                return (
                    <Editor placeHolder={DisplayName} label={DisplayName} rows={10} name={Name} />

                )
            case PropType.Radio:
                return (

                    <FormControlLabel
                        value={value}
                        control={<Radio id={id} color="primary" />}
                        label={DisplayName}
                        labelPlacement="start"
                        name={Name}

                    />

                )
            case PropType.CheckBox:
                return (

                    <FormControlLabel
                        value={value}
                        control={<Checkbox
                            value="true"
                        />}
                        label={DisplayName}
                        labelPlacement="start"
                        name={Name}

                    />

                )

            default:
                break;
        }
    }
}


