const submitContactForm = async ({ name, email, message }) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    const result = await response.json();
    return {
      success: response.ok && result.success,
      message: result.message,
    };
  } catch {
    return { success: false, message: "We couldn’t send your message. Please try again." };
  }
};

export default submitContactForm;
