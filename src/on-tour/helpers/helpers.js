

//gas prices will have to be dynamic and need a scrubber for regional prices

// export const gasPrices = () => {
//   fetch('http://api.eia.gov/category/?api_key=a9b717b70e6b150a26e37aaded30b914&category_id=240691')
//   .then(res => res.json())
//   .then(ans => console.log('ANS!',  ans))
// }

//http://api.eia.gov/series/?api_key=YOUR_API_KEY_HERE&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W

export const gasPrices = () => {
  fetch('http://api.eia.gov/series/?api_key=a9b717b70e6b150a26e37aaded30b914&series_id=PET.EMM_EPMRU_PTE_NUS_DPG.W')
  .then(res => res.json())
  .then(ans => console.log(ans))
}
