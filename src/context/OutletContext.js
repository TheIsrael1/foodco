import React, {useState, useContext} from 'react'

const OutletContext = React.createContext();
const OutletUpdateContext = React.createContext();

//custom hooks

export function useOutlets(){
    return useContext(OutletContext)
}

export function useOutletsUpdate(){
    return useContext(OutletUpdateContext)
}



export function OutletProvider({children}){
    const[outlets, setOutlets] = useState([])

    const addOutlet = (outlet)=>{
        setOutlets(outlets=>[...outlets, outlet])
    }

    return(
        <OutletContext.Provider value={outlets}>
            <OutletUpdateContext.Provider value={addOutlet}>
            {children}
            </OutletUpdateContext.Provider>
        </OutletContext.Provider>
    )
}
