import './App.css'

function Item({img, name, description, onAdd}) {

  return (
    <div className="card">
      <img src={img} className="img" alt={name} />
      <h2>{name}</h2>
      <button onClick={() => onAdd({ img, name, description })}>Add to Cart</button>
      <p>{description}</p>
    </div>
  )
}

export default Item
