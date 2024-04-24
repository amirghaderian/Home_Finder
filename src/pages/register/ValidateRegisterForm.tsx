import * as Yup from 'yup';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('نام کاربری الزامی است'),
  email: Yup.string().email('لطفا یک ایمیل معتبر وارد کنید').required('ایمیل الزامی است'),
  password: Yup.string().min(6, 'رمز عبور باید حداقل 6 کاراکتر داشته باشد').required('رمز عبور الزامی است'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'رمز عبور و تکرار آن باید مطابقت داشته باشند').required('تکرار رمز عبور الزامی است'),
});

const validateFormData = (formData: FormData) => {
  try {
    validationSchema.validateSync(formData, { abortEarly: false });
    return {}; // No errors
  } catch (errors) {
    return errors.inner.reduce<{ [key: string]: string }>((allErrors, currentError: any) => {
      return {
        ...allErrors,
        [currentError.path]: currentError.message,
      };
    }, {});
  }
};

export default validateFormData;
