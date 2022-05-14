import { listOf } from "./src/Functions";

const list = listOf<string>("", "2", "3", "45", "123");
list.filter((element) => {
  return element == "";
});
