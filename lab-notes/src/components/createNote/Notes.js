//Enlista todas las notas creadas
import React from 'react';  
import CreateNotes from './CreateNote'
import {db} from '../../firebase'

const Notes = () => {
    
    const handleAddNote = async (noteObject) => {
        await db.collection('notes').doc().set(noteObject);
        
        console.log('nueva tarea agregada')
    }

    return (
        <div>
            <CreateNotes handleAddNote={handleAddNote}/>
        </div>
        
    );
}

export default Notes;