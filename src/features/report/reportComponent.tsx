import { ErrorMessage } from "@hookform/error-message";
import { Controller, useForm } from "react-hook-form";
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import { useState } from "react";
import Cookies from "js-cookie";
import { API_BASE_URL, API_KEY } from "@/lib/env_vars";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useDropzone } from 'react-dropzone';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { platforms } from "@/common/platforms.type";
import { X } from "lucide-react";
import Loader from "@/components/loader";
import { PlatformIDType, ReportFormType } from "@/common/report.type";
import { encrypt } from "@/lib/encryption";






export default function ReportComponent() {

    const { register, reset, handleSubmit, trigger, control, formState: { errors }, setValue } = useForm<ReportFormType>({
        criteriaMode: 'all',
        defaultValues: {
            suspectNumber: '',
            platFormId: '',
            incidentDate: '',
            description: '',
            requestFiles: [],
        }
    })

    // States 

    const [files, setFiles] = useState<File[]>([]);


    // Navigation
    const navigate = useNavigate();
    
    
    const getStartYear = () => {
        const startYear = 1900;
        return `${startYear}-12-31`;
    }

    // File and File Validation
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles: File[]) => {
          setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
          setValue('requestFiles', [...files, ...acceptedFiles], { shouldValidate: true });
        },
      });
    
    const removeFile = (fileName: string) => {
      const newFiles = files.filter(file => file.name !== fileName);
      setFiles(newFiles);
      setValue('requestFiles', newFiles, { shouldValidate: true });
      trigger('requestFiles');
    };


    const validateFileSize = (files: File[]): boolean | string => {
        for (let i = 0; i < files.length; i++) {
            if (files[i].size > 5000000) { // 5 MB in bytes
                return "File size exceeds the limit of 5 MB.";
            }
        }
        return true;
    };


    // API Calls

    const getPlatformID = useQuery({
        queryKey: ['platformID'],
        queryFn: async () => {
            const response = await axios.get(`${API_BASE_URL}` + '/report-platforms', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${API_KEY}`
                }
            });
            return response.data.data;

        },
        staleTime: 2592000000, // Cache data for 30 days
        refetchOnWindowFocus: false, // Prevent refetching on window focus
        refetchInterval: 864000000, // Refetch every 10 days
    })


    // Report a Number
    
    const accessToken: string | undefined = Cookies.get('accessToken')

   
    const reportMutation = useMutation({
        mutationKey: ['report'],
        mutationFn: async (newData: ReportFormType) => {
            try {
                const origin: string = 'Web';
                const formData = new FormData();

               // Encrypt fields before appending - use await here
                const encryptedSuspectNumber = await encrypt(newData.suspectNumber);
                const encryptedDescription = await encrypt(newData.description);

                // Append non-file fields
                formData.append('suspectNumber', encryptedSuspectNumber);
                formData.append('platFormId', newData.platFormId);
                formData.append('incidentDate', newData.incidentDate);
                formData.append('description', encryptedDescription);
    
                // Append files
                newData.requestFiles.forEach(file => {
                    formData.append('requestFiles', file);
                });
    
                // console.log("Sending request to:", `${API_BASE_URL}/report?origin=${origin}`);
                // console.log("FormData entries:", Array.from(formData.entries()));
    
                const response = await axios.post(`${API_BASE_URL}/report?origin=${origin}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "X-API-KEY": `${API_KEY}`,
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
    
                console.log("Response received:", response);
    
                if (response.data?.statusCode === 200) {
                    toast.success(`${response?.data?.message}`, {
                        duration: 4000
                    });
                    setTimeout(() => {
                        navigate({ to: '/' });
                    }, 3000);
                }
    
                if (response.data?.statusCode === 201) {
                    toast.success(`${response?.data?.message}`, {
                        duration: 4000
                    });
                    setTimeout(() => {
                        Cookies.remove('accessToken');
                    }, 1000);
                }
    
                return response.data;
    
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    const code = err.response?.data?.statusCode ?? null;
                    
                    if (code === 409) {
                        toast.info(`The phone number ${err.response?.data?.message} has already been reported.`, {
                            duration: 5000
                        });
                    } 
                    if (code === 400) {
                        toast.error(`${err.response?.data?.message}`, {
                            duration: 5000
                        });
                    } 
                    if (code === 401) {
                        toast.error("You're unauthorized, please verify your phone number.");
                        console.log("Error 401");
                        reset();
                        setFiles([]);
                        setTimeout(() => {
                            navigate({ to: '/' });
                        }, 4000);
                    }
    
                    // console.log("Error occurred while posting report:", err);
                }
                throw err; // Ensure mutation handles errors properly
            }
        }
    });
    
    const onSubmit = async (data: ReportFormType) => {
        // console.log("Submitting:", data);
        try {
            const result = reportMutation.mutateAsync(data);
            console.log("Mutation result:", result);
        } catch (error) {
            console.error("Mutation error:", error);
        }
    };




    return (
        <>
            <section className="bg-custom-primary-400 w-full px-5">
                <form onSubmit={handleSubmit(onSubmit)} action="#" className='py-12 flex flex-col justify-center items-center'>
                    <div className="flex flex-row justify-center gap-x-32 font-medium items-start md-768:justify-start md-768:px-28 md-912:gap-x-20 md-820:gap-x-20 sm-425:!px-12 sm-425:flex sm-425:flex-col sm-425:gap-y-5 sm-430:!px-0 md-540:flex md-540:flex-col md-540:justify-center md-540:items-center md-540:!px-0 md-540:gap-y-5 md-768:flex md-768:flex-col md-768:gap-y-5  md-768:items-center md-768:!w-full">
                        <div className="flex flex-col justify-around w-[30vw] gap-5 sm-425:w-full md-768:w-full md-540:w-full ">

                            <div className="flex flex-col gap-2">
                                <label htmlFor="suspect-phone-number" className="text-primary-foreground text-base">Enter Suspect Number <sup className="p-1">*</sup> </label>
                                <PhoneInputWithCountry 
                                    // countries={['GH', 'NG']}
                                    name="suspectNumber"
                                    defaultCountry={'GH'}
                                    control={control}
                                    defaultValue={''}
                                    placeholder="Enter phone number"
                                    addInternationalOption={false}
                                    rules={{ required: {
                                        value: true,
                                        message: "Suspect number is required"
                                    }, maxLength: {
                                        value: 15,
                                        message: "Maximum length of 15 characters exceeded"
                                    }}}
                                    className="custom-phone-input !placeholder-black py-2 px-5 text-base font-medium text-black border-slate-400 border-2 rounded-md focus:border-none outline-none bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-black sm-425:text-base  sm-430:rounded-md md-540:w-full md-768:!w-full"
                                />

                                <ErrorMessage
                                    errors={errors}
                                    name="suspectNumber"
                                    render={({messages}) => 
                                        messages && 
                                        Object.entries(messages).map(([type, message]) => (
                                            <p key={type} className='text-sm font-medium text-primary-foreground'>{message}</p>
                                        ))
                                    }
                                />
                            </div>

                            <div className="flex flex-col flex-wrap gap-4">
                                <label htmlFor="platform" className="text-primary-foreground text-base">Platform of Fraud <sup className="p-1">*</sup></label>
                                <Controller 
                                    control={control}
                                    {...register('platFormId', {
                                        required: {
                                            value: true,
                                            message: 'Mode of fraud is required'
                                        }
                                    })}
                                    render={({field: {onChange, value} }) => (
                                    
                                        <Select onValueChange={onChange}  value={value} >
                                            <SelectTrigger className=" !border-none !focus:ring-2 text-base !focus:border-none focus:outline-none focus:ring-2 focus:ring-black  rounded-md px-4 py-[.5rem] text-black sm-425:w-full md-540:w-full md-768:w-full">
                                                <SelectValue placeholder="Select mode of fraud" 
                                                />
                                            </SelectTrigger>
                                            <SelectContent className="capitalize">
                                            {getPlatformID.isSuccess ? (
                                                getPlatformID?.data?.map((platform: PlatformIDType) => (
                                                    <SelectItem key={platform.id} value={platform.id} className="capitalize flex flex-row text-black text-base font-medium">
                                                    {platform.displayName.includes('Twitter') ? (
                                                            <div className="flex flex-row items-center gap-2">
                                                                {platforms.twitter}
                                                                <span className="ml-2">X (Twitter)</span>
                                                            </div>
                                                        ) : (
                                                            <div className="flex flex-row  items-center gap-2">
                                                                {platforms[platform.name] ?? null}
                                                                <span className="ml-2">{platform.displayName}</span>
                                                            </div>
                                                        )}
                                                    </SelectItem>
                                                ))
                                            ): (
                                                <SelectItem value="1"  className="capitalize text-black text-base font-medium">
                                                    no platforms avaliable
                                                </SelectItem>
                                            )}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="platFormId"
                                    render={({messages}) => 
                                        messages && 
                                        Object.entries(messages).map(([type, message]) => (
                                            <p key={type} className='text-sm font-medium text-primary-foreground'>{message}</p>
                                        ))
                                    }
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="date" className="text-primary-foreground text-base">Date <sup className="p-1">*</sup></label>
                                <input 
                                    type="date"  
                                    placeholder="Add incident date"
                                    {...register("incidentDate", {
                                        required: {
                                            value: true,
                                            message: 'Date is required'
                                        },
                                    })}
                                    min={getStartYear()}
                                    max={new Date().toISOString().split('T')[0]}
                                    className="rounded-md px-4 text-base text-black  font-medium  py-[.5rem] focus:outline-none focus:ring-2 focus:ring-black sm-425:w-full md-540:w-full md-768:w-full"
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="incidentDate"
                                    render={({messages}) => 
                                        messages && 
                                        Object.entries(messages).map(([type, message]) => (
                                            <p key={type} className='text-sm font-medium text-primary-foreground'>{message}</p>
                                        ))
                                    }
                                />
                            </div>


                            <div className="flex flex-col gap-2">
                                <label htmlFor="description"  className="text-primary-foreground text-base">Give a description</label>
                                <textarea
                                    rows={6}
                                    cols={50} 
                                    placeholder="Describe the fraudulent activity you experienced"
                                    {...register("description", {
                                        
                                    })}
                                    className="rounded-md placeholder-black px-4 text-black text-base font-medium py-[.5rem] focus:outline-none focus:ring-2 focus:ring-black sm-425:w-full md-540:w-full md-768:w-full"
                                ></textarea>
                                <ErrorMessage
                                    errors={errors}
                                    name="description"
                                    render={({messages}) => 
                                        messages && 
                                        Object.entries(messages).map(([type, message]) => (
                                            <p key={type} className='text-sm font-medium text-primary-foreground'>{message}</p>
                                        ))
                                    }
                                />
                            </div>

                        </div>
                           

                        <div className="mb-5  flex flex-col justify-between items-start w-[40%] h-full md-820:w-full md-768:w-full w-full">

                            <div className="flex flex-col gap-3">  
                                <div className="flex flex-row gap-2">
                                    <label htmlFor="add-file" className="text-primary-foreground text-base flex flex-row gap-1 items-center justify-start">Add files<sup className="p-1">*</sup></label>
                                    {/* <span title="Add a screenshot(s) or any file as evidence from your fraud incident."><Info size={18} strokeWidth={3} /></span> */}
                                </div>
                            
                                <p className="text-xs text-primary-foreground font-normal md-768:w-full sm-425:w-full">Add screenshots or any files as evidence from your fraud incident.</p>
                                <div className="flex flex-col gap-5">
                                    <Controller
                                        name="requestFiles"
                                        control={control}
                                        rules={{ required: 'This field is required', validate: validateFileSize }}
                                        render={() => (
                                            <>
                                                <div {...getRootProps({ className: 'dropzone' })}>
                                                    <input {...getInputProps()} />
                                                    <p className="text-primary-foreground">Drag and drop multiple files here, or click to select files</p>
                                                    <p className="text-primary-foreground">Files are limited to only 5MB</p>
                                                </div>
                                                {errors.requestFiles && (
                                                    <span className="text-sm font-medium text-primary-foreground">{errors.requestFiles.message}</span>
                                                )}
                                                <aside className="flex flex-col gap-2 w-[15rem] ">
                                                    <ul className="space-y-3 list-disc ">
                                                    {files.map((file) => (
                                                        <div key={file.name} className="flex flex-row gap-2">
                                                            <li className="bg-white w-full px-3 line-clamp-1 text-black text-base font-medium py-1 rounded-xl flex items-center justify-between">
                                                                {file.name}
                                                            </li>
                                                            <button onClick={() => removeFile(file.name)} className="ml-2 text-red-500">
                                                                <X className="w-6 h-6 bg-white text-black rounded-full hover:bg-red-500 focus:bg-red-500 hover:text-white hover:font-bold transition-all duration-300 hover:scale-125 hover:translate-y-1" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                    </ul>
                                                </aside>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="w-full mt-6 flex md-768:w-full  md:w-full md-540:!px-0 sm-425:!px-0 sm-430:!px-0">          
                                <button 
                                    type="submit" 
                                    disabled={reportMutation.isPending}
                                    aria-label="report form button"
                                    className={`${reportMutation.isPending ? 'cursor-not-allowed' : 'cursor-pointer '} 
                                        bg-black w-[13rem] text-primary-foreground text-base flex flex-row justify-center items-center px-3 py-3 rounded-md md-768:w-full  sm-425:!w-full md-540:!w-full  focus:ring-2 focus:ring-white 
                                    `}
                                >
                                    {reportMutation.isPending ? (
                                        <>
                                            <Loader />
                                        </>
                                    ): (
                                        <span>Report Number</span>
                                    )}
                                </button>
                            </div> 
                        </div>

                    </div>        
                </form>
             </section>
        </>
    )
    
};
