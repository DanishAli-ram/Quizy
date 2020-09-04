import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import QuizWrapper from './QuizWrapper';
import Result from './Result';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/quiz" component={QuizWrapper} />
                    <Route path="/result" component={Result} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;