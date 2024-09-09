import { create } from 'zustand'

const useStore = create((set) => ({
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
        {
            key: '4',
            name: 'Joe Black',
            age: 32,
        },
        {
            key: '5',
            name: 'Joe Black',
            age: 32,
        },
        {
            key: '6',
            name: 'Joe Black',
            age: 32,
        },
        {
            key: '7',
            name: 'Joe Black',
            age: 32,
        },
        {
            key: '8',
            name: 'Joe Black',
            age: 32,
        },
        {
            key: '9',
            name: 'Joe Black',
            age: 32,
        },
        {
            key: '10',
            name: 'Joe Black',
            age: 32,
        },
        {
            key: '11',
            name: 'Joe Black',
            age: 32,
        },
        {
            key: '12',
            name: 'Joe Black',
            age: 32,
        },
    ],
    setContactData: (newData) => set({ contactData: newData })
}))

export default useStore