import axios from "axios";
import store from '../store';
// export const getToDoLIST=()=>{
//     return(dispatch)=>{
//         const hotRes= axios.get('http://localhost:8001/allPerson')
//     const data = hotRes.data
//     const list=[];
//     data.map((item)=>{
//       list.push(item.dpname)
//     })
//     console.log(list)
//     const action={
//           type:'GET_LIST',
//           list
//         }
//     dispatch(action)
//     }
// }

export const initListAction =(data)=>({
    type: 'GET_LIST',
    value: data
})
 
export const getTodolist =()=>{
    return (dispatch)=>{
            axios.get('http://localhost:8001/allPerson').then((res)=> {
                const data = res.data;
                const list=[]
                    data.map((item)=>{
                   list.push(item.dpname)
    })
                const action = initListAction(list);
                dispatch(action)
            })
        }
    }