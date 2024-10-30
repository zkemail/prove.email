import { getChangeLogs } from "@/lib";
import ChangelogsContent from "./changelogsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZK Email | Changelogs",
};

const Changelog = async () => {
  const changelogData = await getChangeLogs();

  return <ChangelogsContent changeLogs={changelogData} />;
};

export default Changelog;
