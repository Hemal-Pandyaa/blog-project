import React, { useEffect, useState } from 'react';
import Loading from '../common/Loading';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Protected = ({children, authenticationRequired}) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status);
    useEffect(() => {
        if(authenticationRequired && authStatus === false){
            navigate('/login');
        }else if(!authenticationRequired && authStatus === true){
            navigate('/home');
        }
        setLoading(false);
    }, [authenticationRequired]);
    return (
        loading ? <Loading /> : {children}
    );
}

export default Protected;
