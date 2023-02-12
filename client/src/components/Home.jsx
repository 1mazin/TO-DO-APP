import React from "react"
import Header from "./partials/Header"
import Todo from "./partials/Todo"
function Home() {
  return (
    <div>
    
       <div className="container">
        <div className="row justify-content-md-center mt-4 ">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />

        <div/>
       </div>
    </div>
    <div className="" style={{position:"fixed",right:50,bottom:50,zIndex:1030}}>
      <button  type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      className="btn btn-secondary bord-todo todo-custom">Add
      </button>
    </div>
     
     <div className="modal mt-5" id="exampleModal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
            Modal Title
            </div>
            <button type="button" className="btn-close"
            data-bs-dismiss="modal"
            aria-label="close">
            <span arial-hidden="true"></span>
            </button> 
          </div> 
     <div className="modal-body">
      <div className="form-group">
        <textarea name="" className="form-control"
        row="3"></textarea>

      </div> 
     </div>
     <div  className="modal-footer">
      <button className="btn btn-secondary todo-custom">Save Todo</button>
      <button className="btn btn-secondary todo-custom">Close</button>
     </div>
      
      </div>

    </div>
    </div>

    </div>
    
  )
}

export default Home
