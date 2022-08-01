import { Switch } from '@mui/material';
import { Router } from 'react-router-dom';


function PageNotFound() {
    return (
        <Router>
            <Switch>
                <div className='pageNotFound'>
                    <img src={PageNotFound.jpeg} height="500" width="" alt="not found" />  
                </div>
            </Switch>
        </Router>
        
    )
}

export default PageNotFound;