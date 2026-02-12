import { getMenu } from "./apiRestaurant";

export default async function loader() {
  const menu = await getMenu();
  return menu;
}
