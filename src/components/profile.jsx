import React from 'react'
import { AuthConsumer } from '../authContext'

export default () => (
    <AuthConsumer>
        {({ user }) => (
            <div>
                <h2>User Profile</h2>
                <ul>
                    <li>ID: {user.id}</li>
                    <li>Email: {user.email}</li>
                    <li>Role: {user.role}</li>
                </ul>
            </div>
        )}
    </AuthConsumer>
)