import React from 'react'

const PropsData = (props) => {

    return (
        <>       
            {
                props.inputData.map((data,index) => {
                    return (
                        <ol key={index} style={{margin:"20px"}}>
                            <li>{data.name}</li>
                            <li>{data.email}</li>
                            <li>{data.number}</li>
                            <li>{data.password}</li>
                        </ol>
                    )
                })
            }
        </>




    )
}

export default PropsData