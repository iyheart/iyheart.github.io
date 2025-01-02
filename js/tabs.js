document.addEventListener('DOMContentLoaded', function () {
    function onTabClick(event) {
        event.preventDefault(); // 阻止默认的点击行为

        // 获取选中的 tab 的标题
        var tabTitle = event.currentTarget.querySelector('span:last-child').textContent.trim();

        // 隐藏所有内容
        var tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(function (content) {
            content.style.display = 'none';
        });

        // 显示当前选中的 tab 对应的内容
        var selectedTabContent = document.getElementById(tabTitle);
        if (selectedTabContent) {
            selectedTabContent.style.display = 'block';
        }

        // 激活当前选中的标签
        var tabs = document.querySelectorAll('.tabs li');
        tabs.forEach(function (li) {
            li.classList.remove('is-active');
        });
        event.currentTarget.parentNode.classList.add('is-active');
    }

    // 给所有的标签添加点击事件
    var tabLinks = document.querySelectorAll('.tabs a');
    tabLinks.forEach(function (tab) {
        tab.addEventListener('click', onTabClick);
    });
});
