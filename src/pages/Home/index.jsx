import { useRef, useState } from 'react'
import { v4 } from 'uuid'


import { AddButton, Container, Product, SilkButton, TrashButton, GlobalStyle } from './styles'

import SilkImage from '../../../src/silk.jpg'
import HollowImage from '../../../src/hollow.jpg'


function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()
  // DarkMode
  const [darkMode, setDarkMode] = useState(false);


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
  // DarkMode: GlobalStyle
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (


    <div>

      <GlobalStyle
        darkMode={darkMode}
        darkModeImage={HollowImage}
        lightModeImage={SilkImage}
      />

      <SilkButton onClick={toggleDarkMode}>      {darkMode ? 'Modo Hollow Knight' : 'Modo Silksong'}
</SilkButton>
      <Container darkMode={darkMode}>
        <h1>To-do List</h1>
        <div>
        <input placeholder="tarefa..." ref={inputRef}></input>
        <input type="date" />
                <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

        </div>

        {produtos.map((produtos) => (
          <Product key={produtos.id}>
            <input type="checkbox" />
            <p>{produtos.nome}</p>
            <TrashButton onClick={() => deletarProduto(produtos.id)}>🗑️</TrashButton>
          </Product>
        ))}
      </Container>
    </div>
  )

}

export default Home

