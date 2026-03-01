import hyRequest from "./index";

export const fetchBooks = (count = 5) => {
  return hyRequest.post("/books", {
    page: 1,
    count,
  });
};
export const fetchBookDetail = (id: string) => {
  return hyRequest.get("/book/" + id);
};
