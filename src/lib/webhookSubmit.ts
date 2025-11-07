import { WEBHOOK_URL } from '../config/webhook';

/**
 * Sends data to the central n8n webhook.
 * @param formName - A string to identify the form (e.g., "Volunteer Form")
 * @param formData - The form's data object
 */
export const submitToN8n = async (formName: string, formData: object) => {
  try {
    const payload = {
      formName,
      ...formData
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Error submitting to n8n webhook:', error);
    return { success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};