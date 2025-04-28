import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Button } from "@/components/shared";
import { CgSpinner } from "react-icons/cg";
import ModalContainer from "../../../shared/modal-container";
import { Check, Alert } from "@/assets/svgs";

interface Props {
  open: boolean;
  onClose: () => void;
}

type AddMetaAssetsFormFields = {
  username: string; // Username input
  email: string; // Email input
  numberOfAssets: number; // Number of meta assets to add
};

export const AddMetaAssetsModal: React.FC<Props> = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddMetaAssetsFormFields>();

  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const onSubmit = async (data: AddMetaAssetsFormFields) => {
    setSuccess(false);
    setFailure(false);

    // Simulating API request
    try {
      // Example of form data being sent to an API
      const isSuccess = Math.random() > 0.3; // 70% chance of success
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay

      if (isSuccess) {
        setSuccess(true);
        reset();
      } else {
        throw new Error("Something went wrong while adding meta assets.");
      }
    } catch (error: any) {
      setFailure(true);
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  const handleClose = () => {
    reset();
    setSuccess(false);
    setFailure(false);
    setErrorMessage("");
    onClose();
  };

  useEffect(() => {
    if (open) {
      reset();
      setSuccess(false);
      setFailure(false);
      setErrorMessage("");
    }
  }, [open, reset]);

  return (
    <ModalContainer
      modalId="add-meta-assets-modal"
      isOpen={open}
      onClose={handleClose}
      modalContentClassName="h-auto rounded-xl sm:max-w-[566px] max-w-[343px]"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      <div className="flex w-full flex-col gap-6">
        {!success && !failure && (
          <>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-normal text-white sm:text-xl">
                Add Meta-Assets
              </h3>
              <IoIosCloseCircleOutline
                onClick={handleClose}
                className="size-6 cursor-pointer fill-white stroke-2"
              />
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className="peer relative w-full rounded-xl bg-primary py-3 pl-6 pr-4 text-base font-thin text-white outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                />
                {errors.email && (
                  <p className="text-xs text-red-shade-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Number of Meta Assets Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="numberOfAssets" className="text-xs text-white">
                  Number of Meta Assets
                </label>
                <input
                  type="number"
                  id="numberOfAssets"
                  placeholder="Enter the number of meta assets"
                  {...register("numberOfAssets", {
                    required: "Number of meta assets is required.",
                    min: {
                      value: 1,
                      message: "Minimum meta assets to add is 1.",
                    },
                  })}
                  className="peer relative w-full rounded-xl bg-primary py-3 pl-6 pr-4 text-base font-thin text-white outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                />
                {errors.numberOfAssets && (
                  <p className="text-xs text-red-shade-2">
                    {errors.numberOfAssets.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                title="Add Meta Assets"
                className="mt-4 w-full text-sm md:text-base"
                loaderIcon={
                  isSubmitting && (
                    <CgSpinner className="mx-auto size-5 animate-spin" />
                  )
                }
              />
            </form>
          </>
        )}

        {success && (
          <div className="flex flex-col items-center gap-6 text-center">
            <Check />
            <h3 className="text-lg text-white">
              Meta Assets Added Successfully
            </h3>
            <Button
              title="Continue"
              className="mt-4 w-full text-sm md:text-base"
              onClick={handleClose}
            />
          </div>
        )}

        {failure && (
          <div className="flex flex-col items-center gap-6 text-center">
            <Alert />
            <h3 className="text-lg text-white">Meta Assets Transfer Failed</h3>
            <p className="text-sm text-gray-shade-5">{errorMessage}</p>
            <Button
              title="Retry"
              className="mt-4 w-full text-sm md:text-base"
              onClick={handleClose}
            />
          </div>
        )}
      </div>
    </ModalContainer>
  );
};
