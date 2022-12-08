import { useLayoutEffect, useState } from "react"

// 1. useEffect(callback)
// - Goi callback moi khi component re-render
// - Goi callback sau khi component them element vao DOM
// 2. useEffect(callback,[])
// - Chi goi callback 1 lan sau khi conponent mounted
// 3. useEffect(callback,[deps])
// - Callback se duoc goi lai moi khi deps thay doi

//callback luon duoc goi sau khi component mounted
// cleanup function luon dc goi trc khi component unmount

function Content() {
   
    return (
        <div>
        
        </div>
    )
}

export default Content