import react from 'react';
import { Spinner } from 'react-bootstrap'
import './RecommendationLoader.css'
function RecommendationLoader () {
    return (
        <>
<div>

        <Spinner animation="border" variant="primary" className="loaderMain" />
        
</div>
        </>
    )
}

export default RecommendationLoader