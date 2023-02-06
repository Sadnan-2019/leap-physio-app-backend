import React from "react";

const Attendance = () => {
  return (
    <div>
      <div className="container  ">
        <div className="row ">
       <div className="col-lg-8 mx-auto d-flex">
       <div class="form-group p-2 col-lg-3 ">
        <label>  Service Name</label>
        <select class="form-control select2" style={{ width: "100%" }}>
          <option selected="selected">Lower Back Pain</option>
          <option>Back Pain</option>
          {/* <option disabled="disabled">California (disabled)</option> */}
          <option>Neck Pain</option>
          <option>Knee Pain</option>
          <option>Elbow Pain </option>
          <option>Arm  Pain</option>
        </select>
      </div>
       <div class="form-group p-2 col-lg-3 ">
        <label>  Patients Name</label>
        <select class="form-control select2" style={{ width: "100%" }}>
          <option selected="selected">Mausd</option>
          <option>Jabed</option>
          {/* <option disabled="disabled">California (disabled)</option> */}
          <option>Korim</option>
          <option>Rohim</option>
          
        </select>
      </div>
        
       <div class="form-group p-2 col-lg-3 ">
        <label>  Service Location</label>
        <select class="form-control select2" style={{ width: "100%" }}>
          {/* <option >Lower Back Pain</option>  */}
          <option selected="selected">Gulshan</option>
          {/* <option disabled="disabled">California (disabled)</option> */}
          <option>Banani</option>
          <option>Uttora</option>
          <option>Motijhil</option>
          <option>Badda</option>
        </select>
      </div>
       <div class="form-group p-2 col-lg-3 ">
        <label>  Service Hour</label>
        <select class="form-control select2" style={{ width: "100%" }}>
          <option selected="selected">One Hour</option>
          <option>Two  Hour</option>
          {/* <option disabled="disabled">California (disabled)</option> */}
          <option>Three Hour</option>
           
        </select>
      </div>
       
       </div>
        </div>
       <div className="row">
        <div className="col-lg-8 mx-auto">
        <div class="form-group p-2 col-lg-12  ">
        <label>  Physiotherapist Name</label>
        <select class="form-control select2" style={{ width: "100%" }}>
          <option selected="selected">Jafor Rahman</option>
          <option>Purnota</option>
          {/* <option disabled="disabled">California (disabled)</option> */}
          <option>Alamas</option>
           
        </select>
      </div>
        </div>
        
       </div>
       <div className="  ">
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

export default Attendance;
