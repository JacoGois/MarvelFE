import { Field } from "../Field";

export const MyAccountForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  isSubmitting,
  values = {},
  errors = {},
  className,
}) => {
  return (
    <form onSubmit={handleSubmit} className={className} >
        <h3 className="text-xl text-center mb-6 mt-12 font-bold">Personal Info</h3>
      <div className="space-y-4">
        <Field
          label="Name"
          type="text"
          name="name"
          value={values.name}
          placeholder="Your name"
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.name}
        />
        <Field
          label="Email"
          type="text"
          name="email"
          readOnly
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          label="Phone"
          type="text"
          name="phone"
          value={values.phone}
          placeholder="Your phone"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button
          type="submit"
          className="text-red-800 bg-gray-100 px-4 py-4 rounded-lg w-full font-bold"
        >
          Save
        </button>
      </div>
    </form>
  );
};
