import React from "react";

const AddPatients = () => {
  return (
    <div>
      <div className="container-fluid ">
      <div class="card-header ">
                <h3 class="text-center">Add Patients Details</h3>
              </div>
        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-6   d-flex   align-items-center gap-3 mt-5   ">
            <div class="col-lg-6   ">
              <div class="form-group p-2">
                <div class=" ">
                <div
                      class="  flex-column    border border-dark rounded   "
                      style={{ height: "280px" }}
                    >
                      <div class="    text-center  mx-auto   ">
                        <h5 class="  mt-5">Upload Passport Size Image</h5>
                        {/* class="btn btn-block btn-outline-primary btn-sm" */}
                        <img
                          src="http://cdn.onlinewebfonts.com/svg/img_212915.png"
                          class="img-circle elevation-2 "
                          alt="User Image"
                          style={{width:"100px",height:"100px"}}
                        />

                        <input type="file" class="mt-5 btn btn-xs btn-outline-primary btn-block"/> 
                      </div>  
                    </div> 
                </div>
              </div>
            </div>

            <div class="col-lg-6 d-flex justify-content-between align-items-center p-2   ">
              <div class="form-group p-2 col-lg-6 ">
                <label>Select Division</label>
                <select class="form-control select2" style={{ width: "100%" }}>
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  {/* <option disabled="disabled">California (disabled)</option> */}
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select>
              </div>
              <div class="form-group p-2 col-lg-6">
                <label>Select District</label>
                <select class="form-control select2" style={{ width: "100%" }}>
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  {/* <option disabled="disabled">California (disabled)</option> */}
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select>
              </div>
              <div class="form-group p-2 col-lg-6">
                <label>Select Thana </label>
                <select class="form-control select2" style={{ width: "100%" }}>
                  <option selected="selected">Alabama</option>
                  <option>Alaska</option>
                  {/* <option disabled="disabled">California (disabled)</option> */}
                  <option>Delaware</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select>
              </div>
            </div>
          </div>
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
              <label>Patients Attendent Name</label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Patients Attendent Name"
              />
            </div>
            <div class="form-group p-2 col-lg-6 ">
              <label>Patients Mobile Number </label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Patients  Mobile "
              />
            </div>
            {/* <div class="form-group p-2 col-lg-6 "  >
              <label>Institution Name</label>
              <input class="form-control select2" style={{ width: "100%" }} placeholder="Institution Name"/>
                
            </div> */}
            {/* <div class="form-group p-2 col-lg-6 "  >
              <label>Qualification</label>
              <input class="form-control select2" style={{ width: "100%" }} placeholder="Qualification"/>
                
            </div> */}
            {/* <div class="form-group p-2 col-lg-6 "  >
              <label>Mobile</label>
              <input class="form-control select2" style={{ width: "100%" }} placeholder="Mobile"/>
                
            </div> */}
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div class="col-lg-6 d-flex justify-content-between align-items-center p-2   ">
            <div class="form-group p-2 col-lg-6 ">
              <label>Age</label>
              <input
                class="form-control select2"
                placeholder="Patients  Age "
              />
            </div>

            <div class="form-group p-2 col-lg-6  ">
              <label> Patients Attendent Moile No</label>
              <input
                class="form-control select2"
                placeholder="Patients Attendent Moile No"
              />
            </div>
            <div class="form-group p-2 col-lg-6  ">
              <label>Add Patients Diagnosis</label>
              <button className=" form-control btn btn-primary">Add</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div class="col-lg-6 d-flex justify-content-between align-items-center    ">
              <div class="form-group p-2 col-lg-6 ">
                <label> NID</label>
                <input
                  class="form-control select2"
                  style={{ width: "100%" }}
                  placeholder="NID"
                />
              </div>
              <div class="form-group p-2 col-lg-6 ">
                <label> Address</label>
                <input
                  class="form-control select2"
                  style={{ width: "100%" }}
                  placeholder="Address"
                />
              </div>
              <div class="form-group p-2 col-lg-6 ">
                <label> Gender</label>
                <input
                  class="form-control select2"
                  style={{ width: "100%" }}
                  placeholder="Gender"
                />
              </div>

              {/* <div class="form-group p-2 col-lg-6 "  >
              <label>Mobile</label>
              <input class="form-control select2" style={{ width: "100%" }} placeholder="Mobile"/>
                
            </div> */}
            </div>
          </div>
        </div>

        <div className="container ">
          <div
            className="row justify-content-end px-5
"
          >
            <button className="btn btn-primary mb-3">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatients;
