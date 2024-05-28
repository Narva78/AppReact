import './Home.scss'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'

export const Block = ({ children, backgroundClass, text, image, altText }) => {
  // Hook useInView pour déterminer si l'élément est dans le viewport
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% de l'élément doit être visible pour être considéré dans le viewport
    triggerOnce: false, // Si l'élément doit être déclenché une seule fois ou chaque fois qu'il entre dans le viewport
  })

  // État pour suivre si le texte est étendu ou tronqué
  const [isExpanded, setIsExpanded] = useState(false)

  // État pour suivre dynamiquement la hauteur du contenu textuel
  const [textHeight, setTextHeight] = useState('0px')

  // useRef pour référencer l'élément DOM du contenu textuel
  const textRef = useRef(null)

  // useEffect pour mettre à jour la hauteur du texte chaque fois que l'état d'expansion change
  useEffect(() => {
    if (textRef.current) {
      // Définir la hauteur en fonction de la hauteur de défilement du contenu textuel
      setTextHeight(`${textRef.current.scrollHeight}px`)
    }
  }, [isExpanded])

  // Fonction pour basculer l'état de lecture plus/moins
  const toggleReadMore = () => {
    // Utiliser l'état précédent pour basculer
    setIsExpanded((prev) => !prev)
  }

  return (
    <div
      ref={ref}
      className={`block ${backgroundClass} ${inView ? 'visible' : ''}`}
    >
      <div className="block-content">
        <div className="block-content__text">
          <h2>{children}</h2>
          <div
            className={`text-content ${isExpanded ? 'expanded' : 'collapsed'}`}
            ref={textRef}
            style={{ maxHeight: isExpanded ? textHeight : '3.6em' }}
          >
            {text}
          </div>
          <button
            onClick={toggleReadMore}
            className="block-content__text__readMore"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Lire moins' : 'Lire la suite'}
          </button>
        </div>
        <div className="block-content__image">
          <img src={image} alt={altText} />
        </div>
      </div>
    </div>
  )
}
