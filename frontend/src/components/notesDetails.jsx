import { useNotesContext } from "../hooks/useNotesContext";

const NotesDetails = ({ title, desc, note }) => {
    const { dispatch } = useNotesContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/notes/' + note._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_NOTE', payload: json })
            console.log(json)
        }
    }
    return (
        <>
            <div className="flex flex-col w-3/4  bg-white rounded-lg shadow-md p-4 m-4 relative ">
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="">{desc}</p>
                <button
                    onClick={handleClick}
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold p-1 rounded-md absolute top-3 right-3">Delete</button>
            </div>
        </>
    )
}

export default NotesDetails