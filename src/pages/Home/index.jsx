import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'

// React Hooks
// useState / estado -> É uma variável, que toda vez que troca
// de valor, a tela irá "recarregar os valores".
// useRef 

function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueiNoBotao() {
    const nomeProduto = inputRef.current.value.trim()
    if (!nomeProduto) {
      alert("O campo não pode estar vazio!")
      return
    }
    setProdutos([{ id: v4(), nome: nomeProduto }, ...produtos])
    inputRef.current.value = ""
    console.log(inputRef.current.value, v4())
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter((produtos) => produtos.id !== id))
  }


  return (

    <Container>
      <h1>To-do List</h1>
      <input placeholder="produto..." ref={inputRef}></input>
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>


      {produtos.map((produtos) => (
        <Product key={produtos.id}>
          <p>{produtos.nome}</p>
          <TrashButton onClick={() => deletarProduto(produtos.id)}>🗑️</TrashButton>
        </Product>
      ))}

    </Container>
  )

}

export default Home
