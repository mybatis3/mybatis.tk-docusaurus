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

const LibInfo = props => {
  var href = "https://maven-badges.herokuapp.com/maven-central/" + props.ga;
  var imgSrc = href + "/badge.svg";
  var versionInfo = props.ga && (<div class="version">
        <div class="version-title"><h4>当前版本</h4></div>
        <div class="version-img">
          <a href={href}>
          <img src={imgSrc} alt="Maven central"/></a>
          </div>
      </div>);
  return (
    <Container
      padding={['bottom', 'top']}
      background={props.background}
      id={props.id}>
      <div class="lib-title"><h2>{props.title}</h2></div>
      {versionInfo}
      <GridBlock align="center" contents={props.children} layout={props.layout} className={props.id}/>
    </Container>
  );
}

const JdbcType = props => {
  return (
    <LibInfo id="jdbctype" title="JdbcType 自动配置插件" 
             layout="twoColumn"
             background="light">
      {[
        {
          title: '[源码地址](http://git.oschina.net/free/Mybatis_Utils/tree/master/JdbcType)'
        },
        {
          title: '使用 JdbcTypeInterceptor 拦截器',
          content: '运行时自动添加 jdbcType 属性'
        }
      ]}
    </LibInfo>
  );
}

const SqlHelper = props => {
  return (
    <LibInfo id="sqlhelper" title="SqlHelper - 获取sql" 
             layout="twoColumn">
      {[
        {
          title: '[源码地址](https://gitee.com/free/Mybatis_Utils/tree/master/SqlHelper)'
        },
        {
          title: '[相关文章](http://blog.csdn.net/isea533/article/details/40044417)',
          content: '如果你想在代码中获取 MyBatis 方法的 sql，你可以使用本工具'
        }
      ]}
    </LibInfo>
  );
}

const PerformanceInterceptor = props => {
  return (
    <LibInfo id="PerformanceInterceptor" title="PerformanceInterceptor 性能拦截器" 
             layout="twoColumn"
             background="light">
      {[
        {
          title: '[源码地址](https://gitee.com/free/Mybatis_Utils/tree/master/Performance)',
          content: '性能拦截器，用于输出每条 SQL 语句及其执行时间'
        },
        {
          title: '简单说明',
          content: '性能分析拦截器主要输出 Sql 以及 Sql 执行的时间，该拦截器会损失一定的整体性能，所以建议在测试环境使用，正式环境不建议使用。'
        }
      ]}
    </LibInfo>
  );
}

const CameHumpInterceptor = props => {
  return (
    <LibInfo id="CameHumpInterceptor" title="CameHumpInterceptor - 返回值 Map 结果的 Key 转为驼峰式" 
             layout="twoColumn">
      {[
        {
          title: '[源码地址](https://gitee.com/free/Mybatis_Utils/tree/master/CameHumpMap)',
          content: '例如返回结果中Map的 `{REAL_NAME:liuzh}` 会转换为 `{realName:liuzh}` '
        },
        {
          title: '[比插件更好的一种实现方式](https://blog.csdn.net/isea533/article/details/73435439)',
          content: '使用 `objectWrapperFactory` 来实现这个功能'
        }
      ]}
    </LibInfo>
  );
}

const ResultType = props => {
  return (
    <LibInfo id="ResultType" title="MyBatis 返回动态结果类型插件" 
             layout="twoColumn"
             background="light">
      {[
        {
          title: '[源码地址](https://gitee.com/free/Mybatis_Utils/tree/master/ResultType)',
          content: '可以在 MyBatis 参数中带上要返回的类型 Class，插件就会改变返回值类型为你指定的类型。'
        },
        {
          title: '[相关文章](http://blog.csdn.net/isea533/article/details/52831556)',
          content: '虽然写了这么一个插件，但是个人建议尽可能不去这么用，如果这个插件真正能方便你，使用起来也没任何问题。关于插件的一些个人修改建议，在插件的注释中有说明。'
        }
      ]}
    </LibInfo>
  );
}

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
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>其他插件</h1>
              <p>这里列举的插件基本上只有一个类，需要自己引入项目才可以使用</p>
            </div>
            <div className="logos">{showcase}</div>
            <p style={{margin: "0 auto"}}>欢迎推荐更多更好的 MyBatis 插件</p>
            <a href="https://github.com/mybatis-book/book/issues/51" target="_blank" className="button">
              添加插件
            </a>
          </div>
        </Container>
        <JdbcType/>
        <SqlHelper/>
        <PerformanceInterceptor/>
        <CameHumpInterceptor/>
        <ResultType/>
      </div>
    );
  }
}

module.exports = Samples;
