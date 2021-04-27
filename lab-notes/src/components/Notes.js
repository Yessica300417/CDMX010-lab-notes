//Enlista todas las notas creadas
import React from 'react';  
import CreateNotes from './CreateNote'
import {db} from '../firebase'

const Notes = () => {
    
    const addOrEditNotes = async (noteObject) => {
        await db.collection('notes').doc().set(noteObject);
        console.log('nueva tarea agregada')
    }

    return (
        <div>
            <CreateNotes addOrEditNotes={addOrEditNotes}/>
        </div>
        
    );
}

export default Notes;