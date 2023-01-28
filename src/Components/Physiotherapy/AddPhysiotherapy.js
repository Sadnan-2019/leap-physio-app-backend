import React from "react";

const AddPhysiotherapy = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center ">
        <div className="col-lg-6   d-flex   align-items-center gap-3 mt-5   ">
          <div class="col-lg-6   ">
            <div class="form-group p-2">
            <div class=" ">
                    <div
                      class="d-flex flex-column    border border-dark rounded   "
                      style={{ height: "280px" }}
                    >
                      <div class="    text-center  mx-auto   ">
                        <h5 class="  mt-5">Upload Passport Size Image</h5>
                        

                        <button type="submit" class="btn btn-primary">Choose Picture</button>
                      </div>
                    </div>
                  </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex justify-content-between align-items-center p-2   ">
            <div class="form-group p-2 col-lg-6 "  >
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
            <div class="form-group p-2 col-lg-6" >
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
            <div class="form-group p-2 col-lg-6 "  >
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
            <div class="form-group p-2 col-lg-6" >
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
  );
};

export default AddPhysiotherapy;
