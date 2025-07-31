import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "@/hooks/useTranslations";

interface BouncyComponentProps {
  disabled?: boolean;
}

const BouncyComponent: React.FC<BouncyComponentProps> = ({ disabled }) => {
  const { setValue, watch } = useFormContext();
  const { t } = useTranslations(); // Hook de traducciones
  const selectedOption = watch("projectType") || "projectType";

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("projectType", event.target.value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white text-black ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
    >
      <div className="radio-group relative grid grid-cols-3 w-full">
        <input
          type="radio"
          id="landing-page"
          name="projectType"
          value="landing-page"
          checked={selectedOption === "landing-page"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="landing-page"
          className={`${
            selectedOption === "landing-page" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-6`}
        >
          <span className="md:hidden">{t("contact.project_types.landing")}</span>{" "}
          <span className="hidden md:block">{t("contact.project_types.landing")}</span>
        </label>

        <input
          type="radio"
          id="e-commerce"
          name="projectType"
          value="e-commerce"
          checked={selectedOption === "e-commerce"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="e-commerce"
          className={`${
            selectedOption === "e-commerce" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-0`}
        >
          {t("contact.project_types.ecommerce")}
        </label>

        <input
          type="radio"
          id="other"
          name="projectType"
          value="other"
          checked={selectedOption === "other"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <label
          htmlFor="other"
          className={`${
            selectedOption === "other" ? "text-white" : "text-black"
          } hidden z-10 font-archivo font-normal text-xl py-2 px-6`}
        >
          {t("contact.project_types.other")}
        </label>

        <div className="selection-indicator-wrapper absolute top-1/2 h-full w-1/3 transform -translate-y-1/2">
          <span className="block h-full bg-black rounded-full transition-all duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default BouncyComponent;
