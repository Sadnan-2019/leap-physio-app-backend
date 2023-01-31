 import React from 'react';
 
 const AddService = () => {
    return (
        <div>
            <div className="container-fluid ">
            <div class="card-header ">
                <h3 class="text-center">Add Service Details</h3>
              </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div class="col-lg-6 d-flex justify-content-between align-items-center p-2   ">
            <div class="form-group p-2 col-lg-4 ">
              <label>Service Name</label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Name"
              />
            </div>
            <div class="form-group p-2 col-lg-4 ">
              <label>Service Hour</label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Hour"
              />
            </div>
            <div class="form-group p-2 col-lg-4 ">
              <label>Service Location   </label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Location "
              />
            </div>
            <div class="form-group p-2 col-lg-4 ">
              <label>Service Price   </label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Price  "
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
        
        

         
      </div>
        </div>
    );
 };
 
 export default AddService;