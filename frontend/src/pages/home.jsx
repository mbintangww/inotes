import { useEffect } from "react"
import { useNotesContext } from "../hooks/useNotesContext"

//components
import NotesDetails from "../components/notesDetails"
import Form from "../components/form"

const Home = () => {
    const { notes, dispatch } = useNotesContext()
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch(' http://localhost:4000/api/notes')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_NOTES', payload: json })
            }
        }

        fetchNotes()

    }, [])

    return (
        <div className="flex bg-slate-50 px-[40px]">
            <div className="flex flex-col w-3/4 items-center">
                {notes && notes.map((note) => (
                    <NotesDetails
                        key={note._id}
                        title={note.title}
                        desc={note.description} />
                ))}
            </div>
            <div className="w-1/2">
                <div className=" flex items-center justify-center mt-4">
                    <div className="bg-white rounded-lg p-8 shadow-md">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home