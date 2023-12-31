import React from 'react';

const Question = () => {
    return (
        <div>
             
             <div class="row">
  <div class="col-sm-6">
    <div class="card text-start mb-3 mt-4">
      <div class="card-body">
        <h5 class="card-title fw-bolder">WHat is the difference between props and state?</h5>
        <p class="card-text"> Props are available in the component that receives them and any child components it may have. State is only available within the component that defines it. <br /> Props are used to pass data down from a parent component to a child component, while state is used to manage data within a component and trigger re-renders when that data changes. <br /> Props are typically passed to a component when it is created, while state is typically initialized in a component's constructor or in a useState hook</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-start mb-3 mt-4">
      <div class="card-body">
        <h5 class="card-title fw-bolder">How does useState work?</h5>
        <p class="card-text">In React, the useState hook is used to add state to functional components. It works by taking an initial state value as an argument and returning an array with two elements.These are the current state value, and a function to update that value.The current state value is the value of the state variable at any given time during the component's lifecycle.The function to update the state value is automatically generated by React and is returned as the second element of the array. This function is used to update the current state value.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-start mb-3 mt-4">
      <div class="card-body">
        <h5 class="card-title fw-bolder">Purpose of useEffect other than fetching data?</h5>
        <p class="card-text">The purpose of useEffect other than fetching data is given below in short : <br />we use useEffect to update the title of the document based on the current state or props of the component. <br />We can use useEffect to add and remove event listeners. <br /> can use useEffect to trigger animations based on changes to state or props.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-start mb-3 mt-4">
      <div class="card-body">
        <h5 class="card-title fw-bolder">How doest react work?</h5>
        <p class="card-text">React is a JavaScript library used for building user interfaces. It works by creating a virtual representation of the ui in memory and then updating the real ui only where necessary. React uses a component based architecture, where components are reusable pieces of code that can be composed to build more complex UIs. React maintains a lightweight copy of the real DOM called the Virtual DOM, which allows it to efficiently update the ui by only changing what needs to be changed.</p>   
      </div>
    </div>
  </div>
</div>
            


        </div>
    );
};

export default Question;