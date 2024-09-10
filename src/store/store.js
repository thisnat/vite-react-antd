import { create } from 'zustand'

const useStore = create((set) => ({
    myName: "John Doe",
    myPfp: "",
    contactData: [
        {
            key: '1',
            name: 'Gilles Deleuze',
            age: 32,
        },
        {
            key: '2',
            name: 'George Bataille',
            age: 42,
        },
    ],
    collapsed: true,
    setMyName: (newName) => set({myName: newName}),
    setMyPfp: (newPfp) => set({myPfp: newPfp}),
    setContactData: (newData) => set({ contactData: newData }),
    setCollapsed: () => set(state => ({collapsed: !state.collapsed}))
}))

export default useStore