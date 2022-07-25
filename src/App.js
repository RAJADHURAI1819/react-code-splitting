import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import FullWidthTextField from './Component/ADDtodo/addtodo';
import { Button } from '@mui/material';
//import List from './Component/Listtodo/list';
import {cc} from './Context/theme'
function App() {
  const [a1, b1] = React.useState([]);
 const [ss,tt]=React.useState(false);
 function change(){
if(ss){
  tt(false)
}else{
  tt(true)
}
 }
//const f=[];
const fff =(i)=>{
b1(i)
}
  return (
    <div>
    <div>
      <br></br>
      <cc.Provider value={{ss}} >
      <FullWidthTextField aa={a1} aaa={fff}  ></FullWidthTextField>
      </cc.Provider>
    </div>
    <div>
      <br></br>
<Button variant="outlined" onClick={change}>YOUUUUUUUUUUUU</Button>
    </div>
    </div>
  );
}

export default App;