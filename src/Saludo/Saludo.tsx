import './Saludo.css'

const Saludo = ({ nombre }: { nombre: string }) => {
  return (
    <p data-testid="saludo" className="saludo">
      Hola, <span className="saludoNombre">{nombre}</span>
    </p>
  )
}

export default Saludo
