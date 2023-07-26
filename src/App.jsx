import React from "react";
import { useWindowSize } from "./Resize";
import Mobile from "./Mobile/components/Mobile";
import Desktop from "./Desktop/components/Desktop";

const App=() => {
    const windowSize = useWindowSize() ;
    

    return <div className="App">
           <Mobile> </Mobile>
    </div>
}

export default App ;