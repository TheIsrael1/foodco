import React, {useState, useContext} from 'react'

const OutletContext = React.createContext();
const OutletUpdateContext = React.createContext();
const InputTwoContext = React.createContext();
const InputTwoUpdateContext = React.createContext();

//custom hooks

export function useOutlets(){
    return useContext(OutletContext)
}

export function useOutletsUpdate(){
    return useContext(OutletUpdateContext)
}

export function useInput2(){
    return useContext(InputTwoContext)
}

export function useInput2Update(){
    return useContext(InputTwoUpdateContext)
}


export function OutletProvider({children}){
    const[outlets, setOutlets] = useState([])
    const[input2, setInput2] = useState([])

    const addOutlet = (outlet)=>{
        setOutlets(outlets=>[...outlets, outlet])
    }

    const updateInputTwo = (input)=>{
        setInput2(input2=>[input])
    }

    return(
        <OutletContext.Provider value={outlets}>
            <OutletUpdateContext.Provider value={addOutlet}>
                <InputTwoContext.Provider value={input2}>
                    <InputTwoUpdateContext.Provider value={updateInputTwo}>
                         {children}
                    </InputTwoUpdateContext.Provider>
                </InputTwoContext.Provider>
            </OutletUpdateContext.Provider>
        </OutletContext.Provider>
    )
}
