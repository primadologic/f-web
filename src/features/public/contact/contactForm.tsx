
import * as yup from "yup"
import { useEffect } from "react"
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "@tanstack/react-router"
import { ContactFormType } from "@/common/contact.type"
import Loader from "@/components/loader"
import { useContactFeedback } from "@/hooks/useContact"





const ContactFormSchema = yup
    .object({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().required('Email is required').email('Email is invalid'),
        phoneNumber: yup.string().required('Phone number is required').max(15, 'Maximum length of 15 characters exceeded'),
        message: yup.string().required('Message is required')
    })




export default function ContactForm() {
    const {register, reset, handleSubmit, control, formState: { errors }} = useForm<ContactFormType>({
        criteriaMode: 'all',
        resolver: yupResolver(ContactFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: ''
        }
    })


    const navigate = useNavigate()

    const contactMutation = useContactFeedback()

    const onSubmit = async (data: ContactFormType) => {
        contactMutation.mutateAsync(data)
    }



    useEffect(() => {
        if (contactMutation.isSuccess) {
            reset()
           setTimeout(() => (
                navigate({ to: '/' })
            ), 2500)
        };

    }, [contactMutation.isSuccess, navigate, reset])
    

    return (

        <>
            <section className="bg-custom-primary-400">

                <section className="bg-cos-brown-400 py-14">
                    <div  className="flex flex-col gap-y-5 justify-center items-center" >
                    
                        <form onSubmit={handleSubmit(onSubmit)}  className="sm:w-[35rem] lg:w-[35rem] xl:w-[35rem] md:w-[33rem] sm:flex sm:flex-col sm:gap-y-5 sm:justify-center sm:items-center w-full flex flex-col justify-center items-center gap-5 px-5">
                            <div className="sm:flex sm:flex-row sm:gap-x-3 lg:flex lg:flex-row xl:flex-row md:flex md:flex-row w-full flex flex-col gap-5 ">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="firstName" className="text-white font-medium">First Name<sup className="p-1">*</sup></label>
                                    <input 
                                        type="text" 
                                        placeholder="First name"
                                        {...register('firstName')}
                                        className="rounded-md px-4 text-black text-base font-medium  py-[.5rem] focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="firstName"
                                        render={({messages}) => 
                                            messages && 
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className='text-sm font-medium text-gray-300'>{message}</p>
                                            ))
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="lastName" className="text-white font-medium">Last Name<sup className="p-1">*</sup></label>
                                    <input 
                                        type="text" 
                                        placeholder="Last name"
                                        {...register('lastName')}
                                        className="rounded-md px-4 text-black text-base font-medium   py-[.5rem] focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="lastName"
                                        render={({messages}) => 
                                            messages && 
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className='text-sm font-medium text-gray-300'>{message}</p>
                                            ))
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-white font-medium">Email<sup className="p-1">*</sup></label>
                                    <input 
                                        type="email"
                                        placeholder="Enter email address"
                                        {...register('email')}
                                        className="rounded-md px-4 text-black text-base font-medium  py-[.5rem] focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="email"
                                        render={({messages}) => 
                                            messages && 
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className='text-sm font-medium text-gray-300'>{message}</p>
                                            ))
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone number" className="text-white font-medium">Phone number<sup className="p-1">*</sup></label>
                                    
                                    <PhoneInputWithCountry 
                                        // countries={['GH', 'NG']}
                                        name="phoneNumber"
                                        defaultCountry={'GH'}
                                        control={control}
                                        defaultValue={''}
                                        placeholder="Enter phone number"
                                        addInternationalOption={false}
                                        rules={{ required: {
                                            value: true,
                                            message: "Phone number is required"
                                        }, maxLength: {
                                            value: 15,
                                            message: "Maximum length of 15 characters exceeded"
                                        }}}
                                        className="py-2 px-5 text-base font-medium text-black border-slate-400 border-2 rounded-md focus:border-none outline-none bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-black sm-425:text-base"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="phoneNumber"
                                        render={({messages}) => 
                                            messages && 
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className='text-sm font-medium text-gray-300'>{message}</p>
                                            ))
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone number" className="text-white font-medium">Message<sup className="p-1">*</sup></label>
                                    <textarea 
                                        rows={6}
                                        placeholder="Enter your message"
                                        {...register('message')}   
                                        className="rounded-md px-4 text-black text-base font-medium  py-[.5rem] focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="message"
                                        render={({messages}) => 
                                            messages && 
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className='text-sm font-medium text-gray-300'>{message}</p>
                                            ))
                                        }
                                    />
                                </div>
                            </div>
                            <button 
                                disabled={contactMutation.isPending}
                                className={`${contactMutation.isPending ? 'cursor-not-allowed bg-opacity-50' : 'cursor-pointer hover:bg-opacity-80'} bg-black text-base flex flex-row justify-center items-center  font-semibold text-white w-full px-3 py-3 rounded-md focus:ring-2 focus:ring-white`}
                                aria-label="contact form button"
                            >
                                {contactMutation.isPending ? (
                                    <>
                                        <Loader />
                                    </>
                                ): (
                                    <span>Submit</span>
                                )}

                            </button>
                        

                        </form>
                    </div>  
                </section>
                
            </section>
        </>
    )
    
};
