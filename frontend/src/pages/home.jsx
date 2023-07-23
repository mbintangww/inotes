import { useEffect, useState } from "react"
import NotesDetails from "../components/notesDetails"
import Form from "../components/form"

const Home = () => {
    const [notes, setNotes] = useState(null)
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch(' http://localhost:4000/api/notes')
            const json = await response.json()

            if (response.ok) {
                setNotes(json)
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