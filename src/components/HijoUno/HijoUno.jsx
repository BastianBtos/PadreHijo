import useFullName from "../../store/useFullName.jsx";

export default function HijoUno() {
    const name = useFullName((state) => state.name);
    const lastName = useFullName((state) => state.lastName);

    return(
        <>
            <div className="container mx-auto">
                <div className="flex flex-row h-[10vh] justify-center items-center uppercase font-cursive">
                    <p>{name} { lastName}</p>
                </div>
            </div>


        </>
    )
}