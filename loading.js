/**
 * author: 王小大
 * github: https://github.com/getda/vue-loading
 */
let loadingPlugin = {
    install: function (Vue, options) {
        Vue.component('loading', {
            props: {
                isLoading: {
                    type:Boolean,
                    default: false
                }
            },
            data: function() {
                return {};
            },
            mounted: function () {
                return function () {
                    if (this.isLoading) {
                        return;
                    }
                    let head = document.querySelector('head');
                    let style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerText = `.loading{display:none}.loading{height:100%;width:100%;position:fixed;top:0;left:0;z-index:999999;background-color:rgba(250,250,250,.9)}.loading img{width: 280px;height:210px;position: relative;top: 45%;left: 50%;margin-left:-140px;margin-top: -105px;}#loader{display: block; position: relative; left: 50%; top: 50%; width: 150px; height: 150px; margin: -75px 0 0 -75px; border-radius: 50%; border: 3px solid transparent; border-top-color: #ff5a5a; -webkit-animation: spin 1s linear infinite; animation: spin 1s linear infinite;}#loader:before{content: ""; position: absolute; top: 5px; left: 5px; right: 5px; bottom: 5px; border-radius: 50%; border: 3px solid transparent; border-top-color: #5af33f; -webkit-animation: spin 3s linear infinite; animation: spin 3s linear infinite;}#loader:after{content: ""; position: absolute; top: 15px; left: 15px; right: 15px; bottom: 15px; border-radius: 50%; border: 3px solid transparent; border-top-color: #6dc9ff; -webkit-animation: spin 2s linear infinite; animation: spin 2s linear infinite;}@-webkit-keyframes spin{0%{-webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); transform: rotate(0deg);} 100%{-webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); transform: rotate(360deg);}}@keyframes spin{0%{-webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); transform: rotate(0deg);} 100%{-webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); transform: rotate(360deg);}}`;
                    head.appendChild(style);
                };
            }(),
            template: `
                <div class="loading" :style="{display: isLoading ? 'block' : 'none'}">
                    <div id="loader"></div>
                </div>
            `});
    }
};
