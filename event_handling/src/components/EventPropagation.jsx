import React from 'react';
import "./evh.css";
export const EventPropagation = () => {
    const handleGrand=()=>{
        console.log("Grand Clicked"); 
    }
    const handleParent=()=>{
        console.log("ParentClicked");
    }
    const handleChild=(e)=>{
        // e.stopPropagation();
        console.log("Child Clicked");
    }
    return (

    //   By default Bubbling Propagation
       <section className='main-div'>
        <div className='g-div' onClick={handleGrand}>
        <div className='p-div' onClick={handleParent}>
            <button className='c-div' onClick={handleChild}>
                Child Div
            </button>
        </div>

        </div>

     {/* capturing Propagation */}
    {/*  <section className='main-div'>
    <div className='g-div' onClickCapture={handleGrand}>
     <div className='p-div' onClickCapture={handleParent}>
        <button className='c-div' onClickCapture={handleChild}>
             Child Div
         </button>
     </div>

    </div> */}



       </section>
    );
}
