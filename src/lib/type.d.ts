interface Links {
  id: number;
  name: string;
}

interface ContactItem {
  icon: string;
  label: string;
  href?: string;
}

export type PasswordFieldName =
  | "oldPassword"
  | "newPassword"
  | "confirmPassword";
