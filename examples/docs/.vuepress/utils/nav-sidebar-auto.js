const fs = require('fs');
const path = require('path');
const resolvePath = (dir) => path.resolve(__dirname, dir);
const dir = resolvePath('../../pages');  // 获取 pages 文件夹绝对路径 

const nav = []; // 导航栏
const sidebar = {}; // 侧边栏

// 动态生成导航栏
function createNav() {
  const  pages_folders = fs.readdirSync(dir);  // 读取 pages 下面所有的文件夹
  pages_folders.forEach(folder => { // 遍历文件夹
    const folder_Path = path.join(dir, folder); // 获取 pages 下文件夹绝对路径，eg: /xxx/.../pages/01_bar
    const folderInfo = fs.statSync(folder_Path); // 获取文件夹相关信息
    // 排除mac 文件：.DS_Store
    if(folderInfo.isDirectory && folder !== '.DS_Store') {
      const files = fs.readdirSync(folder_Path); // 获取文件夹下面所有文件名
      const text = folder.split('_')[1];
      const link = `/pages/${folder}/`;
      // 默认文件夹下第一个文件作为跳转
      nav.push({ text, link: link });
      sidebar[link] = createSideBar(files);
    }
  });
  // console.log(nav);
  console.log('sidebar',sidebar);
}

// 动态生成侧边栏
function createSideBar(files, pages = []) {
  files.forEach( file => {
    if (/\.md$/i.test(file) && file !== 'README.md') {// 
      const name = file.slice(0, -3);
      pages.push(name);
    }
  });
  return pages;
}

createNav();

module.exports = { nav, sidebar };
