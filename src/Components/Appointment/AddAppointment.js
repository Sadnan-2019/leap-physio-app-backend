import React, { useState } from "react";

const AddAppointment = () => {
  const [yesVisible, setVisbleYes] = useState(false);
  const [noVisible, setVisbleNo] = useState(false);

  return (
    <div>
      <div className="container">
        <div class="card-header ">
          <h3 class="text-center">Add Doctor Appointment</h3>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <div class="col-lg-6 d-flex justify-content-between align-items-center p-2   ">
            {/* <div class="form-group p-2 col-lg-6 ">
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
          </div> */}
            <div className="  ">
              <div className="d-flex justify-content-center align-items-center">
                <div className="col-lg-6">
                  <p className=" mt-2"> Choose Your Appointment</p>
                </div>
                <div className="col-lg-4">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      // name="y_city"
                      name="inlineRadioOptions"
                      id=" "
                      value="option1"
                      onClick={() => {
                        setVisbleYes(true);
                        setVisbleNo(false);
                      }}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Consultant
                    </label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      // name="n_city"
                      name="inlineRadioOptions"
                      id=" "
                      value="option2"
                      onClick={() => {
                        setVisbleNo(true);
                        setVisbleYes(false);
                      }}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Physiotherapist
                    </label>
                  </div>
                </div>
              </div>
              {yesVisible ? (
                <div className="row justify-items-center align-items-center">
                  <div class="col-md-8 mb-3">
                    <label>Select Doctor Name</label>
                    <select
                      class="form-control select2"
                      style={{ width: "100%" }}
                    >
                      <option selected="selected">
                        Professor Dr. M. Amjad Hossain
                      </option>
                      <option>Prof. Dr. Abu Zaffar Chowdhury (Biru)</option>
                      {/* <option disabled="disabled">California (disabled)</option> */}
                      <option>Dr. Md. Zia Uddin</option>
                      <option>Prof. Dr. Syed Anwaruzzaman</option>
                      {/* <option>Sylhet Division </option>
                  <option>Barisal Division</option> */}
                    </select>
                  </div>
                  <div class="col-md-8 mb-3">
                    <label>Select Doctor Name</label>
                    <select
                      class="form-control select2"
                      style={{ width: "100%" }}
                    >
                      <option selected="selected">
                        Professor Dr. M. Amjad Hossain
                      </option>
                      <option>Prof. Dr. Abu Zaffar Chowdhury (Biru)</option>
                      {/* <option disabled="disabled">California (disabled)</option> */}
                      <option>Dr. Md. Zia Uddin</option>
                      <option>Prof. Dr. Syed Anwaruzzaman</option>
                      {/* <option>Sylhet Division </option>
                  <option>Barisal Division</option> */}
                    </select>
                  </div>
                  <div class="col-md-8 mb-3">
                    <label>Select Doctor Name</label>
                    <select
                      class="form-control select2"
                      style={{ width: "100%" }}
                    >
                      <option selected="selected">
                        Professor Dr. M. Amjad Hossain
                      </option>
                      <option>Prof. Dr. Abu Zaffar Chowdhury (Biru)</option>
                      {/* <option disabled="disabled">California (disabled)</option> */}
                      <option>Dr. Md. Zia Uddin</option>
                      <option>Prof. Dr. Syed Anwaruzzaman</option>
                      {/* <option>Sylhet Division </option>
                  <option>Barisal Division</option> */}
                    </select>
                  </div>
                  {/* <div class="col-md-3 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="House No"
                      name="f_house "
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Road No"
                      name="m_road "
                    />
                  </div>
                  <div class="col-md-3 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Flat"
                      name="m_flat"
                    />
                  </div> */}
                </div>
              ) : null}
              {noVisible ? (
                <div className="row ">
                  <div className="d-flex gap-2 justify-items-center align-items-center">
                    <div class="col-md-4 mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Union"
                        name="m_union"
                      />
                    </div>
                    <div class="col-md-4 mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Villiage"
                        name="m_villiage"
                      />
                    </div>
                    <div class="col-md-4 mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ward No"
                        name="mu_ward"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
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

export default AddAppointment;
