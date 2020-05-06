import React from 'react';
import FormField from './FormField';

function UserForm(props) {
    return (
        <div className="form">
                <div className="row">
                    <FormField 
                        title="Name" 
                        name="name" 
                        value={props.name} 
                        onChange={props.handleChange} 
                        placeholder="What is your name?"
                    />
                    <FormField 
                        title="Email"
                        name="email" 
                        value={props.email} 
                        onChange={props.handleChange}
                        placeholder="What is your email?"
                    />
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={props.onSubmit}
                        >
                            Submit
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={props.onCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default UserForm;