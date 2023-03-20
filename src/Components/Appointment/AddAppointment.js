import React from 'react';

const AddAppointment = () => {
    return (
        <div>
          <div className="container">
      <div class="card-header ">
                <h3 class="text-center">Add Doctor Details</h3>
              </div>
       
        <div className="row d-flex justify-content-center align-items-center">
        <div class="col-lg-6 d-flex justify-content-between align-items-center p-2   ">
        
          <div class="form-group p-2 col-lg-6 ">
            <label>Patients Name</label>
            <input
              class="form-control select2"
              style={{ width: "100%" }}
              placeholder="Patients Name"
            />
          </div>
          <div class="form-group p-2 col-lg-6 ">
            <label>Phone Number</label>
            <input
              class="form-control select2"
              style={{ width: "100%" }}
              placeholder="Phone Number"
            />
          </div>
          <div class="form-group p-2 col-lg-6 ">
                <label>Choose Doctor</label>
                <select class="form-control select2" style={{ width: "100%" }}>
                  <option selected="selected">Dhaka</option>
                  <option>Mymenshing</option>
                  {/* <option disabled="disabled">California (disabled)</option> */}
                  <option>Rangpur</option>
                  <option>Chittagong</option>
                  <option>Sylhet Division </option>
                  <option>Barisal Division</option>
                </select>
              </div>
           
        </div>
      </div>
      <div className="container ">
           <div className="row justify-content-end px-5
">
    <button className="btn btn-primary mb-3">Save</button>
    </div>
           </div>
      </div>  
        </div>
    );
};

export default AddAppointment;