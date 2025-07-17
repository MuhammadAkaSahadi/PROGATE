import React, { useState } from 'react';

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        content: ''
    });
    const [errors, setErrors] = useState({
        email: false,
        content: false
    });

    const handleChange = (field, value) => {
        setFormData(prev => ({
        ...prev,
        [field]: value
        }));
        setErrors(prev => ({
        ...prev,
        [field]: value === ''
        }));
    };

    const handleSubmit = () => {
        const newErrors = {
        email: formData.email === '',
        content: formData.content === ''
        };
        
        setErrors(newErrors);
        
        if (!newErrors.email && !newErrors.content) {
        setIsSubmitted(true);
        }
    };

    const ErrorMessage = ({ show, message }) => 
        show ? <p className='contact-message-error'>{message}</p> : null;

    if (isSubmitted) {
        return (
        <div className='contact-form'>
            <div className='contact-submit-message'>
            Pesan Terkirim
            </div>
        </div>
        );
    }

    return (
        <div className='contact-form'>
        <div>
            <p>Alamat Email (wajib diisi)</p>
            <input
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            />
            <ErrorMessage 
            show={errors.email} 
            message="Masukkan alamat email Anda" 
            />
            
            <p>Pesan (wajib diisi)</p>
            <textarea
            value={formData.content}
            onChange={(e) => handleChange('content', e.target.value)}
            />
            <ErrorMessage 
            show={errors.content} 
            message="Masukkan pesan Anda" 
            />
            
            <input type='submit' value="Kirim" onClick={handleSubmit}/>
        </div>
        </div>
    );
};

export default ContactForm;