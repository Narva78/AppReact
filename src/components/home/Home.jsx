import './Home.scss'
import { Block } from './Block'
import { hiverImage, eteImage, printempsImage, automneImage } from './images'

export const Home = () => {
  return (
    <div className="homepage">
      <Block
        backgroundClass="theme-noel"
        text="Le père Noël serait né il y a environ 1700 ans. Il s'appelait alors Nicolas de Myre, un riche évêque turc qui avait l'habitude, pendant la nuit, d'aller distribuer des cadeaux et de la nourriture aux plus pauvres. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic, atque non quae voluptatum beatae fugit omnis repellat quo at, distinctio explicabo quaerat consequuntur nobis et iste! Rerum, delectus perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam vel incidunt architecto fugit illo eveniet esse est ullam asperiores. Voluptas dolore commodi quo neque adipisci sapiente. Perferendis, officia error?"
        image={hiverImage}
        altText="Noël/Hiver"
      >
        Hiver
      </Block>
      <Block
        backgroundClass="theme-ete"
        text="Saison la plus chaude de l'année, qui succède au printemps et précède l'automne, et qui, dans l'hémisphère nord, commence au solstice d'été (21 ou 22 juin) et s'achève à l'équinoxe d'automne (22 ou 23 septembre). Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic, atque non quae voluptatum beatae fugit omnis repellat quo at, distinctio explicabo quaerat consequuntur nobis et iste! Rerum, delectus perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam vel incidunt architecto fugit illo eveniet esse est ullam asperiores. Voluptas dolore commodi quo neque adipisci sapiente. Perferendis, officia error?"
        image={eteImage}
        altText="Été"
      >
        Été
      </Block>
      <Block
        backgroundClass="theme-printemps"
        text="Le printemps (de l'ancien français prins, premier, et temps) est l’une des quatre saisons de l’année, dans les zones tempérées et boréales où il suit l'hiver et précède l'été. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic, atque non quae voluptatum beatae fugit omnis repellat quo at, distinctio explicabo quaerat consequuntur nobis et iste! Rerum, delectus perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam vel incidunt architecto fugit illo eveniet esse est ullam asperiores. Voluptas dolore commodi quo neque adipisci sapiente. Perferendis, officia error?"
        image={printempsImage}
        altText="Printemps"
      >
        Printemps
      </Block>
      <Block
        backgroundClass="theme-automne"
        text="Saison qui succède à l'été et précède l'hiver, et qui, dans l'hémisphère boréal, commence le 22 ou le 23 septembre pour finir le 21 ou le 22 décembre. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic, atque non quae voluptatum beatae fugit omnis repellat quo at, distinctio explicabo quaerat consequuntur nobis et iste! Rerum, delectus perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam vel incidunt architecto fugit illo eveniet esse est ullam asperiores. Voluptas dolore commodi quo neque adipisci sapiente. Perferendis, officia error?"
        image={automneImage}
        altText="Automne"
      >
        Automne
      </Block>
    </div>
  )
}
