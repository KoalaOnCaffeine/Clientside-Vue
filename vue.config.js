const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    pages: {
        home: {
            entry: 'src/pages/home/main.js',
            template: 'public/template.html',
            filename: 'index.html',
            title: 'Home',
        },
        login: {
            entry: 'src/pages/login/main.js',
            template: 'public/template.html',
            filename: 'login.html',
            title: 'Login'
        },
        signup: {
            entry: 'src/pages/signup/main.js',
            template: 'public/template.html',
            filename: 'signup.html',
            title: 'Sign up'
        }
    }
})
