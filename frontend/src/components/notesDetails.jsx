const NotesDetails = ({ title, desc }) => {

    return (
        <>
            <div className="flex flex-col w-96  bg-white rounded-lg shadow-md p-4 mt-4">
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="">{desc}</p>
            </div>
        </>
    )
}

export default NotesDetails