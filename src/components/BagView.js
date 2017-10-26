import React from 'react';
import PropTypes, {
  arrayOf, shape,
  number as Number,
  string as String,
} from 'prop-types'

const BagInListing = (bag) => (
  <span className='c--bag-in-listing'>
    <div className='bag-name'>{bag.name}</div>
    <img src={''} alt='logo'/>
    <div className='bag-description'>{bag.description}</div>
    <div className='bag-price'>
      Just <span className='amount'>{bag.price.amount}</span> {bag.price.unit}!
    </div>
  </span>
)

const BagView = ({ bags }) => (
  <div className='c--bag-view'>
    <h1>{'Our bags'}</h1>
    <div className='baglisting'>
      {bags.map((bag, i) => (
        <BagInListing key={'bag' + i} {...bag} />
      ))}
    </div>
  </div>
)

const BagProptype = shape({
  name: String.isRequired,
  price: shape({
    amount: Number.isRequired,
    unit: String.isRequired,
  }).isRequired,
})

BagView.propTypes = {
  bags: arrayOf(BagProptype).isRequired,
}

export default BagView
