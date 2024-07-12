import http from './rq';

export function queryList(pageNum,pageSize,isApprove,title){
    //biz/score/list post
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
        }
    }
    const data = {
        "pageNum": pageNum,
        "pageSize": pageSize,
        "isApprove": isApprove,
        "title": title
    }
    return http.post('/biz/score/list', data, config);
}

export function queryDetail(itemId){
    //biz/dsitems/info get
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token'),
        }
    }
    return http.get('/biz/dsitems/info?itemId='+itemId, config);
}

export function approveItem(itemId,mark,baogao,jiaoan,shipin,fangan,biaozhun,shuoming){
  // biz/score/add
    const config = {
        headers: {
            'Authorization': localStorage.getItem('token'),
        }
    }
    const data = {
        "itemId": itemId,
        "mark": mark,
        "dimension1": baogao,
        "dimension2": jiaoan,
        "dimension3": shipin,
        "dimension4": fangan,
        "dimension5": biaozhun,
        "dimension6": shuoming
    }
    return http.post('/biz/score/add', data, config);
}