import useFullName from "../../store/useFullName.jsx";

export default function Padre() {
    const name = useFullName((state) => state.name);
    const secondName = useFullName((state) => state.secondName);
    const lastName = useFullName((state) => state.lastName);
    const updateFirstName = useFullName((state) => state.updateFirstName);
    const updateSecondName = useFullName((state) => state.updateSecondName);
    const updateLastName = useFullName((state) => state.updateLastName);


    return(
        <>
                <div className="container mx-auto">
                    <div className="flex flex-row h-[10vh] justify-center items-center text-[white] font-cursive font-bold">
                        <label className="border-2 border-[black] m-1 ">
                            <input className="bg-red-700 text-center uppercase"
                                type="text"
                                onChange={(e) => updateFirstName(e.currentTarget.value)}
                                value={name}
                            />
                        </label>

                        <label className="border-2 border-[black] m-1">
                            <input className="bg-red-700 text-center uppercase"
                                type="text"
                                onChange={(e) => updateSecondName(e.currentTarget.value)}
                                value={secondName}
                            />
                        </label>

                        <label className="border-2 border-[black] m-1">
                            <input className="bg-red-700 text-center uppercase"
                                type="text"
                                onChange={(e) => updateLastName(e.currentTarget.value)}
                                value={lastName}
                            />
                        </label>
                    </div>

                </div>
        </>
    )
}