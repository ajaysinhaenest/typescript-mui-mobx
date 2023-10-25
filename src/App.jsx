import './App.css'
import { Box } from '@mui/material'
import Count from './components/Count'
import GithubUser from './components/GithubUser'

function App() {
    return (
        <Box m={2} sx={{ p: 2, border: '1px dashed grey' }}>
            <Count />
            <GithubUser />
        </Box>
    )
}

export default App
