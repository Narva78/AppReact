import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Block } from './Block'

describe('Block component', () => {
  const defaultProps = {
    children: 'Hiver',
    backgroundClass: 'theme-noel',
    text: 'Le père Noël serait né il y a environ 1700 ans...',
    image: 'hiver.png',
    altText: 'Noël/Hiver',
  }

  test('renders Block component', () => {
    render(<Block {...defaultProps} />)
    expect(screen.getByText('Hiver')).toBeInTheDocument()
    expect(screen.getByAltText('Noël/Hiver')).toBeInTheDocument()
    expect(screen.getByText('Lire la suite')).toBeInTheDocument()
  })

  test('expands and collapses text on button click', () => {
    render(<Block {...defaultProps} />)
    const readMoreButton = screen.getByText('Lire la suite')
    fireEvent.click(readMoreButton)
    expect(readMoreButton).toHaveTextContent('Lire moins')
    fireEvent.click(readMoreButton)
    expect(readMoreButton).toHaveTextContent('Lire la suite')
  })

  test('applies "visible" class when in view', () => {
    render(<Block {...defaultProps} />)
    const blockElement = screen.getByText('Hiver').closest('.block')

    fireEvent.scroll(window, { target: { scrollY: 100 } })

    setTimeout(() => {
      expect(blockElement).toHaveClass('visible')
    }, 0)
  })
})
