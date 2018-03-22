const getMeal = (getSideDish, isDiet) => {
  const mainDish = isDiet ? 'Grilled tofu' : 'Hot dogs'
  return `${mainDish} with a side of ${getSideDish(isDiet)}`
}

export default getMeal
