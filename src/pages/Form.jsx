import React from 'react'
import Layout from '../components/Layout/Layout'

const Form = () => {
  return (
    <div>
        <Layout>
            <div className="div container my-5 py-3 bg-blue ">
                <form class="row py-5 px-5 rounded rounded-sm g-3">
  <div class="col-md-6">
    <label  class="form-label">Email</label>
    <input type="email" class="form-control"  placeholder='Enter Email'required/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control"  placeholder='Enter Password' required/>
  </div>
  <div class="col-12">
    <label  class="form-label">Address</label>
    <input type="text" class="form-control"  placeholder="Enter Address" required/>
  </div>
  <div class="col-12">
    <label f class="for-label">Address 2</label>
    <input type="text" class="form-control"  placeholder="Apartment, Floor etc" required/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">City</label>
    <input type="text" class="form-control"  placeholder='Enter City' required/>
  </div>
  <div class="col-md-4">
    <label  class="form-label">State</label>
    <select  class="form-select" required>
      <option selected>Choose...</option>
      <option>Gujarat</option>
      <option>Maharast</option>
      <option>Rajasthan</option>
    </select>
  </div>
  <div class="col-md-2">
    <label  class="form-label">Zip</label>
    <input type="text" class="form-control" required/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox"  />
      <label class="form-check-label" >
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
            </div>
        </Layout>
    </div>
  )
}

export default Form
