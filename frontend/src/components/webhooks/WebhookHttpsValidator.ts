export interface WebhookValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateWebhookEndpointUrl(urlStr: string): WebhookValidationResult {
  if (!urlStr || urlStr.trim() === '') {
    return { isValid: false, error: 'Webhook URL cannot be empty' };
  }

  try {
    const parsed = new URL(urlStr);
    const isLocalhost = parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1';

    if (parsed.protocol === 'https:' || (parsed.protocol === 'http:' && isLocalhost)) {
      return { isValid: true };
    }

    return { isValid: false, error: 'Webhook endpoint must use secure HTTPS protocol (HTTP allowed only for localhost)' };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}
