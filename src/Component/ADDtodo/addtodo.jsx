import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {addTask}from '../../Component/Services/service';
import { cc,themes } from '../../Context/theme';
import { yellow } from '@mui/material/colors';
 const FullWidthTextField = ({aa,aaa})=> {
  const ss=React.useContext(cc);
  const q=ss;
 if(q.ss==true){
  document.body.style.backgroundColor=themes.dark.foreground;
 }else{
  document.body.style.backgroundColor=themes.light.foreground;
 }
    const [a, b] = React.useState("");
    const handleChange = (event) => {
        b(event.target.value);
      };
      function disp(){
        aa.push(a);
        let alpha=addTask(aa)
alpha.then((res)=>{
    return res.data
}).then(
data=>{
console.log(data);
}
).catch((err)=>{
console.log(err)
})
         b("")

      }
      const dispi =(ic)=>{
       // console.log(ic)
        const l=[]
        for(var i=0;i<aa.length;i++){
            if(ic!=aa[i]){
                l.push(aa[i])
            }
        }
        //console.log(l)
        aa=l
       let alpha1=addTask(l)
alpha1.then((res)=>{
    return res.data
}).then(
data=>{
console.log(data);
}
).catch((err)=>{
console.log(err)
})
      }
  return (
    <div>
    <Box
      sx={{
        display: 'grid', 
        gridTemplateColumns:'repeat(2, 0.5fr)'
      }}
    >
      <TextField fullWidth label="Add Todo" id="fullWidth" onChange={handleChange} value={a} sx={{bgcolor:'yellow'}}/>
      <Button variant="contained" sx={{width:100}} onClick={disp}>ADD</Button>
    </Box>
    <div>
        {
            aa.map((element)=>{
                return(
                    <div>
    <Box sx={{ flexGrow: 1, m:2}} >
      <AppBar position="static" sx={{width:500}}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
           {element}
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={()=>{dispi(element);aaa(aa)}}>
            < DeleteIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
                    </div>
                )
            })
        }
    </div>
    </div>
    
)}
export default  FullWidthTextField;
