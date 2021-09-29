const remoteURL = "http://localhost:5002"

export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/Animals/${animalId}?_expand=Locations&_expand=CustomerS`)
  .then(res => res.json())
}

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/Animals`)
  .then(res => res.json())
}

