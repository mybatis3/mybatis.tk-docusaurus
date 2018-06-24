/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

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
              <h1>Spring 集成示例</h1>
              <p>MyBatis 和 Spring 集成示例，只有基础的配置信息，没有任何现成的功能，作为新手入门搭建框架的基础。</p>
            </div>
            <ol>
              <li><a href="https://github.com/abel533/Mybatis-Spring" target="_blank">- 集成 Spring 4.x -</a></li>
              <li><a href="https://github.com/abel533/Mybatis-Spring/tree/spring3.x" target="_blank">- 集成 Spring 3.x -</a></li>
              <li><a href="https://github.com/abel533/Mybatis-Spring/tree/mybatis-oracle" target="_blank">- 集成 Spring 4.x (使用Oracle数据库) -</a></li>
              <li><a href="https://github.com/abel533/Mybatis-Spring/tree/spring4-simple" target="_blank">- spring4-simple (不含插件) -</a></li>
            </ol>
            <div className="prose">
              <p>前三个框架集成了分页插件 PageHelper 和通用 Mapper。</p>
              <p>最后一个 spring4-simple 没有集成任何插件。</p>
            </div>
          </div>
        </Container>


        <Container padding={['bottom', 'top']} background="light">
          <div className="showcaseSection">
            <div className="prose">
              <h1>Spring Boot 集成示例</h1>
              <p><a href="https://github.com/abel533/MyBatis-Spring-Boot" target="_blank">https://github.com/abel533/MyBatis-Spring-Boot</a></p>
              <p>上面这个项目集成了MyBatis 分页插件和 MyBatis 通用 Mapper。</p>
            </div>
          </div>
        </Container>

        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>脚手架 Guns</h1>
              <p>Guns 基于 SpringBoot 全面升级，完美整合 springmvc + shiro + <b>MyBatis 通用 Mapper + 分页插件 PageHelper</b> + beetl!</p>
              <p>本项目 fork 自 stylefeng 的 Guns！</p>
              <p><a href="https://github.com/abel533/guns" target="_blank">https://github.com/abel533/guns</a></p>
              <p><a href="https://gitee.com/free/guns" target="_blank">https://gitee.com/free/guns</a></p>
            </div>
          </div>
        </Container>


        <Container padding={['bottom', 'top']} background="light">
          <div className="showcaseSection">
            <div className="prose">
              <h1>响应式开源个人博客foblog</h1>
              <p>响应式开源个人博客（简洁清爽风格，<b>基于通用 Mapper 和 分页插件 PageHelper</b>）。</p>
              <p>项目 Fork 自 FireOct 的 fo-blog。</p>
              <p><a href="https://github.com/abel533/foblog" target="_blank">https://github.com/abel533/foblog</a></p>
              <p><a href="http://git.oschina.net/free/foblog" target="_blank">http://git.oschina.net/free/foblog</a></p>
            </div>
          </div>
        </Container>


        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>icadasCMSJava <br/> CMS 内容管理系统</h1>
              <p>springboot+mybatis+beetl 开发的一款CMS，支持自定义内容模型、模板标签、全文检索、全站静态化等功能。</p>
              <p>用了通用Mapper和分页插件PageHelper。</p>
              <p><a href="https://gitee.com/westboy/CicadasCMS" target="_blank">https://gitee.com/westboy/CicadasCMS</a></p>
            </div>
          </div>
        </Container>

        <Container padding={['bottom', 'top']} background="light">
          <div className="showcaseSection">
            <div className="prose">
              <h1>你的项目也使用了 <br/>PageHelper <br/>或 <br/> 通用 Mapper ?</h1>
            </div>
            <a href="https://github.com/mybatis-book/book/issues/52" target="_blank" className="button">
              添加你的项目
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Samples;
