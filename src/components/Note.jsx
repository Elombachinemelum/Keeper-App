import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Note(props) {
  function addressClick() {
    props.onDelete(props.id); //passes id to deletePost()
  }
  function onEdit(){
    props.onEdit(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="edit">
        <button onClick={onEdit} style={{cursor: "pointer"}}><EditIcon /></button>
        <button onClick={addressClick}><DeleteIcon/></button>
      </div>
    </div>
  );
}

export default Note;
