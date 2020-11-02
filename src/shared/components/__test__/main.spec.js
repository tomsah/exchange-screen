import React from 'react'
import {render, screen, cleanup} from '@testing-library/react'
import {act} from 'react-dom/test-utils'
import Main from '../Main'

describe('<Main>', () => {
  const fakeData = {
    base: 'GBP',
    date: '2020-10-30',
    rates: {
      EUR: 1.1085491309,
      USD: 1.2967807733,
    },
  }

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
      }),
    )
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('@render', () => {
    beforeEach(async () => {
      await act(async () => {
        await render(<Main />)
      })
    })
    afterEach(cleanup)

    it('should render main', () => {
      expect(screen.queryAllByTestId('mainComp')).toBeTruthy()
      expect(screen.queryAllByTestId('user-pocket')).toBeTruthy()
      expect(screen.queryAllByTestId('list')).toBeTruthy()
    })

    it('should render a list with all currency provided', () => {
      expect(screen.getAllByTestId('list-element')).toHaveLength(
        Object.keys(fakeData.rates).length,
      )
    })

    it('should render user money with currency symbol', () => {
      const pocket = screen.getByTestId('user-pocket')
      expect(pocket).toHaveTextContent(/my money: 50 £/)
    })
  })
})
