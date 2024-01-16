import { ToolType } from "@/api/portfolio";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tool } from ".";

describe(Tool.name, () => {
  const onClick = jest.fn();
  const onHover = jest.fn();
  const testType = "react" as ToolType;
  it("snapshot", () => {
    const { asFragment } = render(
      <Tool
        name={testType}
        onClick={onClick}
        onHover={onHover}
        selectedTool={undefined}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("snapshot selected", () => {
    const { asFragment } = render(
      <Tool
        name={testType}
        onClick={onClick}
        onHover={onHover}
        selectedTool={testType}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("clicking icon calls onClick prop", async () => {
    const user = userEvent.setup();
    render(
      <Tool
        name={testType}
        onClick={onClick}
        onHover={onHover}
        selectedTool={testType}
      />
    );

    await user.click(screen.getByTestId(`${testType}_icon_button`));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onHover).toHaveBeenCalledTimes(1);
  });

  it("mouseover icon calls onHover prop", async () => {
    const user = userEvent.setup();
    render(
      <Tool
        name={testType}
        onClick={onClick}
        onHover={onHover}
        selectedTool={testType}
      />
    );

    await user.hover(screen.getByTestId(`${testType}_icon_button`));

    expect(onClick).toHaveBeenCalledTimes(0);
    expect(onHover).toHaveBeenCalledTimes(1);
  });
});
