import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Home } from './Home'

describe('Home component', () => {
  test('renders Home component with all blocks', () => {
    render(<Home />)

    expect(screen.getByText('Hiver')).toBeInTheDocument()
    expect(screen.getByText('Été')).toBeInTheDocument()
    expect(screen.getByText('Printemps')).toBeInTheDocument()
    expect(screen.getByText('Automne')).toBeInTheDocument()
  })

  test('each block contains the correct text', () => {
    render(<Home />)

    expect(
      screen.getByText(/Le père Noël serait né il y a environ 1700 ans/)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Saison la plus chaude de l'année/)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Le printemps \(de l'ancien français prins/)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Saison qui succède à l'été et précède l'hiver/)
    ).toBeInTheDocument()
  })

  test('each block contains an image with correct alt text', () => {
    render(<Home />)

    expect(screen.getByAltText('Noël/Hiver')).toBeInTheDocument()
    expect(screen.getByAltText('Été')).toBeInTheDocument()
    expect(screen.getByAltText('Printemps')).toBeInTheDocument()
    expect(screen.getByAltText('Automne')).toBeInTheDocument()
  })
})
