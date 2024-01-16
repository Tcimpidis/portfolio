import { ToolData } from "@/api/portfolio";
import { render } from "@testing-library/react";
import { ToolDetail } from ".";

describe(ToolDetail.name, () => {
  const props = { ...ToolData.react };
  it("snapshot", () => {
    const { asFragment } = render(<ToolDetail {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
