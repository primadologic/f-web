import { Controller, useForm } from "react-hook-form"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../ui/alert-dialog"
import {
  InputOTP,
  InputOTPSlot,
} from "../ui/input-otp"
import { ErrorMessage } from "@hookform/error-message"
import { VerifyNumberType } from "../../common/home.types";
import { useVerifyNumberbyOTPCode } from "../../hooks/useVerifyNumberbyOTP";
import { useReporterNumStore } from "../../hooks/modalState";
import { useVerifyNumCloseStore } from "../../hooks/state";
import { useEffect, useState } from "react";
import { useGetOTPCode } from "../../hooks/useGetOTPCode";
import { useNavigate } from "@tanstack/react-router";
import Loader from "../loader";
import { Button } from "../ui/button";





export default function VerifyNumbyOTPOCodeDialog() {

    const { reset, handleSubmit, setValue , control, formState: {errors, isSubmitted} } = useForm<VerifyNumberType>({
        criteriaMode: 'all',
        defaultValues: {
            code: ''
        }
    });

    const navigate = useNavigate();

    // API hooks
    const getOTPCode = useGetOTPCode();
    const verifyNumber = useVerifyNumberbyOTPCode()


    const { reporterNum, setReportNum } = useReporterNumStore()
    const [timeLeft, setTimeLeft] = useState<number>(60)
    const [showResendButton, setShowResendButton] = useState<boolean>(false)

    const {VerifyNumIsOpen, setVerifyNumIsOpen} = useVerifyNumCloseStore()


    const maskNumber = (phone: string) => {
        return phone.replace(/(\d{3})\d{4}(\d{3})$/, "$1****$2");
      };

    const onSubmit = async (data: VerifyNumberType) => {
        const {code} = data
            verifyNumber.mutateAsync({
                reporterNumber: reporterNum,
                code: code
        })  
    }

    useEffect(() => {
        if(verifyNumber.isSuccess) {
            navigate({ to: '/report' })
            setReportNum('');
            reset();
        };

        if(isSubmitted && verifyNumber.isError) {
            setTimeout(() => {
                reset()
            }, 1500)
        }

        if (timeLeft === 0) {
            setShowResendButton(true);
            return; // Exit early if the timer has reached 0
          }
      
          const timer = setInterval(() => {
            setTimeLeft((prevTime: any) => prevTime - 1);
          }, 1000);
      
          // Cleanup the interval on component unmount
          return () => clearInterval(timer);

    }, [verifyNumber.isSuccess, timeLeft, isSubmitted, verifyNumber.isError, navigate, setValue, reset, setReportNum])


    
    const handleResendCode = async () => {
        getOTPCode.mutateAsync(reporterNum)
        setTimeLeft(60)
        setShowResendButton(false)
    }

    return (
        <>

            <div className="w-full">
                <AlertDialog open={VerifyNumIsOpen} onOpenChange={setVerifyNumIsOpen}>
                    <AlertDialogTrigger  className="hidden"></AlertDialogTrigger>
                    <AlertDialogContent className="rounded-md lg:max-w-[30rem] sm:max-w-[27rem] max-w-[90%] flex flex-col gap-y-5 ">
                        <AlertDialogHeader className="w-full flex !justify-start !items-start !space-y-1">
                            <AlertDialogTitle className="font-semibold text-base">Enter verification code</AlertDialogTitle>
                            <AlertDialogDescription className="text-sm font-semibold text-start text-custom-dark-gray-active">
                                Please enter the 6-digit verification code we sent to you at {maskNumber(reporterNum)}
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-3">
                                <div className="w-full flex flex-col gap-y-2">
                                    <Controller
                                        control={control}
                                        name="code"
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'OTP code is required'
                                            }
                                        }}
                                    render={({field: { onChange, onBlur, value, }}) => (
                                    <InputOTP 
                                        maxLength={6}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        className=""
                                    >
                                        <InputOTPSlot index={0} className="w-full flex flex-row bg-white  text-xl font-medium "/>
                                        <InputOTPSlot index={1 } className="w-full flex flex-row bg-white text-xl font-medium "/>
                                        <InputOTPSlot index={2} className="w-full flex flex-row bg-white text-xl font-medium   "/>
                                        <InputOTPSlot index={3} className="w-full flex flex-row bg-white text-xl font-medium"/>
                                        <InputOTPSlot index={4} className="w-full flex flex-row bg-white text-xl font-medium" />
                                        <InputOTPSlot index={5} className="w-full flex flex-row bg-white rounded-r-sm text-xl font-medium" />
                                    </InputOTP>
                                    )}
                                    />
                                    <ErrorMessage 
                                        errors={errors}
                                        name="code"
                                        render={({ messages }) => 
                                            messages && 
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type} className='text-sm font-medium text-red-500'>{message}</p>
                                            ))
                                        }
                                    />

                                </div>

                                <div className="my-1">
                                    <div className="text-sm text-gray-600 flex justify-end gap-1">
                                        {timeLeft > 0 ? (
                                            <div className="space-x-1 flex flex-row gap-1">
                                                <p className="font-medium text-sm">Didn&apos;t recieve verification code? {' '}  </p>
                                                <p className="font-semibold">{timeLeft === 60 ? '1:00' : `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</p>
                                            </div>
                                        ): (
                                            showResendButton && (
                                                <div className="text-sm sm:flex sm:flex-row flex flex-row flex-wrap gap-2 flex flex-row gap-1 mx-2">
                                                    <p className="font-medium ">Didn&apos;t recieve verification code? </p>
                                                    <button onClick={handleResendCode} className="underline text-blue-500 font-semibold">Resend Code</button>
                                                </div>

                                            )
                                        )}
                                    </div>
                                </div>
                                <AlertDialogFooter className="flex flex-row gap-3 justify-end items-end">
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <Button
                                        type="submit"
                                        size={'sm'}
                                        variant={'default'}
                                        disabled={verifyNumber.isPending}
                                        aria-label="verify number"
                                        className={`${verifyNumber.isPending ? 'cursor-not-allowed' : 'cursor-pointer'} flex flex-row justify-center items-center `}>
                                        {verifyNumber.isPending ? (
                                            <>
                                                <Loader />
                                            </>
                                        ) : (
                                            <span>Verify number</span>
                                        )}
                                    </Button>
                                </AlertDialogFooter>     
                            </form>
                       

                           
                    </AlertDialogContent>
                </AlertDialog>
            </div> 

        </>
    )
    
};
