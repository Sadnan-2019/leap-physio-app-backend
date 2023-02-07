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
                <h3 class="text-center">All Attendance Details</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div class="card-body px-5 ">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sl Number</th>
                      <th>Service Name</th>
                      <th>Patients Name</th>
                      <th>Service Location</th>
                      <th>Service Hour</th>
                      <th>Physiotherapist Name</th>
                      <th>Status</th>
                      <th>Date & Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Back Pain</td>
                      <td>Md Nur Mohhamamad</td>
                      <td>Gulshan</td>
                      <td>One Hour</td>
                      <td>Abul Kalam</td>
                       <td> 
                     <input type="checkbox"   data-toggle="toggle"/>
                      </td>
                       <td> 
                      7/1/2023 11:45am
                      </td>
                     
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
                      <td>2</td>
                      <td>Back Pain</td>
                      <td>Md Nur Mohhamamad</td>
                      <td>Gulshan</td>
                      <td>One Hour</td>
                      <td>Abul Kalam</td>
                       <td> 
                     <input type="checkbox"   data-toggle="toggle"/>
                      </td>
                      <td> 
                      7/1/2023 11:45am
                      </td>
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
                      <td>3</td>
                      <td>Back Pain</td>
                      <td>Md Nur Mohhamamad</td>
                      <td>Gulshan</td>
                      <td>One Hour</td>
                      <td>Abul Kalam</td>
                       <td> 
                     <input type="checkbox"   data-toggle="toggle"/>
                      </td>
                      <td> 
                      7/1/2023 11:45am
                      </td>
                     
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
                      <td>4</td>
                      <td>Back Pain</td>
                      <td>Md Nur Mohhamamad</td>
                      <td>Gulshan</td>
                      <td>One Hour</td>
                      <td>Abul Kalam</td>
                       <td> 
                     <input type="checkbox"   data-toggle="toggle"/>
                      </td>
                      <td> 
                      7/1/2023 11:45am
                      </td>
                     
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
                      <td>5</td>
                      <td>Back Pain</td>
                      <td>Md Nur Mohhamamad</td>
                      <td>Gulshan</td>
                      <td>One Hour</td>
                      <td>Abul Kalam</td>
                       <td> 
                     <input type="checkbox"   data-toggle="toggle"/>
                      </td>
                      <td> 
                      7/1/2023 11:45am
                      </td>
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