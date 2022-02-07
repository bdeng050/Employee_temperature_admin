import React from "react"

const defaultState={
    inputValue:'write Something',
    data: [],
    temperature: '', 
    scale: 'c',
    name:'',
    department:''
}
export default (state=defaultState,action)=>{
    console.log(state,action)
    if(action.type==='changeInput'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type==='addItem'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data.push(action.value)
        newState.inputValue=''
        return newState
    }
    if(action.type==='deleteItem'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data.splice(action.index,1)
        return newState
    }
    if(action.type==='GET_LIST'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.data=action.value
        return newState
    }
    if(action.type==='changeC'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.temperature=action.value
        newState.scale='c'
        return newState
    }
    if(action.type==='changeF'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.temperature=action.value
        newState.scale='f'
        return newState
    }
    if(action.type==='addName'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.name=action.value
        return newState
    }
    if(action.type==='addDepartment'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.department=action.value
        return newState
    }
    return state
}



//状态提升
// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
//   };
  
//   function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
  
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
  
//   function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }
  
//   function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//       return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
//   }
  
//   class TemperatureInput extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     handleChange(e) {
//       this.props.onTemperatureChange(e.target.value);  //send the input value to the parent
//     }
  
//     render() {
//       const temperature = this.props.temperature;
//       const scale = this.props.scale;
//       return (
//         <fieldset>
//           <legend>Enter temperature in {scaleNames.scale}:</legend>
//           <input value={temperature}
//                  onChange={this.handleChange} />
//         </fieldset>
//       );
//     }
//   }
  
//   class Calculator extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//       this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//       this.state = {temperature: '', scale: 'c'};
//     }
  
//     handleCelsiusChange(temperature) {
//       this.setState({scale: 'c', temperature});
//     }
  
//     handleFahrenheitChange(temperature) {
//       this.setState({scale: 'f', temperature});
//     }
  
//     render() {
//       const scale = this.state.scale;
//       const temperature = this.state.temperature;
//       const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//       const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
//       return (
//         <div>
//           <TemperatureInput
//             scale="c"
//             temperature={celsius}
//             //parent receive the input(target) value and use handleCelsiusChange to function
//             onTemperatureChange={this.handleCelsiusChange} />     
//           <TemperatureInput
//             scale="f"
//             temperature={fahrenheit}
//             onTemperatureChange={this.handleFahrenheitChange} />
//           <BoilingVerdict
//             celsius={parseFloat(celsius)} />
//         </div>
//       );
//     }
//   }
  


// //组合继承
// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
//   }
  
//   function Dialog(props) {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           {props.title}
//         </h1>
//         <p className="Dialog-message">
//           {props.message}
//         </p>
//         {props.children}
//       </FancyBorder>
//     );
//   }
  
//   class SignUpDialog extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSignUp = this.handleSignUp.bind(this);
//       this.state = {login: ''};
//     }
  
//     render() {
//       return (
//         <Dialog title="Mars Exploration Program"
//                 message="How should we refer to you?">
//           <input value={this.state.login}
//                  onChange={this.handleChange} />
//           <button onClick={this.handleSignUp}>
//             Sign Me Up!     
//           </button>
//         </Dialog>
//       );
//     }
  
//     handleChange(e) {
//       this.setState({login: e.target.value});
//     }
  
//     handleSignUp() {
//       alert(`Welcome aboard, ${this.state.login}!`);
//     }
//   }
  
//   ReactDOM.render(
//     <SignUpDialog />,
//     document.getElementById('root')
//   );


//JSON 数据格式
// [
//     {
//         name: 'loki',
//         password: '123'

//     },
//     {
//         name: 'Thor',
//         password: '234'

//     }
// ]


//render-props模式

// class Mouse{
//     state={
//         x:'',
//         y:''
//     }
//     handleMouseChange(){
//         this.setState(
//             {
//                 x:e.clientx,
//                 y:e.clenty
//             }
//         )
//     }
//     componentDidMount(){
//         window.addEventListener('mousemove',this.handleMouseChange())
//     }
//     render(){
//         this.props.children(this.state)
//         // this.props.render(this.state)
//     }
// }
// class App{
//     render(){
//         // <Mouse render={(mouse)=><p>position:{mouse.x},{mouse.y}</p>}></Mouse>
//         <Mouse>{mouse=>{return (<p>position:{mouse.x},{mouse.y}</p>)}}</Mouse>
//     }
// }


//高阶组件
// function withMouse(WarppedComponent){
//     class Mouse extends React.component{
//            state={
//         x:'',
//         y:''
//           }
//     handleMouseChange(){
//         this.setState(
//             {
//                 x:e.clientx,
//                 y:e.clenty
//             }
//         )
//     }
//     componentDidMount(){
//         window.addEventListener('mousemove',this.handleMouseChange())
//     }
//     render(){
//         return (
//             <WarppedComponent {...this.state}></WarppedComponent>
//         )
//     }

//     } 
//     return Mouse
// }

// const position= props=>(
//     <p>
//         position:x:{props.x},y:{props.y}
//     </p>
// )

// const MousePosition=withMouse(position)

// class App{
//     render(){
//         <MousePosition></MousePosition>
//     }
// }