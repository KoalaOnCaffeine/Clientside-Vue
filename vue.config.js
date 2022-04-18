const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: ['vuetify'], pages: {
        default: {
            entry: 'src/pages/default/main.js', template: 'public/template.html', filename: 'index.html', title: 'Home'
        }, home: {
            entry: 'src/pages/home/main.js',
            template: 'public/template.html',
            filename: 'home/index.html',
            title: 'Home',
        }, login: {
            entry: 'src/pages/login/main.js',
            template: 'public/template.html',
            filename: 'login/index.html',
            title: 'Login'
        }, signup: {
            entry: 'src/pages/signup/main.js',
            template: 'public/template.html',
            filename: 'signup/index.html',
            title: 'Sign up'
        }, dashboard: {
            entry: 'src/pages/dashboard/main.js',
            template: 'public/template.html',
            filename: 'dashboard/index.html',
            title: 'Dashboard'
        }
    }
})
