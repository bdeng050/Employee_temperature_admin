import React, { Component } from 'react'
import { InputItem ,Button,List} from 'antd-mobile';
import store from '../../store';
import { getTodolist } from '../../store/actionCreators';
import { initListAction } from '../../store/actionCreators';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import axios from 'axios'
import { BaseTable } from 'ali-react-table'
import { ADDRCONFIG } from 'dns';
import TemperatureInput from './TemperatureInput';
import NameInput from './NameInput';
import { Text } from 'antd-mobile';


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <Text type="danger">Ant Design (danger)</Text>
  }
  return <p>The water would not boil.</p>;
}
const User = {
    depno: 8,
    dpname: 'LOKIA',
    db_source: 'LOKIA',
    temp: 36.5
  };
export default class index extends React.Component {
  constructor(props){
    super(props)
    console.log(store.getState())
    this.state=store.getState()
    store.subscribe(this.storeChange) 
  }
  componentDidMount(){
    this.getPerson();
    console.log(this.state)
    // const action=getTodolist()
    // store.dispatch(action)
  }
  async getPerson(){
    const hotRes= await axios.get('http://localhost:8001/allPerson')
    const data = hotRes.data
    console.log(hotRes.data)
    const list=[];
    data.map((item)=>{
      list.push(item.dpname)
    })
    console.log(list)
    const action={
          type:'GET_LIST',
          value: data
        }
    store.dispatch(action)
  }
  storeChange=()=>{
    this.setState(store.getState())
  }
  changeInputValue=(val)=>{
    const action={
      type:'changeInput',
      value:val
    }
    store.dispatch(action)
  }
  clickBtn=()=>{
    const action={
      type:'addItem'
    }
    store.dispatch(action)
  }
  deleteBtn=(index,num)=>{
    const action={
      type: 'deleteItem',
      index
    }
    console.log(num)
    store.dispatch(action)
  }
  async delete(){
    await axios.delete('http://localhost:8001/delete?ID=25').then(res=>{
      console.log(res)
    })
     await axios.post('http://localhost:8001/add',User).then(res1=>{
      console.log(res1)
    })
  }
  async add(){
    const temperature=this.state.temperature
    const name= this.state.name
    const department= this.state.department
    User.depno=10
    User.dpname=name
    User.db_source=department
    User.temp=temperature
    const res= await axios.post('http://localhost:8001/add',User).then(res=>{
      console.log(res)
    })
    const action={
      type:'addItem',
      value: User
    }
    store.dispatch(action)

  }
  handleCelsiusChange=(temperature)=>{
    const action={
      type:'changeC',
      value: temperature
    }
    store.dispatch(action)
    console.log(temperature)
  }

  handleFahrenheitChange=(temperature)=>{
    console.log('!!!!!!',temperature)
    
    const action={
      type:'changeF',
      value: temperature
    }
    store.dispatch(action)
  }
  handleDepartmentChange=(val)=>{
    console.log(val)
    const action={
      type:'addDepartment',
      value: val
    }
    store.dispatch(action)
  }
  handleNameChange=(val)=>{
    const action={
      type:'addName',
      value: val
    }
    store.dispatch(action)

  }
   
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      console.log(this.state.department) 
      console.log(this.state.name) 
      console.log(this.state.temperature)    
      const columns = [
        { code: 'depno', name: 'Employee ID', width: 150 },
        { code: 'dpname', name: 'Employee Name', width: 100, align: 'right' },
        { code: 'db_source', name: 'Employee Department', width: 100, align: 'right' },
        { code: 'temp', name: 'Today temperature', width: 100, align: 'right' },
      ]
      return (
        <div>
            <BaseTable dataSource={this.state.data} columns={columns} />
            <div>
              <button onClick={()=>this.add()}></button>
            </div>
            <div>
              <temperature></temperature>
            </div>
            <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            //parent receive the input(target) value and use handleCelsiusChange to function
            onTemperatureChange={(temperature)=>this.handleCelsiusChange(temperature)} />     
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={(temperature)=>this.handleFahrenheitChange(temperature)} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
          <NameInput onNameChange={(val)=>this.handleNameChange(val)}
                     onDepartmentChange={(val)=>this.handleDepartmentChange(val)}></NameInput>
        </div>
        </div>
      );
    }
  }
  
  
