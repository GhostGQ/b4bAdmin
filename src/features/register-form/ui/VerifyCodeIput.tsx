import clsx from 'clsx';

interface Props {
  code: string;
  isValid: boolean;
  handleChange: (event: {target: {value: string}}) => void;
}

const VerifyCodeIput = (props: Props) => {
  const {code, handleChange, isValid} = props;

  return (
    <input
      type='text'
      id='codeInput'
      value={code}
      onChange={handleChange}
      maxLength={7}
      className={clsx(
        `w-full h-[48px] border border-[#D9D9D9] rounded-[10px] px-4  py-2 focus:outline-none`,
        isValid ? 'border-[#D9D9D9]' : 'border-red-500'
      )}
      placeholder='xxx-xxx'
    />
  );
};

export default VerifyCodeIput;
