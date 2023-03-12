import React from 'react';

const AddAppointment = () => {
    return (
        <div>
              <div className="container">
      <div class="card-header ">
                <h3 class="text-center">Add Doctor Appointment</h3>
              </div>
       
        <div className="row d-flex justify-content-center align-items-center">
        <div class="col-lg-6 d-flex justify-content-between align-items-center p-2   ">
          <div class="form-group p-2 col-lg-6 ">
            <label>Doctor Name</label>
            <input
              class="form-control select2"
              style={{ width: "100%" }}
              placeholder="Doctor Name"
            />
          </div>
          <div class="form-group p-2 col-lg-6 ">
            <label>Doctor Specialty</label>
            <input
              class="form-control select2"
              style={{ width: "100%" }}
              placeholder="Doctor Specialty"
            />
          </div>
          <div class="form-group p-2 col-lg-6 ">
            <label>Doctor Degree</label>
            <input
              class="form-control select2"
              style={{ width: "100%" }}
              placeholder="Doctor Degree"
            />
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