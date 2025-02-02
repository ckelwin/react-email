import { render } from "@react-email/render";
import { Body } from "./index";

describe("render", () => {
  it("renders the <Body> component", () => {
    const actualOutput = render(<Body>Lorem ipsum</Body>);
    expect(actualOutput).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><body data-id=\\"__react-email-body\\">Lorem ipsum</body>"`,
    );
  });
});
