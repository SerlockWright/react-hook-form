import React from 'react';
import { useForm } from 'react-hook-form';
import { GrMail } from 'react-icons/gr'

const Form = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 container">
            <div className="grid gap-5 md:grid-cols-2 container">
                <div>
                    <label className='block text-sm font-medium text-gray-700'>First Name</label>
                    <input className='mt-1 p-2 border border-indigo-200 w-full  rounded"'
                        type="text"
                        name="firstname"
                        {...register("firstname",
                            {
                                required: "Firstname is required",
                                maxLength: 20
                            })} />
                    {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Last Name</label>
                    <input className='mt-1 p-2 border border-indigo-200 w-full rounded'
                        type="text"
                        name="lastname"
                        {...register("lastname",
                            {
                                required: "Lastname is required",
                            })} />
                    {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}

                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input
                        type="email"
                        name="email"
                        {...register("email",
                            {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Email is invalid."
                                }
                            })}
                        className='mt-1 p-2 border border-indigo-200 w-full rounded' />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input
                        type="password"
                        className='mt-1 p-2 border border-indigo-200 w-full rounded'
                        name="password"
                        {...register("password",
                            {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: 'Password must have at least 8 characters'
                                }
                            })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Confirm Password</label>
                    <input
                        type="password"
                        className='mt-1 p-2 border border-indigo-200 w-full  rounded'
                        name="confirm-password"
                        {...register("confirmpassword", {
                            required: true,
                            validate: (match) => {
                                const password = getValues("password")
                                return match === password || "Password must match"
                            }
                        })}
                    />
                    {errors.confirmpassword && <p className="text-red-500">{errors.confirmpassword.message}</p>}
                </div>
                <div>
                    <label>Gender</label>
                    <div className="mt-1">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                {...register('gender', { required: 'Please choose gender' })}
                            />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center ml-4">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                {...register('gender', { required: 'Please choose gender' })}
                            />
                            <span className="ml-2">Female</span>
                        </label>
                        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
                    </div>
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-700'>Bio</label>
                    <textarea
                        type="text"
                        className='mt-1 p-2 border border-indigo-200 w-full  rounded'
                        name="bio" {...register("bio")}
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Status</label>
                    <select
                        className='mt-1 p-2 border border-indigo-200 w-full rounded'
                        {...register('status')}
                    >
                        <option value="pending">Pending</option>
                        <option value="complete">Complete</option>
                    </select>
                </div>


                <div>
                    <button
                        onClick={onSubmit}
                        className="p-5 flex items-center gap-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        <GrMail />
                        Submit Form
                    </button>
                </div>
            </div>

        </form>

    )
}

export default Form