import { useState } from "react";
import { FriendContext } from "./friendContext";
import toast, { Toaster } from 'react-hot-toast';

const FriendProvider = ({children}) => {
    const [storeInterections, setStoreInterections] = useState([]);

    const handleInteractions = (type, friend, date) =>{
        // console.log("clicked")
        const frienInTouch = {
            type: type,
            name: friend.name,
            date: date
        }

        setStoreInterections([...storeInterections, frienInTouch])
        //alert("clicked")
        toast.success(`${type}ing ${friend.name}`)  
        // console.log(storeInterections);
    }

    const data = {handleInteractions, storeInterections, setStoreInterections};

    return <FriendContext.Provider value={data}>
        <Toaster />
        {children}
    </FriendContext.Provider>;
};

export default FriendProvider;