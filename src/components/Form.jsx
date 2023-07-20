import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <div>
            Form
        </div>
    )
}

export default Form