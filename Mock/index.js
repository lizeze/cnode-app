const Mock = require('mockjs');//mockjs 导入依赖模块
const util = require('./util');//自定义工具模块
//返回一个函数

let baseUrl = 'https://cnodejs.org/api/v1'
let Random = Mock.Random
module.exports = function (app) {

  Random.cname();
  Random.email();
  Random.date();
  Random.county(true);
  Random.ctitle();
  //监听http请求

  app.get('/topic/noreply', function (rep, res) {

    res.json(Mock.mock(
      {

        "data|5": [
          {
            "title|+1": ["@ctitle(10,35)"]
          }
        ]
      }
      )
    )
  })


  app.get('/user/userinfo', function (rep, res) {


    res.json(Mock.mock(
      {
        "array|10": [
          {
            "name|+1": [
              '@cname'
            ],
            "email|+1": ['@email'],
            "birthday|+1": ['@date("yyyy-MM-dd")'],
            "address|+1": ["'@county(true)'"],
            "title|+1": ['@ctitle(10, 25)']
          }
        ]
      }
    ));


  });
}

