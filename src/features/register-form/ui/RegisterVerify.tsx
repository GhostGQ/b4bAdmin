import {useEffect, useState} from 'react';
import {
  useRegisterMutation,
  useVerifyRegistrationMutation,
} from '../model/register-api';
import VerifyCodeIput from './VerifyCodeIput';
import {useLocation, useNavigate} from 'react-router';
import {ROUTES} from '@shared/config/routes';
import ResetVerifyCodeButton from './ResetVerifyCodeButton';
import {AuthButton} from '@shared/ui/Buttons';

export const RegisterVerify = () => {
  const [verify, {isLoading, isError}] = useVerifyRegistrationMutation();
  const [singup] = useRegisterMutation();
  const {state} = useLocation();
  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(60); // 60 секунд
  const [isActive, setIsActive] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isActive && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsReset(true);
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, countdown]);

  const formatCode = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 3) {
      return digits;
    } else {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}`;
    }
  };

  const validateInput = (input: string) => {
    const regex = /^.{7}$/; // Регулярное выражение для проверки 6 символов
    return regex.test(input);
  };

  const handleChange = (event: {target: {value: string}}) => {
    const {value} = event.target;
    const formattedCode = formatCode(value);
    setCode(formattedCode);
  };

  const startCountdown = () => {
    setIsActive(true);
    setCountdown(60);
    setIsReset(false);
  };

  const resetForm = () => {
    singup({
      data: {...state.data},
      params: state.params,
    });
    setCode('');
    setCountdown(60);
    setIsActive(true);
    setIsReset(false);
    startCountdown();
  };

  useEffect(() => {
    setIsValid(validateInput(code));
  }, [code]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsValid(validateInput(code));

    if (!isValid) return;

    verify({
      data: {...state.data, verification_code: code.split('-').join('')},
      params: state.params,
    }).then(res => {
      if (!res?.error) navigate(ROUTES.AUTH.SET_PASSWORD, {state: {...state}});
    });
  };

  return (
    <form className='mt-[32px]' onSubmit={e => handleSubmit(e)}>
      <VerifyCodeIput
        code={code}
        isValid={isValid}
        handleChange={handleChange}
      />
      <ResetVerifyCodeButton
        isReset={isReset}
        isActive={isActive}
        countdown={countdown}
        resetForm={resetForm}
      />
      <AuthButton isError={isError} isLoading={isLoading} text={'Tasdiqlash'} />
    </form>
  );
};
