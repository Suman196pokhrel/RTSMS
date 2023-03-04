import '@/styles/globals.css';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/system';
import createEmotionCache from '../../utils/createEmotionCache';
import { theme } from '../../utils/theme';



const clientSideEmotionCache = createEmotionCache();



export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (

    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

    </CacheProvider>


  )
}
