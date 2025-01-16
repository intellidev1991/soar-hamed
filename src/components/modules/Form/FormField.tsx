import { UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  register,
  error,
}) => (
  <div className="space-y-2">
    <label className="text-darkBlue">{label}</label>
    <input
      type={type}
      {...register(name)}
      className="w-full p-2 border rounded-lg text-skyBlue focus:ring-2 focus:ring-lightBlue focus:border-transparent"
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);
