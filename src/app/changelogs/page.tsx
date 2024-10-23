import { getChangeLogs } from "@/lib";
import ChangelogsContent from "./changelogsContent";

const Changelog = async () => {
  const changelogData = await getChangeLogs();

  return <ChangelogsContent changeLogs={changelogData} />;
};

export default Changelog;
