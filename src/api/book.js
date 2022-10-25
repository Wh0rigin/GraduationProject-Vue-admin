import request from "@/utils/request";
import qs from "qs";
export function bookList(query) {
  return request({
    url: "/api/book/all",
    method: "get",
    params: query,
  });
}

export function bookListNonDto(query) {
  return request({
    url: "/api/book/all/nondto",
    method: "get",
    params: query,
  });
}

export function deleteBook(data) {
  return request({
    url: "/api/book/delete",
    method: "delete",
    config: { data: qs.stringify(data) },
    data: qs.stringify(data),
    params:data
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
}

export function searchBook(data) {
    return request({
      url: "/api/book/select/nondto/isbn/"+data.isbn,
      method: "get",
    //   config: { data: qs.stringify(data) },
    //   data: qs.stringify(data),
    //   params:data
      // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
  }

export function createBook(data) {
  return request({
    url: "/api/book/create",
    method: "post",
    data: qs.stringify(data),
  });
}

export function bookNumber(query) {
  return request({
    url: "/api/book/number/all",
    method: "get",
    params: query,
  });
}

export function bookRentedNumber(query) {
  return request({
    url: "/api/book/number/rent",
    method: "get",
    params: query,
  });
}

export function bookAvailableNumber(query) {
  return request({
    url: "/api/book/number/available",
    method: "get",
    params: query,
  });
}
