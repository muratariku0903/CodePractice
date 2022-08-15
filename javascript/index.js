import dayjs from 'dayjs';
import got from 'got';
import "dayjs/locale/ja.js";
dayjs.locale('ja');

// const data = await got.get('https://github.com/nicolas-cusan/destyle.css/blob/master/destyle.css');

const callback = (fileInfo) => {
    console.log(fileInfo);
}



const addContents = async(this.callback) => {
    const callback = res => {
        // console.log(res);
        return res;
    }

    for (const url of urls) {
        const data = fetch(url, callback);
        console.log(data);
    }

    // console.log(contents);

    return contents;
}

getContents(fileInfo).then(res => {
    const contents = res.body;
    fs.appendFile(conte,);
})

// 非同期処理で取得した結果をPromiseではなく、同期的に返したい

const fetch = async (url, callback) => {
    return got.get(url).then(res => {
        callback(res);
    }).catch(e => {
        console.log(e);
    });
}

const contents = '';
const res = addContents(contents, ['https://github.com/nicolas-cusan/destyle.css/blob/master/destyle.css']);

// console.log(res.contents);

