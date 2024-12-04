import HomePage from "./tabs/index";
import { DataProvider } from "../DataContext";

export default function Page() {
  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  );
}