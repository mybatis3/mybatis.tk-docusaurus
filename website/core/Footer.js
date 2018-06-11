/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>文档</h5>
            <a href="https://github.com/pagehelper/Mybatis-PageHelper/blob/master/wikis/zh/HowToUse.md" target="_blank">
              如何使用分页插件?
            </a>
            <a href="https://github.com/abel533/Mapper/wiki" target="_blank">
              如何使用通用 Mapper?
            </a>
            <a href="http://mybatis.github.io/mybatis-3/index.html" target="_blank">
              MyBatis 文档
            </a>
            <a href="http://www.mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/" target="_blank">
              MyBatis Starter 文档
            </a>
            <a href="https://mybatis.github.io/spring/index.html" target="_blank">
              MyBatis Spring 文档
            </a>
          </div>
          <div>
            <h5>社区</h5>
            <a href="http://shang.qq.com/wpa/qunwpa?idkey=c36b92f02329b7d2f6510dc351a74becf602835956d57e8a92d229885673c310" target="_blank">
              加入 QQ 群
            </a>
            <a href="https://gitter.im/mybatis-3/Lobby" target="_blank">
              Chat On Gitter
            </a>
            <a href="https://github.com/mybatis-book/book/issues" target="_blank">
              GitHub Issue
            </a>
            <a href="http://tieba.baidu.com/f?kw=mybatis" target="_blank">
              贴吧
            </a>
          </div>
          <div>
            <h5>更多</h5>
            <a href="https://blog.csdn.net/isea533" target="_blank">
              偶尔记一下
            </a>
            <a href="https://github.com/abel533" target="_blank">
              GitHub
            </a>
          </div>
        </section>
        <a
          href="https://code.facebook.com/projects/"
          style={{display:"none"}}
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/oss_logo.png'}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
