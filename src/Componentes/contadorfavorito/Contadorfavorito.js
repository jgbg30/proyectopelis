import React, { useContext, useState } from 'react'
import { Context } from '../../Store/AppContext';


function Contadorfavorito() {
const {counter } = useContext (Context)

  return (
    <div>
      <p>{`${counter}`}</p>
      
    </div>
  );

}

export default Contadorfavorito