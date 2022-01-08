import React,{useState, useContext} from "react"

const PastryContext = React.createContext();
const PastryUpdateContext = React.createContext();


//custom hooks

export function usePastries(){
    return useContext(PastryContext)
}

export function usePastriesUpdate(){
    return useContext(PastryUpdateContext)
}

export function PastryProvider({children}){
    const[pastries, setPastries] = useState([])

    const addPastry = (pastry) =>{
        setPastries(pastries=>[...pastries, pastry ])
    }

    return(
        <PastryContext.Provider value={pastries}>
            <PastryUpdateContext.Provider value={addPastry}>
            {children}
            </PastryUpdateContext.Provider>
        </PastryContext.Provider>
    )
}