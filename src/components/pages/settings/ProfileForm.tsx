import { EditProfilePicture } from "@/components/modules";
import { FormField } from "@/components/modules/Form/FormField";
import { SubmitButton } from "@/components/modules/Form/SubmitButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const profileSchema = z.object({
  yourName: z.string().nonempty("Your name is required"),
  userName: z.string().nonempty("Username is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
  dateOfBirth: z.string().nonempty("Date of birth is required"),
  presentAddress: z.string().nonempty("Present address is required"),
  permanentAddress: z.string().nonempty("Permanent address is required"),
  postalCode: z.string().nonempty("Postal code is required"),
  city: z.string().nonempty("City is required"),
  country: z.string().nonempty("Country is required"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      yourName: "Charlene Reed",
      userName: "Charlene Reed",
      email: "charlenereed@gmail.com",
      password: "**********",
      dateOfBirth: "1990-01-25",
      presentAddress: "San Jose, California, USA",
      permanentAddress: "San Jose, California, USA",
      postalCode: "45962",
      city: "San Jose",
      country: "USA",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-6xl mx-auto md:p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-8"
      >
        <EditProfilePicture src="/images/profile.png" />

        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="Your Name"
              name="yourName"
              register={register}
              error={errors.yourName?.message}
            />
            <FormField
              label="User Name"
              name="userName"
              register={register}
              error={errors.userName?.message}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              register={register}
              error={errors.email?.message}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />
            <FormField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              register={register}
              error={errors.dateOfBirth?.message}
            />
            <FormField
              label="Present Address"
              name="presentAddress"
              register={register}
              error={errors.presentAddress?.message}
            />
            <FormField
              label="Permanent Address"
              name="permanentAddress"
              register={register}
              error={errors.permanentAddress?.message}
            />
            <FormField
              label="City"
              name="city"
              register={register}
              error={errors.city?.message}
            />
            <FormField
              label="Postal Code"
              name="postalCode"
              register={register}
              error={errors.postalCode?.message}
            />
            <FormField
              label="Country"
              name="country"
              register={register}
              error={errors.country?.message}
            />
          </div>

          <div className="flex justify-end mt-6">
            <SubmitButton title="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};
