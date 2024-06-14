import React from "react";

interface EventTdProps {
    value: string | number;
}

export const EventTd : React.FC<EventTdProps> = ({value}) =>{
    return(
        <>
            <td>{value}</td>
        </>
    )
}