import { IconBrandFacebook, IconBrandInstagram, IconPhone, IconBrandWhatsapp, IconBrandX, IconMessage } from '@tabler/icons-react';
import { JSX } from 'react';


export const platforms: { [key: string]: JSX.Element } = {
    whatsapp:  <IconBrandWhatsapp className="text-primary w-5 h-5"/>,
    facebook: <IconBrandFacebook className="text-primary w-5 h-5"/>,
    sms:  <IconMessage className="text-primary w-5 h-5"/>,
    phone_call:  <IconPhone className="text-primary w-5 h-5"/>,
    instagram:  <IconBrandInstagram className="text-primary w-5 h-5"/>,
    twitter:  <IconBrandX className="text-primary w-5 h-5"/>
}

export const platformsWarning: { [key: string]: JSX.Element } = {
        whatsapp:  <IconBrandWhatsapp className="text-black w-5 h-5"/>,
        facebook: <IconBrandFacebook className="text-black w-5 h-5"/>,
        sms:  <IconMessage className="text-black w-5 h-5"/>,
        phone_call:  <IconPhone className="text-white w-5 h-5"/>,
        instagram:  <IconBrandInstagram className="text-black w-5 h-5"/>,
        twitter:  <IconBrandX className="text-black w-5 h-5"/>
    }
    