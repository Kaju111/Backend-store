import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {   id: "123",
            title:"title",
            description:"description"
        },
        {
            id: "1234",
            title:"title",
            description:"description"
        },
        {   id: "12345",
            title:"title",
            description:"description"
        },
        {
            id: "123456",
            title:"title",
            description:"description"
        },
        {
            id: "1237",
            title:"title",
            description:"description"
        },
        {   id: "12348",
            title:"title",
            description:"description"
        },
        {
            id: "123459",
            title:"title",
            description:"description"
        },
    ]
   const [notes, setNotes] = useState(notesInitial)


   //Add a Note
   const addNote = (title, description, tag) =>{
   const note =  {
        id : "123450",
        title : title,
        description : description,
        tag:tag
    }
    setNotes(notes.concat(note))
    }

   //Delete a Note
    const deleteNote = (id) => {
        console.log("deleting is working" +id)
        // const newNotes = notes.filter((note)=>{return note._id!==id})
        // setNotes(newNotes)

    }

   //Edit a Note
    const editNote = () => {

    }
   return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;