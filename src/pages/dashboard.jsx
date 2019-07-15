import React from 'react'
import { Redirect } from 'react-router-dom'

import { AuthConsumer } from '../authContext'
import Can from '../components/can'
import Logout from '../components/logout'
import Profile from '../components/profile'
import PostList from '../components/postList'

export default () => (
    <AuthConsumer>
        {({ user }) => (
            <Can
                role={user.role}
                perform='dashboard-page:visit'
                yes={() => (
                    <div>
                        <h1>Dashboard</h1>
                        <Logout />
                        <Profile />
                        <PostList />
                    </div>
                )}
                no={() => <Redirect to='/' />}
            />
        )}
    </AuthConsumer>
)