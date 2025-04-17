import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { BASE_URL } from "../utils";

const NoteList = () => {
    const [notes, setNote] = useState([]);

    useEffect(()=> {
        getNotes();
    },[]);

    const getNotes = async()=> {
        const response = await axios.get(`${BASE_URL}/notes`)
        setNote(response.data);
    }

    const deleteNote = async (id)=> {
        try {
            await axios.delete(`${BASE_URL}/notes/${id}`)
            getNotes();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="column has-text-centered mt-5">
            <div className="column mx-5">
                <h1>NOTE</h1>
                <br />
                <Link to={`add`} className='button is-medium is-rounded is-light'>Add Note</Link>
                <hr />
            </div>
            <div className="column mx-5">
                <tabel className = "table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Note</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note, index)=> (
                            <tr key={note.id}>
                                <td>{index + 1}</td>
                                <td>{note.title}</td>
                                <td>{note.note}</td>
                                <td>
                                    <Link to={`edit/${note.id}`} className='button is-small is-info mr-3'>Edit</Link>
                                    <Link onClick={()=> deleteNote(note.id)} className='button is-small is-danger'>Delete</Link>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </tabel>
            </div>
        </div>
    )
}

export default NoteList