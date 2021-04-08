const prodPlugins = []

if (process.env.NODE_ENV === 'production') {
    prodPlugins.push('transform-remove-console', 'transform-remove-debugger')
}
module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [...prodPlugins],
}
