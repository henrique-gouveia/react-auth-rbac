import React from 'react'
import { Redirect } from 'react-router-dom';

import { AuthConsumer } from '../authContext'
import Login from '../components/login'
import PostList from '../components/postList'

export default () => (
    <AuthConsumer>
        {({ authenticated }) => (
            authenticated ? (
                <Redirect to='/dashboard' />
            ) : (
                <div>
                    <h2>Welcome to React RBAC Tutorial.</h2>
                    <Login />
                    <PostList />
                </div>
            )
        )}
    </AuthConsumer>
)