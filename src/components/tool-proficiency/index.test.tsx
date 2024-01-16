import { ToolProficiencyEnum } from "@/api/portfolio";
import { render } from "@testing-library/react";
import { ToolProficiency } from ".";

describe(ToolProficiency.name, () => {
  it("snapshot - proficiency novice", () => {
    const { asFragment } = render(
      <ToolProficiency proficiency={ToolProficiencyEnum.novice} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("snapshot - proficiency intermediate", () => {
    const { asFragment } = render(
      <ToolProficiency proficiency={ToolProficiencyEnum.intermediate} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("snapshot - proficiency professional", () => {
    const { asFragment } = render(
      <ToolProficiency proficiency={ToolProficiencyEnum.professional} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("snapshot - proficiency expert", () => {
    const { asFragment } = render(
      <ToolProficiency proficiency={ToolProficiencyEnum.expert} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
