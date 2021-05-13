function AssetPreloadPlugin() {}
const fse = require("fse");

AssetPreloadPlugin.prototype.apply = function (compiler) {
	// 需要重复打包两次才会生效 即这次打包，预加载的是上次的资源文件。下次打包，预加载的队列，才是本次的
	// 原因：目前看来，应该是打包生成build/static文件夹，与webpack的代码编译是关联在一起的，无法通过这种方式，挂载到其中某个生命周期
	compiler.hooks.afterCompile.tap("AssetPreload", (compilation) => {
		const assetList = new Array();

		for (let filename in compilation.assets) {
			// TODO 补充其他资源
			if (filename.endsWith(".png")) {
				console.log(filename);
				assetList.push(filename);
			}
		}

		console.log("准备写入预加载的文件", assetList);

		if (assetList.length > 0) {
			fse
				.writeFile(
					"./src/page/preload/asset.js",
					`// 请注意，这份文件是自动生成的，通过自定义webpack插件编译
const assetList = [${assetList.map((item) => {
						return "'" + item + "'";
					})}];
export default assetList;
`
				)
				.then();
		}
	});
};

module.exports = AssetPreloadPlugin;
