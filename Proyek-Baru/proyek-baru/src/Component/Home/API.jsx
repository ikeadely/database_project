import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

function API (){
  const alert =()=>{

    Swal.fire({
      title: 'Custom width, padding, color, background.',
      width: 600,
      padding: '3em',
      color: '#716add',
      timer:200,
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        center top
        no-repeat
      `
    })
  }
  return(
    <Button onClick={()=> alert()} variant="primary" type="submit">
    Submit
  </Button>
  )
}


export default API;