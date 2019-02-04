import React from 'react';


const Checkbox = (props) => {



    return (
        <>  <form>
            <input type="checkbox" name={props.name} value={props.value}>save</input>
            </form>


        </>
    )

}

export default Checkbox