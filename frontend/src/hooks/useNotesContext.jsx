import { NotesContext } from "../context/NotesContext";
import { useContext } from "react";

export const useNotesContext = () => {
    const context = useContext(NotesContext)

    if (!context) {
        throw Error("error happened")
    }

    return context
}