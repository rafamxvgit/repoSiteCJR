import Image from "next/image";
import Link from "next/link"
import loginPage from "./loginPage/page";
import HeaderDeslogado from "./components/headerDeslogado";

export default function Home() {
  return (
    <main>
      <HeaderDeslogado />
      <h1>main page</h1>
    </main>
  );
}
