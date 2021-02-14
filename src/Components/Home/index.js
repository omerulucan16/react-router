import React from 'react'

 const index = (props) => {
    console.log(props.match.params.param);
    return (
        <div>
            Home Page {props.match.params.param !== undefined ? props.match.params.param : "with no parameter"}
        </div>
    )
}
export default index;