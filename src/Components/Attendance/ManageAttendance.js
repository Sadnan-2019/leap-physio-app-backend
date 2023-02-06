import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
const ManageAttendance = () => {
    return (
        <div>
            <div class="container">
        <div class="row justify-content-center align-items-center px-2">
          <div class="col-8  ">
            <div class=" ">
            <div class="card-header">
                <h3 class="text-center">All Service Details</h3>
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
                      <th>Service Location</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Back Pain</td>
                      <td>One Hour</td>
                      <td>1000</td>
                      <td>Dhaka</td>
                     
                       <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                      <td>
                        <FaRegEdit
                          style={{ fontSize: "20px", color: "green" }}
                        ></FaRegEdit>
                      </td>

                      {/* <div class="image">
              <img
                src="dist/img/user2-160x160.jpg"
                class="img-circle elevation-2"
                alt="User Image"
              />
            </div> */}
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Back Pain</td>
                      <td>One Hour</td>
                      <td>1000</td>
                      <td>Dhaka</td>
                     
                       <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                      <td>
                        <FaRegEdit
                          style={{ fontSize: "20px", color: "green" }}
                        ></FaRegEdit>
                      </td>

                      {/* <div class="image">
              <img
                src="dist/img/user2-160x160.jpg"
                class="img-circle elevation-2"
                alt="User Image"
              />
            </div> */}
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Back Pain.</td>
                      <td>One Hour</td>
                      <td>1000</td>
                      <td>Dhaka</td>
                     
                       <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                      <td>
                        <FaRegEdit
                          style={{ fontSize: "20px", color: "green" }}
                        ></FaRegEdit>
                      </td>

                     
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Back Pain</td>
                      <td>One Hour</td>
                      <td>1000</td>
                      <td>Dhaka</td>
                     
                       <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                      <td>
                        <FaRegEdit
                          style={{ fontSize: "20px", color: "green" }}
                        ></FaRegEdit>
                      </td>

                      
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Back Pain</td>
                      <td>One Hour</td>
                      <td>1000</td>
                      <td>Dhaka</td>
                     
                       <td>
                        <AiFillDelete
                          style={{ fontSize: "20px", color: "red" }}
                        ></AiFillDelete>
                      </td>
                      <td>
                        <FaRegEdit
                          style={{ fontSize: "20px", color: "green" }}
                        ></FaRegEdit>
                      </td>

                     
                    </tr>
                    
                    
                  </tbody>
                </table>
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

export default ManageAttendance;