import React from "react";

function UpdateProfile() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Edit
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Update your information
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <body class="bg-light">
                <div class="container">
                  <main>
                    <div class="py-5 text-center">
                      <img
                        class="d-block mx-auto mb-4"
                        src="../assets/brand/bootstrap-logo.svg"
                        alt=""
                        width="72"
                        height="57"
                      />
                      <p class="lead">
Username display here
                      </p>
                    </div>

                    <div class="row g-5">
                      <div class="col-md-7 col-lg-8">
                        <form class="needs-validation" novalidate>
                          <div class="row g-3">
                            <div class="col-sm-6">
                              <label for="firstName" class="form-label">
                                First name
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="firstName"
                                placeholder=""
                                value=""
                                required
                              />
                              <div class="invalid-feedback">
                                Valid first name is required.
                              </div>
                            </div>

                            <div class="col-sm-6">
                              <label for="lastName" class="form-label">
                                Last name
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="lastName"
                                placeholder=""
                                value=""
                                required
                              />
                              <div class="invalid-feedback">
                                Valid last name is required.
                              </div>
                            </div>

                            <div class="col-12">
                              <label for="username" class="form-label">
                                Username
                              </label>
                              <div class="input-group has-validation">
                                <span class="input-group-text">@</span>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="username"
                                  placeholder="Username"
                                  required
                                />
                                <div class="invalid-feedback">
                                  Your username is required.
                                </div>
                              </div>
                            </div>

                            <div class="col-12">
                              <label for="email" class="form-label">
                                Email <span class="text-muted">(Optional)</span>
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="you@example.com"
                              />
                              <div class="invalid-feedback">
                                Please enter a valid email address for the
                                updates.
                              </div>
                            </div>

                            <div class="col-12">
                              <label for="address" class="form-label">
                                Address
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="address"
                                placeholder="1234 Main St"
                                required
                              />
                              <div class="invalid-feedback">
                                Please enter your shipping address.
                              </div>
                            </div>

                            <div class="col-12">
                              <label for="Phone" class="form-label">
                                Phone number
                                <span class="text-muted">(Optional)</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="address2"
                                placeholder="Apartment or suite"
                              />
                            </div>

                            <div class="col-md-4">
                              <label for="state" class="form-label">
                                User type
                              </label>
                              <select class="form-select" id="type" required>
                                <option value="">Select your user type</option>
                                <option value="">Reporter</option>
                                <option value=""></option>
                                <option value=""></option>
                              </select>
                              <div class="invalid-feedback">
                                Please select a type.
                              </div>
                            </div>

                            <div class="col-12">
                              <label for="Phone" class="form-label">
                                Phone number
                                <span class="text-muted">(Optional)</span>
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="address2"
                                placeholder="Apartment or suite"
                              />
                            </div>

                          <div class="my-3">
                          <label for="Gender" class="form-label">
                                Gender
                                <span class="text-muted">(Optional)</span>
                              </label>
                            <div class="form-check">
                              <input
                                id="credit"
                                name="paymentMethod"
                                type="radio"
                                class="form-check-input"
                                checked
                                required
                              />
                              <label class="form-check-label" for="credit">
                                Male
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="debit"
                                name="paymentMethod"
                                type="radio"
                                class="form-check-input"
                                required
                              />
                              <label class="form-check-label" for="debit">
                                Female
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                id="paypal"
                                name="paymentMethod"
                                type="radio"
                                class="form-check-input"
                                required
                              />
                              <label class="form-check-label" for="paypal">
                                Prefer not to say
                              </label>
                            </div>
                          </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </main>
                </div>
              </body>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default UpdateProfile;