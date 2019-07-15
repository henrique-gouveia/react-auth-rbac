import React from 'react'
import { AuthConsumer } from '../authContext'

export default () => (
    <AuthConsumer>
        {({ initiateLogin }) => (
            <button className='btn btn-sm btn-primary' onClick={initiateLogin}>
                Login
            </button>
        )}
    </AuthConsumer>
)