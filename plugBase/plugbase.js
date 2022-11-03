const fs = require('fs');

//DataBaseへの保存(初期化)
exports.baseCreate = (data) => {
  const date = Date.now();
  //渡されたtableをもとに保存先のurlを作成
  const url = `./plugBase/table/${data.table}.txt`;
  //他と一致しない文字列の生成(UNIX時間)とdataを混ぜるdatedataなんちゃって
  const table_id = `${date}_${data.data[0].data}`;
  //スクラップ関数でデータを扱える状態にクッキング
  const saveData = scrap(data.num, data);

  //書き込み！
  writer(url, `,"${table_id}": ${saveData}`);
}

function scrap(value, data) {
  let _data = "";
  for (let i = 0; i <= value; i++) {
    //data = JSON.(data)+',{"'+data.data[i].label+'": "'+data.data[i].data+'"}';
    save_id = data.data[i].label;
    save_data = data.data[i].data;
    _data = `${_data},"${save_id}": "${save_data}"`;
    if(i == 0){
      _data = `{"${save_id}": "${save_data}"`;
    }
  }
  return _data+"}";
}

const writer = async (file, data) =>{
  fs.appendFile(file, data, (err) => {
    if (err) throw err;
  });
};

exports.baseGet = function (data){
  const url = `./plugBase/table/${data.table}.txt`;
  let _data = fs.readFileSync(url, "utf-8");
  _data = JSON.parse(`{${_data}}`);
  return _data[data.table_id][data.data_label];
}