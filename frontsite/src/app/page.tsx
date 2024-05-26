import { redirect } from "next/navigation";

export default function Home() {
  redirect("/noLog/feed")
  return (<></>);
}
