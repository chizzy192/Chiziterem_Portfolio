
interface FormInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
}
const FormInput = (props: FormInputProps) => {
  return (
    <input 
      type={props.type} 
      className="w-full bg-(--accent-bg) h-auto  border-0 text-[16px] p-2  rounded-xl focus:rounded-xl flex px-2 hover:outline-3 focus-within:outline-3 outline-(--accent) shadow-xs items-center" 
      required 
      placeholder={props.placeholder} 
      onChange={props.onChange} 
      value={props.value} 
    />
  )
}

export default FormInput
