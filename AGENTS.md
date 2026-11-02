# 项目指引

这是 Xinliang Zhang（张鑫亮）的个人 GitHub 学术主页，基于 `luost26/academic-homepage` 模板，使用 Jekyll、Liquid、YAML 和 Bootstrap 4。维护时默认使用中文沟通，网站内容沿用所在文件的语言。

## 文件与内容

- `index.html`：当前首页，左侧个人信息，右侧简介、经历、新闻和精选论文。
- `index_layout2.html`：另一套首页布局；修改当前首页时先查看 `index.html`。
- `publications.html`：按年份展示论文；`showcase.html`：展示页。
- `_data/profile.yml`：姓名、联系方式、简介、教育经历、工作经历和奖项。
- `_data/authors.yml`：作者信息；`_data/navigation.yml`：导航；`_data/display.yml`：展示开关。
- `_publications/<年份>/*.md`：论文条目，使用 YAML front matter 保存标题、日期、作者、期刊/会议、封面和链接；`selected: true` 控制首页精选展示。
- `_news/*.md`：新闻条目；`_showcase/`：展示内容。
- `_layouts/`：页面骨架；`_includes/widgets/`：个人资料、论文、新闻和经历组件。
- `assets/css/global.css`：自定义样式；`assets/js/`：交互脚本；`assets/images/`：照片、徽标和论文封面；`assets/cv/`：简历。
- `_config.yml`：Jekyll 配置与 collections；`CNAME`：自定义域名 `zhangxinliang.top`。

## 开发与验证

在仓库根目录使用 Ruby 和 Bundler：

```sh
bundle install
bundle exec jekyll serve --port 5000
bundle exec jekyll build
```

`run.sh` 使用端口 5000。修改 `_config.yml` 后需要重启预览服务。仓库没有独立的自动化测试套件，也没有检入部署 workflow；不要推断远端 GitHub Pages 的具体设置。

内容或模板修改后，尽可能运行 Jekyll 构建；无法运行时说明缺少的环境。布局调整需要检查桌面和移动端显示、导航及资源路径。不要提交 `_site/`、缓存、`vendor/` 或其他构建产物。

## 维护约定

- 优先修改已有 YAML 数据和 Liquid 组件，保留现有静态站点架构。
- 网站默认中文，导航栏 CN / EN 切换并记住选择。双语内容保留英文原字段、增加对应 `*_zh` 字段，使用 `_includes/i18n.html` 渲染；语言逻辑在 `assets/js/language.js`。
- 论文标题、摘要、作者、期刊/会议名称、发表信息及成果标签始终保留原文，不添加中文译文字段；中英文切换不改变论文原文。
- 学术事实、作者顺序、论文状态、日期和外部链接以用户提供的材料为准，不自行补写成果。
- 新增条目遵循相邻文件的 front matter 字段和目录组织；检查 YAML 缩进、Liquid 语法与链接。
- 使用 UTF-8 读写文件，保留中英文内容；终端出现乱码时先核查编码，不批量替换原文。
- 资源路径注意大小写，GitHub Pages 上大小写敏感；例如简历实际文件是 `assets/cv/resume.pdf`。
- `_data/display.yml` 中部分开关和 `order` 尚未被当前首页使用。调整展示行为时同时核对模板，不能只依据配置名称判断生效情况。
- 保留自定义域名和模板署名，除非用户要求修改。
- 完成任务时说明实际改动与验证结果；未经要求不提交或推送。
