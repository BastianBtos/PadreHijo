import useFullName from "../../store/useFullName.jsx";

export default function HijoDos() {
    const secondName = useFullName((state) => state.secondName);
    const lastName = useFullName((state) => state.lastName);

    return(
        <>
            <div className="container mx-auto">
                <div className="flex flex-row h-[10vh] justify-center items-center uppercase font-cursive">
                    <p>{secondName} {lastName}</p>
                </div>
            </div>
        </>
    )
}