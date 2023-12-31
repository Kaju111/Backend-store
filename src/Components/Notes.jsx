import React, { useContext } from 'react'
import  noteContext  from "../context/notes/noteContext"
import NoteItem from './NoteItem'
import AddNote from './AddNote'

function Notes() {
    const context = useContext(noteContext)
    const {notes} = context
  return (
    <div>
      <AddNote/>
    <div>
       <div className="row my-3">
      <h2>Your Note</h2>
      {notes.map((note)=>{
        return <NoteItem key={note.id} note={note}/>
      })}
    </div>
    </div>
    </div>
  )
}

export default Notes
