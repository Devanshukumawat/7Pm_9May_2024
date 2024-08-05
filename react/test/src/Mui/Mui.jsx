import {Button,IconButton,ButtonGroup,Checkbox,Fab, Box, styled} from "@mui/material"
import AbcIcon from '@mui/icons-material/Abc';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Fingerprint from '@mui/icons-material/Fingerprint';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


function Mui() {

   const DivElement = styled(Box)({
        backgroundColor:"orange",
        textAlign:"center",
        fontSize:"30px"
    })

    const DivElemet2 = styled(Box)({
        backgroundColor:"blue",
        textAlign:"center"
    })

    return ( 
        <>

            <Fab color="error" variant="extended">
                <AbcIcon/>
                Hello class
            </Fab>
            <h1>Learn Mui...👍</h1>
            <Button href="http://google.in" startIcon={<AbcIcon/>} variant="contained" color="warning" >Login</Button>
            <Button variant="contained"  endIcon={<AddAPhotoIcon/>}
            sx={{
                backgroundColor:"blue"
            }}
            >Logout</Button>

            <IconButton >
            <Fingerprint color="secondary"/>
            </IconButton>

            <ButtonGroup variant="contained" size="small">
                <Button color="info">One</Button>
                <Button color="secondary">Two</Button>
                <Button color="warning">Three</Button>
            </ButtonGroup>

            <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite color="error"/>}>

            </Checkbox>

            <Box>Div</Box>
            <DivElemet2>Div</DivElemet2>
            <DivElement>Hello Everyone ...👤</DivElement>

        </>
     );
}

export default Mui;

