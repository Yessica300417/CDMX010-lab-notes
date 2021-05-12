import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {IconButton} from '@material-ui/core'
import {Link} from 'react-router-dom'

import './InputNotes.css'

function TheNote({note,idnote}) {
  const { titulo, fecha, nota } = note;
  const url=`edith${idnote}`

  return (
    <div className="inputNotes"> 
        <h3 className="textTitle">
        <strong>{titulo}</strong>
          <IconButton
            arial-label="edit"
            >
             <Link to={url} ><EditIcon /></Link>
          </IconButton>
          <IconButton
            arial-label="delete">
              <DeleteIcon />
          </IconButton>
        </h3>
        <p className="dateNotes">{fecha}</p>
        <p className="printNote">{nota}</p>
    </div>
  );
}

export default TheNote;
