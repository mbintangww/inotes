import { useState } from 'react'
import { useNotesContext } from "../hooks/useNotesContext"

const Form = () => {
    const { dispatch } = useNotesContext()
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const notes = { title, description }
        console.log(notes)


        const response = await fetch('todoapp-pi-bay.vercel.app/api/notes', {
            method: "POST",
            body: JSON.stringify(notes),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setDesc('')
            dispatch({ type: 'CREATE_NOTES', payload: json })
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title:</label>
                    <input
                        type="text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter title"
                        required value={title}
                    />

                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description:</label>
                    <textarea
                        id="description"
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
                        className="w-full border border-gray-300 rounded-md p-2"
                        rows="4"
                        placeholder="Enter description"
                        value={description}
                        required></textarea>

                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">Submit</button>
                {error && <div className="error">{error}</div>}
            </form>
        </>
    )
}

export default Form