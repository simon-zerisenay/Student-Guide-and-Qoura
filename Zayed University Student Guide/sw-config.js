module.exports = {
    globDirectory: "./",
    globPatterns: [
        "**/*.{js,html,css,eot,svg,ttf,woff,ico,png,jpg,gif,json,md,jst,py,gemspec,rb,in,license,txt,yml,scss,erb,sh}"
    ],
    globIgnores: [
        "node_modules/**/*",
        "package.json",
        "package-lock.json",
        "Gruntfile.js",
        "sw-config.js",
        "sw.js"
    ],
    maximumFileSizeToCacheInBytes: "5000000",
    swDest: "sw.js",
    runtimeCaching: [
    ]
};