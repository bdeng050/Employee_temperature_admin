import React, { Component } from 'react'
import { InputItem } from 'antd-mobile';
export default class NameInput extends React.Component{
    constructor(props) {
        super(props);
      }
      handleChangeName(val) {
        this.props.onNameChange(val);
      }
      handleChangeDepartment(val) {
        this.props.onDepartmentChange(val);
      }
      render() {
        return (
          <div>
            <legend>Enter Name:</legend>
            <InputItem 
            placeholder="Please enter your name "

            onChange={(val)=>this.handleChangeName(val)}></InputItem>
             <legend>Enter department:</legend>
            <InputItem 
            placeholder="Please enter your department "
           
            onChange={(val)=>this.handleChangeDepartment(val)}></InputItem>
           </div>
        );
      }
}