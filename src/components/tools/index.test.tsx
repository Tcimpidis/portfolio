import { ToolData, ToolType } from "@/api/portfolio";
import { WindowSize } from "@/common/hooks/types";
import { useWindowSize } from "@/common/hooks/useWindowSize";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useSearchParams } from "next/navigation";
import { ToolList } from ".";

jest.mock("../../common/hooks/useWindowSize");

describe(ToolList.name, () => {
  it("snapshot", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (value: any) => undefined,
    });
    (useWindowSize as jest.Mock).mockReturnValue({
      width: WindowSize.XL,
    });
    const { asFragment } = render(<ToolList toolData={ToolData} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("snapshot with URL params", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (value: any) => {
        tool: "TypeScript";
      },
    });
    (useWindowSize as jest.Mock).mockReturnValue({
      width: WindowSize.XL,
    });
    const { asFragment } = render(<ToolList toolData={ToolData} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("snapshot use windowsize is large", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (value: any) => {
        tool: "TypeScript";
      },
    });
    (useWindowSize as jest.Mock).mockReturnValue({
      width: WindowSize.LG,
    });
    const { asFragment } = render(<ToolList toolData={ToolData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe("integration", () => {
    const cSharp = "CSharp" as ToolType;
    const angular = "angular" as ToolType;
    const cssModules = "CSS-Modules" as ToolType;
    it("User hovers over and selects icons - with query params", async () => {
      (useSearchParams as jest.Mock).mockReturnValue({
        get: (value: any) => {
          tool: "TypeScript";
        },
      });
      const user = userEvent.setup();

      (useWindowSize as jest.Mock).mockReturnValue({
        width: WindowSize.XL,
      });
      await act(() => {
        render(<ToolList toolData={ToolData} />);
      });

      expect(
        screen.queryByText(ToolData.react.displayName)
      ).toBeInTheDocument();

      await user.hover(screen.getByTestId(`${cSharp}_icon_button`));

      expect(
        screen.queryByText(ToolData.react.displayName)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(ToolData.CSharp.displayName)
      ).toBeInTheDocument();

      await user.click(screen.getByTestId(`${angular}_icon_button`));

      expect(
        screen.queryByText(ToolData.CSharp.displayName)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(ToolData.angular.displayName)
      ).toBeInTheDocument();

      await user.hover(screen.getByTestId(`${cssModules}_icon_button`));

      expect(
        screen.queryByText(ToolData.angular.displayName)
      ).toBeInTheDocument();
      expect(
        screen.queryByText(ToolData["CSS-Modules"].displayName)
      ).not.toBeInTheDocument();

      await user.click(screen.getByTestId(`${cssModules}_icon_button`));

      expect(
        screen.queryByText(ToolData.angular.displayName)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(ToolData["CSS-Modules"].displayName)
      ).toBeInTheDocument();

      await user.click(screen.getByTestId(`${cssModules}_icon_button`));

      expect(
        screen.queryByText(ToolData["CSS-Modules"].displayName)
      ).toBeInTheDocument();

      await user.hover(screen.getByTestId("react_icon_button"));

      expect(
        screen.queryByText(ToolData.react.displayName)
      ).toBeInTheDocument();
      expect(
        screen.queryByText(ToolData["CSS-Modules"].displayName)
      ).not.toBeInTheDocument();
    });
  });
});
