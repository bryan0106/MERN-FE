import { createContext, useState, type SetStateAction } from "react";

interface contexprop{
    modecolor:string,
    setmode:React.Dispatch<SetStateAction<string>>,
}

export const themcontext = createContext<contexprop>({
modecolor: 'light' , setmode:()=>{},
});

export const Themeprovider=({children}:{children:React.ReactNode})=>{
const [modecolor,setmode] = useState('light');
    return(
<themcontext.Provider value={{modecolor, setmode}}>
    {children}
    </themcontext.Provider>
    );
}
