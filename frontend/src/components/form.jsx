import { useState } from 'react'
import { useNotesContext } from "../hooks/useNotesContext"
import { useAuthContext } from '../hooks/useAuthContext'

const Form = () => {
    const { dispatch } = useNotesContext()
    const { user } = useAuthContext()
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const notes = { title, description }
        console.log(notes)


        const response = await fetch('http://localhost:4000/api/notes', {
            method: "POST",
            body: JSON.stringify(notes),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
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
                        className="w-full border border-gray-300 rounded-md p-2 active:border-[#2A9D81] px-2 py-1 focus:outline-none focus:ring-[#40E5AE] focus:border-[#40E5AE]"
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
                        className="w-full border border-gray-300 rounded-md p-2 active:border-[#2A9D81] px-2 py-1 focus:outline-none focus:ring-[#40E5AE] focus:border-[#40E5AE]"
                        rows="4"
                        placeholder="Enter description"
                        value={description}
                        required></textarea>

                </div>
                {user && <button type="submit" className="bg-[#40E5AE] hover:bg-[#2A9D81] text-white font-semibold py-2 px-4 rounded-md">Add</button>}
                {error && <div className="error">{error}</div>}
            </form>
        </>
    )
}

export default Form