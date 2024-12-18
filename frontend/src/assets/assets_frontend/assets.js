import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.png'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import header_profile from './header_profile.png'
import doc1 from './doc1.png'
import doc2 from './doc2.jpg'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.jpeg'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.jpeg'
import doc15 from './doc15.png'
import about_img_1 from './about_img_1.png'
import about_img_2 from './about_img_2.png'
import about_img_3 from './about_img_3.png'
import Dermatologist from './Dermatologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import General_physician from './General-physician.png'
import Gynecologist from './Gynecologist.png'
import Neurologist from './Neurologist.png'
import Pediatricians from './Pediatricians.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    header_profile,
    about_img_1,
    about_img_2,
    about_img_3
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. P Naveen Kumar.',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '13+ Years',
        about: 'Dr P Naveen Kumar is a General Physician at Medicover Hospitals HITEC City. He has the expertise in all types of Fever Cases, Expertise In Fever Treatment Diabetes Hypertension ( High Bp ), Thyroid Issues Fever Of Unknown Origin, Dengue Fever Cholestrol Cases and many more. He achieved the prestigious Apj Kalam Medical Excellence Award and was a topper In Md General Medicine Rguhs.',
        fees: 50,
        address: {
            line1: 'Medicover Out Patient Center, HUDA Techno Enclave',
            line2: 'HITEC City, Hyderabad, Telangana 500081'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Manju Khemani',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '43+ Years',
        about: 'Dr. Manju Khemani is a highly experienced Obstetrics and Gynecology specialist with over 34 years of expertise. Currently practicing at Max Healthcare, she has held notable roles, including Professor at Lady Hardinge Medical College and Consultant at Sitaram Bhartia Hospital. Dr. Khemani is well-regarded for her work in high-risk pregnancies and gynecological endoscopy surgeries. She completed her MD and MBBS from Gandhi Medical College, Bhopal, and has a fellowship in Endoscopy from BEAMS, Mumbai. She is also an active member of esteemed organizations like FOGSI, NARCHI, IFS, and DGES.',
        fees: 1500,
        address: {
            line1: 'Max-Hospital Saket',
            line2: 'New Delhi 110017'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr Raja Selvarajan',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS,MD,FID,FRSSDI,FRCP',
        experience: '18+ Years',
        about: 'Dr Raja Selvarajan is a renowed Doctor holding an expertise in Internal Medicine and Diabetes. He is recently working at Kaveri Healthcare but also worked previously at Columbia Asia Hospital Whitefield,Apollo Hospital Bengaluru,Diabetacare.He received mnay prestigious awards some of them are : Vidya Rathna Award 2016- for contribution in the field of Diabetes, 2021 Award for Excellence in Diabetes Care from Lions Club International, FRSSDI - 2021 and many more. ',
        fees: 50,
        address: {
            line1: '351 ITPL Main Road, Whitefield Road, ITPL Main Road HOODI VILLAGE,',
            line2: 'KRISHNARAJAPURA, HOBLI, Hoodi, Bengaluru, Karnataka 560048'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Sonia Naik',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS MD PGT(Obstetrics & Gynaecology)',
        experience: '10+ Years',
        about: 'Dr. Sonia Naik is an esteemed consultant in Obstetrics and Gynecology, currently associated with Max Healthcare and the Sitaram Bhartiya Institute of Science & Research in Delhi. With advanced training from renowned institutions like Bradford Royal Infirmary in the UK and Reliance Life Sciences in Mumbai, she specializes in high-risk obstetrics, laparoscopy, hysteroscopy, adolescent gynecology, and infertility. Dr. Naik holds an MD from Pandit Jawahar Lal Nehru Medical College, Raipur, and is a member of several prestigious medical societies, including FOGSI and the Indian Menopause Society. She has also served as the Organizing Secretary and Editor for the Foetal Medicine Society, demonstrating her commitment to advancing maternal-fetal health.',
        fees: 1500,
        address: {
            line1: 'Max Smart Super Speciality Hospital',
            line2: 'Saket New Delhi ,110017 '
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Bindu Garg',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'M.B.B.S ,M.D ,PG Reproductive Science ,Monash Uni., Australia ,Cleveland University, USA',
        experience: '40+ Years',
        about: 'Dr. Bindu Garg is a highly respected gynecologist and infertility specialist with over 43 years of experience, currently serving as the Head of the IVF Department at Neelkanth Hospital, Delhi NCR. She holds advanced qualifications in reproductive science from Monash University, Australia, and training in human reproductive sciences from Cleveland University, USA. Dr. Garg was the first in Gurgaon to deliver a baby through IVF, and her expertise has led to the birth of over 25,000 IVF babies, bringing hope to thousands of families both in India and abroad. In addition to infertility treatment, she is skilled in high-risk pregnancies, normal deliveries, PCOS/PCOD management, and laparoscopic surgeries. Dr. Garg is also dedicated to advancing the field through training future gynecologists in specialized techniques like laparoscopy, hysteroscopy, and IVF.',
        fees: 1900,
        address: {
            line1: 'Neelkanth Hospital',
            line2: 'Gurgaon 110062'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]

export const testimonals=[
    {
        name:'Savita',
        content:'Great service by the doctors. Thank you MedicMatch for proactive follow ups after the consultation and helping me in finding the right Doctor for me and making the entire process quite easy for me ',
    },
    {
        name:'Nirmala',
        content:''
    }
]