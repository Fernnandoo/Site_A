import React from 'react'
import { Container, MainContainer } from '@/styles/global'
import { Outlet } from 'react-router-dom'
import Header from './interfaces/Header'
import Footer from './interfaces/Footer'
import ChatButton from './interfaces/ChatButton/ChatButton'


function App() {
  return (
    <MainContainer>
      {/* <ChatButton /> */}
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </MainContainer>
  )
}

export default App
