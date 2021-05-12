import React, {Fragment, useState} from 'react';
import '../createNote/Notes.css';
import {db} from '../../firebase'
import SaveIcon from '@material-ui/icons/Save';
import {IconButton} from '@material-ui/core'
import {  useParams
} from "react-router-dom";
const CreateNotes = (props) => {

    let { id } = useParams();
    console.log(id);

    const stateNotes = {
        titulo: '',
        nota: '',
        fecha: ''                
    }

    // una funcion handle que use firebase donde por medio del id tr traigas una sola nota e imprime en consola la nota
    // const handleSaveNote = async (id) => {
    //     const doc = await db.collection("notes").doc(id).get();
    //     console.log(doc.data());
    //     setNote({...doc.data()})
    // }

    const handleSaveNote= db.collection("notes").doc(id);
    handleSaveNote.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else{
            console.log("No such document");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    const [note, setNote] = useState({
        titulo: '', 
        nota: '',
        fecha: ''    
    });

    const noteInputChange = (e) => {
        setNote({
            ...note,
            [e.target.name] : e.target.value 
        });
    }

    const saveData = (e) => {
        e.preventDefault ();
        props.handleEditNote(note);
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
                    <div className="iconSaveNotes">
                        <IconButton
                           arial-label="edit">
                            <SaveIcon fontSize="small" />
                        </IconButton>
                    </div>
                </form>
        </Fragment>

    );
}

export default CreateNotes;