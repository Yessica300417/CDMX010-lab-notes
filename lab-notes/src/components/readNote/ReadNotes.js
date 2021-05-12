import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {db} from '../../firebase'

import TheNote from './TheNote'
import './TheNotes.css'

const ReadNotes = () => {
    
    const [getNote, setGetNote] = useState();

    const handleGetNotes = () => {
        db.collection('notes').onSnapshot((notes) =>{
            let docs= []
            notes.forEach(doc=>{docs.push({element:doc.data(),id:doc.id})})
            console.log(docs)   
            setGetNote(docs) 
            })
        };

        useEffect(() =>{
            handleGetNotes()
        }, [])

        return (
            <div className="read">
                <div className="titleNotes">
                    <h1>Mis notas</h1>
                </div>
                <div className="printNotes">
                {getNote?
                getNote.map(theNote=>
                    <TheNote 
                    note={theNote.element}
                    idnote={theNote.id}
                    key={theNote.id}
                    />)
                    :<p>Cargando...</p>}

                </div>
                <Link to="/write" className="create">+</Link>
            </div>
        )
};
    


export default ReadNotes;