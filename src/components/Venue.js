import React from 'react'
import Card from './Card'
import styles from '../styles/Venue.module.scss'

const Venue = props => {
  const { venue } = props

  console.log(venue)
  return (
    <Card>
      <div className={styles.venueInfo}>
        <h3 className={styles.name}>{venue.name}</h3>
        <div className={styles.categories}>{printCategoriesName(venue)}</div>
        <div className={styles.address}>{printAddress(venue)}</div>
      </div>
      <div className={styles.addBtn}>+</div>
    </Card>
  )
}

const printAddress = venue => {
  if (!venue.location.formattedAddress) return ''

  const address = venue.location.formattedAddress
  return `${address[0]}, ${address[1]}`
}

const printAddress2 = venue => {
  const loc = venue.location
  const address = loc.address || ''
  const crossStreet = ` (${loc.crossStreet})` || ''
  const city = loc.city || ''

  if (address) {
    return `${address}${crossStreet}, ${city}`
  } else {
    return city
  }
}

const printCategoriesName = venue => {
  const categoriesArray = venue.categories
  const names = categoriesArray.map(category => category.shortName)
  return names.join(', ')
}

export default Venue
