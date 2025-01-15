const subscribeToNewsletter = async (email) => {
  const formId = process.env.NEXT_PUBLIC_KIT_FORM_ID; // Ensure this is defined
  const apiEndpoint = `https://api.kit.com/v3/forms/${formId}/subscribe`;
  const apiKey = process.env.NEXT_PUBLIC_KIT_API_KEY; // Ensure this is defined

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const body = JSON.stringify({
    api_key: apiKey, // Include API key in the body
    email: email, // Subscriber email
    referrer: window.location.href, // Optional, add referrer URL
  });

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: headers,
      body: body,
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Subscription successful:", result);
      return { success: true, data: result };
    } else {
      console.error("Subscription failed:", result);
      return { success: false, error: result };
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false, error };
  }
};

export default subscribeToNewsletter;
