import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import "./Billing.css"
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
      <div className="row justify-content-center align-items-center bg-primary ">
      <div class="col-lg-6 justify-content-between align-items-center p-2">
    		<div class="invoice-title">
    			<h2>Invoice</h2><h3 class="pull-right">Order # LEAP12345</h3>
    		</div>
    	 
    		<div class="row">
    			<div class="col-xs-6">
    				<address>
    				<strong>Billed To:</strong><br></br>
    					John Smith<br></br>
    					1234 Main<br></br>
    					Apt. 4B<br></br>
    					Springfield, ST 54321
    				</address>
    			</div>
    			 
    		</div>
    		<div class="row ">
    			 
    			 
    		</div>
    	</div>

        
      </div>
      </div>

<div class="container bg-warning">
    
    
    <div class="row  justify-content-center align-items-center">
    	<div class="col-md-6">
    		<div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title"><strong>Service  Summary</strong></h3>
    			</div>
    			<div class="panel-body">
    				<div class="table-responsive">
    					<table class="table table-condensed">
    						<thead>
                                <tr>
        							<td><strong>Service Name</strong></td>
        							<td class="text-center"><strong>Service Price</strong></td>
        							{/* <td class="text-center"><strong>Quantity</strong></td> */}
        							<td class="text-right"><strong>Totals</strong></td>
                                </tr>
    						</thead>
    						<tbody>
    							{/* <!-- foreach ($order->lineItems as $line) or some such thing here --> */}
    							<tr>
    								<td>Leg Pain</td>
    								<td class="text-center">$10.99</td>
    								{/* <td class="text-center">1</td> */}
    								<td class="text-right">$10.99</td>
    							</tr>
                                <tr>
        							<td>Knee Pain</td>
    								<td class="text-center">$20.00</td>
    								{/* <td class="text-center">3</td> */}
    								<td class="text-right">$60.00</td>
    							</tr>
                                <tr>
            						<td>Back Pain</td>
    								<td class="text-center">$600.00</td>
    								{/* <td class="text-center">1</td> */}
    								<td class="text-right">$600.00</td>
    							</tr>
    							<tr>
    								<td class="thick-line"></td>
    								<td class="thick-line"></td>
    								<td class="thick-line"></td>
    								<td class="thick-line"></td>
    								{/* <td class="thick-line text-center"><strong>Subtotal</strong></td> */}
    								{/* <td class="thick-line text-right">$670.99</td> */}
    							</tr>
    							{/* <tr>
    								<td class="no-line"></td>
    								<td class="no-line"></td>
    								<td class="no-line text-center"><strong>Shipping</strong></td>
    								<td class="no-line text-right">$15</td>
    							</tr> */}
    							<tr>
    								<td class="no-line"></td>
    								{/* <td class="no-line"></td> */}
    								<td class="no-line text-center"><strong>Total</strong></td>
    								<td class="no-line text-right">$685.99</td>
    							</tr>
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div>
    </div>
  );
};

export default Billing;
