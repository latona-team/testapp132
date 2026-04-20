import React from "react";
import PasswordField from "@/src/common/components/password-field";
import { PasswordFieldName } from "@/src/lib/type";

interface Props {
  togglePasswordModal: (open: boolean) => void;
  passwordData: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  showPasswordState: {
    oldPassword: boolean;
    newPassword: boolean;
    confirmPassword: boolean;
  };
  handlePasswordChange: (
    e: React.ChangeEvent<HTMLInputElement, Element>,
  ) => void;
  togglePasswordVisibility: (field: PasswordFieldName) => void;
  passwordErrors: string | null;
  handleSavePassword: () => void;
}

function ChangePassword({
  togglePasswordModal,
  passwordData,
  showPasswordState,
  handlePasswordChange,
  togglePasswordVisibility,
  handleSavePassword,
  passwordErrors,
}: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="change-password-title"
      onClick={(e) => {
        if (e.currentTarget === e.target) togglePasswordModal(false);
      }}
    >
      <div className="w-full max-w-md rounded-sm bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-center justify-center gap-2.5">
            <h2
              id="change-password-title"
              className="text-center font-mardoto-medium text-[20px] leading-7 tracking-[0.02em] text-[#1E2328] uppercase"
            >
              Change Password
            </h2>
            <p className="w-full text-center text-[14px] leading-4 text-[#5F6C72]">
              Enter your new password and confirm it below.
            </p>
          </div>

          <div className="h-px w-full bg-[#0261B9]" />

          <div className="flex flex-col gap-4">
            <PasswordField
              label="Old Password"
              name="oldPassword"
              value={passwordData.oldPassword}
              showPassword={showPasswordState.oldPassword}
              onChange={handlePasswordChange}
              onToggleVisibility={() => togglePasswordVisibility("oldPassword")}
            />
            <PasswordField
              label="New Password"
              name="newPassword"
              value={passwordData.newPassword}
              showPassword={showPasswordState.newPassword}
              onChange={handlePasswordChange}
              onToggleVisibility={() => togglePasswordVisibility("newPassword")}
            />
            <PasswordField
              label="Confirm Password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              showPassword={showPasswordState.confirmPassword}
              onChange={handlePasswordChange}
              onToggleVisibility={() =>
                togglePasswordVisibility("confirmPassword")
              }
            />
          </div>

          {passwordErrors ? (
            <p className="text-sm text-[#D14343]">{passwordErrors}</p>
          ) : null}

          <button
            type="button"
            onClick={handleSavePassword}
            disabled={
              !passwordData.oldPassword ||
              !passwordData.newPassword ||
              !passwordData.confirmPassword ||
              passwordData.newPassword !== passwordData.confirmPassword
            }
            className="mt-4 w-full rounded-sm bg-[#7BB0E2] py-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#6a9cd4] disabled:cursor-not-allowed disabled:bg-[#B8D4ED]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
