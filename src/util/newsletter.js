const subscribeToNewsletter = async (email) => {
  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const result = await response.json();
    return {
      success: response.ok && result.success,
      message: result.message,
    };
  } catch {
    return { success: false, message: "We couldn’t subscribe you just now. Please try again." };
  }
};

export default subscribeToNewsletter;
