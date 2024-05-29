import React, {createContext} from 'react'
import  {LaligaKits, PrimierLeagueKits, 
SeriaAKits,  otherLeaguesKits, InternationalKits} from '../Assets/Jersey-sweden/FootballKits'  


const allKits = [LaligaKits, PrimierLeagueKits, SeriaAKits, otherLeaguesKits,
    InternationalKits]

// creating a context 
const JerseyContext = createContext(null);

// Creating a function for context provider
const JerseyContextProvider = (props) => {
    // create a context value that holds all kits
    const contextValue = {allKits};

    return (
        <JerseyContext.Provider value={contextValue} >
            {props.children}
        </JerseyContext.Provider>
    )
}
// Export it to index.js
export {JerseyContextProvider, JerseyContext}