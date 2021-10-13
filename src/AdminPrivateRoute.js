import React, {useEffect, useState} from "react";
import axios from "axios";
import {Redirect, Route, useHistory} from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import swal from "sweetalert";

function AdminPrivateRoute({...rest}) {
    const history = useHistory();
    const[Authenticted, setAuthenticted] = useState(false);
    const[Loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get("api/checkingAuthenticated").then(res => {
            if(res.status === 200) {
                setAuthenticted(true);
            }
            setLoading(false);
        });
        return () => {
            setAuthenticted(false);
        };
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.status === 401) {
            swal("Unauthorized", err.response.data.message(), "warning");
            history.push("/");
        }
        return Promise.reject(err);
    });

    if(Loading) {
        return <h1>Loading...</h1>
    }
    return (
        <Route {...rest}
               render={({props, location}) =>
                        Authenticted ? (<MasterLayout {...props}/>) :
                       (<Redirect to={{pathname: "/login", state: {from: location}}}/>)
               }
        />
    );
}
export default AdminPrivateRoute;
