import { useState } from "react";
import  data from './data'
const App = () => {
  const [person , setPerson] = useState(data)

  return (
    <>
       <main>

      <div className="container">
      <h3>{person.length} Person Bithday Today</h3>
      {
        person.map(per=>{
          const {name,age,image}=per
          return(
            <>
            <div className='person'>
              <img src={image} alt="" />
             <div>
              <h4>{name}</h4>
              <p>{age}</p>
             </div>
            </div>
            </>
          )
        })
      }
      <button className="btn btn-hipster" onClick={()=>setPerson([])} >
        Clear
      </button>

      </div>
       </main>


 
    </>
  );
};
export default App;
