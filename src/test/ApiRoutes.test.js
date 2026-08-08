import { afterEach, describe, expect, it, vi } from "vitest";
import newsletterHandler from "../pages/api/newsletter";
import contactHandler from "../pages/api/contact";

function createResponse() {
  const response = {
    setHeader: vi.fn(),
    status: vi.fn(),
    json: vi.fn(),
  };
  response.status.mockReturnValue(response);
  response.json.mockReturnValue(response);
  return response;
}

describe("server form routes", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("rejects invalid newsletter input before calling the provider", async () => {
    const response = createResponse();
    global.fetch = vi.fn();
    await newsletterHandler({ method: "POST", body: { email: "not-an-email" } }, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("keeps newsletter credentials on the server", async () => {
    vi.stubEnv("KIT_FORM_ID", "form-id");
    vi.stubEnv("KIT_API_KEY", "private-key");
    global.fetch = vi.fn().mockResolvedValue({ ok: true });
    const response = createResponse();
    await newsletterHandler({ method: "POST", body: { email: " Reader@Example.com " } }, response);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.kit.com/v3/forms/form-id/subscribe",
      expect.objectContaining({ body: JSON.stringify({ api_key: "private-key", email: "reader@example.com" }) }),
    );
    expect(response.status).toHaveBeenCalledWith(200);
  });

  it("forwards only explicit contact fields and a server timestamp", async () => {
    vi.stubEnv("SHEETS_ENDPOINT", "https://example.com/contact");
    vi.stubEnv("SHEETS_TAB_ID", "messages");
    global.fetch = vi.fn().mockResolvedValue({ ok: true });
    const response = createResponse();
    await contactHandler(
      { method: "POST", body: { name: " Ada ", email: "ADA@example.com", message: " Hello ", city: "Ignored" } },
      response,
    );

    const [, options] = global.fetch.mock.calls[0];
    const row = JSON.parse(options.body)[0];
    expect(row.slice(0, 3)).toEqual(["Ada", "ada@example.com", "Hello"]);
    expect(row).toHaveLength(4);
    expect(row[3]).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(response.status).toHaveBeenCalledWith(200);
  });
});
