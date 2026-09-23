import './Saludo.css'

const Saludo = ({ nombre }: { nombre: string }) => {
  return (
    <p data-testid="saludo" className="greeting">
      Hola, <span className="greetingName">{nombre}</span>
    </p>
  )
}

export default Saludo
