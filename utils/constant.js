export const ExhibitCardStatus = {
  upcoming: 0,
  finished: 1,
  canceled: 2,
  postponed: 3,
  ongoing: 4,
}

export const StatusText = Object.keys(ExhibitCardStatus).reduce((t, key) => {
  t[ExhibitCardStatus[key]] = key;
  return t
}, {})

export function needLeftTagStatus(status) {
  return [2, 3, 4].includes(status)
}