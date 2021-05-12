// Añadir o crear notas
import React, {Fragment, useState} from 'react';
import './Notes.css';

const CreateNotes = (props) => {

    const stateNotes = {
        titulo: '',
        nota: '',
        fecha: ''                
    }

    const [note, setNote] = useState(stateNotes);

    const noteInputChange = (e) => {
        setNote({
            ...note,
            [e.target.name] : e.target.value 
        });
    }

    const saveData = (e) => {
        e.preventDefault ();
        props.handleAddNote(note);
        setNote({...stateNotes})
    }

    return(
        <Fragment>
                <form className="formCrud" onSubmit={saveData}>
                    <div className="inputTitle">
                        <input
                         className="form-control"
                         type="text" 
                         placeholder="Inserta un titulo"
                         name="titulo"
                         onChange={noteInputChange}
                         value={note.titulo}>
                        </input>
                    </div>
                    <div className="inputNote">
                        <textarea 
                         type="text" 
                         placeholder="Escribe tu notita :)" 
                         name="nota"
                         onChange={noteInputChange}
                         value={note.nota}>
                        </textarea>
                    </div>
                    <div className="inputDate">
                        <input 
                         type="date" 
                         name="fecha"
                         onChange={noteInputChange}
                         value={note.fecha}>
                        </input>
                    </div>
                    <div className="btnCreate">
                        <button className="createNotes" type="submit">Listo</button> 
                    </div>
                </form>
        </Fragment>

    );
}

export default CreateNotes;