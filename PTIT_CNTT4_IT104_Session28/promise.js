function getDataFromAPI1() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API1 thành công");
            res();
        }, 1000);
    });
}

function getDataFromAPI2() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API2 thành công");
            res();
        }, 1000);
    });
}

function getDataFromAPI3() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API3 tải lên giao diện thành công");
            res();
        }, 1000);
    });
}

function runAllTask() {
    getDataFromAPI1()
        .then(() => getDataFromAPI2())
        .then(() => getDataFromAPI3())
        .then(()=>console.log("Hoan thanh"))
        .catch((error) => {
            console.log("Lỗi:", error);
        });
}

runAllTask();