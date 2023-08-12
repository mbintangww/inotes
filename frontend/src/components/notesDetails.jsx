import { useNotesContext } from "../hooks/useNotesContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from 'react'

const NotesDetails = ({ title, desc, note }) => {
    const { dispatch } = useNotesContext()
    const { user } = useAuthContext()
    const [isDeleting, setIsDeleting] = useState(false);

    const handleClick = async () => {
        if (isDeleting) {
            return;
        }

        setIsDeleting(true);
        try {
            const response = await fetch('http://localhost:4000/api/notes/' + note._id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                },
                method: 'DELETE'
            });

            if (response.ok) {
                const json = await response.json();
                dispatch({ type: 'DELETE_NOTE', payload: json });
                console.log(json);
            } else {

                console.error('Gagal menghapus catatan:', response.status);
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat menghapus catatan:', error);
        } finally {
            setIsDeleting(false);
        }
    }
    return (
        <>
            <div className="flex flex-col w-3/4  bg-white rounded-lg shadow-md p-4 m-4 relative ">
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="">{desc}</p>
                {user && <button
                    onClick={handleClick}
                    type="submit"
                    className="bg-[#FF6B6B] hover:bg-[#E74C3C] text-white font-semibold p-1 rounded-md absolute top-3 right-3">Delete</button>}
            </div>
        </>
    )
}

export default NotesDetails