import { useState } from 'react';

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return { form, handleChange, setForm };
};

export default useForm;
