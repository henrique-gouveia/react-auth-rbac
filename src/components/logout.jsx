import React from 'react'
import { AuthConsumer } from '../authContext'

export default () => (
    <AuthConsumer>
        {({ logout }) =>(
            <button className='btn btn-sm btn-default' onClick={logout}>
                Logout
            </button>
        )}
    </AuthConsumer>
)