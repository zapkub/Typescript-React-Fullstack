import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Home } from './containers/home';


ReactDom.render(
    <Home title="TypeScript" description="React" />,
    document.getElementById("root")
);