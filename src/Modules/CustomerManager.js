const remoteURL = "http://localhost:5002"

export const GetCustomerById = (CustomerId) => {
  //be sure your Customers have good data and related to a location and customer
  return fetch(`${remoteURL}/Customers/${CustomerId}?_expand=Locations&_expand=Animal`)
  .then(res => res.json())
}

export const GetAllCustomers = () => {
  return fetch(`${remoteURL}/customers`)
  .then(res => res.json())
}

export const deleteCustomer = (id) => {
    return fetch(`${remoteURL}/customers/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
