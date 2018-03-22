import fetch from 'isomorphic-fetch'

export const getCustomer = async (customerId) => {
  const response = await fetch(`api.digital.telus.com/customer/${customerId}`, { method: 'GET' })
  return await response.data()
}
