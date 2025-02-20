import emailjs from '@emailjs/browser';

emailjs.init('n2zQNvwgL2bmpT5Nq');

interface FormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export const sendContactForm = async (formData: FormData) => {
  try {
    const response = await emailjs.send(
      'service_0z8721p',
      'template_hspe87r',
      {
        to_email: 'info@karlaplanentreprenad.se',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service || 'Ej vald',
        message: formData.message,
        reply_to: formData.email,
        form_type: 'Kontaktformulär'
      }
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('Error sending form:', error);
    throw error;
  }
};

export const sendQuoteForm = async (formData: FormData) => {
  try {
    const response = await emailjs.send(
      'service_0z8721p',
      'template_b8fvjze',
      {
        to_email: 'info@karlaplanentreprenad.se',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email,
        form_type: 'Gratis Offert'
      }
    );
    return { success: true, response };
  } catch (error) {
    throw error;
  }
};
