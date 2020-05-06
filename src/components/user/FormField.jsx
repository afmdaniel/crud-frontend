import React from 'react';

function FormField(props) {
    return (
        <div className="col-12 col-md-6">
        <div className="form-group">
            <label>{props.title}</label>
            <input type="text" className="form-control"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}    
            />
        </div>
    </div>
    )
}

export default FormField;