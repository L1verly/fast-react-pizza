import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

export default function UpdateOrder() {
  const fetcher = useFetcher();

  function handleClick() {}

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" onClick={handleClick}>
        Make Priority
      </Button>
    </fetcher.Form>
  );
}
