import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

const ManagePhysio = () => {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center align-items-center px-5">
          <div class="col-11   ">
            <div class=" ">
              <div class="card-header">
                <h3 class="text-center">All Physiotherapist Details</h3>
              </div>
              {/* <!-- /.card-header --> */}
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Sl Number</th>
                      <th>Name</th>
                      <th>NID</th>
                      <th>Division</th>
                      <th>District</th>
                      <th>Thana</th>

                      <th>Mobile</th>
                      <th>Address</th>
                      <th>Picture</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Johirul</td>
                      <td>1992303897</td>
                      <td>Dhaka</td>
                      <td> Dhaka</td>
                      <td>Gulshan</td>
                      <td>01717654393</td>
                      <td>Road,108 Gulshan</td>
                      <td>
                        {" "}
                        <img
                          src="dist/img/user2-160x160.jpg"
                          class="img-circle elevation-2"
                          alt="User Image"
                        />
                      </td>
                      {/* <td><i class="fa-duotone fa-camera-retro"  ></i></td> */}
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
                      <td>2</td>
                      <td>Johirul</td>
                      <td>1992303897</td>
                      <td>Dhaka</td>
                      <td> Dhaka</td>
                      <td>Gulshan</td>
                      <td>01717654393</td>
                      <td>Road,108 Gulshan</td>
                      <td>
                        {" "}
                        <img
                          src="dist/img/user2-160x160.jpg"
                          class="img-circle elevation-2"
                          alt="User Image"
                        />
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
                      <td>Johirul</td>
                      <td>1992303897</td>
                      <td>Dhaka</td>
                      <td> Dhaka</td>
                      <td>Gulshan</td>
                      <td>01717654393</td>
                      <td>Road,108 Gulshan</td>
                      <td>
                        {" "}
                        <img
                          src="dist/img/user2-160x160.jpg"
                          class="img-circle elevation-2"
                          alt="User Image"
                        />
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
                      <td>Johirul</td>
                      <td>1992303897</td>
                      <td>Dhaka</td>
                      <td> Dhaka</td>
                      <td>Gulshan</td>
                      <td>01717654393</td>
                      <td>Road,108 Gulshan</td>
                      <td>
                        {" "}
                        <img
                          src="dist/img/user2-160x160.jpg"
                          class="img-circle elevation-2"
                          alt="User Image"
                        />
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
                      <td>Johirul</td>
                      <td>1992303897</td>
                      <td>Dhaka</td>
                      <td> Dhaka</td>
                      <td>Gulshan</td>
                      <td>01717654393</td>
                      <td>Road,108 Gulshan</td>
                      <td>
                        {" "}
                        <img
                          src="dist/img/user2-160x160.jpg"
                          class="img-circle elevation-2"
                          alt="User Image"
                        />
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
                      <td>6</td>
                      <td>Johirul</td>
                      <td>1992303897</td>
                      <td>Dhaka</td>
                      <td> Dhaka</td>
                      <td>Gulshan</td>
                      <td>01717654393</td>
                      <td>Road,108 Gulshan</td>
                      <td>
                        {" "}
                        <img
                          src="dist/img/user2-160x160.jpg"
                          class="img-circle elevation-2"
                          alt="User Image"
                        />
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
                      <td>7</td>
                      <td>Johirul</td>
                      <td>1992303897</td>
                      <td>Dhaka</td>
                      <td> Dhaka</td>
                      <td>Gulshan</td>
                      <td>01717654393</td>
                      <td>Road,108 Gulshan</td>
                      <td>
                        {" "}
                        <img
                          src="dist/img/user2-160x160.jpg"
                          class="img-circle elevation-2"
                          alt="User Image"
                        />
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
      {/* <!-- /.container-fluid --> */}
    </div>
  );
};

export default ManagePhysio;
