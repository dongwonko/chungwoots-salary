import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { getSalaryInfo } from '../lib/posts';

class Home extends Component {
    state = {
        sawonCode: '',
        sawonName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        const postData = {
            salaryPeriod: '201906', 
            sawonCode: this.state.sawonCode, 
            sawonName: this.state.sawonName
        };

        getSalaryInfo(postData);
    }

    render() {
        return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                (주)청우티에스
            </Header>
            <Form size='large'>
                <Segment stacked>
                <Form.Input fluid icon='id card' iconPosition='left' name="sawonCode" placeholder='사원코드를 입력하십시오.' onChange={this.handleChange} />
                <Form.Input
                    fluid
                    icon='user'
                    name="sawonName"
                    iconPosition='left'
                    placeholder='사원명을 입력하십시오.'
                    onChange={this.handleChange}
                />

                <Button color='teal' fluid size='large' onClick={this.handleClick}>
                    급여명세서 확인
                </Button>
                </Segment>
            </Form>
            </Grid.Column>
        </Grid>
        );
    };
}

export default Home