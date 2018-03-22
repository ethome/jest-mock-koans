const isPhoneAffordable = (maxPrice, getPhonePrice) => {
  const price = getPhonePrice()
  return price <= maxPrice
}

export default isPhoneAffordable
