import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  // note is going to be an array of object with title and text fields
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isClicked, setIsCLicked] = useState(false); //before we click on title input...

  // deconstructin note object...
  const { title, content } = note;


  function handleChange(evt) {
    const { name, value, ...otherproperties } = evt.target; //otherproperties is added for experimental purposes.
  // the rest of the object is not actually needed...
    // console.log(evt.target, otherproperties);

      // only happens when we are not in the edit mode...
      setNote(() => {
        return {
          ...note, //returns the old object
          [name]: value //updates the changed field
        };
      });
  }

  function stopRefresh(evt) {
    // to prevent rendering blank note components...
    title && content && props.onRender(note); //passing the red note so it can be used
    setNote({ title: "", content: "" }); //clears inputs
    evt.preventDefault(); //stops the form from refreshing the page...
  }

  function showHidden(){
    // only works when title is not set yet ie undefined
    !title && setIsCLicked(preValue=> !preValue); //toggles bw true and false..
  }

  return (
    <div>
    {/* there is no more button to trigger onSubmit={} but that is handled by the onClick={} on the div */}
      <form className="create-note" onSubmit={stopRefresh}>
      {/* we can alse use tenary operator to switch input display: from block to none */}
       { isClicked && <input
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
        />}
        <textarea
          name="content"
          value={content}
          onChange={handleChange}
          onClick={showHidden}
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
        />
        {/* instead of using a reg button we use the <Fab/> instead */}
        {/* then add the click event handler on <div/> */}
        <div onClick={stopRefresh}>
        {/* isCLicked is either true or false and thats what we need */}
             <Zoom in={isClicked} appear={true}>
             <Fab>
                <AddIcon/>
             </Fab>
             </Zoom>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;

