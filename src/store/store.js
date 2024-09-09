import { create } from 'zustand'

const useStore = create((set) => ({
    myName: "John Doe",
    myPfp: "",
    contactData: [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
        },
    ],
    setMyName: (newName) => set({myName: newName}),
    setMyPfp: (newPfp) => set({myPfp: newPfp}),
    setContactData: (newData) => set({ contactData: newData })
}))

export default useStore