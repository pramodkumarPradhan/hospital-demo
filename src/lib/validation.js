// Form validation utilities

export const validateName = (name) => {
  if (!name || name.trim().length === 0) {
    return "Name is required";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name can only contain letters and spaces";
  }
  return null;
};

export const validatePhone = (phone) => {
  if (!phone || phone.trim().length === 0) {
    return "Phone number is required";
  }
  // Indian phone number validation (10 digits)
  if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ""))) {
    return "Please enter a valid 10-digit phone number";
  }
  return null;
};

export const validateDepartment = (dept) => {
  if (!dept || dept.trim().length === 0) {
    return "Please select a department";
  }
  return null;
};

export const validateAppointmentForm = (formData) => {
  const errors = {};

  const nameError = validateName(formData.name);
  if (nameError) errors.name = nameError;

  const phoneError = validatePhone(formData.phone);
  if (phoneError) errors.phone = phoneError;

  const deptError = validateDepartment(formData.dept);
  if (deptError) errors.dept = deptError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
