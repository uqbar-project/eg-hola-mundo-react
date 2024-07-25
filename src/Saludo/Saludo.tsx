const Saludo = ({ nombre }: { nombre: string }) => {
  return (
    <p data-testid="saludo">
      Hola, {nombre}
    </p>
  )
}

export default Saludo
