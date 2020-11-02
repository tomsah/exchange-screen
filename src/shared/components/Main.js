import React, {useEffect, useState} from 'react'
import {CURRENCY_SYMBOL} from '../constants/constant'

const Main = () => {
  const [rates, setRates] = useState([])
  const [money] = useState({currency: 'GBP', value: '50'})
  const fetchData = () => {
    fetch('https://api.exchangeratesapi.io/latest?base=GBP&symbols=USD,EUR')
      .then((response) => response.json())
      .then((data) => {
        // console.log('data', data)
        // const currency = data.rates.keys()
        // const currRate = data.rates.value()
        // const newState = currency.map((curr, i) =>( {'currency': curr, 'rate': currRate[i]}))
        const mappedCurrData = []
        for (const [key, value] of Object.entries(data.rates)) {
          mappedCurrData.push({
            currency: key,
            rate: value,
          })
        }
        setRates(mappedCurrData)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div data-testid="mainComp">
      <div data-testid="user-pocket">
        {`my money: ${money.value}
       ${CURRENCY_SYMBOL[money.currency]}`}
      </div>
      <ul data-testid="list">
        {rates.map((rate) => {
          return (
            <li data-testid="list-element" key={rate.currency}>
              {`${rate.currency} : ${rate.rate}`}
              {`conversion : ${CURRENCY_SYMBOL[rate.currency]}${
                Math.round((money.value * rate.rate + Number.EPSILON) * 100) /
                100
              }`}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Main
