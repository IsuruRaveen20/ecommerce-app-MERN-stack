import React from "react";

export const showErrorMsg = (msg)=>(
    <div className = 'alert alert-danger' role='alert'>
        {msg}
    </div>
);

export const showSuccssMsg = (msg)=>(
    <div className = 'alert alert-success' role='alert'>
        {msg}
    </div>
);