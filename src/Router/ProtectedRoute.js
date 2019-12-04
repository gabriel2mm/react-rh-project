import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ component, ...props }) {
    const user = useSelector(state => state.user);
    return (
        user != null && user.logado === 1 ? (<Route {...props} component={component}/>) : (<Redirect to='/login' />)
    );
}

