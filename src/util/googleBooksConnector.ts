import axios from "axios";

const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

const handler = async (request: { params: { query: String; }; }) => {
  const { query } = request.params;
}

export {
  handler
}
