import Image from 'next/image';
export default function CategoryCard({title,text,image}:{title:string;text:string;image:string}){return <article className="categoryCard"><div className="cardImage"><Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw"/></div><div className="cardBody"><h3>{title}</h3><p>{text}</p></div></article>}
