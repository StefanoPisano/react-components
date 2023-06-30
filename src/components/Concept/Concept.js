import './Concept.css'

function Concept({title, description, image}) {

	return (
		<>
			<img src={image} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
		</>
	)
}


export default Concept