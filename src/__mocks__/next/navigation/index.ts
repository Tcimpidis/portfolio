module.exports = {
  ...jest.requireActual("next/navigation"),
  useSearchParams: jest.fn(),
};
