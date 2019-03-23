import React, { Component } from 'react';
import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';
import { FormLabel } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({

  unaffected: {
    flip: false,
    height: 400,
    overflowY: 'scroll',
  },
});


class Editor extends Component {


  // constructor(props) {
  //   super(props)
  //   this.state = { text: '' } // You can also pass a Quill Delta here
  //   this.handleChange = this.handleChange.bind(this)
  // }

  // modules = {
  //   history: {
  //     delay: 1000,
  //     maxStack: 500,
  //     userOnly: true
  //   },
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //     ['blockquote', 'code-block'],
    
  //     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  //     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //     [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  //     [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  //     [{ 'direction': 'rtl' }],                         // text direction
    
  //     [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
  //     [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //     [{ 'font': [] }],
  //     [{ 'align': [] }],
    
  //   ],
  // };

  // formats = [
  //   'header',
  //   'bold', 'italic', 'underline', 'strike', 'blockquote',
  //   'list', 'bullet', 'indent',
  //   'link', 'image'
  // ];



  // handleChange(value) {
  //   this.setState({ text: value })
  // }

  // render() {
  //   var {classes} = this.props;
  //   return (
  //     <div >
  //         <ReactQuill 
  //         // theme="snow"
  //         className={classes.unaffected}
  //       value={this.state.text}
  //       modules={this.modules}
  //       // formats={this.formats}
  //       onChange={this.handleChange} />
  //       <input  type="hidden" name={this.props.name} value={this.state.value} />
  //     </div>

  //   )
  // }
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue(),
    stringValue :""
  }


  onChange = (value) => {
    this.setState({ value , stringValue:value.toString('html')});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value
          .toString('html')
      );

    }
  };

  render() {
    var {classes} = this.props;
    return (
      <div className={classes.unaffected} >
        <FormLabel>{this.props.label}</FormLabel>
        <RichTextEditor 
          value={this.state.value}
          onChange={this.onChange}
          placeholder={this.props.placeHolder}
        />
        <input  type="hidden" name={this.props.name} value={this.state.stringValue} />

      </div>
    );
  }
}
Editor.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Editor)