export const checkPhoneNumber = (phoneNumber: string): boolean => {
  const regex = new RegExp("^(0){1}9\\d{9}$");
  const result = regex.test(phoneNumber);
  return result;
};
