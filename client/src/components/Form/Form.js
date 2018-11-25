import React from "react"; 

export const Form = props => (

<div className="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
  </div>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">{props.children}</input>
  <button type="button" className="btn btn-outline-primary">Primary</button>
</div>



)