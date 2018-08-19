// export const host_dev = 'http://rendongyue.free.ngrok.cc';
const host_dev = 'http://pet.free.ngrok.cc';

function ajax(url,method,params){
    return  new Promise(function(resolve, reject) {
        wx.request({
            url: `${host_dev}${url}`,
            method: method,
            data: params,
            dataType: 'json',
            success: res =>{
                resolve(res.data);
            },
            fail: err => {
                reject(err);
            }
        });
    });
}
export {
    host_dev,
    ajax,
}