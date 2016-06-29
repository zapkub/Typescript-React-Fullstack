import * as React from 'react';
import { connect } from 'react-redux';
export interface HomeProps { title: string; description: string; }
export class Home extends React.Component<HomeProps, {}> {
    render () {
        return <h1>{this.props.title}</h1>
    }
}