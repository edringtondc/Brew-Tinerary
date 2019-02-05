import React from 'react';


const Checkbox = (props) => {



    return (
        <>  <form>
            <input type="checkbox" id={props.id} onClick={()=> props.checkedBox(props.id )}>save</input>
            </form>


        </>
    )

}

export default Checkbox