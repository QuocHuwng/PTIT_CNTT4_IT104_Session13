import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectRoute(props:any) {
    const isLogin = false;
    if (!isLogin) {
        return <Navigate to="/login"></Navigate>
    }
    return props.element
}
