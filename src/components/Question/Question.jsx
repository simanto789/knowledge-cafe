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
        <h5 class="card-title fw-bolder">How doest useState work?</h5>
        <p class="card-text"></p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-start mb-3 mt-4">
      <div class="card-body">
        <h5 class="card-title fw-bolder">Purpose of useEffect other than fetching data?</h5>
        <p class="card-text"></p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-start mb-3 mt-4">
      <div class="card-body">
        <h5 class="card-title fw-bolder">How doest react work?</h5>
        <p class="card-text"></p>
        
      </div>
    </div>
  </div>
</div>
            


        </div>
    );
};

export default Question;