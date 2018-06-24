/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

class ButtonGroup extends React.Component {
  render() {
    return (
      <PromoSection>
        {this.props.children.map((v, i) => {
          return <Button href={v.href} target={v.target}>{v.text}</Button>
        })}
      </PromoSection>
    );
  }
}

const Book = props => {
  return (
    <BlockWithImgAndBtns 
      id="book" 
      className="book" 
      btns={[
                {text: '试读章节', target: '_blank', href: 'https://blog.csdn.net/isea533/article/details/73555400'},
                {text: '京东', target: '_blank', href: 'https://item.jd.com/12103309.html'},
                {text: '当当', target: '_blank', href: 'http://product.dangdang.com/25098208.html'},
                {text: '亚马逊', target: '_blank', href: 'https://www.amazon.cn/MyBatis%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A-%E5%88%98%E5%A2%9E%E8%BE%89/dp/B072RC11DM/ref=sr_1_18?ie=UTF8&qid=1498007125&sr=8-18&keywords=mybatis'} 
            ]}
      imgUrl={imgUrl('book-small.png')}
      title="MyBatis 从入门到精通"
    >
    本书中从一个简单的 MyBatis 查询入手，搭建起学习 MyBatis 的基础开发环境。
    通过全面的示例代码和测试讲解了在 MyBatis XML 方式和注解方式中进行增、删、改、查操作的基本用法，介绍了动态 SQL 在不同方面的应用以及在使用过程中的最佳实践方案。
    针对 MyBatis 高级映射、存储过程和类型处理器提供了丰富的示例，通过自下而上的方法使读者更好地理解和掌握MyBatis 的高级用法，同时针对 MyBatis 的代码生成器提供了详细的配置介绍。
    此外，本书还提供了缓存配置、插件开发、Spring、Spring Boot 集成的详细内容。
    最后通过介绍 Git 和 GitHub 让读者了解MyBatis 开源项目，通过对 MyBatis 源码和测试用例的讲解让读者更好掌握 MyBatis。
    </BlockWithImgAndBtns>
  );
};

const BlockWithImgAndBtns = props => {
  var btns = props.btns && (<ButtonGroup>{props.btns}</ButtonGroup>);
  var className = "container paddingBottom paddingTop" + props.className;
  return (
    <div class={className} id={props.id}>
        <div class="wrapper">
            <div class="gridBlock">
                <div class="blockElement alignCenter imageAlignSide imageAlignLeft twoByGridBlock">
                    <div class="blockImage miniShow"><img src={props.imgUrl}/></div>
                    <div class="blockContent">
                      <h2>
                        <div><span><p>{props.title}</p></span></div>
                      </h2>
                      <div class="mdContent">
                        <span>
                          <p>
                            <MarkdownBlock>{props.children}</MarkdownBlock>
                          </p>
                        </span>
                      </div>
                      {btns}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

class Downloads extends React.Component {
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
        <Book/>

        <Container padding={['bottom', 'top']} background="light">
          <div className="showcaseSection">
            <div className="prose">
              <h1><a href="https://github.com/mybatis-book/book" target="_blank">GitHub 资料<br/>和 Issues 交流</a></h1>
            </div>
          </div>
        </Container>

        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>百度网盘下载</h1>
              <p>链接：<a href="https://pan.baidu.com/s/1xDTb_-ObVfd7Q4Ffs_sWjw" target="_blank">https://pan.baidu.com/s/1xDTb_-ObVfd7Q4Ffs_sWjw</a></p>
              <p>密码：bp7i</p>
            </div>
          </div>
        </Container>

      </div>
    );
  }
}

module.exports = Downloads;
