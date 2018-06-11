/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

const Pay = props => (
  <Container
    padding={['bottom', 'top']}
    id="pay"
    background="light">
    <div class="donate"><h2>捐赠</h2></div>
    <div class="donate-content"><h3>项目的发展离不开你的支持，请作者喝杯咖啡吧！</h3></div>
    <GridBlock align="center" contents={[
      {
        image: imgUrl('wx_pay.png'),
        imageAlign: 'top',
        title: '微信二维码',
      },
      {
        image: imgUrl('ali_pay.png'),
        imageAlign: 'top',
        title: '支付宝二维码',
      },
    ]} layout="twoColumn" className="ewm pay"/>
  </Container>
);

const Users = [
    {
        "name": "blueandwh****", 
        "way": "微信支付", 
        "date": "2015-05-17", 
        "money": "2.00"
    }, 
    {
        "name": "王**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "10.00"
    }, 
    {
        "name": "台**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "10.00"
    }, 
    {
        "name": "陈**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "10.00"
    }, 
    {
        "name": "叶**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "2.00"
    }, 
    {
        "name": "竺**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "1.00"
    }, 
    {
        "name": "方**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "10.00"
    }, 
    {
        "name": "苏**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "1.00"
    }, 
    {
        "name": "陈**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "5.00"
    }, 
    {
        "name": "张**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "3.00"
    }, 
    {
        "name": "朱**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "10.00"
    }, 
    {
        "name": "屈**", 
        "way": "支付宝", 
        "date": "2015-06-10", 
        "money": "5.00"
    }, 
    {
        "name": "威", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "10.00"
    }, 
    {
        "name": "快乐E调", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "2.00"
    }, 
    {
        "name": "晶晶", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "2.00"
    }, 
    {
        "name": "李秀文", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "2.00"
    }, 
    {
        "name": "巴蒂", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "5.00"
    }, 
    {
        "name": "美食地图", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "10.00"
    }, 
    {
        "name": "李海龙", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "1.00"
    }, 
    {
        "name": "豆豆", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "4.50"
    }, 
    {
        "name": "陈雷", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "2.00"
    }, 
    {
        "name": "千陌", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "10.01"
    }, 
    {
        "name": "微控", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "10.00"
    }, 
    {
        "name": "ckaiii", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "9.99"
    }, 
    {
        "name": "狮子", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "8.80"
    }, 
    {
        "name": "郭茂镇", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "1.00"
    }, 
    {
        "name": "BEN", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "5.00"
    }, 
    {
        "name": "发型有点乱", 
        "way": "微信支付", 
        "date": "2015-06-10", 
        "money": "30.00"
    }, 
    {
        "name": "欧**", 
        "way": "支付宝", 
        "date": "2015-06-11", 
        "money": "10.00"
    }, 
    {
        "name": "王**", 
        "way": "支付宝", 
        "date": "2015-06-11", 
        "money": "5.00"
    }, 
    {
        "name": "叶**", 
        "way": "支付宝", 
        "date": "2015-06-11", 
        "money": "11.11"
    }, 
    {
        "name": "陈**", 
        "way": "支付宝", 
        "date": "2015-06-11", 
        "money": "10.24"
    }, 
    {
        "name": "罗**", 
        "way": "支付宝", 
        "date": "2015-06-11", 
        "money": "1.00"
    }, 
    {
        "name": "韩*", 
        "way": "支付宝", 
        "date": "2015-06-12", 
        "money": "200.00"
    }, 
    {
        "name": "王**", 
        "way": "支付宝", 
        "date": "2015-06-15", 
        "money": "10.00"
    }, 
    {
        "name": "King", 
        "way": "微信支付", 
        "date": "2015-07-05", 
        "money": "1.00"
    }, 
    {
        "name": "罗**", 
        "way": "支付宝", 
        "date": "2015-07-07", 
        "money": "10.00"
    }, 
    {
        "name": "王**", 
        "way": "支付宝", 
        "date": "2015-07-09", 
        "money": "20.00"
    }, 
    {
        "name": "孙*", 
        "way": "支付宝", 
        "date": "2015-07-26", 
        "money": "100.00"
    }, 
    {
        "name": "辣椒**", 
        "way": "支付宝", 
        "date": "2015-07-29", 
        "money": "20.00"
    }, 
    {
        "name": "俊*", 
        "way": "支付宝", 
        "date": "2015-08-05", 
        "money": "10.00"
    }, 
    {
        "name": "丁丁", 
        "way": "支付宝", 
        "date": "2015-09-03", 
        "money": "10.00"
    }, 
    {
        "name": "Nic", 
        "way": "微信支付", 
        "date": "2015-09-09", 
        "money": "1.00"
    }, 
    {
        "name": "追梦的南瓜", 
        "way": "微信支付", 
        "date": "2015-09-22", 
        "money": "50.00"
    }, 
    {
        "name": "飏", 
        "way": "微信支付", 
        "date": "2015-11-20", 
        "money": "5.00"
    }, 
    {
        "name": "creazy", 
        "way": "支付宝", 
        "date": "2015-11-28", 
        "money": "10.00"
    }, 
    {
        "name": "常*爷", 
        "way": "支付宝", 
        "date": "2015-11-28", 
        "money": "11.00"
    }, 
    {
        "name": "lmstill", 
        "way": "微信支付", 
        "date": "2015-12-12", 
        "money": "2.00"
    }, 
    {
        "name": "单号**3731637", 
        "way": "微信支付", 
        "date": "2016-01-01", 
        "money": "5.00"
    }, 
    {
        "name": "云淡", 
        "way": "微信支付", 
        "date": "2016-02-26", 
        "money": "10.00"
    }, 
    {
        "name": "祈安", 
        "way": "支付宝", 
        "date": "2016-03-03", 
        "money": "10.00"
    }, 
    {
        "name": "刘杰", 
        "way": "微信支付", 
        "date": "2016-03-11", 
        "money": "18.00"
    }, 
    {
        "name": "宇哲", 
        "way": "支付宝", 
        "date": "2016-03-15", 
        "money": "10.00"
    }, 
    {
        "name": "贵贵", 
        "way": "微信支付", 
        "date": "2016-03-20", 
        "money": "37.66"
    }, 
    {
        "name": "洋洋照我心", 
        "way": "微信支付", 
        "date": "2016-03-21", 
        "money": "1.00"
    }, 
    {
        "name": "亚鹏", 
        "way": "微信支付", 
        "date": "2016-03-24", 
        "money": "5.00"
    }, 
    {
        "name": "Li", 
        "way": "微信支付", 
        "date": "2016-04-06", 
        "money": "5.00"
    }, 
    {
        "name": "杨凯", 
        "way": "微信支付", 
        "date": "2016-04-07", 
        "money": "10.00"
    }, 
    {
        "name": "王永虎", 
        "way": "微信支付", 
        "date": "2016-04-28", 
        "money": "2.00"
    }, 
    {
        "name": "鄒丙鋒", 
        "way": "微信支付", 
        "date": "2016-04-30", 
        "money": "16.00"
    }, 
    {
        "name": "nil", 
        "way": "支付宝", 
        "date": "2016-05-02", 
        "money": "20.00"
    }, 
    {
        "name": "文敦复", 
        "way": "支付宝", 
        "date": "2016-05-04", 
        "money": "8.88"
    }, 
    {
        "name": "…", 
        "way": "微信支付", 
        "date": "2016-05-06", 
        "money": "5.00"
    }, 
    {
        "name": "果果爸", 
        "way": "微信支付", 
        "date": "2016-05-10", 
        "money": "10.00"
    }, 
    {
        "name": "周瑞峰", 
        "way": "微信支付", 
        "date": "2016-05-10", 
        "money": "10.00"
    }, 
    {
        "name": "小象00", 
        "way": "微信支付", 
        "date": "2016-05-11", 
        "money": "10.00"
    }, 
    {
        "name": "宿小帅", 
        "way": "支付宝", 
        "date": "2016-05-11", 
        "money": "30.00"
    }, 
    {
        "name": "双子座", 
        "way": "微信支付", 
        "date": "2016-05-16", 
        "money": "8.88"
    }, 
    {
        "name": "穷剩钱", 
        "way": "支付宝", 
        "date": "2016-05-18", 
        "money": "100.00"
    }, 
    {
        "name": "囊子", 
        "way": "支付宝", 
        "date": "2016-05-19", 
        "money": "100.00"
    }, 
    {
        "name": "辉", 
        "way": "支付宝", 
        "date": "2016-05-19", 
        "money": "60.00"
    }, 
    {
        "name": "蚂蚁", 
        "way": "微信支付", 
        "date": "2016-05-20", 
        "money": "1.00"
    }, 
    {
        "name": "CalvinO", 
        "way": "微信支付", 
        "date": "2016-05-25", 
        "money": "10.00"
    }, 
    {
        "name": "登琼", 
        "way": "支付宝", 
        "date": "2016-08-23", 
        "money": "18.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2016-09-15", 
        "money": "10.00"
    }, 
    {
        "name": "lancer", 
        "way": "支付宝", 
        "date": "2016-08-23", 
        "money": "5.00"
    }, 
    {
        "name": "谷人", 
        "way": "支付宝", 
        "date": "2016-09-13", 
        "money": "30.00"
    }, 
    {
        "name": "老马", 
        "way": "微信红包", 
        "date": "2016-09-15", 
        "money": "68.00"
    }, 
    {
        "name": "无忧何往", 
        "way": "支付宝", 
        "date": "2016-11-09", 
        "money": "10.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2016-11-17", 
        "money": "10.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2016-11-21", 
        "money": "1.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2016-11-26", 
        "money": "6.66"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2016-12-03", 
        "money": "30.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2016-12-03", 
        "money": "1.00"
    }, 
    {
        "name": "洪流", 
        "way": "支付宝", 
        "date": "2016-12-28", 
        "money": "5.00"
    }, 
    {
        "name": "思量行", 
        "way": "支付宝", 
        "date": "2017-01-11", 
        "money": "10.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2017-02-28", 
        "money": "5.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2017-03-06", 
        "money": "10.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2017-03-11", 
        "money": "50.00"
    }, 
    {
        "name": "", 
        "way": "微信支付", 
        "date": "2017-03-21", 
        "money": "2.00"
    }, 
    {
        "name": "BaiFan", 
        "way": "支付宝（针对ECharts）", 
        "date": "2017-03-28", 
        "money": "16.88"
    }
];

class Samples extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }
    const editUrl = siteConfig.repoUrl + '/edit/master/website/siteConfig.js';
    const showcase = siteConfig.users.map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

    return (
      <div className="mainContainer">
        <Pay/>
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>捐赠列表</h1>
              <p style={{
                margin: "10px",
                fontWeight: "bold"
              }}>感谢以下朋友的支持！</p>
              <table className="donate-list">
                <thead>
                  <th>捐赠者</th>
                  <th>渠道</th>
                  <th>日期</th>
                  <th>金额</th>
                </thead>
                <tbody>
                {Users.map(val => {
                  return (<tr key={val.name + val.way + val.date + val.money}>
                    <td className="name">{val.name}</td>
                    <td className="way">{val.way}</td>
                    <td className="date">{val.date}</td>
                    <td className="money">{val.money}</td>
                  </tr>)
                })}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Samples;
