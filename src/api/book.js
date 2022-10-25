import request from '@/utils/request'

export function bookList(query) {
    return request({
        url: '/api/book/all',
        method: 'get',
        params: query
    })
}



export function bookNumber(query) {
    return request({
        url: '/api/book/number/all',
        method: 'get',
        params: query
    })
}

export function bookRentedNumber(query) {
    return request({
        url: '/api/book/number/rent',
        method: 'get',
        params: query
    })
}

export function bookAvailableNumber(query) {
    return request({
        url: '/api/book/number/available',
        method: 'get',
        params: query
    })
}

