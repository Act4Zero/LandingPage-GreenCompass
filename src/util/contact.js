const submitContactForm = async (data) => {
  const endpoint = `${process.env.NEXT_PUBLIC_SHEETS_ENDPOINT}?tabId=${process.env.NEXT_PUBLIC_SHEETS_TAB_ID}`; // Ensure these environment variables are defined

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // Transform data into a 2D array
  const body = JSON.stringify([
    [
      data.name, // Column 1: Name
      data.email, // Column 2: Email
      data.message, // Column 3: Message
      data.date, // Column 4: Date
      data.country, // Column 5: Country
      data.city, // Column 6: City
    ],
  ]);


  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: body,
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Contact form submission successful:", result);
      return { success: true, data: result };
    } else {
      console.error("Contact form submission failed:", result);
      return { success: false, error: result };
    }
  } catch (error) {
    console.error(
      "An error occurred while submitting the contact form:",
      error
    );
    return { success: false, error };
  }
};

export default submitContactForm;
