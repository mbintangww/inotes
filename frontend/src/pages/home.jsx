import { useEffect, useState } from "react"
import { useNotesContext } from "../hooks/useNotesContext"
import { useAuthContext } from "../hooks/useAuthContext"

//components
import NotesDetails from "../components/notesDetails"
import Form from "../components/form"

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { notes, dispatch } = useNotesContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/notes', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const json = await response.json();
                setIsLoading(false);
                dispatch({ type: 'SET_NOTES', payload: json });
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        if (user) {
            fetchNotes();
        }
    }, [dispatch, user]);

    return (
        <div className="flex bg-[#F3F4F6] h-screen px-[40px]">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="flex flex-col w-3/4 items-center">
                        {notes && notes.map((note) => (
                            <NotesDetails
                                key={note._id}
                                note={note}
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
                </>
            )}
        </div>
    );
};

export default Home;
