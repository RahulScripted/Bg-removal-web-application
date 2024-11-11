import logo from './logo.png'
import logo_icon from './logo_icon.svg'
import arrow_icon from './arrow_icon.svg'
import header_video from './header_video.mp4'
import remove_bg_icon from './remove_bg_icon.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload_icon.svg'
import download_icon from './download_icon.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import google_plus_icon from './google_plus_icon.svg'
import twitter_icon from './twitter_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import profile_img_4 from './profile_img_4.png'
import profile_img_5 from './profile_img_5.png'
import credit_icon from './credit_icon.png'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_video,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    google_plus_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "I've been using Bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
        author: "Richard Nelson",
        image: profile_img_1,
        jobTitle:'Web Developer'
    },
    {
        id: 2,
        text: "I've been using Bg.removal for nearly 6 months, I had a fantastic experience. The quality is top-notch. I recommend others to try this app.",
        author: "Donald Jackman",
        image: profile_img_2,
        jobTitle:'UI Deginer'
    },
    {
      id: 3,
      text: "I've been using Bg.removal for nearly one years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      author: "James Carter",
      image: profile_img_3,
      jobTitle: 'Graphic Designer'
    },
    {
      id: 4,
      text: "I've been using Bg.removal for nearly 6 months, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      author: "Sophia Lee",
      image: profile_img_4,
      jobTitle: 'Content Creator'
    },
    {
      id: 5,
      text: "I've been using Bg.removal for almost a year, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
      author: "Olivia Smith",
      image: profile_img_5,
      jobTitle: 'Social Media Manager'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]