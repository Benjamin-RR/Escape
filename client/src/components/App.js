import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

import Welcome from './Welcome';
// import Login from './Login';


// import Footer from './Footer';

const App = () => {
    
    return(
        <BrowserRouter>
            <GlobalStyles />
            {/* <Header /> */}

            <Main>
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>

                </Switch>
            </Main>

            {/* <Footer /> */}
        </BrowserRouter>
    )
}

const Main = styled.div`
    /* background-color: var(--background-color-default);
    background-image: var(--background-image-default);
    background-attachment: fixed; */
    background: black;
    height: 100vh;
    width: 100vw;
`

export default App;