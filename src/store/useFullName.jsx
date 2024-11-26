import {create} from "zustand"

const useFullName = create ((set) => ({
    name: 'Ignacio',
    secondName:'Duilio',
    lastName: 'DeLeon',

    updateFirstName: (name) => set(() => ({ name: name })),
    updateSecondName: (secondName) => set(() => ({ secondName: secondName })),
    updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export default useFullName;