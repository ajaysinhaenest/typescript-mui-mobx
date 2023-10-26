import './App.css'
import { Box } from '@mui/material'
import Count from './components/Count'
import GithubUser from './components/GithubUser'
import Form from './components/Form'

function App() {
    return (
        <Box m={2} sx={{ p: 2 }}>
            {/* <Count /> */}
            {/* <GithubUser /> */}
            <Form />
        </Box>
    )
}

export default App
