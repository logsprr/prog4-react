import axios, { AxiosInstance } from 'axios';
import emailjs from 'emailjs-com';

const api = (): AxiosInstance =>
  axios.create({
    baseURL: 'url',
  });

const email = async (
  serviceId: string,
  template: string,
  userId: string,
  form: string,
): Promise<any> => {
  await emailjs.sendForm(serviceId, template, form, 'YOUR_USER_ID').then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    },
  );
};

export { api, email };
