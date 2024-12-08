import React from 'react';

const Title = ({open,setOpen}) => {
  
    return (
       <div onClick = {()=>setOpen(!open)} className='text-center bg-red-500 w-20 mx-auto'>
        click
       </div>
    );
};

export default Title;