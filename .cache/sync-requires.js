// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/AGCUSER/Desktop/TatongWebsite/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\src\\pages\\404.js")),
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\src\\pages\\contact.js")),
  "component---src-pages-fa-q-js": preferDefault(require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\src\\pages\\faQ.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\src\\pages\\page-2.js")),
  "component---src-pages-projects-furniture-js": preferDefault(require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\src\\pages\\projects\\Furniture.js")),
  "component---src-pages-projects-index-js": preferDefault(require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\src\\pages\\projects\\index.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\layout-index.json"),
  "404.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\404.json"),
  "contact.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\contact.json"),
  "fa-q.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\fa-q.json"),
  "index.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\index.json"),
  "page-2.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\page-2.json"),
  "projects-furniture.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\projects-furniture.json"),
  "projects.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\projects.json"),
  "404-html.json": require("C:\\Users\\AGCUSER\\Desktop\\TatongWebsite\\.cache\\json\\404-html.json")
}