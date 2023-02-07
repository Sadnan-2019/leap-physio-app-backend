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
       

        <div class="card-header ">
          <h3 class="text-center">Add Service Details</h3>
        </div>
        <div className="row   ">
          <div class="col-lg-8   px-5  mx-auto">
            <form>
              {formValues.map((element, index) => (
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
                      name="service_hour"
                      value={element.service_hour || ""}
                      onChange={(e) => handleChange(index, e)}
                      placeholder="Service Hour"
                    />
                  </div>
                  <div class="form-group p-2  ">
                    <label>Service Location </label>
                    <input
                      class="form-control select2"
                      style={{ width: "100%" }}
                      name="service_location"
                      value={element.service_location || ""}
                      onChange={(e) => handleChange(index, e)}
                      placeholder="Service Location "
                    />
                  </div>
                  <div class="form-group p-2   ">
                    <label>Service Price </label>
                    <input
                      class="form-control select2"
                      style={{ width: "100%" }}
                      name="service_price"
                      value={element.service_price || ""}
                      onChange={(e) => handleChange(index, e)}
                      placeholder="Service Price  "
                    />
                  </div>
                  {index ? (
                <div
                  className="p-2 mx-auto"

                  //     className=" btn btn-secondary  d-lg-block btn-sm"
                  //     onClick={() => removeFormFields(index)}
                >
                  <span
                    type="button"
                    class="badge bg-danger"
                    onClick={() => removeFormFields(index)}
                  >
                    X
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
              Add Another Service
            </button>
          </div>
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
