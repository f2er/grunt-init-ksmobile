/* 
   * 模板名字
   * https://gruntjs.com/ 
   *
   * 版权信息
   * Licensed under the MIT license.
   */

  'use strict';

  // 模板简单介绍信息
  exports.description = '创建UED前端项目专属模板！';

  // 开始回答项目相关问题前，控制台打印的相关信息
  exports.notes = '这段信息出现位置：回答各种项目相关的信息之前 ' +
    '\n\n'+
    '逐个填写就行，如果不想填的会可以直接enter跳过';

  // 结束回答项目相关问题后，控制台打印出来的信息
  exports.after = 'UED前端项目主框架已经搭建好了，现在可以运行 ' +
    '\n\n' +
    '1、npm install 安装项目依赖的node模块\n'+
    '2、grunt 运行任务，包括文件压缩、合并、校验、引入等\n\n';

  // 如果运行grunt-init运行的那个目录下，有目录或文件符合warOn指定的模式
  // 则会跑出警告，防止用户不小心把当前目录下的文件覆盖了，一般都为*，如果要强制运行，可加上--force
  // 例：grunt-init --force grunt-init-ks
  exports.warnOn = '*';

  // The actual init template.
  exports.template = function(grunt, init, done) {

    init.process({type: 'grunt-init-ks'}, [
      // 项目创建的时候，需要回答的问题
      init.prompt('name'),
      init.prompt('title'),
      init.prompt('description', 'UED前端项目'),
      init.prompt('version', '0.0.1'),
      init.prompt('author_name'),
      init.prompt('author_email'),
    ], function(err, props) {
      props.keywords = [];
	  
      // 需要拷贝处理的文件，这句一般不用改它
      var files = init.filesToCopy(props);

      // 实际修改跟处理的文件，noProcess表示不进行处理
      init.copyAndProcess(files, props, {noProcess: ''});

      // 生成package.json，供Grunt、npm使用
      init.writePackageJSON('package.json', {
        name: 'KS',
        version: '0.0.0-ignored',
        npm_test: 'grunt qunit',
        node_version: '>= 0.8.0',
        devDependencies: {
			"grunt": "~0.4.1",
			"grunt-contrib-uglify": "~0.2.2",
			"grunt-contrib-cssmin": "~0.6.1",
			"grunt-contrib-concat": "~0.3.0",
			"grunt-contrib-imagemin": "~0.3.0",
			"grunt-contrib-htmlmin": "~0.1.3",
			"grunt-contrib-watch": "~0.4.4",
			"grunt-includes": "~0.3.5",
			"grunt-contrib-connect":"~0.5.0"
        },
      });

      // All done!
      done();
    });
  };