import React , {useState, useEffect} from "react";
import { Fab } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

export default function Edit(props){  

    // noteId ? notes[noteId].title : "",
    // noteId ? notes[noteId].content : ""

    const [noteToEdit, setNoteToEdit] = useState({
        title:  "",
        content:  ""
    })


    const {mode, setNotes, notes, noteId, setEdit} = props;

    const {title, content} = noteToEdit;

    function setInitial(){
        setNoteToEdit({
            title : notes[noteId].title,
            content : notes[noteId].content
        })
        console.log(true);
    }

    function handleEdit(evt){
        const {name, value} = evt.target
        setNoteToEdit(prevNote=> (
            {
                ...prevNote,
                [name] : value
            }
        ));
    }

    function updateNote(){
        // effectively replacing the note at the desired index...
        notes[noteId] = {title: title, content : content};
        setNotes(notes);
        setEdit(false); //allows the edit box go off screen...
    }

    return(mode && 
            <form className="create-note edit">
                <input value={title} placeholder="Edit Title" name="title" onChange={handleEdit} />
                <textarea value={content} rows="10" placeholder="Edit Content" name="content" onChange={handleEdit} />
                <div onClick={updateNote}>
                    <Zoom in={true} appear={true}>
                        <Fab>
                            <AddIcon/>
                        </Fab>
                    </Zoom>
                </div>
            </form>
    )
}