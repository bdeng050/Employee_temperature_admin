import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd-mobile';
import { InputItem } from 'antd-mobile';
import { Typography, Space } from 'antd-mobile';
import styles from './index.css'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
const User = {
  depno: 8,
  dpname: 'LOKIA',
  db_source: 'LOKIA',
  temp: 36.5
};

export default class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        // 房屋图片
        name: '',
        // 房屋配套：
        department: '',
        // 房屋描述
        temperature: ''

      }
    }
  
    // handleChange(e) {
    //   this.props.onTemperatureChange(e.target.value);
    // }
    handleChange(val) {
      this.props.onTemperatureChange(val);
    }
    handleChangeName(val) {
      this.props.onNameChange(val);
    }
    handleChangeDepartment(val) {
      this.props.onDepartmentChange(val);
    }
    
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      console.log(temperature)
      return (
        // <fieldset>
        //   <legend>Enter temperature in {scaleNames[scale]}:</legend>
        //   <input value={temperature}
        //          onChange={this.handleChange} />
        // </fieldset>
        <div>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <InputItem value={temperature}
          placeholder="Please enter "
          extra="Degree/°C"
          onChange={(val)=>this.handleChange(val)}></InputItem>
         </div>
      );
    }

  }