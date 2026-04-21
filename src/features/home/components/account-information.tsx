"use client";
import React, { useCallback, useState } from "react";
import Icon from "@/src/common/components/icon";
import Input from "@/src/common/components/input";
import ChangePassword from "@/src/common/components/change-password";
import { PasswordFieldName } from "@/src/lib/type";

function AccountInformation() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    zipCode: "",
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordErrors, setPasswordErrors] = useState<string | null>(null);

  const [showPasswordState, setShowPasswordState] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setPasswordData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const togglePasswordVisibility = useCallback((field: PasswordFieldName) => {
    setShowPasswordState((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }, []);

  const togglePasswordModal = useCallback((open: boolean) => {
    setShowPasswordModal(open);
    if (!open) {
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setPasswordErrors(null);
      setShowPasswordState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
      });
    }
  }, []);

  const handleSavePassword = useCallback(() => {
    if (
      !passwordData.oldPassword.trim() ||
      !passwordData.newPassword.trim() ||
      !passwordData.confirmPassword.trim()
    ) {
      setPasswordErrors("All password fields are required.");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordErrors("New password and confirm password must match.");
      return;
    }

    console.log("Save password", passwordData);
    setPasswordErrors(null);
    togglePasswordModal(false);
  }, [passwordData, togglePasswordModal]);

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        console.log("Image uploaded:", file);
      }
    },
    [],
  );

  return (
    <div className="w-full pt-10 px-5 pb-17.5 tablet:p-10 desktop:px-75 max-w-330 desktop:pl-0 desktop:pt-5 desktop:mx-auto">
      <button className="flex items-center justify-between bg-[#0261B9] text-white px-5 py-2.5 w-41.25 rounded-sm">
        <Icon name="user-white" size={20} />
        <span className="text-white text-[14px] leading-5 font-mardoto-regular">
          Account
        </span>

        <Icon name="down-right-white" size={12} />
      </button>

      <div className="bg-white rounded-lg pt-2.5">
        <div className="pl-5 py-4.25 bg-[#F2F4F5] rounded-sm">
          <div className=" flex justify-start items-center">
            <h2 className="font-medium text-[14px] leading-5 text-[#191C1F] ">
              Account Information
            </h2>
          </div>
        </div>
        <div className="border border-[#F2F4F5] px-5 pb-2.5 tablet:pt-10 tablet:pb-5">
          <div className="flex flex-col tablet:flex-row  tablet:gap-5">
            <div className="pt-5 tablet:pt-0 desktop:pt-5">
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center tablet:w-40 tablet:h-40 w-25 h-25 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 mb-3 overflow-hidden"
              >
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {imagePreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imagePreview}
                    alt="Profile preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center tablet:gap-2.5">
                    <Icon name="upload" />
                    <span className="text-[12px] leading-5 text-[#5F6C72] font-public-sans-medium tablet:text-[14px]">
                      Upload Image
                    </span>
                  </div>
                )}
              </label>
            </div>

            <div className="pt-1.75 tablet:pt-0 desktop:pt-5">
              <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-2">
                <Input
                  label="Name"
                  placeholder="Filled"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className=""
                />

                <Input
                  label="Surname"
                  placeholder="Filled"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className=""
                />

                <Input
                  label="Email"
                  placeholder="example@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className=""
                />

                <Input
                  label="Phone Number"
                  placeholder="+374 00 00 00 0 0"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className=""
                />

                <Input
                  label="Country/Region"
                  placeholder="Armenia"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className=""
                />

                <div className="tablet:flex-row tablet:items-center tablet:gap-4 flex flex-col gap-4">
                  <Input
                    label="City"
                    placeholder="Yerevan"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="tablet:max-w-43"
                  />

                  <Input
                    label="Zip Code"
                    placeholder="001"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="tablet:max-w-43"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2.5">
          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => togglePasswordModal(true)}
              className="rounded-sm bg-[#F2F4F5] py-3.75 pl-6 text-left w-full cursor-pointer h-12.5"
            >
              <span className="font-public-sans-medium text-[14px] leading-5 text-[#191C1F]">
                Change Password
              </span>
            </button>

            <div className="rounded-sm bg-[#F2F4F5] py-3.75 pl-6 cursor-pointer h-12.5">
              <p className="font-public-sans-medium text-[14px] leading-5 text-[#191C1F]">
                Delete Account
              </p>
            </div>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <ChangePassword
          handlePasswordChange={handlePasswordChange}
          handleSavePassword={handleSavePassword}
          passwordData={passwordData}
          passwordErrors={passwordErrors}
          showPasswordState={showPasswordState}
          togglePasswordModal={togglePasswordModal}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      )}
    </div>
  );
}

export default AccountInformation;
