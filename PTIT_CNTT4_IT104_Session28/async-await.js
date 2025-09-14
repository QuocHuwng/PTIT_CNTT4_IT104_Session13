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
        }, 1500);
    });
}

function getDataFromAPI3() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API3 tải lên giao diện thành công");
            res();
        }, 2000);
    });
}

async function runAllTask() {
    try {
        await getDataFromAPI1();
        await getDataFromAPI2();
        await getDataFromAPI3();
        console.log("✅ Tất cả dữ liệu đã được xử lý xong!");
    } catch (error) {
        console.log("Error:", error);
    }
}

runAllTask();