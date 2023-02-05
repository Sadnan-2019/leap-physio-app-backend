import React from "react";

const AddDoctor = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
        <div class="col-lg-6 mx-auto  ">
        <div class="form-group p-2">
          <div class=" ">
            <div
              class="  flex-column    border border-dark rounded   "
              style={{ height: "280px" }}
            >
              <div class="    text-center  mx-auto   ">
                <h5 class="  mt-5">Upload Image</h5>
                {/* class="btn btn-block btn-outline-primary btn-sm" */}
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_212915.png"
                  class="img-circle elevation-2 "
                  alt="User Image"
                  style={{ width: "100px", height: "100px" }}
                />

                <input
                  type="file"
                  class="mt-5 btn btn-xs btn-outline-primary btn-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default AddDoctor;
