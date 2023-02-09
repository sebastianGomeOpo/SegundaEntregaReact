import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';



function DetailBT({id}) {
    const urlDetail=`/item/${id}`;

    return (
        <>
            <Stack gap={2} >
                <Button as={Link} to={urlDetail} variant="outline-dark" >Ver mas detalles</Button>  
            </Stack>

        </>
    );
}

export default DetailBT