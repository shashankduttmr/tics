import React, {useState, Fragment} from "react"

function Count(){
    const [count, SetCount] = useState(0)
    return(
        <Fragment>
            <h1>Counter App using Hooks and State</h1>
            <h1>{count}</h1>
            <button onClick={()=>SetCount(0)}>Reset</button>
            <button onClick={()=>SetCount(count+1)}>Increament</button>
            <button onClick={()=>SetCount(count >= 1 ? count-1 : 0)}>Decreament</button>
        </Fragment>
    )
}
