import { useState } from "react";

function Input(props){

    const [text,setText]=useState();


     const {addMeetup}=props;



    return(
        <div style={{
            padding:10
        }}>
            <input style={{
                fontSize:32,


            }}
            
            onChange={(e)=>{
               

                setText(e.target.value);
            }}
            
            />
            <button style={{
                fontSize:32,
               
                margin:10
            }}
            
            onClick={()=>{
                addMeetup(text);
            }}
            
            >+</button>

        </div>

    );
}

export default Input;