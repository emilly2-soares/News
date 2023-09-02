import './card.css';

interface CardProps {
   imagesrc?: string;
   title?: string;
   text?: string;
   buttonText?: string;
}

export default function Card({ imagesrc = './src/assets/person.jpg',
   title = 'Titulo da Notícia', text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error sed sequi, iure officiis perferendis velit dolor illum qui odio nostrum.",
   buttonText = "Ver Mais" }: CardProps) {
   return (
      <div className="card">
         <img src={imagesrc} alt={title} className="card-image" />
         <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-label">{text}</p>
            <button className="card-button">{buttonText}</button>
         </div>
      </div>
   );
}
