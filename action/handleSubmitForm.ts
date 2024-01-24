'use server'
interface FormData {
  name: string;
  email: string;
  contact: string;
}

export const handleSubmitForm = async (
  name: string,
  email: string,
  contact: string
): Promise<void> => {
  console.log({ name, email, contact });
};
