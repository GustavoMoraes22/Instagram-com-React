import { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
import { ThemeProvider } from 'styled-components'
import { Button, Flex, Screen, Typography } from './style'
import { darkTheme, lightTheme } from './style/theme'
import { NavBar } from './components/navbar'
import { Header } from './components/header'
import { Stories } from './components/stories'
import { Publications } from './components/publications'
import { getPhoto } from './services/photos'


function App() {
  const PHOTOS_PER_PAGE = 12


  const [theme, setTheme] = useState('dark')
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [photosPorPage, setPhotosPorPage] = useState(PHOTOS_PER_PAGE)

  const releaseLoading = () => setIsLoading(false)

  async function fetchPhotos() {
    setIsLoading(true)
    const data = await getPhoto(photosPorPage, releaseLoading)

    setPhotos(data)

  }

  useEffect(() => {
    fetchPhotos()
  }, [photosPorPage])


  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const handlePhotosPerPage = () => {
    setPhotosPorPage(photosPorPage + PHOTOS_PER_PAGE)

  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Screen >
        <NavBar themeToggler={themeToggler} theme={theme} />
        <Flex gap='2px' >
          <Header />
          <Stories photos={photos} />
          <Publications photos={photos} />
          {isLoading ? (
            <ReactLoading type='spinningBubbles' color={theme.textPrimary} height={20} width={20} />
          ) : (
            <Button onClick={handlePhotosPerPage}>
              <Typography>Ver mais</Typography>
            </Button>
          )}

        </Flex>
      </Screen>
    </ThemeProvider>
  )
}

export default App
