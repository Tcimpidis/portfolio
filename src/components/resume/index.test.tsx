import { ResumeData } from "@/api/resume";
import { render } from "@testing-library/react";
import { ResumeDetail } from ".";

describe(ResumeDetail.name, () => {
  const { education } = ResumeData;
  const props = {
    detail: education[0],
  };
  it("snapshot", () => {
    const { asFragment } = render(<ResumeDetail {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
