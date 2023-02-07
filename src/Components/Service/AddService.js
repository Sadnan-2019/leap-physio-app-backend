import React, { useState } from "react";

const AddService = () => {
  const [formValues, setFormValues] = useState([
    { fname: "", occupation: "", age: "", mobile: "" },
  ]);
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  return (
    <div>
      <div className="container-fluid ">
        <form className="">
          {formValues.map((element, index) => (
            <div
              className="d-flex gap-1 justify-content-center px-1"
              key={index}
            >
              <div class="form-group p-2 col-lg-4 ">
              <label>Service Name</label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Name"
                name="service_name"
                value={element.service_name || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
              <div class="col-md-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Occupation"
                  name="occupation"
                  value={element.occupation || ""}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div class="col-md-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Age"
                  name="age"
                  value={element.age || ""}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div class="col-md-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Mobile No"
                  name="mobile"
                  value={element.mobile || ""}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              {index ? (
                <div
                  className=""

                  //     className=" btn btn-secondary  d-lg-block btn-sm"
                  //     onClick={() => removeFormFields(index)}
                >
                  <span
                    type="button"
                    class="badge bg-secondary"
                    onClick={() => removeFormFields(index)}
                  >
                    Remove
                  </span>
                </div>
              ) : null}
            </div>
          ))}

          <div className="  d-flex justify-content-end mb-3  ">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              onClick={() => addFormFields()}
            >
              Add Another One
            </button>
          </div>
        </form>

        <div class="card-header ">
          <h3 class="text-center">Add Service Details</h3>
        </div>
        <div className="row   justify-content-center align-items-center">
          <div class="col-lg-6   ">
                <form>
                  {formValues.map((element,index)=>(
                    <div className="d-flex" key={index}>
                <div class="form-group p-2   ">
              <label>Service Name</label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Name"
                name="service_name"
                value={element.service_name || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div class="form-group p-2   ">
              <label>Service Hour</label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Hour"
              />
            </div>
            <div class="form-group p-2  ">
              <label>Service Location </label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Location "
              />
            </div>
            <div class="form-group p-2   ">
              <label>Service Price </label>
              <input
                class="form-control select2"
                style={{ width: "100%" }}
                placeholder="Service Price  "
              />
            </div>
                </div>

                  ))}
                  
                

                </form>

            
           
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

export default AddService;
