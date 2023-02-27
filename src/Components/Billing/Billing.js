import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
const Billing = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center ">
          <div class="col-lg-6   justify-content-between align-items-center p-2   ">
            <div class="form-group p-2 col-lg-12 ">
              <label>Select Physiotherapist</label>
              <select class="form-control select2" style={{ width: "100%" }}>
                <option selected="selected">Anika</option>
                <option>Abdul</option>
                {/* <option disabled="disabled">California (disabled)</option> */}
                <option>Joshim</option>
                <option>Khadja</option>
                <option>Purnota </option>
                <option>Anjum</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center align-items-center px-2">
          <div class="col-8  ">
            <div class=" ">
              <div class="card-header">
                <h3 class="text-center">All Billing Details</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div class="card-body px-5 ">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sl Number</th>
                      <th>Service Name</th>
                      <th>Service Hour</th>
                      <th>Service Price</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Back Pain</td>
                      <td>One Hour</td>
                      <td>1000</td>

                      <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                        
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Leg Pain</td>
                      <td>One Hour</td>
                      <td>1000</td>

                      <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                      
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Knee Pain</td>
                      <td>One Hour</td>
                      <td>1000</td>

                      <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                     
                    </tr>
                    <tr>
                      <td>1</td>
                      <td> Neck Pain</td>
                      <td>One Hour</td>
                      <td>1000</td>

                      <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                       
                    </tr>

                    
                  </tbody>
                </table>
                <div className="bg-warning d-flex justify-content-around">
                  <h3 className="">Total</h3>
                  <h3 className="">4000</h3>
                  {/* <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td> */}
                </div>
              </div>
              {/* <!-- /.card-body --> */}
            </div>
            {/* <!-- /.card --> */}

            {/* <!-- /.card --> */}
          </div>
          {/* <!-- /.col --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
    </div>
  );
};

export default Billing;
