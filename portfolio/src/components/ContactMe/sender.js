import emailjs from 'emailjs-com'
// import * as dotenv from 'dotenv' 
// dotenv.config()


const serviceId = import.meta.env.VITE_EMAIL_HOST
const templateId = import.meta.env.VITE_TEMPLATE_ID
const userId = import.meta.env.VITE_PUBLIC_KEY

emailjs.init(userId)

export const sendEmail = async (templateParams) => {
  const params = {
    to_name: 'Gabriel Rouco',
    subject: templateParams.subject,
    reply_to: templateParams.from,
    message: templateParams.message,
  }
  try {
    await emailjs.send(serviceId, templateId, params, userId)
  } catch (error) {
    console.log(error)
  }
}