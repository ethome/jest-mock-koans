import { getCustomer } from './customerApiClient'

const getPersonalizedMessage = async (customerId) => {
  const customer = await getCustomer(customerId)
  return `Howdy ${customer.name}!`
}

export default getPersonalizedMessage
