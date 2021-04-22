import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';

export class Index extends SuperComponent {

static async getInitialProps() {
    let userData = {};
    try {
       const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
       userData = res.data;
    } catch(err) {
       console.log(err)
    }
    return {userData};
}

constructor() {
    super()
    this.state = {
        title: 'I am Index Page'
    }
    console.log('constructor')
}

componentDidMount() {
    console.log('didMount')
}

componentDidUpdate() {
    console.log('didUpdate')
}

componentWillUnmount() {
    console.log('willUnmount')
}
updateTitle() {
    this.setState({title: 'I am Updated'})
}
    render() {
        const {title} = this.state;
        const {userData} = this.props;
        return (
            <BaseLayout>
                <h1 className="frontPage">HomePage</h1>
                <h2> { title } </h2>
                <h2> { userData.title } </h2>
                <button onClick={() => this.updateTitle()}>Change Title</button>
            </BaseLayout>
        )
    }
}

export default Index
