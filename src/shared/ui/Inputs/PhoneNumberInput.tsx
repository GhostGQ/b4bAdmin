import {FC} from 'react';
import {Control, Controller, FieldErrors} from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface IPhoneNumberInputProps {
  control: Control<any>;
  errors: FieldErrors<any>;
  margin?: string;
}

const PhoneNumberInput: FC<IPhoneNumberInputProps> = props => {
  const {control, errors, margin = '24px 0 16px 0'} = props;

  return (
    <Controller
      name='phone_number'
      control={control}
      rules={{
        minLength: 12,
        required: 'Phone number is required',
      }}
      render={({field: {value, onChange, onBlur}}) => (
        <PhoneInput
          country={'uz'}
          onlyCountries={['uz']}
          countryCodeEditable={false}
          placeholder='+998 XX XXX XX XX'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          buttonClass='text-sm font-semibold'
          containerStyle={{
            margin: margin,
          }}
          inputStyle={{
            width: '100%',
            height: '48px',
            borderColor: errors.number ? '#ef4444' : '#D9D9D9',
            borderRadius: '12px',
          }}
        />
      )}
    />
  );
};

export default PhoneNumberInput;
