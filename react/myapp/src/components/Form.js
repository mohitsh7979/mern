import React, { useState } from "react";

export default function Section(props) {
  const [a, b] = useState("");

  const Uppercase = () => {
    b(a.toUpperCase());
  };

  const Lowercase = () => {
    b(a.toLowerCase());
    console.log(a)
  };


  const clearlength = () => {
 
    const blank = ''
    b(blank)
    
  };

  const changetextcolor = ()=>{

     const m = a;
    
     b()
  }




  const onchangehandle= (event) => {
    b(event.target.value);
    console.log("hello");
    
  };

  return (
    <div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={a}
          onChange={onchangehandle}
        ></textarea>
        <div className="container mt-3">

        
        <button className="btn btn-success m-2" type="submit" onClick={Uppercase}>
            Convert in Uppercase
          </button>

          <button className="btn btn-success m-2" type="submit" onClick={Lowercase}>
            Convert in Lowercase
          </button>


          <button className="btn btn-success m-2" type="submit" onClick={clearlength}>
            Clear
          </button>

          <button className="btn btn-success m-2" type="submit" onClick={changetextcolor}>
            Change text color
          </button>



          </div>
      </div>
      <div className="container">

          <h3>Total No of Words :{a.split(" ").length-1}</h3>
          <h3>Total No of characters :{a.length}</h3>
          <h3>We can red in {0.008 * a.split(" ").length}Minute</h3>
          <h3>Preview :</h3>
          <p>{a}</p>
      </div>
    </div>

  );
}

Section.defaultProps = {
  title: "please write your title",
};
