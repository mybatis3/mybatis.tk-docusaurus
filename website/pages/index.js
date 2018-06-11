/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

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

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('docusaurus.svg')} />
        <div className="inner">
          <ProjectTitle />
          <ButtonGroup>
            {[
              {text: '加入QQ群', title: '群号: 674264017', target: '_blank', href: 'http://shang.qq.com/wpa/qunwpa?idkey=c36b92f02329b7d2f6510dc351a74becf602835956d57e8a92d229885673c310'}
            ]}
          </ButtonGroup>
        </div>
      </SplashContainer>
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

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} className={props.className}/>
  </Container>
);

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
    <div class="donate-list"><Button href={siteConfig.baseUrl + "donates.html"} target="_blank">捐赠列表</Button></div>
  </Container>
);

const Blog = props => {
  return (
    <Container
      padding={['bottom', 'top']}
      id="blog">
      <div class="blog-recommend"><h2>推荐阅读文章</h2></div>
      <GridBlock align="center" contents={[
        {
          content: '[深入了解 MyBatis 参数](http://blog.csdn.net/isea533/article/details/44002219)'
        },{
          content: '[MyBatis-Spring 配置简单了解](http://blog.csdn.net/isea533/article/details/45640319)'
        },{
          content: '[深入了解 MyBatis 返回值](http://blog.csdn.net/isea533/article/details/46442067)'
        },{
          content: '[Mybatis Geneator 详解](http://blog.csdn.net/isea533/article/details/42102297)'
        },{
          content: '[MyBatis 问题集](http://blog.csdn.net/column/details/mybatisqa.html)'
        },{
          content: '[MyBatis Geneator 中文文档](http://mbg.cndocs.tk/)'
        },{
          content: '[MyBatis 示例](http://blog.csdn.net/column/details/mybatis-sample.html)'
        },{
          content: ''
        },
      ]} layout="twoColumn" className="blog"/>
    </Container>
  );
}

const LibInfo = props => {
  var href = "https://maven-badges.herokuapp.com/maven-central/" + props.ga;
  var imgSrc = href + "/badge.svg";
  return (
    <Container
      padding={['bottom', 'top']}
      background={props.background}
      id={props.id}>
      <div class="lib-title"><h2>{props.title}</h2></div>
      <div class="version">
        <div class="version-title"><h4>当前版本</h4></div>
        <div class="version-img">
          <a href={href}>
          <img src={imgSrc} alt="Maven central"/></a>
          </div>
      </div>
      <GridBlock align="center" contents={props.children} layout={props.layout} className={props.id}/>
    </Container>
  );
}

const MyBatis = props => {
  return (
    <LibInfo id="mybatis" title="MyBatis 官方内容" 
             ga="org.mybatis/mybatis" layout="threeColumn"
             background="light">
      {[
        {
          title: '[源码地址](https://github.com/mybatis/mybatis-3)',
          content: '想要更近一步，尝试看看源码'
        },{
          title: '[官方文档](http://mybatis.github.io/mybatis-3/index.html)',
          content: '如果使用最新版本，建议看英文文档，中文文档也推荐看'
        },{
          title: '[MyBatis Spring 官方文档](https://mybatis.github.io/spring/index.html)',
          content: '和 Spring 集成的文档，包含很多细节'
        },
      ]}
    </LibInfo>
  );
}

const MyBatisBoot = props => {
  return (
    <LibInfo id="mybatis" title="Spring Boot Support for MyBatis" 
             ga="org.mybatis.spring.boot/mybatis-spring-boot" layout="threeColumn">
      {[
        {
          title: '[源码地址](https://github.com/mybatis/spring-boot-starter)',
        },{
          title: '[官方文档](http://www.mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/)',
        },{
          title: '[快速开始](https://github.com/mybatis/spring-boot-starter/wiki/Quick-Start)',
        },
      ]}
    </LibInfo>
  );
}

const PageHelper = props => {
  return (
    <LibInfo id="pagehelper" title="分页插件 PageHelper" 
             ga="com.github.pagehelper/pagehelper" layout="threeColumn"
             background="light">
      {[
        {
          title: '源码地址 [GitHub](https://github.com/pagehelper/Mybatis-PageHelper) && [Gitee](https://gitee.com/free/Mybatis_PageHelper)',
          content: '两个仓库数据同步，可以根据自己的需要选择，同时支持 issue 和 pr'
        },{
          title: '[如何使用?](https://github.com/pagehelper/Mybatis-PageHelper/blob/master/wikis/zh/HowToUse.md)',
          content: '循序渐进，一步一步配置分页插件'
        },{
          title: '[更新日志](https://github.com/pagehelper/Mybatis-PageHelper/blob/master/wikis/zh/Changelog.md)',
          content: '更新日志中包含了很多还没有完善到文档中的功能，使用遇到的问题时，可以先在更新日志查看'
        }
      ]}
    </LibInfo>
  );
}

const Mapper = props => {
  return (
    <LibInfo id="mapper" title="通用 Mapper" ga="tk.mybatis/mapper" layout="threeColumn">
      {[
        {
          title: '源码地址 [GitHub](https://github.com/abel533/Mapper) && [Gitee](https://gitee.com/free/Mapper)',
          content: '两个仓库数据同步，可以根据自己的需要选择，同时支持 issue 和 pr'
        },{
          title: '[官方文档](https://github.com/abel533/Mapper/wiki)',
          content: '文档非常全面，使用时注意查看文档'
        },{
          title: '[集成通用 Mapper](https://github.com/abel533/Mapper/wiki/1.integration)',
          content: 'Java 编码方式集成 && Spring 集成 && Spring Boot 集成'
        },{
          title: '[对象关系映射](https://github.com/abel533/Mapper/wiki/2.orm)',
          content: '通用 Mapper 使用 JPA 注解和自己提供的注解来实现对象关系映射，由于本章包含了很多细节，所以通过简单的示例先引领入门，然后在一步步深入去看详细的配置。'
        },{
          title: '[配置介绍](https://github.com/abel533/Mapper/wiki/3.config)',
          content: '由于数据库存在各种各样的差异，因此有些时候要做一些必要的配置。此外通用 Mapper 还提供了一些控制参数和一些和主键策略相关的参数。'
        },{
          title: '[常见问题](https://github.com/abel533/Mapper/wiki/faq)',
          content: '遇到任何问题请先看这里'
        }
      ]}
    </LibInfo>
  );
}

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
	<div><img src={props.src}/></div>
    <h2>微信公众号</h2>
  </div>
);

const VersionImg = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>{props.title}</h2>
    <div>
	  <img src={props.img_src} />
    </div>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

const Book = props => {
  return (
    <BlockWithImgAndBtns 
      id="book" 
      className="book" 
      btns={[
                {text: '试读章节', target: '_blank', href: 'https://blog.csdn.net/isea533/article/details/73555400'},
                {text: '资源下载', target: '_blank', href: siteConfig.baseUrl + 'downloads.html'},
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

class Index extends React.Component {
  render() {
    let language = this.props.language || '';
    /*博文推荐*/
    /*新书介绍*/
    /*捐赠链接 + 公众号 + 单独的捐赠页面和捐赠列表*/
    /*官方文档*/
    /*主要插件页面 - 分页插件*/
    /*主要插件页面 - 通用Mapper*/
    /*主要插件页面 - 其他插件*/
    /*示例页面*/
    /*作者信息*/
    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Book/>
          <PageHelper/>
          <Mapper/>
          <Pay/>
          <Blog/>
          <MyBatis/>
          <MyBatisBoot/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
