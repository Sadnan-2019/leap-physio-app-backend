import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Dashboard</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-6">
                <div class="small-box bg-info">
                  <div class="inner">
                    <h3>150</h3>

                    <p>Physiotherapist</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-bag"></i>
                  </div>
                  {/* <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> */}
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="small-box bg-success">
                  <div class="inner">
                    <h3>53 </h3>

                    <p>Patients</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                  </div>
                  {/* <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> */}
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="small-box bg-warning">
                  <div class="inner">
                    <h3>44</h3>

                    <p>Caregiver</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-person-add"></i>
                  </div>
                  {/* <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> */}
                </div>
              </div>

              <div class="col-lg-3 col-6">
                <div class="small-box bg-danger">
                  <div class="inner">
                    <h3>65</h3>

                    <p>Nurse</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-pie-graph"></i>
                  </div>
                  {/* <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a> */}
                </div>
              </div>
            </div>

            <div class="row">
              <section class="col-lg-7 connectedSortable">
                <div class="card bg-gradient-green">
                  <div class="card-header border-0">
                    <h3 class="card-title">
                      {/* <i class="fas fa-patients mr-1"></i>
                       */}{" "}
                      <i class="fas fa-restroom mr-1"></i>
                      Doctor List{" "}
                    </h3>
                  </div>
                  <div class="card-body">
                    <table
                      id="example2"
                      class="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>Sl Number</th>
                          <th> Name</th>

                           
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Abdul Korim</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Abdul Razzak</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Abdul Rabbi</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Abdul Reja</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Abdul Kazi</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section class="col-lg-5 connectedSortable">
                <div class="card bg-gradient-primary">
                  <div class="card-header border-0">
                    <h3 class="card-title">
                      {/* <i class="fas fa-patients mr-1"></i>
                       */}{" "}
                      <i class="fas fa-restroom mr-1"></i>
                      Engagement Patients
                    </h3>
                  </div>
                  <div class="card-body">
                    <table
                      id="example2"
                      class="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>Sl Number</th>
                          <th> Name</th>

                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Abdul Kuddus</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Abdul Kuddus</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Abdul Kuddus</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Abdul Kuddus</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Abdul Kuddus</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* <div class="card bg-gradient-info">
              <div class="card-header border-0">
                <h3 class="card-title">
                  <i class="fas fa-th mr-1"></i>
                  Sales Graph
                </h3>

                <div class="card-tools">
                  <button type="button" class="btn bg-info btn-sm" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn bg-info btn-sm" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <canvas class="chart" id="line-chart" 
                
                // style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"
                style={{minHeight:"250px",height:"250px",maxHeight:"250px",maxWidth:"100%"}}
                ></canvas>
              </div>
             
              <div class="card-footer bg-transparent">
                <div class="row">
                  <div class="col-4 text-center">
                    <input type="text" class="knob" data-readonly="true" value="20" data-width="60" data-height="60"
                           data-fgColor="#39CCCC"/>

                    <div class="text-white">Mail-Orders</div>
                  </div>
                 
                  <div class="col-4 text-center">
                    <input type="text" class="knob" data-readonly="true" value="50" data-width="60" data-height="60"
                           data-fgColor="#39CCCC"/>

                    <div class="text-white">Online</div>
                  </div>
                   
                  <div class="col-4 text-center">
                    <input type="text" class="knob" data-readonly="true" value="30" data-width="60" data-height="60"
                           data-fgColor="#39CCCC"/>

                    <div class="text-white">In-Store</div>
                  </div>
             
                </div>
             
              </div>
            
            </div>
         

       
            <div class="card bg-gradient-success">
              <div class="card-header border-0">

                <h3 class="card-title">
                  <i class="far fa-calendar-alt"></i>
                  Calendar
                </h3>
              
                <div class="card-tools">
               
                  <div class="btn-group">
                    <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset="-52">
                      <i class="fas fa-bars"></i>
                    </button>
                    <div class="dropdown-menu" role="menu">
                      <a href="#" class="dropdown-item">Add new event</a>
                      <a href="#" class="dropdown-item">Clear events</a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">View calendar</a>
                    </div>
                  </div>
                  <button type="button" class="btn btn-success btn-sm" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                  <button type="button" class="btn btn-success btn-sm" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
               
              </div>
               
              <div class="card-body pt-0">
                
                <div id="calendar"  
                style={{width:"100%"}}
                ></div>
              </div>
             
            </div> */}
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
